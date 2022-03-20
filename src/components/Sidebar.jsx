import styles from './Sidebar.module.css'

const Sidebar = () => {
  return <nav className={styles.sidebar}>
    <div className={styles.feeds}>
      <div className={styles.feeds_name}>
        New Feeds
      </div>
      <div className={styles.feeds_items}>
        <div className={styles.feeds_item}>
          <a>Profile</a>
        </div>
        <div className={styles.feeds_item}>
          <a>Messages</a>
        </div>
        <div className={styles.feeds_item}>
          <a>News</a>
        </div>
        <div className={styles.feeds_item}>
          <a>Music</a>
        </div>
      </div>
    </div>
    <div className={styles.account}>
      <div className={styles.account_name}>
        Account
      </div>
      <div className={styles.account_items}>
        <div className={styles.account_item}>
          <a>Settings</a>
        </div>
      </div>
    </div>
  </nav>
}

export default Sidebar