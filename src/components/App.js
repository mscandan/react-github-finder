import '../styles/App.css';
import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import Users from './users/Users';
import axios from 'axios';
import Search from './users/Search';
class App extends Component {
  state = {
    api_url:
      'https://api.github.com/users?client_id=' +
      process.env.REACT_APP_GITHUB_CLIENT_ID +
      '&client_secret=' +
      process.env.REACT_APP_GITHUB_CLIENT_SECRET,
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(this.state.api_url);
    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <Search />
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
