import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import {withNavigation} from "react-navigation";
import ResultDetail from "./ResultDetail";


const ResultsList = ({title, results, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result["id"]}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("ResultShow")}>
              <ResultDetail
                result={item}
              />
            </TouchableOpacity>
          )
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

export default withNavigation(ResultsList);