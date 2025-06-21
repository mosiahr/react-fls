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
