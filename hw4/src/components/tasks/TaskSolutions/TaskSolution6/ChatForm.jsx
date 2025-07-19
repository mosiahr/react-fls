import { useState } from 'react'
import { SimpleButton, SimpleInput } from '@components/CommonComponents'

function ChatForm({ onAdd }) {
  const [messageText, setMessageText] = useState('')
  console.log(messageText)

  function addMessage(e) {
    e.preventDefault()
    setMessageText('')

    if (messageText) onAdd(messageText.trim())
  }

  return (
    <form onSubmit={addMessage} className="flex gap-2">
      <SimpleInput
        labelTitle="Type your message"
        onChange={(e) => setMessageText(e.target.value)}
        inputValue={messageText}
      />
      <SimpleButton
        type="submit"
        text="Send"
        onClick={addMessage}
        disabled={!messageText}
      />
    </form>
  )
}

export default ChatForm
