import React from 'react';
import '../../styles/Navbar.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar'>
      <div className='logo'>
        <i className={icon} />
        <h1 className='app-name'> {title}</h1>
      </div>
      <div className='navbar-nav'>
        <Link to='/' className='nav-element'>
          Home
        </Link>
        <Link to='/about' className='nav-element'>
          About App
        </Link>
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
