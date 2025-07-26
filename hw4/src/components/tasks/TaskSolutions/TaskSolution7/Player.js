export default class Player {
  constructor(user) {
    this.user = user
    this.guessedDigitArr = []
    this.historyDigitArr = []
    this.infoMessage = ''
    this.isActive = false
    this.isLoser = false
    this.isWinner = false
    this.createInfoMessage()
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

  createInfoMessage() {
    if (this.historyDigitArr.length === 0) this.infoMessage = 'Guess the digits'
    // else if (this.isLoser) this.infoMessage = "You're Loser!"
    else this.infoMessage = this.getLastDigitFromHistory()

    // if (this.isActive) this.infoMessage = this.getLastDigitFromHistory()
  }

  reset() {
    this.guessedDigitArr = []
  }
}
