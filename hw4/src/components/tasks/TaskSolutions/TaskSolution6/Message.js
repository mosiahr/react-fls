import { v4 as uuidv4 } from 'uuid'

export default class Message {
  constructor(text, user, like, dislike, id = '') {
    this.text = text
    this.user = user
    this.like = like
    this.dislike = dislike
    this.id = id || uuidv4()
  }

  [Symbol.toPrimitive](hint) {
    let res
    switch (hint) {
      case 'string':
        res = this.text
        break

      default:
        res = this.text
        break
    }
    return res
  }
}
