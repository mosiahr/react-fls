import clsx from 'clsx'
import styles from './TaskSolution7.module.css'

function DigitUI({ digit, isGuessed, className }) {
  return (
    <span
      className={
        className ||
        clsx(
          styles.digit,
          {
            'bg-green-700': isGuessed,
          },
          'bg-amber-950'
        )
      }
    >
      {digit}
    </span>
  )
}

export default DigitUI
