import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet, FlatList, Image} from "react-native";
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

  if (!result) {
    return null;
  }

  return (
    <>
      <Text>{result.name}</Text>
      <FlatList data={result.photos}
                renderItem={({item}) => <Image style={styles.image} source={{uri: item}}/>}
                keyExtractor={photo => photo}
      />
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default ResultShowScreen;