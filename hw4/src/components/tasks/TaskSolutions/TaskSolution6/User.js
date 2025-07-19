export default class User {
  static count = 0

  constructor(name, role = '', id = '') {
    this.name = name
    this.role = role
    this.id = id || User.count++
  }

  [Symbol.toPrimitive](hint) {
    let res
    switch (hint) {
      case 'string':
        res = this.name
        break

      default:
        res = this.name
        break
    }
    return res
  }
}
