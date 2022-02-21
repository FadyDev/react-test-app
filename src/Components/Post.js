import "./Post.css";
function Post(props) {
  return (
    <div className="post">
      <div className="post-title">{props.postTitle}</div>
      <div className="post-body">{props.postBody}</div>
      <button>Delete Post</button>
    </div>
  );
}

export default Post;
