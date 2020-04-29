import React from "react";
import {Text, StyleSheet, View} from "react-native";

const ComponentsScreen = () => {
  const name = "Alessio";
  return (
    <View>
      <Text style={styles.heading}>Getting started with React Native</Text>
      <Text style={styles.paragraph}>My name is {name}.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 45
  },
  paragraph: {
    fontSize: 30
  }
});

export default ComponentsScreen;
