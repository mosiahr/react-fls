import { UserList } from '../../CommonComponents'
import LoginForm from './LoginForm'

const userRegistrationList = [
  { login: 'user1', pass: 'pass123' },
  { login: 'admin', pass: 'admin2025' },
  { login: 'test', pass: 'qwerty' },
]

function TaskSolution1() {
  return (
    <>
      <LoginForm userList={userRegistrationList} />
      <UserList userList={userRegistrationList} className="mt-16" />
    </>
  )
}

export default TaskSolution1
