import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import ColourCounter from "../components/ColourCounter";

const ADJUSTER = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  return (
    <View>
      <ColourCounter
        onIncrease={() => setRed(red + ADJUSTER)}
        onDecrease={() => setRed(red - ADJUSTER)}
        colour="Red"
      />
      <ColourCounter
        onIncrease={() => setGreen(green + ADJUSTER)}
        onDecrease={() => setGreen(green - ADJUSTER)}
        colour="Green"
      />
      <ColourCounter
        onIncrease={() => setBlue(blue + ADJUSTER)}
        onDecrease={() => setBlue(blue - ADJUSTER)}
        colour="Blue"
      />
      <View style={{width: 150, height: 150, backgroundColor: `rgb(${red},${green},${blue})`}}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SquareScreen;