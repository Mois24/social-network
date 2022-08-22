import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const posts = [

  {id: 1, message: "Саня ты впорядке!", likesCount: 24},
  {id: 2, message: "Ты впорядке Саня", likesCount: 24}
];

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

root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
