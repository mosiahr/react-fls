import { GENDER } from './constants'

export default class Pair {
  constructor(id, pairMap) {
    this.id = id
    this.man = pairMap.get(GENDER.MAN)
    this.woman = pairMap.get(GENDER.WOMAN)
  }

  [Symbol.toPrimitive](hint) {
    let res
    switch (hint) {
      case 'string':
        res = `${this.man} - ${this.woman}`
        break
      default:
        res = `${this.man} - ${this.woman}`
        break
    }
    return res
  }
}
