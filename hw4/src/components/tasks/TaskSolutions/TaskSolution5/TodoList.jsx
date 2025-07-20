import { SimpleButton } from '@components/CommonComponents'
import TodoItem from './TodoItem'

function TodoList({ tasksList, onComplete, onDelete, setTasksList }) {
  return (
    <div className="flex flex-col gap-2">
      <ul className="flex flex-col gap-3">
        {tasksList.map((task) => (
          <li key={task.id}>
            <TodoItem {...task} onComplete={onComplete} onDelete={onDelete} />
          </li>
        ))}
      </ul>
      <SimpleButton text="Clear" onClick={() => setTasksList([])} />
    </div>
  )
}

export default TodoList
