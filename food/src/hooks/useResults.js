import {useEffect, useState} from "react";
import yelp from "../apis/yelp";

const DEFAULT_TERM = "pasta";

export default () => {
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

  return [searchApi, results, errorMessage];
};