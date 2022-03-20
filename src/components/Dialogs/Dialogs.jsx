import styles from './Dialogs.module.css'

const Dialogs = () => {
  return <div>
    <div className={styles.dialogs}>
      <div className={styles.dialogs_content}>
        <div className={styles.dialogs_items}>
          <div className={styles.dialog  + ' ' + styles.active}>
            Kirill
          </div>
          <div className={styles.dialog}>
            Alesya
          </div>
        </div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>
            Hi!
        </div>
      </div>
    </div>
  </div>
}

export default Dialogs