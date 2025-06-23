import TaskCard from '../TaskCard'
import styles from './TaskList.module.css'

function TaskList({ tasks, selectedTaskId, onTaskSelect }) {
  function handleTaskCardOnClick(id) {
    onTaskSelect(id)
  }

  const taskList = tasks.map((task) => (
    <TaskCard
      key={task.id}
      {...task}
      isSelected={selectedTaskId === task.id}
      handleTaskCardOnClick={() => handleTaskCardOnClick(task.id)}
    />
  ))
  return (
    <div className={`${styles['left-pane__task-list']} ${styles['task-list']}`}>
      {taskList}
    </div>
  )
}

export default TaskList
