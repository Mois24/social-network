import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
        <div className={classes.posts}>
          <Post text="Саня ты впорядке!" likesCount="18"/>
          <Post text="Ты впорядке Саня" likesCount="24"/>
        </div>
      </div>
    </div>
  );
};
export default MyPosts;
