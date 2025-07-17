import { useEffect, useState } from 'react'

function DataLoader({ url, children }) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const res = await fetch(url)
        const resData = await res.json()
        console.log(resData)
        console.log(children)

        setData(resData)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [url])

  if (isLoading) return <div>Loading ...</div>
  else if (error) return <div>ERROR!!! </div>
  //===== ВИКОРИСТОВУЄМО У return !!!!!!
  return children(data)
}

export default DataLoader
