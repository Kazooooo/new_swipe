import React from "react";
import { Text } from "react-native";
import { Card, Button } from "react-native-elements";
import { CardData } from "./App";

interface DeckCardProps {
  cardData: CardData;
}

class DeckCard extends React.Component<DeckCardProps, {}> {
  render() {
    const { cardData } = this.props;
    return (
      <Card title={cardData.text} image={{ uri: cardData.uri }}>
        <Text style={{ marginBottom: 10 }}>I can customize the Card further.</Text>
        <Button
          icon={{ name: "code" }}
          backgroundColor="#03A9F4"
          title="View Now!"
          onPress={() => {}}
        />
      </Card>
    );
  }
}

export default DeckCard;
