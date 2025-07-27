import { getRandomDigitArr } from './utils'
import CONSTANTS from './constants'

export default class Game {
  static GAME_NAME = CONSTANTS.GAME_NAME
  static MAX_CLOSED_DIGIT_NUMBER = CONSTANTS.MAX_CLOSED_DIGIT_NUMBER
  static #pickedDigitArr = []
  static #guessedDigitArr = []
  static #historyDigitArr = []

  static get guessedDigitArr() {
    return this.#guessedDigitArr
  }

  static get historyDigitArr() {
    return this.#historyDigitArr
  }

  static reset() {
    this.#pickedDigitArr.length = 0
    this.#guessedDigitArr.length = 0
    this.#historyDigitArr.length = 0
  }

  #currentGuessDigit

  constructor({
    currentGuessDigit = -1,
    players = [],
    currentPlayerIndex = 0,
  }) {
    this.players = players
    this.currentPlayerIndex = currentPlayerIndex
    this.currentGuessDigit = currentGuessDigit

    if (!Game.#pickedDigitArr.length)
      Game.#pickedDigitArr = getRandomDigitArr(Game.MAX_CLOSED_DIGIT_NUMBER)
  }

  get pickedDigitArr() {
    return Game.#pickedDigitArr
  }

  get guessedDigitArr() {
    return Game.#guessedDigitArr
  }

  get historyDigitArr() {
    return Game.#historyDigitArr
  }

  get currentGuessDigit() {
    return this.#currentGuessDigit
  }
  set currentGuessDigit(value) {
    if (!Number.isFinite(value)) throw new Error('The value must be a Number!')
    this.#currentGuessDigit = value
  }

  guess() {
    const digit = this.currentGuessDigit
    if (!Game.#historyDigitArr.includes(digit)) {
      const currentPlayer = this.getCurrentPlayer()

      if (this.isGuess(digit)) {
        this.guessedDigitArr.push(digit)
        currentPlayer.addGuessed(digit)
      }

      if (digit > -1) {
        currentPlayer.addDigitToHistory(digit)
        this.historyDigitArr.push(digit)
      }

      this.setActiveCurrentPlayer(currentPlayer)
      currentPlayer.isCorrectLastMove = currentPlayer.isCorrect()

      // Loser or Winner
      if (this.isOver()) {
        this.players.forEach((player) =>
          player !== currentPlayer
            ? (player.isWinner = true)
            : (player.isLoser = true)
        )
      }
    }
  }

  isGuess(value) {
    return this.pickedDigitArr.includes(value)
  }

  isOver() {
    return this.guessedDigitArr.length === Game.MAX_CLOSED_DIGIT_NUMBER
  }

  isStarted() {
    return this.historyDigitArr.length > 0
  }

  reset() {
    Game.reset()
    this.players.forEach((player) => player.reset())
  }

  nextPlayer() {
    this.currentPlayerIndex =
      (this.currentPlayerIndex + 1) % this.players.length
  }

  setActiveCurrentPlayer(currentPlayer) {
    this.players.map((player) => (player.isActive = false))
    currentPlayer.isActive = !currentPlayer.isActive
  }

  getCurrentPlayer() {
    try {
      return this.players[this.currentPlayerIndex]
    } catch (error) {
      console.log(error)
    }
  }

  getPrevPlayer() {
    try {
      return (
        this.historyDigitArr.length > 0 &&
        this.players.at((this.currentPlayerIndex - 1) % this.players.length)
      )
    } catch (error) {
      console.log(error)
    }
  }

  getLastMove() {
    return Game.#historyDigitArr.at(-1)
  }
}
