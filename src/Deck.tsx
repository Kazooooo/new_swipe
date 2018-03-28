import React from "react";
import { View } from "react-native";
import { CardData } from "./App";
import DeckCard from "./DeckCard";
import AnimatedDeckCard from "./AnimatedDeckCard";

interface DeckProps {
  cardDataList: CardData[];
}

class Deck extends React.Component<DeckProps, {}> {
  render() {
    const { cardDataList } = this.props;

    return (
      <View>
        {cardDataList.map(
          (cardData, index) =>
            index === 0 ? (
              <AnimatedDeckCard
                key={cardData.id}
                cardData={cardData}
              />
            ) : (
              <DeckCard key={cardData.id} cardData={cardData} />
            ),
        )}
      </View>
    );
  }
}

export default Deck;
