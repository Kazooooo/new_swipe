import React from "react";
import { Animated, PanResponderInstance } from "react-native";
import DeckCard, { DeckCardProps } from "./DeckCard";

interface AnimatedDeckCardProps extends DeckCardProps {
  panResponder: PanResponderInstance;
  position: Animated.ValueXY;
}

const AnimatedDeckCard: React.SFC<AnimatedDeckCardProps> = (props) => {
  const { panResponder, position, cardData } = props;
  return (
    <Animated.View style={position.getLayout()} {...panResponder.panHandlers}>
      <DeckCard cardData={cardData} />
    </Animated.View>
  );
};

export default AnimatedDeckCard;
