import React, {useContext, useState} from "react";
import {View, StyleSheet, Text, TextInput, Button} from "react-native";

const CreateScreen = ({navigation}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle}/>
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={setContent}/>
      <Button title="Add a Blog post" onPress={}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5
  }
});

export default CreateScreen;
