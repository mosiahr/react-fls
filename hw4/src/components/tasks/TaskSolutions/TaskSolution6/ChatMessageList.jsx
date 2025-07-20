import MessageUI from './MessageUI'

function ChatMessageList({ messageList, onUpdateById }) {
  return (
    <div className="grow flex flex-col-reverse gap-2 h-0 p-2 border-1 rounded-lg overflow-y-auto">
      {messageList.map((msg) => (
        <MessageUI key={msg.id} {...msg} onUpdateById={onUpdateById} />
      ))}
    </div>
  )
}

export default ChatMessageList
