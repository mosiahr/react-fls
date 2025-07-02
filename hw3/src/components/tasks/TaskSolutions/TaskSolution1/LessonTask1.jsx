import { useEffect } from 'react'
import { useState } from 'react'
import CONSTANTS from './constants'
import { SimpleButton } from '../../../CommonComponents'

function LessonTask1() {
  const [dogImg, setDogImg] = useState(null)
  const [updateKey, setUpdateKey] = useState(0)

  useEffect(() => {
    async function loadDogImg() {
      try {
        const res = await fetch(CONSTANTS.DOG_API_URL)
        const data = await res.json()
        setDogImg(data.message)
      } catch (error) {
        console.log(error.message)
      }
    }
    loadDogImg()
  }, [updateKey])

  function handleClick() {
    setUpdateKey((prevKey) => prevKey + 1)
  }
  return (
    <>
      <div className="min-h-90 flex flex-col gap-2">
        {dogImg ? (
          <img className="max-h-90" src={dogImg} alt="dog" />
        ) : (
          <div>{CONSTANTS.DOESNT_HAVE_IMG_MSG}</div>
        )}
      </div>
      <SimpleButton text={CONSTANTS.BUTTON_TEXT} onClick={handleClick} />
    </>
  )
}

export default LessonTask1
