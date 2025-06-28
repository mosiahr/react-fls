//* На кухню поступають замовлення. Спочатку ми додаємо їх у список
//*  “Очікують на виконання”, якщо повар береться робити — замовлення
//*  переходить у список “Виконуються”, якщо замовлення виконано — переходить
//* у список “Готові до виносу”. Якщо натиснути на “Подано” - страва зникає з таблиці.
//* Підказка: тут треба зберігати 3 масиви страв ( waitingList, processingList, completedList)

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { SimpleButton } from '../../../CommonComponents'
import OrderField from './OrderField'
import DishOrder from './utils'
import STATUS from './constants'

function Kitchen() {
  const [dishName, setDishName] = useState('')
  const [dishOrderList, setDishOrderList] = useState([])

  function handleOnSubmit(e) {
    e.preventDefault()
    if (dishName) {
      createDishOrder(dishName.trim(), STATUS.WAITING)
      setDishName('')
    }
  }

  const createDishOrder = (dishName, status) => {
    setDishOrderList((prev) => [
      ...prev,
      new DishOrder(uuidv4(), dishName, status),
    ])
  }

  const updateDishOrder = (id, status) => {
    setDishOrderList((prev) =>
      prev.map((dishOrder) =>
        dishOrder.id === id
          ? new DishOrder(dishOrder.id, dishOrder.name, status)
          : dishOrder
      )
    )
  }

  const deleteDishOrder = (id, status) => {
    if (!status)
      setDishOrderList((prev) =>
        prev.filter((dishOrder) => dishOrder.id !== id)
      )
  }

  return (
    <div className="w-full flex flex-col gap-2.5 p-2">
      <form onSubmit={handleOnSubmit} className="flex items-center gap-2.5">
        <div className="relative flex-3/4">
          <input
            onChange={(e) => setDishName(e.target.value)}
            value={dishName}
            type="text"
            id="dish"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            autoComplete="off"
          />
          <label
            htmlFor="dish"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Назва страви
          </label>
        </div>
        <SimpleButton type="submit" text="Додати" className="flex-1/4" />
      </form>

      <div className="flex gap-2.5 h-full">
        <OrderField
          title="Очікують на виконання"
          textButton="Готувати"
          dishList={dishOrderList.filter(
            ({ status }) => status === STATUS.WAITING
          )}
          actionDishOrder={updateDishOrder}
          nextStatus={STATUS.PROCESSING}
        />
        <OrderField
          title="Виконуються"
          textButton="Приготовлено"
          dishList={dishOrderList.filter(
            ({ status }) => status === STATUS.PROCESSING
          )}
          actionDishOrder={updateDishOrder}
          nextStatus={STATUS.COMPLETED}
        />
        <OrderField
          title="Готові до виносу"
          textButton="Подано"
          dishList={dishOrderList.filter(
            ({ status }) => status === STATUS.COMPLETED
          )}
          actionDishOrder={deleteDishOrder}
          nextStatus=""
        />
      </div>
    </div>
  )
}

export default Kitchen
