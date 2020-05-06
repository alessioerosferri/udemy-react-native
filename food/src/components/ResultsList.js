import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";
import ResultDetail from "./ResultDetail";

const ResultsList = ({title, results}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result["id"]}
        renderItem={({item}) => {
          return <ResultDetail
            result={item}
          />
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});

export default ResultsList;