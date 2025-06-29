import { DataItem } from './utils'
import reactLogo from '../../../../assets/react.svg'
import reactLogo1 from '../../../../assets/react-1.svg'
import w3schoolsLogo from '../../../../assets/w3schools-logo.svg'

const DATA_LIST = [
  new DataItem(
    'React',
    'React',
    'https://react.dev/',
    'React lets you build user interfaces out of individual pieces called components. Create your own React components like Thumbnail , LikeButton , and Video . Then ...',
    reactLogo
  ),
  new DataItem(
    'W3Schools',
    'React Tutorial',
    'https://www.w3schools.com/REACT/DEFAULT.ASP',
    'React is a JavaScript library for building user interfaces. React is used to build single-page applications. React allows us to create reusable UI components.',
    w3schoolsLogo
  ),
  new DataItem(
    'React – A JavaScript library for building user interfaces',
    'React – A JavaScript library for building user interfaces',
    'https://legacy.reactjs.org/',
    'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just ...',
    reactLogo1
  ),
]

export default DATA_LIST
