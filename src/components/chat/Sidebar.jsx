import React from 'react';
import "./_sidebar.scss"

const Sidebar = ({ users, onSelectUser }) => {
  return (
    <div className="sidebar-container">
      <h3 className='sidebar-header'>Chats</h3>
      <ul className='user-list-main-container'>
        {users.map((user) => (
          <li key={user.id} onClick={() => onSelectUser(user)}>
            {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
