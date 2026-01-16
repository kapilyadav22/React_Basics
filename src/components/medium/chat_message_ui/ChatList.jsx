import { useState } from "react";

const initialMessages = [
  {
    id: 1,
    text: "Hi Kapil 👋",
    sender: "other",
    time: "10:00 AM",
  },
  {
    id: 2,
    text: "Hey! How are you?",
    sender: "me",
    time: "10:01 AM",
  },
  {
    id: 3,
    text: "Doing good. Preparing for interviews.",
    sender: "other",
    time: "10:02 AM",
  },
];

function ChatList() {
  const [messages] = useState(initialMessages);

  return (
    <div
      style={{
        maxWidth: "400px",
        border: "1px solid #ccc",
        padding: "12px",
      }}
    >
      {messages.map((msg) => (
        <div
          key={msg.id}
          style={{
            display: "flex",
            justifyContent:
              msg.sender === "me" ? "flex-end" : "flex-start",
            marginBottom: "8px",
          }}
        >
          <div
            style={{
              maxWidth: "70%",
              padding: "8px 12px",
              borderRadius: "8px",
              background: msg.sender === "me" ? "#DCF8C6" : "#F1F1F1",
            }}
          >
            <div>{msg.text}</div>
            <small
              style={{
                display: "block",
                marginTop: "4px",
                fontSize: "10px",
                textAlign: "right",
                color: "#555",
              }}
            >
              {msg.time}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
