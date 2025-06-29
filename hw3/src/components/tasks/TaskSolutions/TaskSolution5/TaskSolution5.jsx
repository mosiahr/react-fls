import DATA_LIST from './constants'
import SearchItem from './SearchItem'

function TaskSolution5() {
  return (
    <div className="p-2">
      <ul className="flex flex-col gap-2">
        {DATA_LIST.map((item, i) => (
          <li key={i}>
            <SearchItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskSolution5
