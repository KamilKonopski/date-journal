import React, { useState } from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const TaskModal = ({
  task,
  visible,
  onClose,
  onComplete,
}: {
  task: { description: string; status: "done" | "notDone" | "notStarted" };
  visible: boolean;
  onClose: () => void;
  onComplete: (newStatus: "done" | "notDone" | "notStarted") => void;
}) => {
  const [status, setStatus] = useState(task.status);

  const handleComplete = (newStatus: "done" | "notDone") => {
    setStatus(newStatus);
    onComplete(newStatus);
  };

  const getStatusText = () => {
    switch (status) {
      case "done":
        return "Wykonane";
      case "notDone":
        return "Nie wykonane";
      case "notStarted":
      default:
        return "Nie zrobione";
    }
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{task.description}</Text>
          <Text style={styles.modalStatus}>Status: {getStatusText()}</Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                status === "done" && styles.disabledButton,
              ]}
              onPress={() => handleComplete("done")}
              disabled={status === "done"}
            >
              <Text style={styles.buttonText}>Wykonane</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.button,
                status === "notDone" && styles.disabledButton,
              ]}
              onPress={() => handleComplete("notDone")}
              disabled={status === "notDone"}
            >
              <Text style={styles.buttonText}>Nie wykonane</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Zamknij</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalContent: {
    backgroundColor: "#FFF0F5",
    padding: 24,
    borderRadius: 16,
    width: "85%",
    alignItems: "center",
    elevation: 8,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
    color: "#C2185B",
  },
  modalStatus: {
    fontSize: 16,
    marginBottom: 20,
    color: "#6A1B9A",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FF69B4",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  disabledButton: {
    backgroundColor: "#E1BEE7",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  closeButton: {
    backgroundColor: "#8E24AA",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
