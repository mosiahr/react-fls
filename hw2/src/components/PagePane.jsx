// import styles from './PagePane.module.css'
import { TaskPane } from './task'

function PagePane({ tasks, selectedTaskId }) {
  const currentTask = tasks.find((task) => task.id === selectedTaskId)

  return (
    <div className="content-block__page-pane page-pane">
      <TaskPane task={currentTask} />
    </div>
  )
}

export default PagePane
