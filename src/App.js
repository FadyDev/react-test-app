import React, { useState, useEffect } from "react";
import Axios from "axios";
import Posts from "./Components/Posts";
import "./styles.css";

export default function App() {
  const [posts, setPosts] = useState([]);

  // const getApiData = async () => {
  //   const response = await Axios.get(
  //     "https://jsonplaceholder.typicode.com/posts"
  //   ).catch((err) => {
  //     console.error(err);
  //   });
  //   response.data ? setPosts(response.data) : console.log("Data not found!");
  //   console.log(posts);
  // };

  const getApiData = async () => {
    const response = await Axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    ).catch((err) => {
      console.error(err);
    });
    setPosts(response.data);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="App">
      <Posts retrievedPosts={posts} />
      {/* <button onClick={getApiData}>TEST</button> */}
    </div>
  );
}
