import createDataContext from "./createDataContext";
import trackerAPI from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const signup = dispatch => async ({email, password}) => {
  try {
    const response = await trackerAPI.post("/signup", {email, password});
    console.log(response.data);
  } catch (e) {
    console.log(e.message);
  }
}

const signin = dispatch => ({email, password}) => {

}

const signout = dispatch => () => {

}

export const {Provider, Context} = createDataContext(
  authReducer,
  {signup, signin, signout},
  {isSignedIn: false}
)