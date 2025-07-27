import clsx from 'clsx'
import styles from './TaskSolution7.module.css'
import PlayerInfo from './PlayerInfo'
import questionMark from '@assets/question-mark.webp'
import GameHistory from './GameHistory'
import ScreenInfo from './ScreenInfo'
import PrevPlayerInfo from './PrevPlayerInfo'
import DigitUI from './DigitUI'

function GameScreen({ currentDigit, gameState, player, isActivePhone }) {
  const showDigits = () =>
    gameState.pickedDigitArr.map((pickedDigit, i) =>
      gameState.guessedDigitArr.includes(pickedDigit) ? (
        <span key={i} className="text-4xl ">
          {pickedDigit}
        </span>
      ) : (
        <img
          key={i}
          className="w-8 h-8"
          src={questionMark}
          alt="Question Mark"
        />
      )
    )

  return (
    <div className="flex flex-col gap-1 justify-center items-center grow font-bold text-3xl">
      <GameHistory gameState={gameState} />
      <PlayerInfo player={player}>
        {player?.guessedDigitArr.map((digit, i) => (
          <DigitUI
            key={i}
            digit={digit}
            className={clsx(styles['digit'], 'bg-green-700')}
          />
        ))}
      </PlayerInfo>

      {!gameState.isOver() && (
        <PrevPlayerInfo gameState={gameState} player={player} />
      )}

      <ScreenInfo
        gameState={gameState}
        currentDigit={currentDigit}
        player={player}
        isActivePhone={isActivePhone}
      />

      {/* DIGITS */}
      <div className="flex gap-1">{showDigits()}</div>
    </div>
  )
}

export default GameScreen
