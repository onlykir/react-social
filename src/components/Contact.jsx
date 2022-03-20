import styles from './Contact.module.css'

const Contact = () => {
  return <nav className={styles.contact}>
    <div className={styles.users}>
      <div className={styles.users_name}>
        Contacts
      </div>
      <div className={styles.users_items}>
        <div className={styles.users_item}>
          <a>Hurin Seary</a>
        </div>
        <div className={styles.users_item}>
          <a>Victor Exrixon</a>
        </div>
        <div className={styles.users_item}>
          <a>Surfiya Zakir</a>
        </div>
        <div className={styles.users_item}>
          <a>Hurin Seary</a>
        </div>
      </div>
    </div>
  </nav>
}

export default Contact