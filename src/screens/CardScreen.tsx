import React, { useState } from "react";
import { View, FlatList, Dimensions, Button } from "react-native";
import { DateCardData } from "../data/dateCards";
import { AnimatedCard } from "../components/AnimatedCard";

const { width } = Dimensions.get("window");

interface CardScreenProps {
  data: DateCardData[];
  goBack: () => void;
}

export const CardScreen: React.FC<CardScreenProps> = ({ data, goBack }) => {
  const [page, setPage] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: "#FDF5E6" }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <AnimatedCard
            card={item}
            index={index}
            page={page}
            totalPages={data.length}
            onGoBack={goBack}
          />
        )}
        onScroll={(e) => {
          const currentPage = Math.round(e.nativeEvent.contentOffset.x / width);
          setPage(currentPage);
        }}
        scrollEventThrottle={16}
      />
    </View>
  );
};
