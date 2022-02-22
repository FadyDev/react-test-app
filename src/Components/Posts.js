import Post from "./Post";
import "./Posts.css";
function Posts(props) {
  const onDeletePost = (id) => {
    props.deletePost(id);
  };
  const postsElements = Array.from(props.retrievedPosts).map((data) => {
    return (
      <Post
        postTitle={data.title}
        postBody={data.body}
        postId={data.id}
        key={data.id}
        onDeletePost={onDeletePost}
      />
    );
  });
  return <div className="posts">{postsElements}</div>;
}
export default Posts;
