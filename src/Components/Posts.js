import Post from "./Post";
import "./Posts.css";
function Posts(props) {
  const postsElements = Array.from(props.retrievedPosts).map((data) => {
    return <Post postTitle={data.title} postBody={data.body} postId={data.id} />;
  });
  return <div className="posts">{postsElements}</div>;
}
export default Posts;
