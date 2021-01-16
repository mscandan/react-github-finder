import '../styles/App.css';
import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import Users from './users/Users';
import axios from 'axios';
import Search from './users/Search';
class App extends Component {
  state = {
    client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
    client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
    users: [],
    loading: false,
  };

  // display some users
  async getData(searchUrl) {
    this.setState({ loading: true });
    const res = await axios.get(searchUrl);
    this.setState({ users: res.data.items, loading: false });
  }

  // Search users
  searchUsers = (text) => {
    const query =
      'https://api.github.com/search/users?q=' +
      text +
      '&client_id=' +
      this.state.client_id +
      '&client_secret=' +
      this.state.client_secret;
    this.getData(query);
  };

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Search searchUsers={this.searchUsers} />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
