import React from "react";
import { View } from "react-native";
import { CardData } from "./App";
import DeckCard from "./DeckCard";
import AnimatedDeckCard from "./AnimatedDeckCard";

interface DeckProps {
  cardDataList: CardData[];
}

interface DeckState {
  cardIndex: number;
}

class Deck extends React.Component<DeckProps, DeckState> {
  constructor(props: DeckProps) {
    super(props);
    this.state = { cardIndex: 0 };
  }

  handleSwipeComplete = () => {
    this.setState((prevState) => ({ cardIndex: prevState.cardIndex + 1 }));
  };

  render() {
    const { cardDataList } = this.props;
    const { cardIndex } = this.state;

    return (
      <View>
        {cardDataList.map((cardData, index) => {
          if (index < cardIndex) {
            return null;
          }
          if (index === cardIndex) {
            return (
              <AnimatedDeckCard
                key={cardData.id}
                cardData={cardData}
                onSwipeComplete={this.handleSwipeComplete}
              />
            );
          }
          return <DeckCard key={cardData.id} cardData={cardData} />;
        })}
      </View>
    );
  }
}

export default Deck;
