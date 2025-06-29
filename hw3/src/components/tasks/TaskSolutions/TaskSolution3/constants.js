import { Word } from './utils'
import { deepFreeze } from '../../../../utils'

export const INFO_MESSAGES = {
  CORRECT: { type: 'success', text: 'Добре. Молодець!' },
  INCORRECT: { type: 'error', text: 'Невірно, спробуйте ще раз' },
  BLANK: { type: 'blank', text: '' },
}

deepFreeze(INFO_MESSAGES)

export const wordList = [
  new Word(
    'book',
    ['книга', 'книжка', 'забронювати', 'замовити'],
    'Набір друкованих сторінок, які скріплені всередині обкладинки, щоб ви могли перевернути їх і прочитати.',
    '/img/translate/book.webp'
  ),
  new Word(
    'flower',
    ['квітка', 'квіточка', 'цвіт', 'цвісти'],
    'кольорова частина рослини, з якої розвивається насіння або плід',
    '/img/translate/flower.webp'
  ),
  new Word(
    'house',
    ['будинок', 'дім', 'хата', 'житло'],
    "будівля для проживання людей, як правило, для однієї сім'ї",
    '/img/translate/house.webp'
  ),
]

export const LABEL_TITLE = 'Your Translation'
