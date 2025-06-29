export class DataItem {
  constructor(name, title, url, description, logoSrc = '') {
    this.name = name
    this.title = title
    this.url = url
    this.description = description
    this.logoSrc = logoSrc
  }
}