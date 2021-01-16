import React from 'react';
import '../../styles/UserItem.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { key, avatar_url, name, login } }) => {
  return (
    <div className='card' key={key}>
      <img className='user-avatar' src={avatar_url} alt={name} />
      <div className='user-name'>{name}</div>
      <div className='user-login'>
        <i className='fab fa-github icon' />
        <p className='username'>/{login}</p>
      </div>
      <Link className='user-profile-url' to={`/user/${login}`} target='blank'>
        More
      </Link>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
