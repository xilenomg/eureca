import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return <div className="Header">
    <Link to="/" >EURECA</Link>
  </div>;
};

export default Header;