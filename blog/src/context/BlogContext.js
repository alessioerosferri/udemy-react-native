import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_posts":
      return action.payload;
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

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get("/blogposts");
    dispatch({type: "get_posts", payload: response.data});
  };
}

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    const post = {title, content};
    await jsonServer.post("/blogposts", post);
    dispatch({type: "add_post", payload: post});
    if (callback) {
      callback();
    }
  }
}

const deleteBlogPost = (dispatch) => {
  return (idToDelete) => dispatch({type: "remove_post", payload: idToDelete});
}

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({type: "edit_post", payload: {title, content, id}});
    if (callback) {
      callback();
    }
  }
}

export const {Context, Provider} = createDataContext(blogReducer, {
  addBlogPost,
  deleteBlogPost,
  editBlogPost,
  getBlogPosts
}, []);