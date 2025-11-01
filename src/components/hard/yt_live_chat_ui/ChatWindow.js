import React, { useEffect, useRef, useState } from 'react'
import ChatMessage from './ChatMessage'

const CHAT_MESSAGE_LIMIT = 30;

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

    const fetchNewMessage = () => {
        const data = [
    {
        id: 1,
        name: "User1",
        message: "Hello everyone!",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: 2,
        name: "User2",
        message: "Hi User1!",
        photo: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        id: 3,
        name: "User3",
        message: "Good to see you all here.",
        photo: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        id: 4,
        name: "User4",
        message: "What's up?",
        photo: "https://randomuser.me/api/portraits/women/4.jpg",
    },  
    {  id: 5,
        name: "User5",
        message: "How's everyone doing?",
        photo: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {   id: 6,
        name: "User6",
        message: "Excited for the stream!",
        photo: "https://randomuser.me/api/portraits/women/6.jpg",
    }, 
    {  id: 7,
        name: "User7",
        message: "Let's have a great time!",
        photo: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {   id: 8,
        name: "User8",
        message: "Can't wait to see the content.",
        photo: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {   id: 9,
        name: "User9",
        message: "Hello from User9!",
        photo: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {   id: 10,
        name: "User10",
        message: "This is my first live chat!",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
    },
       {   id: 11,
        name: "User10",
        message: "This is my first live chat!",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
    },
       {   id: 12,
        name: "User10",
        message: "This is my first live chat!",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
    },
       {   id: 13,
        name: "User10",
        message: "This is my first live chat!",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
    },
       {   id: 14,
        name: "User10",
        message: "This is my first live chat!",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
    },
       {   id: 15,
        name: "User10",
        message: "This is my first live chat!",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
    },
       {   id: 16,
        name: "User10",
        message: "This is my first live chat!",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
    },
       {   id: 17,
        name: "User10",
        message: "This is my first live chat!",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
    },
       {   id: 18,
        name: "User10",
        message: "This is my first live chat!",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
    },
       {   id: 19,
        name: "User10",
        message: "This is my first live chat!",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
    },
       {   id: 20,
        name: "User10",
        message: "This is my first live chat!",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
    },
       {   id: 21,
        name: "User10",
        message: "This is my first live chat!",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
    },
       {   id: 22,
        name: "User10",
        message: "This is my first live chat!",
        photo: "https://randomuser.me/api/portraits/women/10.jpg",
    },
     
    
]
    setMessages((prevMessages)=>{
        return [...prevMessages,...data].splice(-CHAT_MESSAGE_LIMIT);
    });

    };

    useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

    useEffect(() => {
        const interval = setInterval(fetchNewMessage, 2000);
        
        return () => clearInterval(interval);
    }, []);


  return (
    <div
    style={{
        width: "400px",
        height: "500px",
        margin: '5px',
        border: 'solid 1px black',
        borderRadius: "10px",
        backgroundColor: 'white',
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column',
    
    }}
    >
        {
            messages.map((item,index)=>(
                 <ChatMessage  key = {index} {...item} />
            ))
        }
    
         <div ref={chatEndRef} />
    </div>
  )
}

export default ChatWindow
