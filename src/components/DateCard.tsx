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

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  const handleImageEdit = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.granted) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        quality: 1,
      });

      if (!result.canceled) {
        const selectedImage = result.assets?.[0]?.uri;
        if (selectedImage) setImage(selectedImage);
      }
    } else {
      alert("Brak dostępu do galerii.");
    }
  };

  const handleLocationEdit = () => setEditingLocation(true);
  const handleLocationSave = () => {
    setEditingLocation(false);
    console.log("Nowa lokalizacja:", location);
  };

  return (
    <View style={styles.fullScreenContainer}>
      <View style={styles.cardContainer}>
        <View style={styles.topRow}>
          <View style={styles.leftColumn}>
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
                <FontAwesome name="camera" size={20} color="#fff" />
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
                <Text style={styles.locationText}>
                  📍 {location || "Brak lokalizacji"}
                </Text>
              )}

              {!editingLocation && (
                <TouchableOpacity
                  onPress={handleLocationEdit}
                  style={styles.locationEditButton}
                >
                  <FontAwesome name="pencil" size={16} color="#fff" />
                </TouchableOpacity>
              )}
            </View>
          </View>

          <View style={styles.rightColumn}>
            <Text style={styles.title}>{card.title}</Text>
          </View>
        </View>

        <Text style={styles.description}>{card.description}</Text>

        {card.task && (
          <View style={styles.taskButtonWrapper}>
            <TouchableOpacity
              onPress={handleOpenModal}
              style={styles.taskButton}
            >
              <Text style={styles.taskButtonText}>Zobacz zadanie</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <TaskModal
        task={card.task}
        visible={modalVisible}
        onClose={handleCloseModal}
        onComplete={() => {}}
      />
      <TouchableOpacity onPress={onGoBack} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={styles.pageNumber}>
        {pageNumber}/{totalPages}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: "#FFF0F5",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    width: "100%",
    maxWidth: 700,
  },
  topRow: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  leftColumn: {
    width: 170,
    marginRight: 10,
    alignItems: "flex-start",
  },
  rightColumn: {
    flex: 1,
    justifyContent: "center",
  },
  imageContainer: {
    width: 160,
    height: 160,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#F8BBD0",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  imagePlaceholder: {
    width: "100%",
    height: "100%",
    backgroundColor: "#D8BFD8",
    justifyContent: "center",
    alignItems: "center",
  },
  imagePlaceholderText: {
    color: "#fff",
    fontSize: 14,
  },
  imageEditButton: {
    position: "absolute",
    bottom: 8,
    right: 8,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    padding: 6,
    borderRadius: 15,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  locationText: {
    fontSize: 14,
    color: "#8B0000",
  },
  locationInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#8B0000",
    fontSize: 14,
    paddingVertical: 2,
    width: 130,
    textAlign: "center",
    backgroundColor: "#FFF",
  },
  locationEditButton: {
    marginLeft: 8,
    backgroundColor: "#DB7093",
    padding: 6,
    borderRadius: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#8B0000",
    textAlign: "left",
    flexWrap: "wrap",
  },
  description: {
    fontSize: 16,
    color: "#4B0082",
    textAlign: "center",
    marginBottom: 20,
  },
  taskButtonWrapper: {
    alignItems: "flex-end",
  },
  taskButton: {
    backgroundColor: "#FF69B4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  taskButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  pageNumber: {
    position: "absolute",
    bottom: 35,
    right: 30,
    fontSize: 12,
    color: "#8B0000",
  },
  backButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 10,
    borderRadius: 20,
  },
});
