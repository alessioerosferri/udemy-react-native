import React from "react";
import {View, Text, StyleSheet} from "react-native";


const ResultShowScreen = ({navigation}) => {
  console.log(navigation.getParam("id"))
  return (
    <View>
      <Text>Results show</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ResultShowScreen;