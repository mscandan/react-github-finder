import React, { Component } from 'react';
import axios from 'axios';
import SingleRepo from './SingleRepo';
import SingleGist from './SingleGist';

class Gists extends Component {
  state = {
    client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
    client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
    loading: false,
    gists: {}
  };
  getGists() {}
  render() {
    const { gists } = this.props;
    return (
      <div className='gists-container'>
        <SingleGist />
      </div>
    );
  }
}

export default Gists;
