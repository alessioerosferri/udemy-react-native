import React from "react";
import {Text, View, StyleSheet} from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>
        child#1
      </Text>
      <Text style={styles.textTwoStyle}>
        child#2
      </Text>
      <Text style={styles.textThreeStyle}>
        child#3
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    height: 200,
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    top: 80
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    fontSize: 18,
    ...StyleSheet.absoluteFillObject
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red"
  }
});

export default BoxScreen;