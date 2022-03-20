import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom';
import { CustomLink } from '../CustomLink';

const Sidebar = () => {
  return <nav className={styles.sidebar}>
    <div className={styles.feeds}>
      <div className={styles.feeds_name}>
        New Feeds
      </div>
      <div className={styles.feeds_items}>
        <div className={styles.feeds_item}>
          <CustomLink to="/profile">Profile</CustomLink>
        </div>
        <div className={styles.feeds_item}>
          <CustomLink to="/dialogs">Messages</CustomLink>
        </div>
        <div className={styles.feeds_item}>
          <CustomLink to="/news">News</CustomLink>
        </div>
        <div className={styles.feeds_item}>
          <CustomLink to="/music">Music</CustomLink>
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