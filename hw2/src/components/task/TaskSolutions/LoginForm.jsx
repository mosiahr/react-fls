import { useState, useRef } from 'react'
import { normalizeString } from '../../../utils'
import { InfoBlock } from '../../CommonComponents'

const INFO_MESSAGES = {
  SUCCESS: { type: 'success', text: 'Login successful!' },
  BLANK: { type: 'blank', text: '' },
  INCORRECT_LOGIN: { type: 'error', text: 'Incorrect login or password!' },
  INCORRECT_LOGIN_IVAN: {
    type: 'error-ivan',
    text: 'Incorrect login or password!',
  },
}

export default function LoginForm({ userList }) {
  const [infoMessage, setInfoMessage] = useState(INFO_MESSAGES.BLANK)

  const loginRef = useRef()
  const passRef = useRef()

  function resetInputValue() {
    loginRef.current.value = ''
    passRef.current.value = ''
  }

  function handleSubmit(e) {
    e.preventDefault()
    const currentLogin = normalizeString(loginRef.current?.value)
    const currentPass = normalizeString(passRef.current?.value)

    if (currentLogin && currentPass) {
      if (
        userList.find(
          (user) => user.login === currentLogin && user.pass === currentPass
        )
      ) {
        setInfoMessage(INFO_MESSAGES.SUCCESS)
      } else {
        if (loginRef.current?.value.trim() === 'Іван')
          setInfoMessage(INFO_MESSAGES.INCORRECT_LOGIN_IVAN)
        else setInfoMessage(INFO_MESSAGES.INCORRECT_LOGIN)
      }
    } else setInfoMessage(INFO_MESSAGES.INCORRECT_LOGIN)

    resetInputValue()
  }

  function handleFocus() {
    setInfoMessage(INFO_MESSAGES.BLANK)
  }

  return (
    <form className="login-form rounded-2xl" onSubmit={handleSubmit}>
      <div className="solution-result__title">Sign In</div>
      <div className="relative">
        <input
          ref={loginRef}
          onFocus={handleFocus}
          type="text"
          id="login-input"
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          autoComplete="off"
        />
        <label
          htmlFor="login-input"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Login
        </label>
      </div>
      <div className="relative">
        <input
          ref={passRef}
          onFocus={handleFocus}
          type="password"
          id="password-input"
          className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="password-input"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Password
        </label>
      </div>
      <button
        type="submit"
        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Sign in
      </button>
      <InfoBlock message={infoMessage} />
      {infoMessage.type === 'success' && (
        <img className="w-30" src="/src/assets/smile.png" alt="Smile" />
      )}
    </form>
  )
}
