import CONSTANTS from './constants'

function ScreenInfo({ currentDigit, gameState, player, isActivePhone }) {
  function showScreenInfo() {
    let screenInfo = ''

    if (gameState.isOver()) screenInfo = 'Game Over!'
    else if (currentDigit > -1 && isActivePhone) {
      screenInfo = currentDigit
    } else screenInfo = player.infoMessage

    return screenInfo
  }

  return (
    <div className="h-full w-full text-center grow flex flex-col text-2xl justify-center items-center">
      <div>{showScreenInfo()}</div>
      {player?.isLoser && <div>{CONSTANTS.MESSAGES.LOSER}</div>}
      {player?.isWinner && <div>{CONSTANTS.MESSAGES.WINNER}</div>}
    </div>
  )
}

export default ScreenInfo
