import TaskPaneHeader from './TaskPaneHeader'
import TaskPaneBody from './TaskPaneBody'
import styles from './TaskPane.module.css'

function TaskPane({ task }) {
  return (
    <div
      className={`${styles['right-pane__task-pane']} ${styles['task-pane']}`}
    >
      <TaskPaneHeader {...task} />
      <TaskPaneBody />
    </div>
  )
}

export default TaskPane
