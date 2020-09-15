import React from 'react';
import { Redirect } from 'react-router-dom';
import { Signup } from './signup';

export class Enter extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
    };
  }

  render() {
    const { loggedIn } = this.state;
    console.log(this.props);
    return (
      <div>
        {!loggedIn && <Signup onLogin={this.login.bind(this)} />}
        {loggedIn && <Redirect to="/create-team" />}
      </div>
    );
  }

  login() {
    console.log('logged in...');
    this.setState({ loggedIn: true });
  }
}
