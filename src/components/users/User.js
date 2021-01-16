import React, { Component } from 'react';
import '../../styles/User.css';

class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;

    const { loading } = this.props;

    return (
      <div className='single-user-container'>
        <div className='user-infos-container'>
          <div className='single-user-name'>{name}</div>
          <img className='single-user-name' src={avatar_url} alt={name} />
          <div className='single-user-location'>{location}</div>
          <div className='single-user-bio'>{bio}</div>
          <div className='single-user-blog'>{blog}</div>
          {/* alttaki ikili tek butonda halledilecek */}
          <div className='single-user-login'>{login}</div>
          <div className='single-user-github'>{html_url}</div>
          <div className='single-user-followers'>Followers: {followers}</div>
          <div className='single-user-following'>Following : {following}</div>
          <div className='single-user-hireable'>{hireable}</div>
        </div>
        <div className='user-repos-container'>
          {/* request yapilacak repolar cekilecek */}
          <div className='public-repos'>{public_repos}</div>
          <div className='public-gists'>{public_gists}</div>
        </div>
      </div>
    );
  }
}

export default User;
