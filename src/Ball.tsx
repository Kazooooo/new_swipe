import React from "react";
import { StyleSheet, View, Animated } from "react-native";

class Ball extends React.Component {
  readonly position: Animated.ValueXY = new Animated.ValueXY();

  componentDidMount() {
    this.position.setValue({ x: 0, y: 0 });
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 },
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: "black",
  },
});

export default Ball;
