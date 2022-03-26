import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElements = props.posts.map(post => <Post message={post.message} likesCount = {post.likesCount} /> )

  let newPostElement = React.createRef()

  let addPost = () => {
    let text = newPostElement.current.value
    props.addPost(text)
    newPostElement.current.value = ''
  }

  return <div>
    My posts
    <div> 
      New post
      <textarea ref={newPostElement}></textarea>
      <button onClick={ addPost }>Add post</button>
    </div>
    <div> 
      { postsElements }
    </div>
  </div>
}

export default MyPosts