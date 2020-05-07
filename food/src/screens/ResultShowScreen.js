import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import yelp from "../apis/yelp";


const ResultShowScreen = ({navigation}) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  }

  useEffect(() => {
    getResult(id)
  }, [])

  return (
    <View>
      <Text>Results show</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ResultShowScreen;