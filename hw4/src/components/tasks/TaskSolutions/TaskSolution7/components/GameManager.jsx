import { useState } from 'react'
import Phone from './Phone'
import Game from '../Game'
import { getRandomPlayers } from '../utils'

const PLAYERS = getRandomPlayers()

function GameManager() {
  const [gameState, setGameState] = useState(new Game({ players: PLAYERS }))
  const [currentDigit, setCurrentDigit] = useState(-1)

  return (
    <div className="w-full flex flex-col gap-2">
      <h2 className="m-auto p-1 border rounded-xl">{Game.GAME_NAME}</h2>
      <div className="w-full flex flex-wrap gap-2 justify-around">
        {gameState.players.map((player, i) => (
          <Phone
            key={i}
            gameState={gameState}
            setGameState={setGameState}
            currentDigit={currentDigit}
            setCurrentDigit={setCurrentDigit}
            player={player}
            playerIndex={i}
          />
        ))}
      </div>
    </div>
  )
}

export default GameManager
