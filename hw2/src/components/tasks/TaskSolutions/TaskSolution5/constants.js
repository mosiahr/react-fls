class DataItem {
  constructor(name, title, url, description, logoSrc = '') {
    this.name = name
    this.title = title
    this.url = url
    this.description = description
    this.logoSrc = logoSrc
  }
}

const DATA_LIST = [
  new DataItem(
    'React',
    'React',
    'https://react.dev/',
    'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail , LikeButton , and Video . Then ...',
    '/src/assets/react.svg'
  ),
  new DataItem(
    'W3Schools',
    'React Tutorial',
    'https://www.w3schools.com/REACT/DEFAULT.ASP',
    'React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components.',
    '/src/assets/w3schools-logo.svg'
  ),
  new DataItem(
    'React – A JavaScript library for building user interfaces',
    'React – A JavaScript library for building user interfaces',
    'https://legacy.reactjs.org/',
    'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just ...',
    '/src/assets/react-1.svg'
  ),
]

export default DATA_LIST
