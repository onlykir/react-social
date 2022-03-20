import styles from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return <div>
    My posts
    <div> 
      New post
      <textarea></textarea>
      <button>Add post</button>
    </div>
    <div> 
      <Post message="Hi! How are u?" likesCount="4"/> 
      <Post message="It's my first post" likesCount="10"/>
      <Post message="Cool!" likesCount="8"/>
    </div>
  </div>
}

export default MyPosts