import React, { Component, useState } from 'react';
import '../../styles/UserItem.css';

export class UserItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        login: 'mscandan',
        avatar_url: 'https://avatars1.githubusercontent.com/u/31180505?v=4',
        profile_url: 'https://github.com/mscandan',
        name: 'Mehmet Selcuk Candan',
      },
    };
  }
  render() {
    return (
      <div className="card">
        <div className="user-name">{this.state.person.name}</div>
        <div className="user-login">{this.state.person.login}</div>
        <img
          className="user-avatar"
          src={this.state.person.avatar_url}
          alt={this.state.person.name}
        />
        <a className="user-profile-url" href={this.state.person.profile_url}>
          See on Github
        </a>
      </div>
    );
  }
}

export default UserItem;
