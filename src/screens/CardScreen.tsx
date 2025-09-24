import React from "react";
import { Dimensions, View, FlatList, Platform } from "react-native";
import { DateCard } from "../components/DateCard";
import { DateCardData } from "../data/dateCards";

const { width: windowWidth } = Dimensions.get("window");

interface Props {
  data: DateCardData[];
  goBack: () => void;
}

export const CardScreen: React.FC<Props> = ({ data, goBack }) => {
  return (
    <FlatList
      horizontal
      pagingEnabled={Platform.OS !== "web"}
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({ item, index }) => (
        <View
          style={
            Platform.OS === "web"
              ? {
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingVertical: 40,
                }
              : {
                  width: windowWidth,
                  justifyContent: "center",
                  alignItems: "center",
                }
          }
        >
          <DateCard
            card={item}
            pageNumber={index + 1}
            totalPages={data.length}
            onGoBack={goBack}
          />
        </View>
      )}
    />
  );
};

// Problem jest w CardScreen: const { width: windowWidth } = Dimensions.get("window");
//  style={{
//             width: windowWidth,
//             justifyContent: "center",
//             alignItems: "center",
//           }}
// ten width: wypycha poza kontener na web, ale jak to usunę to na web coś się poprawia, ale nie jest idealnie, ale kompletnie psuje na telefonie
// więc trzeba to rozdzielić oraz poprawić trochę jeszcze sam web. Tak to wygląda na web jak to usunę, jak na zdjęciu, na tel wtedy robi się scroll w poziomie xD
