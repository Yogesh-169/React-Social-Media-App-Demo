import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-List-store";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);

  const OnFetchClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
  };

  return (
    <div>
      {postList.length === 0 && (
        <center className="welcom-message">
          <h1>No Posts Found</h1>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={OnFetchClick}
          >
            Fetch the Posts
          </button>
        </center>
      )}

      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
