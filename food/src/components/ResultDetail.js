import React from "react";
import {Image, Text, View, StyleSheet} from "react-native";

const ResultDetail = ({result}) => {
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultDetail;