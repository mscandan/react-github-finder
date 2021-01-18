import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SingleRepo from './SingleRepo';

const Repos = (props) => {
  const [reposUrl] = useState(props.repos);
  const [repos, setRepos] = useState([]);
  const [keys, setKeys] = useState([]);
  const getData = async () => {
    setKeys(
      process.env.REACT_APP_GITHUB_CLIENT_ID,
      process.env.REACT_APP_GITHUB_CLIENT_SECRET
    );
    const url =
      reposUrl + '?client_id=' + keys[0] + '&client_secret=' + keys[1];
    console.log(url);
    const res = await axios.get(url);
    return res.data;
  };
  return (
    <div className='repos-container'>
      <SingleRepo />
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.string.isRequired
};

export default Repos;
