import React from 'react';
import './Footer.css';
import logo from './../../images/logo-horizontal-branco.png';

const Footer = (props) => {
  return (
    <footer>
      <img src={logo} alt="ZeeDog" className="logo"/>
    </footer>
  );
}

export default Footer;