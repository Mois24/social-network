import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import store from "./redux/state";
import App from "./App";


const root = ReactDOMClient.createRoot(document.getElementById("root"));

let renderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        addMessage={store.addMessage.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)}
      />
    </React.StrictMode>
  );
};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);
