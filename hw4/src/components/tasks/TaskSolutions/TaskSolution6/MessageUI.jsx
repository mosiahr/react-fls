import clsx from 'clsx'
import { SimpleButton } from '../../../CommonComponents'

function MessageUI({ id, text, like, dislike, user, onUpdateById }) {
  // console.log(id, text, like, dislike, user, onUpdateById)

  return (
    <article
      className={clsx(
        { 'self-end': user.role === 'user' },
        'max-w-1/2 bg-gray-200 dark:bg-gray-600 rounded-2xl  p-2'
      )}
    >
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 items-center">
          <div className="flex font-bold justify-center items-center size-10 text-lg pt-1 rounded-full bg-amber-500 dark:bg-amber-700">
            {user.name[0]}
          </div>
          <h3>{'' + user}</h3>
        </div>
        <div className="">{text}</div>
        <div className="flex gap-2">
          <SimpleButton
            text={`👍 ${Number(like)}`}
            onClick={() => onUpdateById(id, true)}
          />
          <SimpleButton
            text={`👎 ${Number(dislike)}`}
            onClick={() => onUpdateById(id, false)}
          />
        </div>
      </div>
    </article>
  )
}

export default MessageUI
