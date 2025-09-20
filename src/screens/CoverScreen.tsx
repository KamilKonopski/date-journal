import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Alert,
  ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";

export const CoverScreen = ({ onStart }: { onStart: () => void }) => {
  const [title, setTitle] = useState("Nasze 100 Randek");

  const editTitle = () => {
    Alert.prompt(
      "Edytuj tytuł",
      "Wpisz nowy tytuł:",
      [
        {
          text: "Anuluj",
          onPress: () => console.log("Anulowanie edycji"),
          style: "cancel",
        },
        {
          text: "Zapisz",
          onPress: (newTitle?: string) => {
            if (newTitle) setTitle(newTitle);
          },
        },
      ],
      "plain-text",
      title
    );
  };

  return (
    <ImageBackground
      source={require("../assets/cover.jpg")}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            fontFamily: "DancingScript_400Regular",
            fontSize: 36,
            color: "#fff",
          }}
        >
          {title}
        </Text>
        <TouchableOpacity onPress={editTitle} style={{ marginLeft: 10 }}>
          <FontAwesome name="pencil" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
      <Button title="Otwórz dziennik" onPress={onStart} color="#fff" />
    </ImageBackground>
  );
};
