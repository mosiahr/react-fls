import { useState } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

function TodoManager() {
  const [tasksList, setTasksList] = useState([
    { id: 1, task: 'Закінчити презентацію', completed: false },
    { id: 2, task: 'Перевірити макроси у PowerPoint', completed: false },
    { id: 3, task: 'Налаштувати VBA у Excel', completed: true },
  ])

  function onComplete(id) {
    setTasksList((prevList) =>
      prevList.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    )
  }

  function onDelete(id) {
    setTasksList((prevList) => prevList.filter((task) => task.id !== id))
  }

  function onAdd(newTask) {
    setTasksList((prevList) => [
      ...prevList,
      { id: new Date().getTime(), task: newTask, completed: false },
    ])
  }

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-center">Todo List</h2>
      <TodoForm onAdd={onAdd} />
      <TodoList
        tasksList={tasksList}
        onComplete={onComplete}
        onDelete={onDelete}
        setTasksList={setTasksList}
      />
    </div>
  )
}

export default TodoManager
