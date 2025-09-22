import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { getMessages, sendMessage } from '../../api/chatApi';

const socket = io('http://localhost:8000');

const ChatWindow = ({ currentUser, selectedUser, token }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    if (selectedUser) {
      getMessages(selectedUser.id, token).then(setMessages);
    }
  }, [selectedUser, token]);

  useEffect(() => {
    socket.on('receiveMessage', (message) => {
      if (
        (message.senderId === currentUser.id && message.receiverId === selectedUser.id) ||
        (message.senderId === selectedUser.id && message.receiverId === currentUser.id)
      ) {
        setMessages((prev) => [...prev, message]);
      }
    });

    return () => socket.off('receiveMessage');
  }, [currentUser, selectedUser]);

  const handleSend = async () => {
    if (!text.trim()) return;

    const newMessage = await sendMessage(
      { receiverId: selectedUser.id, text },
      token
    );

    socket.emit('sendMessage', newMessage);
    setMessages((prev) => [...prev, newMessage]);
    setText('');
  };

  if (!selectedUser) return <div className="chat-window">Select a user to chat</div>;

  return (
    <div className="chat-window">
      <h3>Chat with {selectedUser.phone}</h3>
      <div className="messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.senderId === currentUser.id ? 'sent' : 'received'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message" />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
