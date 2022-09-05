import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
let newPostElement = React.createRef();

let addPost = () => {
  props.addPost();
}

let posts = props.posts;

let postsElements = posts.map( (p, index) => <Post key={index} message={p.message} likesCount={p.likesCount}/>)

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.updateNewPostText(text);
}
  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
        <div className={classes.posts}>
          {postsElements}
        </div>
      </div>
    </div>
  );
};
export default MyPosts;
