import React, { Component, useState } from 'react';
import '../../styles/UserItem.css';

const UserItem = (props) => {
  const { key, avatar_url, name, login, profile_url } = props.user;
  return (
    <div className="card" key={key}>
      <img className="user-avatar" src={avatar_url} alt={name} />
      <div className="user-name">{name}</div>
      <div className="user-login">
        <i className="fab fa-github icon" />
        <p className="username">/{login}</p>
      </div>
      <a className="user-profile-url" href={profile_url}>
        See on Github
      </a>
    </div>
  );
};

export default UserItem;
