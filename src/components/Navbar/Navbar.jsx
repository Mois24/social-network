import React from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div>
        <a>Profile</a>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <a>Messages</a>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a>Photos</a>
      </div>
    </nav>
  );
};
export default Navbar;
