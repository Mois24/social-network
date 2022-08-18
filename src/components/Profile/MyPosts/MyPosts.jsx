import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

const posts = [
  {id: 1, message: "Саня ты впорядке!", likesCount: 24},
  {id: 2, message: "Ты впорядке Саня", likesCount: 24}
];

let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

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
          {/* <Post message={posts[0].message} likesCount={posts[0].likesCount}/>
          <Post text={message[1].message} likesCount={posts[1].likesCount}/> */}

          {postsElements}
        </div>
      </div>
    </div>
  );
};
export default MyPosts;
