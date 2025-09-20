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
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalStatus: {
    fontSize: 16,
    marginBottom: 20,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  disabledButton: {
    backgroundColor: "#e0e0e0",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: "#f44336",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
});
