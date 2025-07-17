import { Children } from 'react'

function ReverseComponentReverse({ children }) {
  const newChildren = Children.toArray(children)
  console.log(newChildren)

  return (
    <div className="mt-5 p-2 bg-blue-500 ">
      <h2 className="">Reverse Component</h2>
      {newChildren.reverse()}
    </div>
  )
}

export default ReverseComponentReverse
