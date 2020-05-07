import React from "react";
import {View, StyleSheet, Text} from "react-native";

const ShowScreen = ({navigation}) => {
  const id = navigation.getParam("id")
  return (
    <View>
      <Text>Show Screen {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ShowScreen;
