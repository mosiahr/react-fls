import { UserList } from '../../../CommonComponents'
import LoginForm from './LoginForm'
import { USER_REGISTRATION_LIST } from './constants'

function TaskSolution1() {
  return (
    <div className="p-5">
      <LoginForm userList={USER_REGISTRATION_LIST} />
      <UserList userList={USER_REGISTRATION_LIST} className="mt-16" />
    </div>
  )
}

export default TaskSolution1
