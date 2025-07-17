import { SimpleInput, SimpleButton } from '@/components/CommonComponents'
import { useState } from 'react'

function TodoForm({ onAdd }) {
  const [task, setTask] = useState(null)
  return (
    <div className="flex gap-2">
      <SimpleInput
        labelTitle="Task"
        inputValue={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <SimpleButton
        text="Add Task"
        onClick={() => onAdd(task)}
        className=""
      />
    </div>
  )
}

export default TodoForm
