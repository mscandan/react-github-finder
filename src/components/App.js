import '../styles/App.css';
import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import UserItem from './users/UserItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
        </div>
      </div>
    );
  }
}

export default App;
