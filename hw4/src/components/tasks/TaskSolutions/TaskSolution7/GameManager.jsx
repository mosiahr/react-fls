// import { getRandomDigitArr } from './utils'
// import { GAME_NAME, NUMBER_COUNT } from './constants'
import { v4 as uuidv4 } from 'uuid'
import Player from './Player'
import { getRandomNumber } from '@/utils'
import Phone from './Phone'
import Game from './Game'
import { useState } from 'react'
import User from './User'
import CONSTANTS from './constants'
import { getRandomPlayers } from './utils'

// const PLAYERS = [
//   new Player(
//     CONSTANTS.USER_LIST[getRandomNumber(0, CONSTANTS.USER_LIST.length - 1)]
//   ),
//   new Player(
//     CONSTANTS.USER_LIST[getRandomNumber(0, CONSTANTS.USER_LIST.length - 1)]
//   ),
//   new Player(
//     CONSTANTS.USER_LIST[getRandomNumber(0, CONSTANTS.USER_LIST.length - 1)]
//   ),
// ]

const PLAYERS = getRandomPlayers()

function GameManager() {
  const [gameState, setGameState] = useState(new Game({ players: PLAYERS }))
  const [currentDigit, setCurrentDigit] = useState(-1)

  // console.log('gameState', gameState)
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
