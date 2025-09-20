import React, { useState } from "react";
import { View } from "react-native";
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

  return (
    <View style={{ flex: 1 }}>
      {step === "cover" && <CoverScreen onStart={() => setStep("cards")} />}
      {step === "cards" && (
        <>
          <CardScreen data={proposals} goBack={() => setStep("cover")} />
        </>
      )}
    </View>
  );
}
