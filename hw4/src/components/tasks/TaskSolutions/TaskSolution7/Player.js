export default class Player {
  constructor(user) {
    this.user = user
    this.guessedDigitArr = []
    this.historyDigitArr = []
    this.infoMessage = ''
    this.isActive = false
    this.isLoser = false
    this.isWinner = false
    this.isCorrectLastMove = this.isCorrect()
  }

  addGuessed(digit) {
    this.guessedDigitArr.push(digit)
  }

  addDigitToHistory(digit) {
    this.historyDigitArr.push(digit)
  }

  getLastDigitFromHistory() {
    return this.historyDigitArr.at(-1)
  }

  isCorrect() {
    return this.historyDigitArr.at(-1) === this.guessedDigitArr.at(-1)
  }

  reset() {
    this.guessedDigitArr = []
  }
}
