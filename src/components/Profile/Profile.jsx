import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={classes.content}>
      <img src="https://www.footballticketnet.com/theme/images/teams/Buy-Olympique-Marseille-Football-Tickets-FootballTicketNet.png"></img>
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
