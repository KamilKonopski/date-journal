import React, { useState, useEffect } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { CoverScreen } from "./src/screens/CoverScreen";
import { CardScreen } from "./src/screens/CardScreen";
import { proposals } from "./src/data/dateCards";
import {
  useFonts,
  DancingScript_400Regular,
} from "@expo-google-fonts/dancing-script";

export default function App() {
  const [step, setStep] = useState<"cover" | "cards">("cover");

  const [] = useFonts({
    DancingScript_400Regular,
  });

  const [winHeight, setWinHeight] = useState<number | undefined>(
    Platform.OS === "web" ? window.innerHeight : undefined
  );

  useEffect(() => {
    if (Platform.OS === "web") {
      const onResize = () => setWinHeight(window.innerHeight);
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }
  }, []);

  return (
    <View
      style={[
        styles.container,
        Platform.OS === "web" && { minHeight: winHeight },
      ]}
    >
      <View style={styles.phoneFrame}>
        {step === "cover" && <CoverScreen onStart={() => setStep("cards")} />}
        {step === "cards" && (
          <CardScreen data={proposals} goBack={() => setStep("cover")} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "web" ? "#f0f0f0" : "#fff",
    alignItems: Platform.OS === "web" ? "center" : "stretch",
    justifyContent: Platform.OS === "web" ? "center" : "flex-start",
  },
  phoneFrame: {
    width: Platform.OS === "web" ? 390 : "100%",
    height: Platform.OS === "web" ? 844 : "100%",
    borderRadius: Platform.OS === "web" ? 40 : 0,
    overflow: "hidden",
    backgroundColor: "#fff",
    ...(Platform.OS === "web" && {
      boxShadow: "0 0 20px rgba(0,0,0,0.2)",
    }),
  },
});
