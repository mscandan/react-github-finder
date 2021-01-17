import React, { Component } from 'react';
import axios from 'axios';

class Gists extends Component {
  state = {
    client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
    client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
    loading: false,
    gists: {}
  };
  getGists() {}
  render() {
    const { gists_url } = this.props;
    return (
      <div className='gists-container'>
        <div>Gists</div>
      </div>
    );
  }
}

export default Gists;
