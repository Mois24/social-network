import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sidePage}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/" element={<Profile 
                            profilePage={props.state.profilePage} 
                            addPost={props.addPost} 
                            updateNewPostText={props.updateNewPostText}
                            />} />
            <Route path="/dialogs/*" element={<Dialogs 
                            state={props.state.dialogsPage} 
                            addMessage={props.addMessage} 
                            updateNewMessageText={props.updateNewMessageText}
                            />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
