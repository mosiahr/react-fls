import { useState } from 'react'
import { SimpleButton } from '@components/CommonComponents'
import { CONSTANTS } from './constants'

//* Дано список спортсменів. Потрібно сформувати список тих, які будуть брати участь у змаганні.
//*  При цьому є два стовпці. В одному відображені всі спортсмени, в іншому – список тих, хто був вибраний.
//*  При натисканні на зелену стрілку спортсмен переміщається у список для змагань.
//* При натисканні на червону стрілку спортсмен переміщається у загальний список.

function SportsmanPane() {
  const [sportsmanList, setSportsmanList] = useState(CONSTANTS.SPORTSMAN_LIST)

  function handleOnClick(id) {
    setSportsmanList((prev) =>
      prev.map((sportsman) =>
        sportsman.id === id
          ? { ...sportsman, selected: !sportsman.selected }
          : sportsman
      )
    )
  }

  return (
    <div className="flex gap-2.5 p-2">
      <ul className="flex flex-col gap-2 w-1/2 rounded-lg  ">
        {sportsmanList
          .filter(({ selected }) => selected === false)
          .map(({ id, name }) => (
            <li
              key={id}
              className="w-full border flex justify-between flex-wrap rounded-lg p-2 border-1 border-gray-300 dark:border-gray-600"
            >
              <div className="flex justify-center items-center">{name}</div>
              <SimpleButton
                onClick={() => handleOnClick(id)}
                type="button"
                text={CONSTANTS.CHOSEN_BUTTON_TEXT}
              />
            </li>
          ))}
      </ul>
      <ul className="flex flex-col gap-2 w-1/2 rounded-lg ">
        {sportsmanList
          .filter(({ selected }) => selected === true)
          .map(({ id, name }) => (
            <li
              key={id}
              className="w-full border flex justify-between flex-wrap rounded-lg p-2 border-1 border-gray-300 dark:border-gray-600"
            >
              <div className="flex justify-center items-center">{name}</div>
              <SimpleButton
                onClick={() => handleOnClick(id)}
                type="button"
                text={CONSTANTS.NOT_CHOSEN_BUTTON_TEXT}
              />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default SportsmanPane
