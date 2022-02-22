import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar(props) {
  const searchHandler = (event) => {
    console.log(`from the SearchBar.js ${event.target.value}`);
    props.onSearch(event.target.value);
  };
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." onChange={searchHandler} />
    </div>
  );
}

export default SearchBar;
