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
    case "edit_post":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id
          ? action.payload
          : blogPost
      });
    default:
      return state;
  }
}

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({type: "add_post", payload: {title, content}});
    callback();
  }
}

const deleteBlogPost = (dispatch) => {
  return (idToDelete) => dispatch({type: "remove_post", payload: idToDelete});
}

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({type: "edit_post", payload: {title, content, id}});
    callback();
  }
}

export const {Context, Provider} = createDataContext(blogReducer, {addBlogPost, deleteBlogPost, editBlogPost}, [{
  title: "TestTitle",
  content: "TestContent",
  id: 1
}]);