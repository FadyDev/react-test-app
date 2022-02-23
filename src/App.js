import React, { useState, useEffect } from "react";
import Axios from "axios";
import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";
import SearchBar from "./Components/SearchBar";
import LoadSpinner from "./Components/LoadSpinner";
import "./styles.css";

let postsRepo = [];
let resetSearch = ""; //Workaround .. could be done in a better way

export default function App() {
  const MESSAGE_CONTENT = "Posts";
  const [posts, setPosts] = useState([]);
  const [isSaved, setIsSaved] = useState(false);
  const [message, setMessage] = useState(MESSAGE_CONTENT);
  const [isLoaded, setIsLoaded] = useState(false);

  const getApiData = async () => {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    ).catch((err) => {
      setIsLoaded((currentIsLoaded) => !currentIsLoaded);
      console.error(err);
      setMessage(err.message);
      setPosts([]);
    });
    if (response.data) {
      setIsLoaded((currentIsLoaded) => !currentIsLoaded);
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
    if (isSaved) {
      postsRepo = postsRepo.filter((post) => post.id !== id);
      setMessage(`${MESSAGE_CONTENT} (${postsRepo.length})`);
      setPosts(postsRepo);
      resetSearch = "";
      return;
    }
    setPosts((prevPosts) => {
      const filteredPosts = prevPosts.filter((post) => post.id !== id);
      setMessage(`${MESSAGE_CONTENT} (${filteredPosts.length})`);
      resetSearch = "";
      return filteredPosts;
    });
  };

  const postsSearchHandler = (searchString) => {
    resetSearch = searchString;
    if (searchString !== "" && !isSaved) {
      postsRepo = [...posts];
      setIsSaved((prevBool) => !prevBool);
    } else if (searchString !== "" && isSaved) {
      const searchResults = postsRepo.filter((post) =>
        post.title.toLowerCase().includes(searchString.toLowerCase())
      );
      setPosts(searchResults);
      setMessage(`${MESSAGE_CONTENT} (${searchResults.length})`);
    } else {
      setPosts(postsRepo);
      setMessage(`${MESSAGE_CONTENT} (${postsRepo.length})`);
      setIsSaved(false);
    }
  };

  return (
    <div className="App">
      <div className="top-bar">
        <h3>PostAPP</h3>
      </div>
      <div className="App-header">
        <PostForm className="search-form" onAddPost={addPostHandler} />
        <SearchBar
          className="search-bar"
          value={resetSearch}
          onSearch={postsSearchHandler}
        />
      </div>
      <div className="posts">
        <div>
          <h3>{message}</h3>
        </div>
        {isLoaded || <LoadSpinner />}
        <Posts retrievedPosts={posts} deletePost={deletePostHandler} />
      </div>
    </div>
  );
}
