import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const signup = dispatch => ({email, password}) => {

}

const signin = dispatch => ({email, password}) => {

}

export const {Provider, Context} = createDataContext(
  authReducer,
  {signup, signin},
  {isSignedIn: false}
)