import {AsyncStorage} from "react-native";
import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return {...state, errorMessage: action.payload}
    case "signup":
      return {...state, token: action.payload}
    default:
      return state;
  }
}

const signup = dispatch => async ({email, password}) => {
  try {
    const response = await trackerAPI.post("/signup", {email, password});
    const {token} = response.data
    await AsyncStorage.setItem("token", token);
    dispatch({type: "signup", payload: token});
  } catch (e) {
    dispatch({type: "add_error", payload: "Something went wrong with sign up"});
  }
}

const signin = dispatch => ({email, password}) => {

}

const signout = dispatch => () => {

}

export const {Provider, Context} = createDataContext(
  authReducer,
  {signup, signin, signout},
  {token: null, errorMessage: ""}
)