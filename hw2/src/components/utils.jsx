export function NewLineText({ text }) {
  return text.split('\n').map((str, i) => <p key={i}>{str}</p>)
}

export const truncateStringFullWords = (str, max, suffix = '...') => {
  return str.length < max
    ? str
    : `${str.substr(
        0,
        str.substr(0, max - suffix.length).lastIndexOf(' ')
      )}${suffix}`
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
