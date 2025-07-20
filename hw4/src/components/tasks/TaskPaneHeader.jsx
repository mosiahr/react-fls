import { useState } from 'react'
import { NewLineText } from '@components/CommonComponents.jsx'
import styles from './TaskPane/TaskPane.module.css'

function TaskPaneHeader({ id, title, description }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles['task-pane__header']}>
      <h2
        className={styles['task-pane__title']}
        onClick={() => setIsOpen((v) => !v)}
      >
        <span>{title || `Task #${id + 1}`}</span>
        <span>
          {isOpen ? (
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
              />
            </svg>
          )}
        </span>
      </h2>
      {isOpen && (
        <div
        // className={`${styles['task-pane__description']} ${styles['task-pane__description--open']}`}
        >
          <NewLineText text={description} />
        </div>
      )}
    </div>
  )
}

export default TaskPaneHeader
