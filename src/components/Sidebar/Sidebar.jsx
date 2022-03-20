import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return <nav className={styles.sidebar}>
    <div className={styles.feeds}>
      <div className={styles.feeds_name}>
        New Feeds
      </div>
      <div className={styles.feeds_items}>
        <div className={styles.feeds_item}>
          <Link to="/profile">Profile</Link>
        </div>
        <div className={styles.feeds_item}>
          <Link to="/dialogs">Messages</Link>
        </div>
        <div className={styles.feeds_item}>
          <Link to="/news">News</Link>
        </div>
        <div className={styles.feeds_item}>
          <Link to="/music">Music</Link>
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