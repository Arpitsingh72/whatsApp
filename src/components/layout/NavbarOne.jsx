import React from 'react';
import './_navbar.scss'
// import wpCallsIcons from "../../../public/assets/image.png"

const NavbarOne = () => {
  return (
    <div className="navbarOne-all-info">
      <img
        src="/assets/image.png"
        alt="Chat"
        className="navbar-icon"
      />
      <img
        src="/assets/whatsapp.png"
        alt="Call"
        className="navbar-icon"
      />
      <img
        src="/assets/wpStatus.png"
        alt="Call"
        className="navbar-icon"
      />
      <div className='navbarOne-setting-container'>
       <img
        src="/assets/setting.png"
        alt="Call"
        className="navbar-icon"
        />
        </div>
    </div>
  );
};

export default NavbarOne;
