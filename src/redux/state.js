import {rerenderEntireTree} from '../render'

let state = {
  profilePage: {
    posts: [  
      {id: 1, message: "Hi! How are u?", likesCount: 4}, 
      {id: 2, message: "It's my first post", likesCount: 10},
      {id: 3, message: "Cool!", likesCount: 8} 
    ]
  },

  messagesPage: {
    dialogs: [
      { id: 1, name: "Hurin Seary"}, 
      { id: 2, name: "Victor Exrixon"}, 
      { id: 3, name: "Surfiya Zakir"}, 
      { id: 4, name: "Hurin Seary"}
    ],
    messages: [
      { id: 1, text: "Hi!"}, 
      { id: 2, text: "How are u!"}, 
      { id: 3, text: "Fine!"}
    ]
  }
}

export let addPost = (postMessage) => {
  let newPost = {id: 5, message: postMessage, likesCount: 0}

  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state)
}

export default state