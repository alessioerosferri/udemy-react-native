import React, {useState, useEffect} from "react";
import {View, Text, StyleSheet} from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../apis/yelp";

const DEFAULT_TERM = "pasta";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "london"
        }
      });
      setResults(response.data.businesses);
      setErrorMessage("");
    } catch (e) {
      setErrorMessage("Something went wrong");
    }
  }

  useEffect(() => {
    searchApi(DEFAULT_TERM)
  }, []);

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          searchApi(term)
        }}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default SearchScreen;