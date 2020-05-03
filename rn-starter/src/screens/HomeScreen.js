import React from "react";
import {Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title="Go to components demo" onPress={() => {
        navigation.navigate("Components");
      }}/>
      <Button title="Go to List demo" onPress={() => navigation.navigate("ListScreen")}>
      </Button>
      <Button title="Go to Image screen demo" onPress={() => navigation.navigate("ImageScreen")}>
      </Button>
      <Button title="Go to Counter screen demo" onPress={() => navigation.navigate("CounterScreen")}>
      </Button>
      <Button title="Go to Colour screen demo" onPress={() => navigation.navigate("Colour")}>
      </Button>
      <Button title="Go to Square Screen screen demo" onPress={() => navigation.navigate("Square")}>
      </Button>
      <Button title="Go to Text screen demo" onPress={() => navigation.navigate("Text")}>
      </Button>
      <Button title="Go to Box screen demo" onPress={() => navigation.navigate("Box")}>
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
