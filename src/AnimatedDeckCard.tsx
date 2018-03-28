import React from "react";
import { Animated, PanResponderInstance, Dimensions, PanResponder } from "react-native";
import DeckCard, { DeckCardProps } from "./DeckCard";

const SCREEN_WIDTH = Dimensions.get("window").width;

interface AnimatedDeckCardState {
  panResponder: PanResponderInstance;
  position: Animated.ValueXY;
}
class AnimatedDeckCard extends React.Component<DeckCardProps, AnimatedDeckCardState> {
  constructor(props: DeckCardProps) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {
        this.resetPosition();
      },
    });

    this.state = { panResponder, position };
  }

  resetPosition = () => {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 },
    }).start();
  };

  render() {
    const { cardData } = this.props;
    const { panResponder, position } = this.state;

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
  }
}

export default AnimatedDeckCard;
