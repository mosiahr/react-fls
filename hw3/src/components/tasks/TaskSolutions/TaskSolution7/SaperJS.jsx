import styles from './SaperJS.module.css'

// Задача 4. Однорядковий сапер. Однорядкова таблиця, до клітинок якої додано інформацію
// про наявність міни (використати атрибути). Спочатку клітинки сірі. При натисненні на
// клітинку аналізується чи є там міна і тоді колір стає червоним, якщо немає – зеленим.
// Додати можливість відкриття усіх сусідніх незамінованих клітинок при відкритті незамінованої клітинки.
function SaperJS({ gameField }) {
  function onClick(e) {
    const td = e.target
    if (td.tagName === 'TD') {
      if (td.getAttribute('mine') === '1') td.style.backgroundColor = 'red'
      else td.style.backgroundColor = 'green'
    }
  }
  return (
    <div className="m-auto">
      <h1 className="text-lg font-bold text-center">Saper</h1>
      <table onClick={onClick}>
        <tbody>
          <tr>
            {gameField.map((el, ind) => (
              <td key={ind} mine={el} className={styles.cell}></td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SaperJS
