import styles from './RightPane.module.css'
import TaskPane from '../TaskPane/TaskPane'

function RightPane({ tasks, selectedTaskId }) {
  const currentTask = tasks.find((task) => task.id === selectedTaskId)

  return (
    <div
      className={`${styles['content-block__right-pane']} ${styles['right-pane']}`}
    >
      <TaskPane task={currentTask} />
    </div>
  )
}

export default RightPane
