import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";
import avatar from "./image/hipster.jpg";

const DialogItem = (props) => {
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={`/dialogs/${props.id}`}>
      <img className={classes.item} src={avatar}></img>
        {props.name}
      </NavLink>
    </div>
  );
};


export default DialogItem;
