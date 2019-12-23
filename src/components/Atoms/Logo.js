import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../static/images/logo.png';

const headerImageStyle = {
  marginTop: '50px',
  maxWidth: '100%',
};

const Logo = () => (
  <Link to="/" className="no-underline black">
    <img src={logo} width="215" style={headerImageStyle} alt="logo" />
  </Link>
);

export default Logo;