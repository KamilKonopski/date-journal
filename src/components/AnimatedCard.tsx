import React from "react";
import { Dimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { DateCard } from "./DateCard";
import { DateCardData } from "../data/dateCards";

const { width } = Dimensions.get("window");

interface AnimatedCardProps {
  card: DateCardData;
  index: number;
  page: number;
  totalPages: number;
  onGoBack: () => void;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  card,
  index,
  page,
  totalPages,
  onGoBack,
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const scale = withSpring(index === page ? 1 : 0.9);
    return { transform: [{ scale }] };
  });

  return (
    <Animated.View style={[{ width }, animatedStyle]}>
      <DateCard
        card={card}
        pageNumber={index + 1}
        totalPages={totalPages}
        onGoBack={onGoBack}
      />
    </Animated.View>
  );
};
