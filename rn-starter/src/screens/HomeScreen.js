import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title="Go to components demo" onPress={() => {
        console.log("button pressed");
      }}/>
      <TouchableOpacity onPress={() => console.log("opacity tapped")}>
        <Text>Go to List demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
