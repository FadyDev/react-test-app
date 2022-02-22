import React, {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import "./PostForm.css";

function PostForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredBody, setEnteredBody] = useState("");

  const tiltleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    setEnteredBody(event.target.value);
  };


  const submitHandler = (event) => {
      event.preventDefault();
      const postData = {
          id: uuidv4().toString(),
          title: enteredTitle,
          body: enteredBody
      }
      props.onAddPost(postData);
      setEnteredTitle("");
      setEnteredBody("");
  };
  return (
    <form className="post-form" onSubmit={submitHandler}>
      <div className="post-form__controls">
        <div className="post-form__control">
          <label>Post Title</label>
          <input className="post-input" type="text" value={enteredTitle} onChange={tiltleChangeHandler} required/>
        </div>
        <div className="post-form__control">
          <label>Post Body</label>
          <textarea className="post-input" type="text" rows="5" value={enteredBody} onChange={bodyChangeHandler} required></textarea>
        </div>
      </div>
      <div className="post-form__actions">
        <button className="btn btn-primary" type="submit">
          Post
        </button>
      </div>
    </form>
  );
}

export default PostForm;
