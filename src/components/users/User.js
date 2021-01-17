import React, { Component } from 'react';
import '../../styles/User.css';
import Gists from '../layout/Gists';
import Repos from '../layout/Repos';
import Spinner from '../spinner/Spinner';

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
      html_url,
      repos_url,
      gists_url
    } = this.props.user;

    const { loading } = this.props;
    if (loading) {
      return <Spinner />;
    } else {
      return (
        <div className='single-user-container'>
          <div className='user-infos-container'>
            <img className='single-user-image' src={avatar_url} alt={name} />
            <div className='single-user-name'>{name}</div>
            <a
              href={html_url}
              className='social-github'
              rel='noreferrer'
              target='_blank'
            >
              See more on <i class='fa fa-github' aria-hidden='true'></i>
            </a>
            <div className='single-user-location'>
              <i class='fa fa-map-marker' aria-hidden='true'></i>
              {location}
            </div>
            <div className='single-user-bio'>{bio}</div>
            <div className='single-user-social'>
              <a
                href={`https://${blog}`}
                className='social-blog'
                rel='noreferrer'
                target='_blank'
              >
                {blog}
              </a>
            </div>
          </div>
          <div className='user-repos-container'>
            <Repos repos={repos_url} />
            <Gists gists={gists_url} />
          </div>
        </div>
      );
    }
  }
}

export default User;
