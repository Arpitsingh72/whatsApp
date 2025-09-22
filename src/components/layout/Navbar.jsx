import React from 'react';
import './_navbar.scss'

const Navbar = ({ currentUser }) => {
  return (
    <div className="navbar-container">
      <h2 className='navbar-header-name'>INDChat</h2>
        <div className='user-info-details'>{currentUser?.phone}</div>
    </div>
  );
};

export default Navbar;
