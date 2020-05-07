import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_post":
      return [...state, {title: `Blog Post #${state.length + 1}`, id: Math.floor(Math.random() * 99999)}];
    case "remove_post":
      return state.filter(post => post.id !== action.payload);
    default:
      return state;
  }
}

const addBlogPost = (dispatch) => {
  return () => dispatch({type: "add_post"});
}

const deleteBlogPost = (dispatch) => {
  return (idToDelete) => dispatch({type: "remove_post", payload: idToDelete});
}

export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost, deleteBlogPost}, []);