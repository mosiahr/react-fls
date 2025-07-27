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
  const res = []

  while (res.length < CONSTANTS.PLAYER_NUMBER) {
    const newPlayer = new Player(
      CONSTANTS.USER_LIST[getRandomNumber(0, CONSTANTS.USER_LIST.length - 1)]
    )

    if (res.every((player) => player?.user?.id !== newPlayer?.user?.id))
      res.push(newPlayer)
  }

  return res
}
