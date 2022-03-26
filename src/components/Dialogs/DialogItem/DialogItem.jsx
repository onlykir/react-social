import styles from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id
  return <div>
    <div className={styles.dialogs_item}>
      <NavLink to={path} className={styles.dialogs_item_link  + ' ' + styles.active}>
        {props.name}
      </NavLink>
    </div>
  </div>
}

export default DialogItem