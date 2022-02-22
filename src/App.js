import React, { useState, useEffect } from "react";
import Axios from "axios";
import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";
import SearchBar from "./Components/SearchBar";
import "./styles.css";

export default function App() {
  const MESSAGE_CONTENT = "Posts";
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState(MESSAGE_CONTENT);

  const getApiData = async () => {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    ).catch((err) => {
      console.error(err);
      setMessage(err.message);
      setPosts([]);
    });
    if (response.data) {
      setPosts(response.data);
      setMessage(`${MESSAGE_CONTENT} (${response.data.length})`);
    } else {
      setMessage("No posts were found");
    }
  };
  useEffect(() => {
    getApiData();
  }, []);

  const addPostHandler = (post) => {
    setPosts((prevPosts) => {
      const updatedPostList = [post, ...prevPosts];
      setMessage(`${MESSAGE_CONTENT} (${updatedPostList.length})`);
      return updatedPostList;
    });
  };
  const deletePostHandler = (id) => {
    setPosts((prevPosts) => {
      const filteredPosts = prevPosts.filter((post) => post.id !== id);
      setMessage(`${MESSAGE_CONTENT} (${filteredPosts.length})`);
      return filteredPosts;
    });
  };

  return (
    <div className="App">
      <div className="App-header">
        <PostForm className="search-form" onAddPost={addPostHandler} />
        <SearchBar className="search-bar" />
      </div>
      <div className="posts">
        <div>
          <h3>{message}</h3>
        </div>
        <Posts retrievedPosts={posts} deletePost={deletePostHandler} />
      </div>
    </div>
  );
}
