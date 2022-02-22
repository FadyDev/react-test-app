import "./PostForm.css";

function PostForm() {
  return (
    <form className="post-form">
      <div className="post-form__controls">
        <div className="post-form__control">
          <label>Post Title</label>
          <input className="post-input" type="text" required/>
        </div>
        <div className="post-form__control">
          <label>Post Body</label>
          <textarea className="post-input" type="text" rows="5" required></textarea>
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
