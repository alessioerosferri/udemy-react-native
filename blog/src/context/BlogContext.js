import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_post":
      return [...state, {
        title: action.payload.title,
        content: action.payload.content,
        id: Math.floor(Math.random() * 99999)
      }];
    case "remove_post":
      return state.filter(post => post.id !== action.payload);
    default:
      return state;
  }
}

const addBlogPost = (dispatch) => {
  return (title, content) => dispatch({type: "add_post", payload: {title, content}});
}

const deleteBlogPost = (dispatch) => {
  return (idToDelete) => dispatch({type: "remove_post", payload: idToDelete});
}

export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost, deleteBlogPost}, []);