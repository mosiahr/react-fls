import clsx from 'clsx'
import styles from './TaskSolution7.module.css'

function DigitUI({ digit, isGuessed }) {
  return (
    <span
      className={clsx(
        styles['digit-history'],
        {
          'bg-green-700': isGuessed,
        },
        'bg-amber-950'
      )}
    >
      {digit}
    </span>
  )
}

export default DigitUI
