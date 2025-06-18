import { useState } from 'react'
import LeftPane from './LeftPane/LeftPane'
import RightPane from './RightPane/RightPane'

function PageContent({ tasks }) {
  const [selectedTaskId, setSelectedTaskId] = useState(0)

  return (
    <div className="page-block__content-block content-block">
      <LeftPane tasks={tasks} onTaskSelect={setSelectedTaskId} />
      <RightPane tasks={tasks} selectedTaskId={selectedTaskId} />
    </div>
  )
}

export default PageContent
