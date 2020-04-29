import React from "react";
import {View, Text, StyleSheet} from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" source={require("../../assets/forest.jpg")} score="1"/>
      <ImageDetail title="Mountain" source={require("../../assets/mountain.jpg")} score="3"/>
      <ImageDetail title="Beach" source={require("../../assets/beach.jpg")} score="9"/>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ImageScreen;