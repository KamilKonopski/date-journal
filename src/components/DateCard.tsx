import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { DateCardData } from "../data/dateCards";
import { TaskModal } from "./TaskModal";
import * as ImagePicker from "expo-image-picker";

interface Props {
  card: DateCardData;
  pageNumber: number;
  totalPages: number;
  onGoBack: () => void;
}

export const DateCard: React.FC<Props> = ({
  card,
  pageNumber,
  totalPages,
  onGoBack,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState<string | null>(card.image);
  const [location, setLocation] = useState<string | null>(card.location);
  const [editingLocation, setEditingLocation] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleImageEdit = async () => {
    let permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        quality: 1,
      });

      if (!result.canceled) {
        const selectedImage = result.assets ? result.assets[0].uri : null;
        if (selectedImage) {
          setImage(selectedImage);
        }
      }
    } else {
      alert("Brak dostępu do galerii.");
    }
  };

  const handleLocationEdit = () => {
    setEditingLocation(true);
  };

  const handleLocationSave = () => {
    setEditingLocation(false);
    console.log("Nowa lokalizacja:", location);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.page}>
        {pageNumber}/{totalPages}
      </Text>

      <View style={styles.imageContainer}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imagePlaceholderText}>Brak zdjęcia</Text>
          </View>
        )}
        <TouchableOpacity
          onPress={handleImageEdit}
          style={styles.imageEditButton}
        >
          <FontAwesome name="camera" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.locationContainer}>
        {editingLocation ? (
          <TextInput
            style={styles.locationInput}
            value={location || ""}
            onChangeText={setLocation}
            onBlur={handleLocationSave}
            autoFocus
            placeholder="Wpisz lokalizację..."
          />
        ) : (
          <Text style={styles.location}>
            📍 {location || "Brak lokalizacji"}
          </Text>
        )}

        {!editingLocation && (
          <TouchableOpacity
            onPress={handleLocationEdit}
            style={styles.locationEditButton}
          >
            <FontAwesome name="pencil" size={20} color="#fff" />
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.title}>{card.title}</Text>
      <Text style={styles.desc}>{card.description}</Text>

      {card.task && (
        <TouchableOpacity onPress={handleOpenModal} style={styles.taskButton}>
          <Text style={styles.taskButtonText}>Zobacz zadanie</Text>
        </TouchableOpacity>
      )}

      <TaskModal
        task={card.task}
        visible={modalVisible}
        onClose={handleCloseModal}
        onComplete={() => {}}
      />

      <TouchableOpacity onPress={onGoBack} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  page: {
    position: "absolute",
    bottom: 30,
    right: 10,
    fontSize: 14,
    color: "#666",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "center",
  },
  desc: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  locationContainer: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  location: {
    fontSize: 18,
    color: "#333",
    paddingRight: 10,
    textAlign: "center",
  },
  locationInput: {
    fontSize: 18,
    color: "#333",
    borderBottomWidth: 1,
    borderBottomColor: "#333",
    width: "80%",
    textAlign: "center",
    padding: 5,
    backgroundColor: "#F9F9F9",
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  imagePlaceholder: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#bbb",
    borderRadius: 10,
  },
  imagePlaceholderText: {
    color: "#fff",
    fontSize: 16,
  },
  imageEditButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 20,
  },
  locationEditButton: {
    position: "absolute",
    right: 50,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 8,
    borderRadius: 15,
  },
  taskButton: {
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    alignItems: "center",
  },
  taskButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  backButton: {
    position: "absolute",
    bottom: 10,
    left: 10,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 10,
    borderRadius: 20,
  },
});
