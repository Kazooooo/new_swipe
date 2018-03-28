import React from "react";
import { Text } from "react-native";
import { CardData } from "./App";

interface DeckCardProps {
  cardData: CardData;
}

class DeckCard extends React.Component<DeckCardProps, {}> {
  render() {
    const { cardData } = this.props;
    return <Text>{cardData.text}</Text>;
  }
}

export default DeckCard;
