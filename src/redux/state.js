let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Саня ты впорядке!", likesCount: 24 },
        { id: 2, message: "Ты впорядке Саня", likesCount: 24 },
      ],
      newPostText: 'Get Some Music'
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Darya" },
        { id: 2, name: "Viktor" },
        { id: 3, name: "Oksana" },
        { id: 4, name: "Anton" },
        { id: 5, name: "Andrei" },
        { id: 6, name: "Zhenya" },
      ],
  
      messages: [
        { id: 1, message: "Hi, How are you?" },
        { id: 2, message: "Ooh man, it's real nice!" },
        { id: 3, message: "It's your music channel GSM?" },
        { id: 4, message: "You're crazy man?" },
        { id: 5, message: "Good news. Thank you!" },
        { id: 6, message: "Playboi Carty!" }
      ],
  
      newMessageText: 'Welcome Dear!'
    },
    
    sidePage: {
      friends: [
        {id: 1, name: "Darya"},
        {id: 2, name: "Anton"},
        {id: 3, name: "Nikita"}
      ],
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('State changed')
  },
  addPost() {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 3
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addMessage() {
    let newMessage = {
      id: 7,
      message: this._state.dialogsPage.newMessageText
    }
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newMessage) {
    this._state.dialogsPage.newMessageText = newMessage;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

export default store;

