import React from 'react';
import '../../styles/UserItem.css';
import PropTypes from 'prop-types';

const UserItem = ({ user: { key, avatar_url, name, login, profile_url } }) => {
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

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
