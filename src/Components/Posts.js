import Post from "./Post";
import "./Posts.css";
function Posts(props) {
  const postsElements = Array.from(props.retrievedPosts).map((data) => {
    return <Post postTitle={data.title} postBody={data.body} />;
  });
  return <div>{postsElements}</div>;
}
export default Posts;
