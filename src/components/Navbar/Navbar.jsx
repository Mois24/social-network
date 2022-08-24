import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  let namesElements = props.state.friends.map( (n) => <div><div className={classes.ground}></div><div>{n.name}</div></div>);
  return (
    <nav className={classes.navbar}>
      <div>
        <NavLink to="/profile" className={ navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={ navData => navData.isActive ? classes.active : classes.item }>Messages</NavLink>
      </div>
      <div>
        <NavLink to="/news" className={ navData => navData.isActive ? classes.active : classes.item }>News</NavLink>
      </div>
      <div>
        <NavLink to="/music" className={ navData => navData.isActive ? classes.active : classes.item }>Music</NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={ navData => navData.isActive ? classes.active : classes.item }>Settings</NavLink>
      </div>
      <div>
        <NavLink to="/friends" className={ navData => navData.isActive ? classes.active : classes.item }>Friends</NavLink>
        <div>
          {namesElements}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
