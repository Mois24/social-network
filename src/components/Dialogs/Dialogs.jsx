import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return (
    <div className={classes.message}>{props.message}</div>
  )
}

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <DialogItem name="Darya" id="1" /> 
        <DialogItem name="Viktor" id="2" />
        <DialogItem name="Oksana" id="3" />
        <DialogItem name="Anton" id="4" />
        <DialogItem name="Andrei" id="5" />
        <DialogItem name="Zhenya" id="6" />
      </div>
      <div className={classes.messages}>
        <Message message="Hi, How are you?"/>
        <Message message="Ooh man, it's real nice!"/>
        <Message message="Is your music channel GSM?"/>
      </div>
    </div>
  );
};
export default Dialogs;
