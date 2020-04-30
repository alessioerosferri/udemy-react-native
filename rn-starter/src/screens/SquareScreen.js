import React, {useReducer} from "react";
import {View, Text, StyleSheet} from "react-native";
import ColourCounter from "../components/ColourCounter";

const ADJUSTER = 15;

const reducer = (state, action) => {
  if (state.hasOwnProperty(action.colorToChange)) {
    if (state[action.colorToChange] + action.amount <= 255 && state[action.colorToChange] + action.amount >= 0) {
      return {...state, [action.colorToChange]: state[action.colorToChange] + action.amount};
    }
    return state;
  } else {
    return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const {red, green, blue} = state;
  return (
    <View>
      <ColourCounter
        onIncrease={() => dispatch({colorToChange: "red", amount: ADJUSTER})}
        onDecrease={() => dispatch({colorToChange: "red", amount: -ADJUSTER})}
        colour="Red"
      />
      <ColourCounter
        onIncrease={() => dispatch({colorToChange: "green", amount: ADJUSTER})}
        onDecrease={() => dispatch({colorToChange: "green", amount: -ADJUSTER})}
        colour="Green"
      />
      <ColourCounter
        onIncrease={() => dispatch({colorToChange: "blue", amount: ADJUSTER})}
        onDecrease={() => dispatch({colorToChange: "blue", amount: -ADJUSTER})}
        colour="Blue"
      />
      <View style={{width: 150, height: 150, backgroundColor: `rgb(${red},${green},${blue})`}}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SquareScreen;