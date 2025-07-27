import { v4 as uuidv4 } from 'uuid'
import User from './User'

export const GENDER = {
  MAN: 'male',
  WOMAN: 'female',
}
export const EMOJIS = {
  MAN: ['👨', '🧔‍♂️', '👨‍🦰', '👨‍🦳', '👱‍♂️', '👨‍🦱'],
  WOMAN: ['👧', '👩', '🧑‍🦰', '👩‍🦰', '👩‍🦱', '👩‍🦳', '👱‍♀️'],
}
const CONSTANTS = {
  GAME_NAME: 'Game "Guess the Number"',
  MAX_CLOSED_DIGIT_NUMBER: 3,
  MAX_BUTTON_NUMBER: 9,
  GENDER,
  EMOJIS,

  USER_LIST: [
    new User(uuidv4(), 'John', 'Doe', GENDER.MAN),
    new User(uuidv4(), 'Jane', 'Smith', GENDER.WOMAN),
    new User(uuidv4(), 'Alex', 'Johnson', GENDER.MAN),
    new User(uuidv4(), 'Emily', 'Williams', GENDER.WOMAN),
    new User(uuidv4(), 'Chris', 'Brown', GENDER.MAN),
    new User(uuidv4(), 'Olivia', 'Davis', GENDER.WOMAN),
    new User(uuidv4(), 'Michael', 'Miller', GENDER.MAN),
    new User(uuidv4(), 'Sophia', 'Wilson', GENDER.WOMAN),
    new User(uuidv4(), 'David', 'Moore', GENDER.MAN),
    new User(uuidv4(), 'Emma', 'Taylor', GENDER.WOMAN),
    new User(uuidv4(), 'Daniel', 'Anderson', GENDER.MAN),
    new User(uuidv4(), 'Mia', 'Thomas', GENDER.WOMAN),
    new User(uuidv4(), 'Matthew', 'Jackson', GENDER.MAN),
    new User(uuidv4(), 'Ava', 'White', GENDER.WOMAN),
    new User(uuidv4(), 'James', 'Harris', GENDER.MAN),
    new User(uuidv4(), 'Isabella', 'Martin', GENDER.WOMAN),
    new User(uuidv4(), 'Benjamin', 'Thompson', GENDER.MAN),
    new User(uuidv4(), 'Charlotte', 'Garcia', GENDER.WOMAN),
    new User(uuidv4(), 'William', 'Martinez', GENDER.MAN),
    new User(uuidv4(), 'Amelia', 'Robinson', GENDER.WOMAN),
  ],

  MESSAGES: {
    LOSER: 'You lost!',
    WINNER: "You're a Winner!",
    GUESS_DIGITS: 'Guess the digits',
    GAME_OVER: 'Game Over!',
  },

  PLAYER_NUMBER: 3,
}

export default CONSTANTS
