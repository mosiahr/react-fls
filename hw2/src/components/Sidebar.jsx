import { TaskList } from './task'

function SideBar({ tasks, onTaskSelect }) {
  return (
    <aside className="content-block__sidebar sidebar">
      <TaskList tasks={tasks} onTaskSelect={onTaskSelect} />
    </aside>
  )
}
export default SideBar
