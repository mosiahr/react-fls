export default function InfoBlock({ message }) {
  return (
    <div
      className={`solution-result__info-block info-block info-block--${message.type}`}
    >
      {message.text}
    </div>
  )
}
