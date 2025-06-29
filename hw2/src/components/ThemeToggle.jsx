import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  // При монтуванні читаємо тему з localStorage
  useEffect(() => {
    let currentTheme
    if (!('theme' in localStorage)) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        currentTheme = 'dark'
    } else currentTheme = localStorage.getItem('theme')

    if (currentTheme === 'dark') {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  // При зміні isDark додаємо/видаляємо клас dark і зберігаємо у localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      //   document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      //   document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <label
      onChange={() => setIsDark(!isDark)}
      className="inline-flex items-center cursor-pointer"
    >
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
      {/* <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Toggle me
        </span> */}
    </label>

    // {/* <button
    //   onClick={() => setIsDark(!isDark)}
    //   className="btn btn-secondary"
    //   aria-label="Перемикач теми"
    // >
    //   {isDark ? '☀️ Світла тема' : '🌙 Темна тема'}
    // </button> */}
  )
}
