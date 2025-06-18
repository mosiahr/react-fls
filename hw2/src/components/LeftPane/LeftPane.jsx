import TaskList from '../TaskList/TaskList'
import styles from './LeftPane.module.css'

function LeftPane({ tasks, onTaskSelect }) {
  return (
    <div
      className={`${styles['content-block__left-pane']} ${styles['left-pane']}`}
    >
      <TaskList tasks={tasks} onTaskSelect={onTaskSelect} />
    </div>
  )
}
export default LeftPane
