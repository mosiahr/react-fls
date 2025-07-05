import { getRandomNumber } from '@/utils'
import { EMOJIS, GENDER } from './constants'

export default class Human {
  constructor(id, firstName, lastName, gender, emoji, isDancing = false) {
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    this.emoji = emoji || this.getRandomEmojiByGender(gender)
    this.isDancing = isDancing
  }

  get fullName() {
    return `${this.emoji} ${this.firstName} ${this.lastName}`
  }

  getRandomEmoji(emojiList) {
    return emojiList[getRandomNumber(0, emojiList.length - 1)]
  }

  getRandomEmojiByGender(gender) {
    return gender === GENDER.MAN
      ? this.getRandomEmoji(EMOJIS.MAN)
      : this.getRandomEmoji(EMOJIS.WOMAN)
  }

  [Symbol.toPrimitive](hint) {
    let res
    switch (hint) {
      case 'string':
        res = this.fullName
        break

      default:
        res = this.fullName
        break
    }
    return res
  }
}
