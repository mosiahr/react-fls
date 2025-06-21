import { tasks } from './data.json'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import LessonPage from './components/LessonPage'
import { CONSTANTS } from './constants/confConstants'

function App() {
  return (
    <div className="wrapper">
      <AppHeader
        title={CONSTANTS.MAIN_HEADER_TITLE}
        logoUrl={CONSTANTS.LOGO_SRC}
      />
      <LessonPage tasks={tasks} />
      <AppFooter text={CONSTANTS.FOOTER_INFO} />
    </div>
  )
}

export default App
