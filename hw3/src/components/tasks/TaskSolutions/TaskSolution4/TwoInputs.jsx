import { useRef } from 'react'
import { SimpleButton, SimpleInput } from '../../../CommonComponents'
import { useState } from 'react'

const CONSTANTS = {
  FIRST_NUMBER_NOT_INPUT: 'Перше число не введене!',
  SECOND_NUMBER_NOT_INPUT: 'Друге число не введене!',
  TWO_NUMBERS_INPUTTED: 'Числа введено!',
}

function TwoInputs() {
  const inpRef1 = useRef(null)
  const inpRef2 = useRef(null)
  const [msg, setMsg] = useState('')

  function handleOnClick() {
    if (inpRef1.current?.value === '') {
      inpRef1.current?.focus()
      setMsg(CONSTANTS.FIRST_NUMBER_NOT_INPUT)
      return
    }
    if (inpRef2.current?.value === '') {
      inpRef2.current?.focus()
      setMsg(CONSTANTS.SECOND_NUMBER_NOT_INPUT)
      return
    }
    setMsg(CONSTANTS.TWO_NUMBERS_INPUTTED)
  }

  return (
    <div className="p-2 w-1/3 max-lg:w-full m-auto flex flex-col gap-2.5">
      <SimpleInput ref={inpRef1} labelTitle="Num1" />
      <SimpleInput ref={inpRef2} labelTitle="Num2" />
      <SimpleButton text="Check Inputs" onClick={handleOnClick} />
      <div>{msg}</div>
    </div>
  )
}

export default TwoInputs
