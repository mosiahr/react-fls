import { useState } from 'react'
import { SimpleInput } from '../../../CommonComponents'

// Задача 1. З клавіатури вводиться довжина у сантиметрах. Виводити скільки це метрів, кілометрів.
function SmConverter() {
  const [sm, setSm] = useState('')

  const smValue = parseInt(sm)
  const meters = smValue / 100 || 0
  const km = meters / 1000 || 0

  return (
    <div className="flex flex-col gap-2.5 w-2/3 min-lg:w-1/4 m-auto mt-20">
      <SimpleInput
        inputType="number"
        inputValue={sm}
        onChange={(e) => setSm(e.target.value)}
        labelTitle="Довжина у см"
      />
      <div>Meters: {meters.toFixed(2)}</div>
      <div>KM: {km.toFixed(5)}</div>
    </div>
  )
}

export default SmConverter
