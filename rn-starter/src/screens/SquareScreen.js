import React, {useReducer} from "react";
import {View, Text, StyleSheet} from "react-native";
import ColourCounter from "../components/ColourCounter";

const ADJUSTER = 15;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      return {...state, red: state.red + action.amount};
    case "green":
      return {...state, green: state.green + action.amount};
    case "blue":
      return {...state, blue: state.blue + action.amount};
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const {red, green, blue} = state;
  return (
    <View>
      <ColourCounter
        onIncrease={() => dispatch({colorToChange: "red", amount: 15})}
        onDecrease={() => dispatch({colorToChange: "red", amount: -15})}
        colour="Red"
      />
      <ColourCounter
        onIncrease={() => dispatch({colorToChange: "green", amount: 15})}
        onDecrease={() => dispatch({colorToChange: "green", amount: -15})}
        colour="Green"
      />
      <ColourCounter
        onIncrease={() => dispatch({colorToChange: "blue", amount: 15})}
        onDecrease={() => dispatch({colorToChange: "blue", amount: -15})}
        colour="Blue"
      />
      <View style={{width: 150, height: 150, backgroundColor: `rgb(${red},${green},${blue})`}}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SquareScreen;