import PlayerInfo from './PlayerInfo'
import DigitUI from './DigitUI'

function PrevPlayerInfo({ gameState, player }) {
  const prevPlayer = gameState.getPrevPlayer()

  return (
    <>
      {prevPlayer && player?.user?.id !== prevPlayer?.user?.id && (
        <div className="self-end">
          <PlayerInfo player={prevPlayer} isReverse={true}>
            <DigitUI
              digit={prevPlayer.getLastDigitFromHistory()}
              isGuessed={gameState.isGuess(
                prevPlayer.getLastDigitFromHistory()
              )}
            />
          </PlayerInfo>
        </div>
      )}
    </>
  )
}

export default PrevPlayerInfo
