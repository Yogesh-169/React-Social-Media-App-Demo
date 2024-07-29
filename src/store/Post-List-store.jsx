import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addInitialPosts: () => {},
});

const postListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_INITIAL_POSTS":
      return action.payload.posts;
    case "ADD_POST":
      return [...state, action.payload.post];
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload.postId);
    default:
      return state;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchList({
      type: "ADD_POST",
      payload: { post },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchList({
      type: "ADD_INITIAL_POSTS",
      payload: { posts },
    });
  };

  const deletePost = (postId) => {
    dispatchList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
        addInitialPosts,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
