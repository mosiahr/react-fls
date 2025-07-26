import { getRandomNumber } from '@/utils'
import CONSTANTS from './constants'
import Player from './Player'

export function getRandomDigitArr(digitCount) {
  const res = []
  while (res.length < digitCount) {
    const digit = getRandomNumber(0, 9)
    if (!res.includes(digit)) res.push(digit)
  }

  return res
}

export function getRandomPlayers() {
  return [
    new Player(
      CONSTANTS.USER_LIST[getRandomNumber(0, CONSTANTS.USER_LIST.length - 1)]
    ),
    new Player(
      CONSTANTS.USER_LIST[getRandomNumber(0, CONSTANTS.USER_LIST.length - 1)]
    ),
    new Player(
      CONSTANTS.USER_LIST[getRandomNumber(0, CONSTANTS.USER_LIST.length - 1)]
    ),
  ]
}
