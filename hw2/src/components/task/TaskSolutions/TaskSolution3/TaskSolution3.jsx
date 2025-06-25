import { useRef, useState } from 'react'
import { ArrowSvg, SimpleButton, InfoBlock } from '../../../CommonComponents'
import { normalizeString } from '../../../../utils'
import styles from './TaskSolution3.module.css'

const INFO_MESSAGES = {
  CORRECT: { type: 'success', text: 'Добре. Молодець!' },
  INCORRECT: { type: 'error', text: 'Невірно, спробуйте ще раз' },
  BLANK: { type: 'blank', text: '' },
}

class Word {
  constructor(term, translateList, description, imgPath) {
    this.term = term
    this.translateList = translateList
    this.description = description
    this.imgPath = imgPath
  }
}

const wordList = [
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

function checkTranslate(wordIndex, answer, wordList) {
  return wordList[wordIndex]?.translateList.some((el) => el === answer)
}

function TranslateCard({ wordList }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [infoMessage, setInfoMessage] = useState(INFO_MESSAGES.BLANK)

  function handleSubmit(e) {
    e.preventDefault()
    if (checkTranslate(wordIndex, answer, wordList))
      setInfoMessage(INFO_MESSAGES.CORRECT)
    else setInfoMessage(INFO_MESSAGES.INCORRECT)
    setAnswer('')
  }

  function onChange(e) {
    setAnswer(normalizeString(e.target.value))
    setInfoMessage(INFO_MESSAGES.BLANK)
  }

  function handleOnClick() {
    setWordIndex((prev) => (prev + 1 < wordList.length ? prev + 1 : 0))
    setInfoMessage(INFO_MESSAGES.BLANK)
    setAnswer('')
  }

  const currentWord = wordList[wordIndex]

  const borderClassName = () => {
    let res = ''

    if (infoMessage === INFO_MESSAGES.CORRECT)
      res = styles['info-block--success']
    else if (infoMessage === INFO_MESSAGES.INCORRECT)
      res = styles['info-block--error']

    return res
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${borderClassName()}  max-w-80 bg-white border  rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700`}
    >
      <img
        className="rounded-t-lg w-full h-80"
        src={currentWord?.imgPath}
        alt={currentWord?.term}
      />
      <div className="p-5 flex flex-col gap-2.5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {currentWord?.term}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {currentWord?.description}
        </p>
        <div className="relative">
          <input
            onChange={onChange}
            // onFocus={handleFocus}
            value={answer}
            type="text"
            id="answer"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            autoComplete="off"
            // autoFocus
          />
          <label
            htmlFor="answer"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Your Translation
          </label>
        </div>

        <div className="flex items-center gap-2.5">
          <SimpleButton type="submit" text="Check" className="flex-1" />
          <SimpleButton
            onClick={handleOnClick}
            type="button"
            text="Next Word"
            className="flex-1"
          >
            <ArrowSvg />
          </SimpleButton>
        </div>

        <InfoBlock message={infoMessage} />
      </div>
    </form>
  )
}

function TaskSolution3() {
  return (
    <div className="py-2">
      <TranslateCard wordList={wordList} />
    </div>
  )
}

export default TaskSolution3
