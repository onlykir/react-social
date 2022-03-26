import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id = {dialog.id} /> )
  let messagesElements = props.state.messages.map(message => <Message text={message.text} /> )

  return <div>
    <div className={styles.dialogs}>
      <div className={styles.dialogs_content}>
        <div className={styles.dialogs_items}>
          { dialogsElements }
        </div>
      </div>
      <div className={styles.messages}>
        { messagesElements }
      </div>
    </div>
  </div>
}

export default Dialogs