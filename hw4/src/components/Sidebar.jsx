import { TaskList } from './tasks'

function SideBar({ tasks, selectedTaskId, onTaskSelect }) {
  return (
    <aside className="content-block__sidebar sidebar">
      <TaskList
        tasks={tasks}
        selectedTaskId={selectedTaskId}
        onTaskSelect={onTaskSelect}
      />
    </aside>
  )
}
export default SideBar
