import { TaskList } from '../task'
import styles from './SideBar.module.css'

function SideBar({ tasks, onTaskSelect }) {
  return (
    <aside
      className={`${styles['content-block__sidebar']} ${styles['sidebar']}`}
    >
      <TaskList tasks={tasks} onTaskSelect={onTaskSelect} />
    </aside>
  )
}
export default SideBar
