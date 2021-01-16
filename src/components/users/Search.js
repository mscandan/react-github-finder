import React, { Component } from 'react';
import '../../styles/Search.css';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: '' });
  };
  render() {
    return (
      <div className='formHolder'>
        <form onSubmit={this.onSubmit} className='form'>
          <div>
            <input
              type='text'
              name='text'
              placeholder='Search user'
              className='usernameInput'
              value={this.state.text}
              onChange={this.onChange}
            />
          </div>
          <div>
            <input type='submit' value='Search' className='searchButton' />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
