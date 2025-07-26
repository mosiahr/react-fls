import { getRandomNumber } from '@/utils'
import { GENDER, EMOJIS } from './constants'

export default class User {
  static count = 0

  constructor(id = '', firstName, lastName = '', gender, emoji = '') {
    this.id = id || User.count++
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    this.emoji = emoji || this.getRandomEmojiByGender(gender)
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
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
