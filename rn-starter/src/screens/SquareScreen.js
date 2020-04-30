import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import ColourCounter from "../components/ColourCounter";

const ADJUSTER = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColour = (newValue, update) => {
    if (newValue >= 0 && newValue <= 255) {
      update(newValue);
    }
  };

  return (
    <View>
      <ColourCounter
        onIncrease={() => setColour(red + ADJUSTER, setRed)}
        onDecrease={() => setColour(red - ADJUSTER, setRed)}
        colour="Red"
      />
      <ColourCounter
        onIncrease={() => setColour(green + ADJUSTER, setGreen)}
        onDecrease={() => setColour(green - ADJUSTER, setGreen)}
        colour="Green"
      />
      <ColourCounter
        onIncrease={() => setColour(blue + ADJUSTER, setBlue)}
        onDecrease={() => setColour(blue - ADJUSTER, setBlue)}
        colour="Blue"
      />
      <View style={{width: 150, height: 150, backgroundColor: `rgb(${red},${green},${blue})`}}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SquareScreen;