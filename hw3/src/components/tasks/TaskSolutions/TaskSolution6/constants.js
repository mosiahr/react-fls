import { deepFreeze } from '../../../../utils'

export const LABEL_TITLE = 'Назва страви'

export const STATUS = {
  WAITING: 'WAITING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
}

Object.freeze(STATUS)

export const ORDER_FIELD_CONST = {
  WAITING: {
    TITLE: 'Очікують на виконання',
    BUTTON_TEXT: 'Готувати',
  },
  PROCESSING: {
    TITLE: 'Виконуються',
    BUTTON_TEXT: 'Приготовлено',
  },
  COMPLETED: {
    TITLE: 'Готові до виносу',
    BUTTON_TEXT: 'Подано',
  },
}

deepFreeze(ORDER_FIELD_CONST)
