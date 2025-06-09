// Компонент App — це функція, яка повертає React-елемент.
const App = () => {
  return React.createElement(
    'div', // Тип HTML-елемента: <div>
    null, // Атрибути (пусто, тобто без класів, стилів тощо)
    React.createElement('h1', null, 'Привіт, React!'), // Вкладений заголовок <h1>
    React.createElement('p', null, 'Це приклад без JSX.'), // Вкладений абзац <p>
    React.createElement('h3', { style: { color: 'red' } }, 'Ok!')
  )
}

// Отримуємо DOM-елемент з id="root"
const root = ReactDOM.createRoot(document.getElementById('root'))

// Рендеримо компонент App у елемент root
root.render(React.createElement(App))
