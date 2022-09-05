import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactDOMClient from 'react-dom/client';
import state, { subscribe } from "./redux/state";
import App from "./App";
import {
  addPost,
  updateNewPostText,
  addMessage,
  updateNewMessageText,
} from "./redux/state";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </React.StrictMode>
  );
};

renderEntireTree(state);

subscribe(renderEntireTree);
