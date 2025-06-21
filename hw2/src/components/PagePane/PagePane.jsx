import styles from './PagePane.module.css'
import { TaskPane } from '../task'

function PagePane({ tasks, selectedTaskId }) {
  const currentTask = tasks.find((task) => task.id === selectedTaskId)

  return (
    <div
      className={`${styles['content-block__page-pane']} ${styles['page-pane']}`}
    >
      <TaskPane task={currentTask} />
    </div>
  )
}

export default PagePane
