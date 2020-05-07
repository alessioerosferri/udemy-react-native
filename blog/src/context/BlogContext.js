import React, {useReducer, useState} from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_post":
      return [...state, {title: `Blog Post #${state.length + 1}`}];
    default:
      return state;
  }
}

export const BlogProvider = ({children}) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, [], undefined);

  const addBlogPost = () => {
    dispatch({type: "add_post"});
  }

  return <BlogContext.Provider value={{blogPosts, addBlogPost}}>
    {children}
  </BlogContext.Provider>
};

export default BlogContext;