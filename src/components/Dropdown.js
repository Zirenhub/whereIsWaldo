import React from 'react';
import { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import '../styles/dropdown.css';
import SignIn from './SignIn';
import SignOut from './SignOut';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { user } = UserAuth();

  const handleDropdown = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <div className="dropdown-container" onClick={handleDropdown}>
      {isOpen &&
        (user?.displayName ? (
          <div className="dropdown-logout">
            <SignOut />
          </div>
        ) : (
          <div className="dropdown-google">
            <p>
              <i className="arrow up"></i>
            </p>
            <SignIn />
          </div>
        ))}
    </div>
  );
};

export default Dropdown;
