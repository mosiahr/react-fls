import { SimpleButton } from '@components/CommonComponents'
import CONSTANTS from './constants'

function DanceFloor({ pairList, removeOnClick }) {
  return (
    <section className="flex flex-col border-1 border-gray-300 dark:border-gray-600 p-2 rounded-lg">
      <h3 className="text-2xl font-bold">{CONSTANTS.DANCE_FLOOR_TITLE}</h3>
      <ul className="flex flex-col gap-2  ">
        {pairList.map((pair) => (
          <li
            key={pair.id}
            className="w-full border flex flex-wrap justify-between items-center flex-wrap gap-2.5 rounded-lg p-2 border-gray-300 dark:border-gray-600"
          >
            <div>{String(pair)}</div>
            <SimpleButton text="Remove" onClick={() => removeOnClick(pair)} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default DanceFloor
