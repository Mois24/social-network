import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let newMessageElement = React.createRef();
  
  let addMessage = () => {
    props.addMessage();
  }

  let dialogs = props.state.dialogs;
  let messages = props.state.messages;

  let dialogsElements = dialogs.map( (dialog, index) => <DialogItem key={index} name={dialog.name} id={dialog.id} />);

  let messagesElements = messages.map( (m, index) => <Message key={index} message={m.message} id={m.id}/>);

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}/>
        <button onClick={ addMessage }>Add Messages</button>
        
        { dialogsElements }

      </div>
      <div className={classes.messages}>
        
        { messagesElements }

      </div>
    </div>
  );
};
export default Dialogs;
