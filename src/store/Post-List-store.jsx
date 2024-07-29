import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.payload.post];
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload.postId);
    default:
      return state;
  }
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Post 1",
    body: "Content 1",
    reactions: "10",
    userId: "9",
    tags: ["Hello", "bye"],
  },
  {
    id: 2,
    title: "Post 2",
    body: "Content 2",
    reactions: "15",
    userId: "10",
    tags: ["Hello", "bye"],
  },
  {
    id: 3,
    title: "Post 3",
    body: "Content 3",
    reactions: "21",
    userId: "11",
    tags: ["Hello", "bye"],
  },
];

const PostListProvider = ({ children }) => {
  const [postList, dispatchList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (post) => {
    dispatchList({
      type: "ADD_POST",
      payload: {
        post,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
