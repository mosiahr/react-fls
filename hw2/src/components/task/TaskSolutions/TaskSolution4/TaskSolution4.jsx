import WORKER_LIST from './constants'

function TaskSolution4() {
  const listItems = WORKER_LIST.map(({ name, salary }, i) => (
    <li key={i}>{`${name}: ${salary}`}</li>
  ))
  return (
    <div className="py-2">
      <h2>Worker List: </h2>
      <ul className="list-disc">{listItems}</ul>
    </div>
  )
}

export default TaskSolution4
