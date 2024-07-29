import { MdDeleteForever } from "react-icons/md";
import { useContext } from "react";
import { PostList as PostListContext } from "../store/Post-List-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);

  console.log("Rendering post:", post);

  return (
    <div>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDeleteForever />
          </span>
          <p className="card-text">{post.body}</p>
          {Array.isArray(post.tags) && post.tags.length > 0 && (
            <div>
              {post.tags.map((tag) => (
                <span key={tag} className="badge text-bg-primary hashtag">
                  {tag}
                </span>
              ))}
            </div>
          )}
          {post.reactions !== undefined && post.reactions !== null && (
            <div className="alert alert-success reactions" role="alert">
              This post has {post.reactions.likes} likes and{" "}
              {post.reactions.dislikes} dislikes.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
