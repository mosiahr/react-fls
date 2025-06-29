import { deepFreeze } from '../../../../utils'

export const INFO_MESSAGES = {
  SUCCESS: { type: 'success', text: 'Login successful!' },
  BLANK: { type: 'blank', text: '' },
  INCORRECT_LOGIN: { type: 'error', text: 'Incorrect login or password!' },
  INCORRECT_LOGIN_IVAN: {
    type: 'error-ivan',
    text: 'Incorrect login or password!',
  },
}

deepFreeze(INFO_MESSAGES)

export const USER_REGISTRATION_LIST = [
  { login: 'user1', pass: 'pass123' },
  { login: 'admin', pass: 'admin2025' },
  { login: 'test', pass: 'qwerty' },
]
