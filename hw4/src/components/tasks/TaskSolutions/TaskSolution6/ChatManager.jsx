import { useState } from 'react'
import { SimpleHeaderH2 } from '@components/CommonComponents'
import ChatMessageList from './ChatMessageList'
import ChatForm from './ChatForm'
import Message from './Message'
import { currentUser } from './constants'

function ChatManager() {
  const [messageList, setMessageList] = useState([])

  function onAdd(newMessageText) {
    setMessageList((prevList) => [
      new Message(newMessageText, currentUser, 0, 0),
      ...prevList,
    ])
  }

  function onUpdateById(id, isLike) {
    setMessageList((prevList) => [
      ...prevList.map((msg) =>
        msg.id === id
          ? new Message(
              msg.text,
              msg.user,
              isLike ? ++msg.like : msg.like,
              !isLike ? ++msg.dislike : msg.dislike,
              msg.id
            )
          : msg
      ),
    ])
  }

  return (
    <div className="w-2/3 min-h-full overflow-clip  m-auto p-3 flex flex-col gap-2 justify-center">
      <SimpleHeaderH2>Chat</SimpleHeaderH2>
      <ChatMessageList messageList={messageList} onUpdateById={onUpdateById} />
      <ChatForm onAdd={onAdd} />
    </div>
  )
}

export default ChatManager
