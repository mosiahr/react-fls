import { SimpleButton } from '@/components/CommonComponents'
import Game from './Game'
import { getRandomPlayers } from './utils'

function ButtonGroup({
  currentDigit,
  setCurrentDigit,
  gameState,
  setGameState,
  maxNumberButton,
  isActivePhone,
}) {
  function onClickCheck() {
    setGameState((prevGame) => {
      const newGame = new Game({
        currentGuessDigit: currentDigit,
        players: prevGame.players,
        currentPlayerIndex: prevGame.currentPlayerIndex,
      })

      newGame.guess()
      if (currentDigit > -1) newGame.nextPlayer()
      setCurrentDigit(-1)
      return newGame
    })
  }

  function onClickNewGame() {
    setCurrentDigit(-1)
    setGameState((prevGame) => {
      console.log('PREV: ', prevGame)
      prevGame.reset()
      const players = getRandomPlayers()
      console.log('getRandomPlayers(): ', players)
      return new Game({ players })
    })
  }

  const buttonGroup = []
  for (let i = 0; i < maxNumberButton + 1; i++) {
    buttonGroup.push(
      <SimpleButton
        key={i}
        className="w-19"
        padding="py-1"
        text={i}
        onClick={(e) => setCurrentDigit(parseInt(e.target.innerText))}
        disabled={
          !isActivePhone ||
          gameState.isOver() ||
          Game.historyDigitArr.includes(i)
        }
      />
    )
  }

  // Clear Button
  buttonGroup.push(
    <SimpleButton
      key={buttonGroup.length + 1}
      className="flex-1/2"
      padding="py-1"
      text="Clear"
      onClick={() => setCurrentDigit(-1)}
      disabled={!isActivePhone || gameState.isOver()}
    />
  )

  // Check Button
  buttonGroup.push(
    <SimpleButton
      key={buttonGroup.length + 1}
      className="basis-full"
      padding="py-1"
      text="Check"
      onClick={() => onClickCheck()}
      disabled={
        !isActivePhone ||
        gameState.isOver() ||
        (Number.isFinite(currentDigit) &&
          Game.historyDigitArr.includes(currentDigit))
      }
    />
  )

  // New Game Button
  buttonGroup.push(
    <SimpleButton
      key={buttonGroup.length + 1}
      className="basis-full"
      padding="py-0.5"
      text="New Game"
      onClick={() => onClickNewGame()}
    />
  )

  return <div className="flex flex-wrap gap-x-0.5 gap-y-1 ">{buttonGroup}</div>
}

export default ButtonGroup
