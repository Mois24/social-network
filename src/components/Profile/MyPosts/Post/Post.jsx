import React from "react";
import classes from "./Post.module.css";
import avatar from "./images/hipster.jpg";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src={avatar}></img>
      {props.message}
      <div>
        <span>like</span>{props.likesCount}
      </div>
    </div>
  );
};
export default Post;
