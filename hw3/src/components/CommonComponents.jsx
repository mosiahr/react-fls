export function NewLineText({ text }) {
  return text.split('\n').map((str, i) => <p key={i}>{str}</p>)
}

export function UserList({ userList, className }) {
  const listItems = userList.map((user, i) => (
    <li key={i}>
      Login: {user.login} / Password: {user.pass}
    </li>
  ))
  return (
    <div className={className}>
      <h2>User Registration List: </h2>
      <ul>{listItems}</ul>
    </div>
  )
}

export function InfoBlock({ message }) {
  return (
    <div
      className={`solution-result__info-block info-block info-block--${message.type}`}
    >
      {message.text}
    </div>
  )
}

export function ArrowSvg() {
  return (
    <svg
      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  )
}

export function SimpleButton({
  type,
  text,
  className = '',
  children,
  onClick,
  disabled,
}) {
  let flex = `inline-flex items-end justify-center`
  let padding = `px-3 py-2`
  let textFont = `text-sm font-medium text-center text-white`
  let border = `rounded-lg`
  let bg = `bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`
  let focus = `focus:ring-4 focus:outline-none focus:ring-blue-300`
  let cursor = `cursor-pointer`

  if (disabled) {
    bg = ` bg-blue-400 dark:bg-blue-500`
    cursor = `cursor-not-allowed`
  }

  const fullClassName = `${className} ${flex} ${padding} ${textFont} ${border} ${bg} ${focus} ${cursor}`

  return (
    <button
      type={type}
      className={fullClassName}
      // className={`${className} text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      {children}
    </button>
  )
}

export function SimpleInput({
  inputValue,
  labelTitle = 'Simple Input',
  inputType = 'text',
  inputPlaceholder = ' ',
  inputId = 'simple',
  labelHtmlFor = 'simple',
  inputAutoComplete = 'off',
  onChange,
  onClick,
  ref,
}) {
  return (
    <div className="relative flex-3/4">
      <input
        onChange={onChange}
        onClick={onClick}
        value={inputValue}
        type={inputType}
        id={inputId}
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder={inputPlaceholder}
        autoComplete={inputAutoComplete}
        ref={ref}
      />
      <label
        htmlFor={labelHtmlFor}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {labelTitle}
      </label>
    </div>
  )
}
