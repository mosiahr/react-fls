import styles from './TaskPane/TaskPane.module.css'

function TaskPaneBody({ children }) {
  return <div className={styles['task-pane__body']}>{children}</div>
}

export default TaskPaneBody
