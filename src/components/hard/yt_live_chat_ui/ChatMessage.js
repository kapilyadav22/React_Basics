import React from 'react'

const ChatMessage = (data) => {

    const {id, name, message, photo} = data;

  return (
    <div>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
           fontWeight: "bold"
      }}>
            <img height={"20px"} 
            style={{
             borderRadius:"60px" 
            }}
             width={"20px"}src={photo} alt={name} />
             <div>{name}</div>
        </div>
        <div style={{
            marginLeft: "30px",
            fontSize: "14px",
            marginBottom: "10px",
        }}>{message}</div>
        
    </div>
  )
}

export default ChatMessage
