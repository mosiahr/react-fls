import { Children } from 'react'

function ReverseComponentMap({ children }) {
  return (
    <>
      {Children.map(children, (child) => (
        <>
          <div>{child}</div>
          <hr />
        </>
      ))}
    </>
  )
}

export default ReverseComponentMap
