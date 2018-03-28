import React from "react";
import { Animated, PanResponderInstance, Dimensions, PanResponder } from "react-native";
import DeckCard, { DeckCardProps } from "./DeckCard";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;
enum SWIPE_DIRECTION {
  RIGHT,
  LEFT,
}

interface AnimatedDeckCardProps extends DeckCardProps {
  onSwipeComplete: () => void;
}

interface AnimatedDeckCardState {
  panResponder: PanResponderInstance;
  position: Animated.ValueXY;
}
class AnimatedDeckCard extends React.Component<AnimatedDeckCardProps, AnimatedDeckCardState> {
  constructor(props: AnimatedDeckCardProps) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe(SWIPE_DIRECTION.RIGHT);
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe(SWIPE_DIRECTION.LEFT);
        } else {
          this.resetPosition();
        }
      },
    });

    this.state = { panResponder, position };
  }

  forceSwipe = (direction: SWIPE_DIRECTION) => {
    const x = direction === SWIPE_DIRECTION.RIGHT ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.state.position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
    }).start(() => this.props.onSwipeComplete());
  };

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
