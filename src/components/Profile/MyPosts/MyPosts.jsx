import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
let newPostElement = React.createRef();

let addPost = () => {
  let text = newPostElement.current.value;
  props.addPost(text);
}

let posts = props.posts;

let postsElements = posts.map( (p, index) => <Post key={index} message={p.message} likesCount={p.likesCount}/>)

  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
        <div className={classes.posts}>
          {/* <Post message={posts[0].message} likesCount={posts[0].likesCount}/>
          <Post text={message[1].message} likesCount={posts[1].likesCount}/> */}

          {postsElements}
        </div>
      </div>
    </div>
  );
};
export default MyPosts;
