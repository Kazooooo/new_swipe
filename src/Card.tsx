import React from "react";
import { Text } from "react-native";
import { CardData } from "./App";

interface CardProps {
  cardData: CardData;
}

class Card extends React.Component<CardProps, {}> {
  render() {
    const { cardData } = this.props;
    return <Text>{cardData.text}</Text>;
  }
}

export default Card;
