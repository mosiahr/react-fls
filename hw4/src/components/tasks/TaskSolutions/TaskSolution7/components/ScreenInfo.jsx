import clsx from 'clsx'
import CONSTANTS from '../constants'
import styles from './TaskSolution7.module.css'
import correctIco from '@assets/correct.webp'
import incorrectIco from '@assets/incorrect.webp'
import winnerIco from '@assets/win.webp'
import loserIco from '@assets/lose.webp'
import DigitUI from './DigitUI'

function ScreenInfo({ currentDigit, gameState, player, isActivePhone }) {
  function showScreenInfo() {
    let screenInfo = ''

    if (gameState.isOver()) screenInfo = CONSTANTS.MESSAGES.GAME_OVER
    else if (currentDigit > -1 && isActivePhone) {
      screenInfo = (
        <DigitUI
          digit={currentDigit}
          className={clsx(styles['current-digit'])}
        />
      )
    } else
      screenInfo =
        player.historyDigitArr.length > 0 ? (
          <img
            className="w-14"
            src={player.isCorrectLastMove ? correctIco : incorrectIco}
          />
        ) : (
          CONSTANTS.MESSAGES.GUESS_DIGITS
        )

    return screenInfo
  }

  return (
    <div className=" w-full text-center grow flex flex-col text-2xl justify-center items-center">
      <div>{showScreenInfo()}</div>
      {/* {player?.isLoser && <div>{CONSTANTS.MESSAGES.LOSER}</div>} */}
      {/* {player?.isWinner && <div>{CONSTANTS.MESSAGES.WINNER}</div>} */}
      {player?.isLoser && <img className="w-12" src={loserIco} />}
      {player?.isWinner && <img className="w-12" src={winnerIco} />}
    </div>
  )
}

export default ScreenInfo
