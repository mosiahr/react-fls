import TaskPaneHeader from '../TaskPaneHeader'
import TaskPaneBody from '../TaskPaneBody'
import styles from './TaskPane.module.css'
import { TaskSolution1, TaskSolution2, TaskSolution3 } from '../TaskSolutions'

const solutionComponents = [TaskSolution1, TaskSolution2, TaskSolution3]

function TaskPane({ task }) {
  const SolutionComponent =
    solutionComponents[task.id] || (() => <div>No Solution</div>)

  return (
    <div
      className={`${styles['right-pane__task-pane']} ${styles['task-pane']}`}
    >
      <TaskPaneHeader {...task} />
      <TaskPaneBody>
        <SolutionComponent />
      </TaskPaneBody>
    </div>
  )
}

export default TaskPane
