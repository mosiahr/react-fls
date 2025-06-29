import { SimpleButton } from '../../../CommonComponents'

export default function OrderField({
  constant,
  dishList = [],
  actionDishOrder,
  nextStatus,
}) {
  function handleOnClick(id) {
    actionDishOrder(id, nextStatus)
  }
  return (
    <div className="basis-1/3 rounded-md p-2 flex flex-col items-center gap-2 w-full border-1 border-gray-300 dark:border-gray-600">
      <div className="flex gap-1">
        <h3 className="relative flex font-medium ">
          <span className="px-3 shrink-0">{constant.TITLE}</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs leading-none font-bold text-white bg-(--primary-color) border-1 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {dishList.length}
          </div>
        </h3>
      </div>

      <ul className="flex flex-col gap-2 w-full rounded-lg ">
        {dishList.map(({ id, name }) => (
          <li
            key={id}
            className="w-full border flex justify-between flex-wrap rounded-lg p-2 border-1 border-gray-300 dark:border-gray-600"
          >
            <div className="flex justify-center items-center">{name}</div>
            <SimpleButton
              onClick={() => handleOnClick(id)}
              type="button"
              text={constant.BUTTON_TEXT}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
