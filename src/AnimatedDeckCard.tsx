import React from "react";
import { Animated, PanResponderInstance, Dimensions } from "react-native";
import DeckCard, { DeckCardProps } from "./DeckCard";

const SCREEN_WIDTH = Dimensions.get("window").width;

interface AnimatedDeckCardProps extends DeckCardProps {
  panResponder: PanResponderInstance;
  position: Animated.ValueXY;
}

const AnimatedDeckCard: React.SFC<AnimatedDeckCardProps> = (props) => {
  const { panResponder, position, cardData } = props;

  const getAnimatedDeckCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"],
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  };

  return (
    <Animated.View style={getAnimatedDeckCardStyle()} {...panResponder.panHandlers}>
      <DeckCard cardData={cardData} />
    </Animated.View>
  );
};

export default AnimatedDeckCard;
