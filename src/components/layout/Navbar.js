import React, { Component } from 'react';
import '../../styles/Navbar.css';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  // if user doesn't pass values with props default values will be the values of props
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github',
  };

  // giving props a type
  static propTypes = {
    title: PropTypes.string.isRequired, // title prop must be string and it's required
    icon: PropTypes.string.isRequired,
  };

  render() {
    return (
      <nav className="navbar">
        <div className="logo">
          <i className={this.props.icon} />
          <h1 className="app-name"> {this.props.title}</h1>
        </div>
        <div className="navbar-nav">
          <div className="nav-element">Home</div>
          <div className="nav-element">About App</div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
