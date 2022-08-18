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

  let dialogs = [
    {id: 1, name: "Darya"},
    {id: 2, name: "Viktor"},
    {id: 3, name: "Oksana"},
    {id: 4, name: "Anton"},
    {id: 5, name: "Andrei"},
    {id: 6, name: "Zhenya"}
  ];

  let messages = [
    {id: 1, message: "Hi, How are you?"},
    {id: 2, message: "Ooh man, it's real nice!"},
    {id: 3, message: "It\'s your music channel GSM?"}
  ];

  let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />);

  let messagesElements = messages.map( m => <Message message={m.message} id={m.id}/>)

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {/* <DialogItem name={dialogs[0].name} id={dialogs[0].id} /> 
        <DialogItem name={dialogs[1].name} id={dialogs[1].id} />
        <DialogItem name={dialogs[2].name} id={dialogs[2].id} />
        <DialogItem name={dialogs[3].name} id={dialogs[3].id} />
        <DialogItem name={dialogs[4].name} id={dialogs[4].id} />
        <DialogItem name={dialogs[5].name} id={dialogs[5].id} /> */}
        { dialogsElements }

      </div>
      <div className={classes.messages}>
        {/* <Message message={messages[0].message} id={messages[0].id}/>
        <Message message={messages[1].message} id={messages[1].id}/>
        <Message message={messages[2].message} id={messages[2].id}/> */}
        { messagesElements }

      </div>
    </div>
  );
};
export default Dialogs;
