import React from "react";
import classes from "./ProfileInfo.module.css";
import WallPaper from "./images/wallpaper.jpg"

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={classes.image} src={WallPaper}></img>
      </div>
      <div className={classes.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
};
export default ProfileInfo;
