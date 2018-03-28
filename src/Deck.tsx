import React from "react";
import { View, Animated } from "react-native";
import { CardData } from "./App";
import DeckCard from "./DeckCard";

interface DeckProps {
  cardDataList: CardData[];
}

class Deck extends React.Component<DeckProps, {}> {
  render() {
    const { cardDataList } = this.props;
    return (
      <View>
        {cardDataList.map((cardData) => <DeckCard key={cardData.id} cardData={cardData} />)}
      </View>
    );
  }
}

export default Deck;
