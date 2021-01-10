import '../styles/App.css';
import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import Users from './users/Users';
import axios from 'axios';
class App extends Component {
  state = {
    api_url: 'https://api.github.com/users',
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(this.state.api_url);
    this.setState({ users: res.data, loading: false });
    console.log(res.data);
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Users loading={this.state.loading} users={this.state.users} />
      </div>
    );
  }
}

export default App;
