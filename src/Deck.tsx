import React from "react";
import { View, Animated, PanResponder, PanResponderInstance } from "react-native";
import { CardData } from "./App";
import DeckCard from "./DeckCard";

interface DeckProps {
  cardDataList: CardData[];
}

interface DeckState {
  panResponder: PanResponderInstance;
  position: Animated.ValueXY;
}

class Deck extends React.Component<DeckProps, DeckState> {
  constructor(props: DeckProps) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: () => {},
    });
    this.state = { panResponder, position };
  }

  render() {
    const { cardDataList } = this.props;
    const { panResponder, position } = this.state;

    return (
      <Animated.View style={position.getLayout()} {...panResponder.panHandlers}>
        {cardDataList.map((cardData) => <DeckCard key={cardData.id} cardData={cardData} />)}
      </Animated.View>
    );
  }
}

export default Deck;
