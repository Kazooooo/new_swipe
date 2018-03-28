import React from "react";
import { View, Animated, PanResponder, PanResponderInstance } from "react-native";
import { CardData } from "./App";
import DeckCard from "./DeckCard";

interface DeckProps {
  cardDataList: CardData[];
}

interface DeckState {
  panResponder: PanResponderInstance;
}

class Deck extends React.Component<DeckProps, DeckState> {
  constructor(props: DeckProps) {
    super(props);
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        console.log(gesture);
      },
      onPanResponderRelease: () => {},
    });
    this.state = { panResponder };
  }

  render() {
    const { cardDataList } = this.props;
    const { panResponder } = this.state;

    return (
      <View {...panResponder.panHandlers}>
        {cardDataList.map((cardData) => <DeckCard key={cardData.id} cardData={cardData} />)}
      </View>
    );
  }
}

export default Deck;
