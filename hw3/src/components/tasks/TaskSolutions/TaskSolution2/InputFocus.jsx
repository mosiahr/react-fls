import { useRef, useEffect } from 'react'
import { SimpleButton, SimpleInput } from '../../../CommonComponents'
import CONSTANTS from '../TaskSolution2/constants'

function InputFocus() {
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function handleClick() {
    inputRef.current?.focus()
  }

  return (
    <>
      <div className="m-auto flex flex-col items-center gap-2.5 p-2.5 ">
        <SimpleInput ref={inputRef} labelTitle="Input Focus" />
        <SimpleButton onClick={handleClick} text={CONSTANTS.BUTTON_TEXT} />
      </div>
    </>
  )
}

export default InputFocus
