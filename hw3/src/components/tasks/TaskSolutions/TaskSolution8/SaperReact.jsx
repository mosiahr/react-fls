import { useState } from 'react'
import styles from './SaperReact.module.css'
import { SimpleButton } from '../../../CommonComponents'

// Задача 4. Однорядковий сапер. Однорядкова таблиця, до клітинок якої додано інформацію
// про наявність міни (використати атрибути). Спочатку клітинки сірі. При натисненні на
// клітинку аналізується чи є там міна і тоді колір стає червоним, якщо немає – зеленим.
// Додати можливість відкриття усіх сусідніх незамінованих клітинок при відкритті незамінованої клітинки.
function SaperReact({ gameObjField }) {
  const [gameField, setGameField] = useState(gameObjField)
  const [historyList, setHistoryList] = useState([])

  function cellClick(cellId) {
    setHistoryList((prevH) => [...prevH, JSON.parse(JSON.stringify(gameField))]) // deep copy of an object
    setGameField((prevGameField) =>
      prevGameField.map((cell) =>
        cell.id === cellId ? { ...cell, isOpen: true } : cell
      )
    )
  }
  function getStyleObj(cellObj) {
    let styleObj = null
    if (cellObj.isOpen) {
      if (cellObj.mine === 1) styleObj = { backgroundColor: 'red' }
      else styleObj = { backgroundColor: 'green' }
    } else styleObj = { backgroundColor: 'lightgray' }
    return styleObj
  }

  function goBack() {
    const lastGameField = historyList.at(-1)
    setGameField(lastGameField)
    setHistoryList(
      (prevH) => prevH.slice(0, -1)
      //   prevH.filter((el, index) => index !== historyList.length - 1)
    )
  }

  return (
    <div className="m-auto flex flex-col gap-2.5 mt-20">
      <h1 className="text-lg font-bold text-center">Saper</h1>
      <table>
        <tbody>
          <tr>
            {gameField.map((cellObj) => (
              <td
                key={cellObj.id}
                onClick={() => cellClick(cellObj.id)}
                className={styles.cell}
                style={getStyleObj(cellObj)}
              ></td>
            ))}
          </tr>
        </tbody>
      </table>
      {/* <hr /> */}
      {/* <button disabled={historyList.length === 0} onClick={goBack}>
        Back
      </button> */}
      <SimpleButton
        text="Back"
        // disabled={historyList.length === 0}
        disabled={historyList.length === 0}
        onClick={goBack}
      />
    </div>
  )
}

export default SaperReact
