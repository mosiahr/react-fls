import { useState, useEffect } from 'react'
import PageHeader from './PageHeader'
import Sidebar from './Sidebar'
import PagePane from './PagePane'
import { CONSTANTS } from '@/constants/confConstants'

function LessonPage({ tasks }) {
  const [selectedTaskId, setSelectedTaskId] = useState(
    JSON.parse(localStorage.getItem('selectedTaskId')) ||
      CONSTANTS.IS_REVERSE_TASK_LIST
      ? tasks.length - 1
      : 0
  )

  useEffect(() => {
    localStorage.setItem('selectedTaskId', selectedTaskId)
  }, [selectedTaskId])

  return (
    <main className="page">
      <div className="page__container">
        <div className="page-block">
          <PageHeader
            label={CONSTANTS.LESSON_LABEL}
            title={CONSTANTS.LESSON_TITLE}
          />
          <div className="page-block__content-block content-block">
            <Sidebar
              tasks={tasks}
              selectedTaskId={selectedTaskId}
              onTaskSelect={setSelectedTaskId}
            />
            <PagePane tasks={tasks} selectedTaskId={selectedTaskId} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default LessonPage
