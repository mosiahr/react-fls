import { v4 as uuidv4 } from 'uuid'
import Human from './Human'

export const GENDER = {
  MAN: 'male',
  WOMAN: 'female',
}

export const EMOJIS = {
  MAN: ['👦', '👨', '🧔‍♂️', '👨‍🦰', '👨‍🦳', '👴', '👱‍♂️', '👨‍🦱', '👨‍🦲'],
  WOMAN: ['👧', '👩', '🧑‍🦰', '👩‍🦰', '👩‍🦱', '👩‍🦳', '👱‍♀️', '👵'],
}

const CONSTANTS = {
  GENDER,
  HUMAN_LIST: [
    new Human(uuidv4(), 'John', 'Doe', GENDER.MAN),
    new Human(uuidv4(), 'Jane', 'Smith', GENDER.WOMAN),
    new Human(uuidv4(), 'Alex', 'Johnson', GENDER.MAN),
    new Human(uuidv4(), 'Emily', 'Williams', GENDER.WOMAN),
    new Human(uuidv4(), 'Chris', 'Brown', GENDER.MAN),
    new Human(uuidv4(), 'Olivia', 'Davis', GENDER.WOMAN),
    new Human(uuidv4(), 'Michael', 'Miller', GENDER.MAN),
    new Human(uuidv4(), 'Sophia', 'Wilson', GENDER.WOMAN),
    new Human(uuidv4(), 'David', 'Moore', GENDER.MAN),
    new Human(uuidv4(), 'Emma', 'Taylor', GENDER.WOMAN),
    new Human(uuidv4(), 'Daniel', 'Anderson', GENDER.MAN),
    new Human(uuidv4(), 'Mia', 'Thomas', GENDER.WOMAN),
    new Human(uuidv4(), 'Matthew', 'Jackson', GENDER.MAN),
    new Human(uuidv4(), 'Ava', 'White', GENDER.WOMAN),
    new Human(uuidv4(), 'James', 'Harris', GENDER.MAN),
    new Human(uuidv4(), 'Isabella', 'Martin', GENDER.WOMAN),
    new Human(uuidv4(), 'Benjamin', 'Thompson', GENDER.MAN),
    new Human(uuidv4(), 'Charlotte', 'Garcia', GENDER.WOMAN),
    new Human(uuidv4(), 'William', 'Martinez', GENDER.MAN),
    // new Human(uuidv4(), 'Amelia', 'Robinson', GENDER.WOMAN),
  ],
  BUTTON_TEXT_ADD: 'Add',
  BOYS_GROUP_TITLE: 'Boys',
  GIRLS_GROUP_TITLE: 'Girls',
  DANCE_FLOOR_TITLE: 'Dance Floor',
  INFO_MESSAGE: {
    BLANK: '',
    CHOOSE_BOY_AND_GIRL: 'Choose a boy and a girl',
    CHOOSE_BOY: 'Choose a boy',
    CHOOSE_GIRL: 'Choose a girl',
  },
  EMOJIS: {
    MAN: ['👦', '👨', '🧔‍♂️', '👨‍🦰', '👨‍🦳', '👴', '👱‍♂️', '👨‍🦱', '👨‍🦲'],
    WOMAN: ['👧', '👩', '🧑‍🦰', '👩‍🦰', '👩‍🦱', '👩‍🦳', '👱‍♀️', '👵'],
  },
}

export default CONSTANTS
