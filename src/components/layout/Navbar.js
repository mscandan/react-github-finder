import React, { Component } from 'react';
import '../../styles/Navbar.css';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <i className={props.icon} />
        <h1 className="app-name"> {props.title}</h1>
      </div>
      <div className="navbar-nav">
        <div className="nav-element">Home</div>
        <div className="nav-element">About App</div>
      </div>
    </nav>
  );
};

// if user doesn't pass values with props default values will be the values of props
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github',
};

// giving props a type
Navbar.propTypes = {
  title: PropTypes.string.isRequired, // title prop must be string and it's required
  icon: PropTypes.string.isRequired,
};

export default Navbar;
