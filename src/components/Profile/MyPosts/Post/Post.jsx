import styles from './Post.module.css'

const Post = (props) => {
  return <div>
    <div className={styles.item}>
      <img className={styles.item_avatar} src="http://sociala.uitheme.net/assets/images/user-8.png"></img>
      <div className={styles.item_content}>
        {props.message}
      </div>
      <span>{props.likesCount} likes</span>
    </div>
  </div>
}

export default Post