function TaskCard({ id, title, description, handleTaskCardOnClick }) {
  return (
    <div
      className="left-pane__task-card task-card"
      onClick={handleTaskCardOnClick}
    >
      <h2 className="task-card__title">{title || `Task ${id + 1}`}</h2>
      <div>{description}</div>
    </div>
  )
}

export default TaskCard
