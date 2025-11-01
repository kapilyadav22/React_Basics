import React from 'react'
import LiveStream from './LiveStream'
import ChatWindow from './ChatWindow'

const LiveChat = () => {
  return (
    <div 
    style={{
        display:"flex"
        
    }}>
      <LiveStream/>
      <ChatWindow/>
    </div>
  )
}

export default LiveChat
