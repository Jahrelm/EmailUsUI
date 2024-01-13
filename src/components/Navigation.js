import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Welcome</Link></li>
        <li><Link to="/CreateMail">Create Mail</Link></li>
        <li><Link to="/Mail">Mail</Link></li>
        <li><Link to="/CreateRecipient">Create Recipient</Link></li>
        <li><Link to="/Recipient">Recipient</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
