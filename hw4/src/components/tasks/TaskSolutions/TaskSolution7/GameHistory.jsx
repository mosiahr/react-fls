import historyIco from '@assets/history-ico.webp'
import DigitUI from './DigitUI'

function GameHistory({ gameState }) {
  function getHistory() {
    return gameState.historyDigitArr.map((digit, i) => (
      <DigitUI key={i} digit={digit} isGuessed={gameState.isGuess(digit)} />
    ))
  }
  return (
    <div className="w-full flex items-start gap-1">
      <img className="w-6" src={historyIco} />
      <div className="flex flex-wrap gap-1">{getHistory()}</div>
    </div>
  )
}

export default GameHistory
