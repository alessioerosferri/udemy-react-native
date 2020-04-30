import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const ColourCounter = ({colour}) => {
  return (
    <View>
      <Text>{colour}</Text>
      <Button title={`Increase ${colour}`}/>
      <Button title={`Decrease ${colour}`}/>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ColourCounter;