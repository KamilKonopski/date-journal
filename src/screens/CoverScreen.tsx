import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Modal,
  TextInput,
  StyleSheet,
  Platform,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";

export const CoverScreen = ({ onStart }: { onStart: () => void }) => {
  const [title, setTitle] = useState("Nasze 100 Randek");
  const [modalVisible, setModalVisible] = useState(false);
  const [tempTitle, setTempTitle] = useState(title);

  const editTitle = () => {
    if (Platform.OS === "web") {
      setTempTitle(title);
      setModalVisible(true);
    } else {
      Alert.prompt(
        "Edytuj tytuł",
        "Wpisz nowy tytuł:",
        [
          { text: "Anuluj", style: "cancel" },
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
    }
  };

  const saveTitle = () => {
    setTitle(tempTitle);
    setModalVisible(false);
  };

  return (
    <ImageBackground
      source={require("../assets/cover.jpg")}
      resizeMode="cover"
      style={styles.bg}
    >
      <View style={styles.titleRow}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={editTitle} style={{ marginLeft: 10 }}>
          <FontAwesome name="pencil" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onStart} style={styles.openButton}>
        <Text style={styles.openButtonText}>Otwórz dziennik</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TextInput
              value={tempTitle}
              onChangeText={setTempTitle}
              style={styles.input}
            />
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: "#ccc" }]}
                onPress={() => setModalVisible(false)}
              >
                <Text>Anuluj</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: "#FF69B4" }]}
                onPress={saveTitle}
              >
                <Text style={{ color: "#fff" }}>Zapisz</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontFamily: "DancingScript_400Regular",
    fontSize: 36,
    color: "#fff",
    textAlign: "center",
  },
  openButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  openButtonText: { color: "#fff", fontSize: 18 },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    fontSize: 18,
    paddingVertical: 5,
  },
  modalButton: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 5,
  },
});
