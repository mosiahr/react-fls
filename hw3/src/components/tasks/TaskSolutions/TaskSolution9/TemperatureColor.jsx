import { useState } from 'react'
import { SimpleInput } from '../../../CommonComponents'
import CONSTANTS from './constants'

// З клавіатури вводиться температура. Змінювати колір фону у залежності від значення:
// менше нуля – білий
// від 0 до 10 – синій,
// від 11 до 22 – зелений
// вище 22 – червоний
// Реалізувати з класами і стилями.

function TemperatureColor() {
  const [temp, setTemp] = useState(0)

  function getBgClass() {
    let bgClass = ''

    switch (true) {
      case temp < 0:
        bgClass = 'bg-white'
        break
      case temp > -1 && temp < 11:
        bgClass = 'bg-blue-500'
        break
      case temp > 10 && temp < 23:
        bgClass = ' bg-green-500'
        break
      case temp > 22:
        bgClass = 'bg-red-500'
        break
    }
    return bgClass
  }

  const bgClass = getBgClass()

  return (
    <div
      className={`flex flex-col gap-2.5 w-2/3 min-lg:w-1/4 m-auto mt-20 h-full`}
    >
      <SimpleInput
        inputType="number"
        inputValue={temp}
        onChange={(e) => setTemp(e.target.value)}
        labelTitle={CONSTANTS.LABEL_TITLE}
        inputBg={bgClass}
        min="-50"
        max="50"
      />
    </div>
  )
}

export default TemperatureColor
