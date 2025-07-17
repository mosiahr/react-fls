import { SimpleButton } from '@components/CommonComponents'

function TodoItem({ id, task, completed, onComplete, onDelete }) {
  return (
    <div
      className="w-full p-2 flex flex-wrap justify-between gap-3 border-2 border-emerald-300 rounded-md"
      // style={{ background: 'red', border: '1px solid black' }}
    >
      <div className="flex flex-col justify-center">{task}</div>
      <div className="flex flex-col justify-center">
        {completed ? 'Completed' : 'Not completed'}
      </div>
      <div className="flex gap-2">
        <SimpleButton onClick={() => onComplete(id)} text="Complete" />
        <SimpleButton onClick={() => onDelete(id)} text="Delete" />
      </div>
    </div>
  )
}

export default TodoItem
