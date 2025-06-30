import { useState } from 'react'
import { SimpleButton } from '../../../CommonComponents'
import { useEffect } from 'react'
import { useRef } from 'react'

function CounterWithSubscriptions() {
  const [count, setCount] = useState(0)
  const countRef = useRef(count)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log(countRef.current)
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    countRef.current = count
  }, [count])

  const handleOnClick = () => setCount((prev) => prev + 1)

  return (
    <div className="m-auto">
      <div>Count: {count}</div>
      <SimpleButton text="Add" onClick={handleOnClick} />
    </div>
  )
}

export default CounterWithSubscriptions
