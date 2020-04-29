import React from "react";
import {View, Text, StyleSheet} from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" source={require("../../assets/forest.jpg")}/>
      <ImageDetail title="Mountain" source={require("../../assets/mountain.jpg")}/>
      <ImageDetail title="Beach" source={require("../../assets/beach.jpg")}/>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ImageScreen;