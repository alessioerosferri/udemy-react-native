import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";

const ListScreen = () => {
  const friends = [
    {name: "Friend #1", age: 20},
    {name: "Friend #2", age: 34},
    {name: "Friend #3", age: 12},
    {name: "Friend #4", age: 78},
    {name: "Friend #5", age: 98},
    {name: "Friend #6", age: 64},
    {name: "Friend #7", age: 52},
    {name: "Friend #8", age: 41},
    {name: "Friend #9", age: 11}
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({item}) => {
        return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>;
      }}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;