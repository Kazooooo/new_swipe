import React from "react";
import { Text } from "react-native";
import { Card, Button } from "react-native-elements";

export interface NoMoreCardsProps {}

const NoMoreCards: React.SFC<NoMoreCardsProps> = () => {
  return (
    <Card title="All Done">
      <Text style={{ marginBottom: 10 }}>There's no more content here!</Text>
      <Button
        backgroundColor="#03A9F4"
        title="Get more"
        onPress={() => {}}
      />
    </Card>
  );
};

export default NoMoreCards;
