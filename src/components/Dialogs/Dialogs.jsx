import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <div className={classes.dialog + ' ' + classes.active}><NavLink to="/dialogs/1">Darya</NavLink></div>
        <div className={classes.dialog}><NavLink to="/dialogs/2">Viktor</NavLink></div>
        <div className={classes.dialog}><NavLink to="/dialogs/3">Oksana</NavLink></div>
        <div className={classes.dialog}><NavLink to="/dialogs/4">Anton</NavLink></div>
        <div className={classes.dialog}><NavLink to="/dialogs/5">Andrey</NavLink></div>
      </div>
      <div className={classes.messages}>
        <div className={classes.message}>Hi, How are you?</div>
        <div className={classes.message}>Ooh man, it's real nice!</div>
        <div className={classes.message}>Is your music channel "GSM"?</div>
      </div>
    </div>
  );
};
export default Dialogs;
