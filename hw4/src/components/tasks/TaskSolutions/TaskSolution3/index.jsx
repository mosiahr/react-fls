import DataLoader from './DataLoader'

function TaskSolution3() {
  return (
    <div className="m-auto p-2">
      <DataLoader url="https://jsonplaceholder.typicode.com/todos/1">
        {(data) => (
          <>
            <div>{data.id}</div>
            <div>{data.title}</div>
          </>
        )}
      </DataLoader>
    </div>
  )
}

export default TaskSolution3
