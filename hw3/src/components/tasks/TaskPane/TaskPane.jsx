import TaskPaneHeader from '../TaskPaneHeader'
import TaskPaneBody from '../TaskPaneBody'
import styles from './TaskPane.module.css'
import * as solutionComponents from '../TaskSolutions'

function TaskPane({ task }) {
  const SolutionComponent =
    solutionComponents[`TaskSolution${task.id + 1}`] ||
    (() => <div>No Solution</div>)

  return (
    <div className={`${styles['page-pane__task-pane']} ${styles['task-pane']}`}>
      <TaskPaneHeader {...task} />
      <TaskPaneBody>
        <SolutionComponent />
      </TaskPaneBody>
    </div>
  )
}

export default TaskPane
