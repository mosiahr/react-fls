import PageHeader from './PageHeader'
import PageContent from './PageContent'

function LessonPage({ tasks }) {
  return (
    <main className="page">
      <div className="page__container">
        <div className="page-block">
          <PageHeader
            label="Lesson #2"
            title="Styles. Conditional Rendering. Lists. Deploy"
          />
          <PageContent tasks={tasks} />
          https://react.dev/learn/conditional-rendering
        </div>
      </div>
    </main>
  )
}

export default LessonPage
