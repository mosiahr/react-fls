import { useState } from 'react'
import PageHeader from './PageHeader'
import SideBar from './Sidebar/Sidebar'
import PagePane from './PagePane/PagePane'
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
            <SideBar tasks={tasks} onTaskSelect={setSelectedTaskId} />
            <PagePane tasks={tasks} selectedTaskId={selectedTaskId} />
          </div>
          https://react.dev/learn/conditional-rendering
        </div>
      </div>
    </main>
  )
}

export default LessonPage
