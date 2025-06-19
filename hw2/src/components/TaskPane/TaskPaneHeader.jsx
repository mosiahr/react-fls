import { NewLineText } from '../../utils.jsx'
import styles from './TaskPane.module.css'

function TaskPaneHeader({ id, title, description }) {
  return (
    <div className={styles['task-pane__header']}>
      <div className={styles['task-pane__title']}>
        {title || `Task #${id + 1}`}
      </div>
      <div className={styles['task-pane__description']}>
        <NewLineText text={description} />
      </div>
    </div>
  )
}

export default TaskPaneHeader
