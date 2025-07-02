import { useState } from 'react'
import CONSTANTS from './constants'
import { SimpleInput } from '../../../CommonComponents'
import styles from './Speedometer.module.css'

// Вводиться дозволена швидкість і поточна швидкість авто.
// Якщо не введено дозволену швидкість, то елемент введення поточної швидкості заблокований.
// Якщо швидкість менше 50% дозволеної, то колір input – оранжевий, якщо від 50% до 100% - зелений,
//  вище 100% - червоний. Якщо значення вище 90% починає блимати повідомлення «Увага!»
function Speedometer() {
  const [speedLimit, setSpeedLimit] = useState('')
  const [currentSpeed, setCurrentSpeed] = useState('')

  function handleOnChange(e) {
    const { id, value } = e.target
    const inpValue = parseInt(value)
    if (Number.isFinite(inpValue))
      id === 'speedLimit' ? setSpeedLimit(inpValue) : setCurrentSpeed(inpValue)
  }

  function getInputColor() {
    let inputColor = ''
    if (Number.isFinite(speedLimit) && Number.isFinite(currentSpeed)) {
      const proportion = currentSpeed / speedLimit
      if (proportion < 0.5) inputColor = 'bg-orange-500'
      else if (proportion <= 1) inputColor = 'bg-green-500'
      else inputColor = 'bg-red-500'
    }

    return inputColor
  }

  function isAttention() {
    if (speedLimit && currentSpeed)
      if (currentSpeed / speedLimit > 0.9) return true
    return false
  }

  const inputBg = getInputColor()

  return (
    <div className="flex flex-col gap-5 w-2/3 min-lg:w-1/4 m-auto mt-20 h-full">
      <SimpleInput
        inputType="number"
        onChange={handleOnChange}
        labelTitle={CONSTANTS.SPEED_LIMIT_LABEL_TITLE}
        inputId="speedLimit"
        labelHtmlFor="speedLimit"
        min="0"
      />
      <SimpleInput
        inputType="number"
        onChange={handleOnChange}
        labelTitle={CONSTANTS.CURRENT_SPEED_LABEL_TITLE}
        disabled={!speedLimit}
        inputId="currentSpeed"
        labelHtmlFor="currentSpeed"
        inputBg={inputBg}
        min="0"
      />
      {isAttention() && (
        <div className={`${styles.blink} m-auto`}>
          {CONSTANTS.ATTENTION.toLocaleUpperCase()}
        </div>
      )}
    </div>
  )
}

export default Speedometer
