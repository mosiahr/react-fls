import clsx from 'clsx'

function PlayerInfo({ player, isReverse = false, children }) {
  return (
    <div
      className={clsx('w-full flex  items-center gap-1 text-sm', {
        'flex-row-reverse': isReverse,
      })}
    >
      <span className="w-6">{player?.user?.emoji || ''}</span>
      <span>{String(player?.user)}</span>
      {children}
    </div>
  )
}

export default PlayerInfo
