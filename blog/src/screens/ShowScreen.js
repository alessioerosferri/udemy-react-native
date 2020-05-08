import React, {useContext} from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {Context} from "../context/BlogContext";
import {EvilIcons} from "@expo/vector-icons";

const ShowScreen = ({navigation}) => {
  const id = navigation.getParam("id");
  const {state} = useContext(Context);

  const blogPost = state.find(blogPost => blogPost.id === id);
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => {
      return <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
        <EvilIcons name="pencil" size={30}/>
      </TouchableOpacity>;
    }
  }
}

const styles = StyleSheet.create({});

export default ShowScreen;
