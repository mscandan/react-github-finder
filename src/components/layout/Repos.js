import React, { Component } from 'react';
import axios from 'axios';

class Repos extends Component {
  state = {
    client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
    client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
    loading: false,
    repos: {}
  };
  getRepos() {}
  render() {
    const { repos_url } = this.props;
    return (
      <div className='repos-container'>
        <div>Repos</div>
      </div>
    );
  }
}

export default Repos;
