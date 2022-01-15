import ChatBox from 'react-custom-chat'
import { useState } from 'react'

const App = () => {
  const [messageList, setMessageList] = useState([])

  const handleSendMessage = newMessage => {
    setMessageList([
      ...messageList,
      {text: newMessage, person: 'primary'}
    ])
  }

  return (
    <div>
      <ChatBox
        settings={{
          position: 'right',
          navColor: 'green',
          navText: 'Jane Doe',
        }}
        messageList={messageList}
        onSendMessage={handleSendMessage}
      />
    </div>
  )
}
