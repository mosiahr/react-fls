import clsx from 'clsx'
import styles from './TaskSolution7.module.css'
import CONSTANTS from '../constants'

import ButtonGroup from './ButtonGroup'
import GameScreen from './GameScreen'

function Phone({
  gameState,
  setGameState,
  currentDigit,
  setCurrentDigit,
  player,
  playerIndex,
}) {
  const isActivePhone = playerIndex === gameState.currentPlayerIndex

  return (
    <figure className={styles.iphone}>
      <div className={styles.sideButtons}>
        <div></div>
      </div>

      <div className={styles.phone}>
        <div className={styles.top}>
          <div>
            <span className={styles.camera}></span>
            <span className={styles.speaker}></span>
          </div>
        </div>

        <div className={clsx(styles.screen, 'bg-amber-600', '--text-color')}>
          <div className="flex flex-col gap-2 z-20 h-full overflow-y-auto">
            <GameScreen
              currentDigit={currentDigit}
              gameState={gameState}
              player={player}
              isActivePhone={isActivePhone}
            />
            <ButtonGroup
              gameState={gameState}
              setGameState={setGameState}
              currentDigit={currentDigit}
              setCurrentDigit={setCurrentDigit}
              maxNumberButton={CONSTANTS.MAX_BUTTON_NUMBER}
              isActivePhone={isActivePhone}
            />
          </div>
        </div>

        <div className={styles.bottom}>
          <div></div>
        </div>
      </div>
    </figure>
  )
}

export default Phone
