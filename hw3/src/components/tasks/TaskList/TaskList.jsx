import { useState, useEffect } from 'react'
import { SimpleButton } from '../../CommonComponents'
import TaskCard from '../TaskCard'
import styles from './TaskList.module.css'
import { CONSTANTS } from '../../../constants/confConstants'

function TaskList({ tasks, selectedTaskId, onTaskSelect }) {
  const [isReverse, setIsReverse] = useState(CONSTANTS.IS_REVERSE_TASK_LIST)
  const [taskList, setTaskList] = useState(tasks)

  useEffect(() => {
    let currentIsReverse
    if (!('isReverse' in localStorage)) {
      localStorage.setItem('isReverse', isReverse)
      currentIsReverse = isReverse
    } else {
      currentIsReverse = JSON.parse(localStorage.getItem('isReverse'))
      setIsReverse(currentIsReverse)
    }
    if (currentIsReverse) reverseTaskList()
  }, [])

  function reverseTaskList() {
    const nextList = [...taskList]
    nextList.reverse()
    setTaskList(nextList)
  }

  function handleOnClick() {
    reverseTaskList()
    localStorage.setItem('isReverse', !isReverse)
    setIsReverse(!isReverse)
  }

  function handleTaskCardOnClick(id) {
    onTaskSelect(id)
  }

  const taskCardList = taskList.map((task) => (
    <TaskCard
      key={task.id}
      {...task}
      isSelected={selectedTaskId === task.id}
      handleTaskCardOnClick={() => handleTaskCardOnClick(task.id)}
    />
  ))

  return (
    <div className={`${styles['left-pane__task-list']} ${styles['task-list']}`}>
      <SimpleButton
        text="Toggle Order Task List"
        onClick={() => handleOnClick()}
      />
      {taskCardList}
    </div>
  )
}

export default TaskList
