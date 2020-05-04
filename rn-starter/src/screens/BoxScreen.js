import React from "react";
import {Text, View, StyleSheet} from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewOneStyle: {
    height: 100,
    width: 100,
    backgroundColor: "red"
  },
  viewTwoStyle: {
    height: 100,
    width: 100,
    backgroundColor: "green",
    alignSelf: "flex-end"
  },
  viewThreeStyle: {
    height: 100,
    width: 100,
    backgroundColor: "purple"
  }
});

export default BoxScreen;