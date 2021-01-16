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
    if (text.length !== 0) {
      const query =
        'https://api.github.com/search/users?q=' +
        text +
        '&client_id=' +
        this.state.client_id +
        '&client_secret=' +
        this.state.client_secret;
      this.getData(query);
    }
  };

  // Clear users
  clearUsers = (e) => {
    e.preventDefault();
    this.setState({ users: [], loading: false });
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
