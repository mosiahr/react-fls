import { useState } from 'react'
import PageHeader from './PageHeader'
import LeftPane from './LeftPane/LeftPane'
import RightPane from './RightPane/RightPane'
import { CONSTANTS } from '../constants/confConstants'

function LessonPage({ tasks }) {
  const [selectedTaskId, setSelectedTaskId] = useState(0)

  return (
    <main className="page">
      <div className="page__container">
        <div className="page-block">
          <PageHeader
            label={CONSTANTS.LESSON_LABEL}
            title={CONSTANTS.LESSON_TITLE}
          />
          <div className="page-block__content-block content-block">
            <LeftPane tasks={tasks} onTaskSelect={setSelectedTaskId} />
            <RightPane tasks={tasks} selectedTaskId={selectedTaskId} />
          </div>
          https://react.dev/learn/conditional-rendering
        </div>
      </div>
    </main>
  )
}

export default LessonPage
