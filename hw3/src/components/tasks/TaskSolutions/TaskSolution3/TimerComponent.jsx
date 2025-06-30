import { useEffect, useRef, useState } from 'react'

function TimerComponent() {
  const [count, setCount] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return <div className="text-center text-2xl font-bold">{count}</div>
}

export default TimerComponent
