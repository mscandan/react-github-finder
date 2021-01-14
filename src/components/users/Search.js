import React, { Component } from 'react';
import '../../styles/Search.css';

export class Search extends Component {
  state = {
    text: '',
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  };
  render() {
    return (
      <div className="formHolder">
        <form onSubmit={this.onSubmit} className="form">
          <div>
            <input
              type="text"
              name="text"
              placeholder="Search user"
              className="usernameInput"
              value={this.state.text}
              onChange={this.onChange}
            />
          </div>
          <div>
            <input type="submit" value="Search" className="searchButton" />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
