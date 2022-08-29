import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogs = props.state.dialogs;
  let messages = props.state.messages;

  let dialogsElements = dialogs.map( (dialog, index) => <DialogItem key={index} name={dialog.name} id={dialog.id} />);

  let messagesElements = messages.map( (m, index) => <Message key={index} message={m.message} id={m.id}/>);

  let newIdMessage = React.createRef();
  let newMessage = () => {
    let text = newIdMessage.current.value;
    alert(text);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <textarea ref={ newIdMessage }></textarea>
        <button onClick={ newMessage }>Add Messages</button>
        
        { dialogsElements }

      </div>
      <div className={classes.messages}>
        
        { messagesElements }

      </div>
    </div>
  );
};
export default Dialogs;
