import { SimpleButton } from '../../../CommonComponents'

export default function OrderField({
  title,
  textButton,
  dishList = [],
  actionDishOrder,
  nextStatus,
}) {
  function handleOnClick(id) {
    actionDishOrder(id, nextStatus)
  }
  return (
    <div className="basis-1/3  rounded-md min-h-40 p-2 flex flex-col items-center gap-2 w-full border-1 border-gray-300 dark:border-gray-600">
      {title}
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
              text={textButton}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
