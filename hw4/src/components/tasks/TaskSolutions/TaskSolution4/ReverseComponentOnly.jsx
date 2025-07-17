import { Children } from 'react'

function ReverseComponentOnly({ children }) {
  let comp = ''
  try {
    comp = Children.only(children)
  } catch (error) {
    console.log(error)
    comp = 'Компонент має бути тільки один'
  }

  return <div className="mt-5 p-3">{comp}</div>
}

export default ReverseComponentOnly
