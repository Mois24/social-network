import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogs = props.state.dialogs;
  let messages = props.state.messages;

  let dialogsElements = dialogs.map( (dialog, index) => <DialogItem key={index} name={dialog.name} id={dialog.id} />);

  let messagesElements = messages.map( (m, index) => <Message key={index} message={m.message} id={m.id}/>)

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
