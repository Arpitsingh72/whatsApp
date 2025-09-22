
import React, { useEffect, useState } from 'react';
import { getUsers } from '../api/chatApi';
import { useAuth } from '../hooks/useAuth';
import Navbar from '../components/layout/Navbar';
import NavbarOne from '../components/layout/NavbarOne';
import Sidebar from '../components/chat/Sidebar';
import ChatWindow from '../components/chat/ChatWindow';
import { showError } from '../services/toastService';
import "../styles/_mainChatContainer.scss"

const ChatPage = () => {
  const { token, user } = useAuth();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  console.log(users,"users")
  useEffect(() => {
    if (!token) return;
    getUsers(token)
      .then(setUsers)
      .catch((err) => showError(err.message));
  }, [token]);

  if (!user) return <div>Loading user...</div>;

  return (
    <div className="chat-page">
      <Navbar currentUser={user} />
      <div className="chat-container">
        <NavbarOne/>
        <Sidebar users={users.filter(u => u.id !== user.id)} onSelectUser={setSelectedUser} />
        <ChatWindow currentUser={user} selectedUser={selectedUser} token={token} />
      </div>
    </div>
  );
};

export default ChatPage;
