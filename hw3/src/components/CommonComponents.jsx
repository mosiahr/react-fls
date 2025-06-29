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

export function SimpleButton({ type, text, className, children, onClick }) {
  return (
    <button
      type={type}
      className={`${className} inline-flex items-end justify-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer `}
      // className={`${className} text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  )
}
