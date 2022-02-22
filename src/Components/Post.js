// import "./Post.css";
// function Post(props) {
//   return (
//     <div className="post">
//       <div className="post-title">{props.postTitle}</div>
//       <div className="post-body">{props.postBody}</div>
//       <button>Delete Post</button>
//     </div>
//   );
// }

// export default Post;

import Accordion from 'react-bootstrap/Accordion';
import "./Post.css";

function Post(props) {
  const deletePostHandler = () => {
    props.onDeletePost(props.postId);
  };
  return (
      <Accordion className='post'>
        <Accordion.Item className='post-item' eventKey={props.postId.toString()}>
          <Accordion.Header className='post-header'><p className='post-title'>{props.postTitle}</p></Accordion.Header>
          <Accordion.Body className='post-body'>{props.postBody}
          <button
            className='delete-btn btn btn-danger'
            onClick={deletePostHandler}
          >
            
            Delete post
          </button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
  );
}

export default Post;
