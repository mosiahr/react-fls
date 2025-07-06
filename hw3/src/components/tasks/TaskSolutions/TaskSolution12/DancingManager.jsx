import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CONSTANTS from './constants'
import { SimpleButton } from '@components/CommonComponents'
import DancerGroup from './DancerGroup'
import DanceFloor from './DanceFloor'
import Human from './Human'
import Pair from './Pair'

//* Пари для танців. Поступово вибираємо хлопця, дівчину і додаємо у обрані пари.
//* Пару можна видалити. Поки не вибрано хлопця і дівчину кнопка «Додати» заблокована.
//* Якщо не вистачає хлопців або дівчат вибір також блокується.
function DancingManager() {
  const [dancerList, setDancerList] = useState(CONSTANTS.HUMAN_LIST)
  const [pairList, setPairList] = useState([])
  const [pairMap, setPairMap] = useState(new Map())

  const getDancer = (id) => dancerList.find((el) => el.id === id)
  const getNotDancerNumber = (dancerList) =>
    dancerList.reduce((prev, el) => (!el.isDancing ? prev + 1 : prev), 0)

  function chooseDancer(id) {
    if (getNotDancerNumber(dancerList) < 2) return

    const dancer = getDancer(id)

    if (pairMap.values().some((dancerObj) => dancerObj.id === id)) {
      setPairMap((prevPair) => {
        const newPrevPair = new Map(prevPair)
        newPrevPair.delete(dancer.gender)
        return newPrevPair
      })
    } else
      setPairMap((prevPair) => new Map(prevPair).set(dancer?.gender, dancer))
  }

  function setDancerListIsDancing(pair) {
    setDancerList((prev) =>
      prev.map((prevDancer) =>
        pair.man.id === prevDancer.id || pair.woman.id === prevDancer.id
          ? new Human(
              prevDancer.id,
              prevDancer.firstName,
              prevDancer.lastName,
              prevDancer.gender,
              prevDancer.emoji,
              !prevDancer.isDancing
            )
          : prevDancer
      )
    )
  }

  function addPairList(pairMap) {
    if (!pairMap.size || pairMap.size === 1) return

    const newPair = new Pair(uuidv4(), pairMap)
    setPairList((prevPair) => [newPair, ...prevPair])
    setDancerListIsDancing(newPair)
    setPairMap(new Map())
  }

  function removePair(pair) {
    setDancerListIsDancing(pair)
    setPairList((prevPair) => [...prevPair.filter((el) => el.id !== pair.id)])
    setPairMap(new Map())
  }

  function getInfoMessage(pairMap) {
    if (getNotDancerNumber(dancerList) < 2)
      return CONSTANTS.INFO_MESSAGE.NOT_ENOUGH_DANCERS

    let res
    switch (true) {
      case pairMap.has(CONSTANTS.GENDER.MAN) &&
        pairMap.has(CONSTANTS.GENDER.WOMAN):
        res = `${pairMap.get(CONSTANTS.GENDER.MAN)} - ${pairMap.get(
          CONSTANTS.GENDER.WOMAN
        )}`
        break
      case pairMap.has(CONSTANTS.GENDER.MAN):
        res = `${pairMap.get(CONSTANTS.GENDER.MAN)} | ${
          CONSTANTS.INFO_MESSAGE.CHOOSE_GIRL
        }`
        break
      case pairMap.has(CONSTANTS.GENDER.WOMAN):
        res = `${CONSTANTS.INFO_MESSAGE.CHOOSE_BOY} | ${pairMap.get(
          CONSTANTS.GENDER.WOMAN
        )}`
        break
      default:
        res = CONSTANTS.INFO_MESSAGE.CHOOSE_BOY_AND_GIRL
        break
    }
    return res
  }

  const infoMessage = getInfoMessage(pairMap)

  return (
    <div className="flex flex-col items-center gap-2.5 p-2">
      <h2>Dancing</h2>
      <div className="flex flex-wrap gap-2.5 justify-center border-1 border-gray-300 dark:border-gray-600 p-2 rounded-lg">
        <DancerGroup
          title={CONSTANTS.BOYS_GROUP_TITLE?.toUpperCase()}
          dancerList={dancerList}
          dancerGender={CONSTANTS.GENDER.MAN}
          pair={pairMap}
          onClick={chooseDancer}
          getNotDancerNumber={getNotDancerNumber}
        />
        <DancerGroup
          title={CONSTANTS.GIRLS_GROUP_TITLE?.toUpperCase()}
          dancerList={dancerList}
          dancerGender={CONSTANTS.GENDER.WOMAN}
          pair={pairMap}
          onClick={chooseDancer}
          getNotDancerNumber={getNotDancerNumber}
        />
      </div>

      <div>
        <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">
          {infoMessage}
        </span>
      </div>

      <SimpleButton
        text={CONSTANTS.BUTTON_TEXT_ADD}
        onClick={() => addPairList(pairMap)}
        disabled={pairMap.size !== 2}
      />

      {pairList.length > 0 && (
        <DanceFloor pairList={pairList} removeOnClick={removePair} />
      )}
    </div>
  )
}

export default DancingManager
