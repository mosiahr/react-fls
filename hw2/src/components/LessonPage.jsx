import PageHeader from './PageHeader'
import PageContent from './PageContent'
import SolutionResult from './SolutionResult'
import { tasks } from '../data'

function LessonPage() {
  return (
    <main className="page">
      <div className="page__container">
        <div className="page-block">
          <PageHeader
            label="Lesson #2"
            title="Styles. Conditional Rendering. Lists. Deploy"
          />
          <PageContent />
          {/* <SolutionResult /> */}
          https://react.dev/learn/conditional-rendering
        </div>
      </div>
    </main>
  )
}

export default LessonPage
