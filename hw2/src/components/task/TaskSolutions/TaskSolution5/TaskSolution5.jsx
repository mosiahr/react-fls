import DATA_LIST from './constants'

function SearchItem({ name, title, url, description, logoSrc }) {
  return (
    <div className="p-2.5 border rounded-md">
      <div className="flex gap-2 justify-start ">
        <img className="w-8" src={logoSrc} alt={name} />
        <div className="flex flex-col">
          <div>{name}</div>
          <div className="text-sm">
            <a href={url} className="hover:underline">
              {url}
            </a>
          </div>
        </div>
      </div>
      <a href={url} className="hover:underline text-lg font-semibold">
        <h3>{title}</h3>
      </a>
      <div>{description}</div>
    </div>
  )
}

function TaskSolution5() {
  return (
    <div className="p-2  ">
      <ul className="flex flex-col gap-2">
        {DATA_LIST.map((item) => (
          <li>
            <SearchItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskSolution5
