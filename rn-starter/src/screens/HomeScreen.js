import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title="Go to components demo" onPress={() => {
        props.navigation.navigate("Components");
      }}/>
      <Button title="Go to List demo" onPress={() => props.navigation.navigate("ListScreen")}>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
