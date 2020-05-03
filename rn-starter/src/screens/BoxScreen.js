import React from "react";
import {Text, View, StyleSheet} from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>
        child#1
      </Text>
      <Text style={styles.textStyle}>
        child#2
      </Text>
      <Text style={styles.textStyle}>
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
    justifyContent: "space-between"
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red"
  }
});

export default BoxScreen;