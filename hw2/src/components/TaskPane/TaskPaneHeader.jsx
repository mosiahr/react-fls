function TaskPaneHeader({ task }) {
  return (
    <div >
      <div>{task.title || `Task #${task.id + 1}`}</div>
      <div>{task.description}</div>
    </div>
  )
}

export default TaskPaneHeader
