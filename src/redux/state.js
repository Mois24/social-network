let renderEntireTree = () => {
  console.log('State changed')
};

let state = {
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
};

export const addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 3
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
}

export const addMessage = () => {
  let newMessage = {
    id: 7,
    message: state.dialogsPage.newMessageText
  }
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  renderEntireTree(state);
}

export const updateNewMessageText = (newMessage) => {
  state.dialogsPage.newMessageText = newMessage;
  renderEntireTree(state);
}

export const subscribe = (observer) => {
  renderEntireTree = observer;
}

export default state;
