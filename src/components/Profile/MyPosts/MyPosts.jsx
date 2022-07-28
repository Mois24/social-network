import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={classes.content}>
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <div>
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};
export default MyPosts;