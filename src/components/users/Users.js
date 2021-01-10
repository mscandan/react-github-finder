import React, { Component } from 'react';
import UserItem from './UserItem';
import '../../styles/Users.css';

export class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'mscandan',
        avatar_url: 'https://avatars1.githubusercontent.com/u/31180505?v=4',
        profile_url: 'https://github.com/mscandan',
        name: 'Mehmet Selcuk Candan',
      },
      {
        id: '2',
        login: 'mscandan',
        avatar_url: 'https://avatars1.githubusercontent.com/u/31180505?v=4',
        profile_url: 'https://github.com/mscandan',
        name: 'Mehmet Selcuk Candan',
      },
      {
        id: '3',
        login: 'mscandan',
        avatar_url: 'https://avatars1.githubusercontent.com/u/31180505?v=4',
        profile_url: 'https://github.com/mscandan',
        name: 'Mehmet Selcuk Candan',
      },
    ],
  };
  render() {
    return (
      <div className="container">
        {this.state.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
