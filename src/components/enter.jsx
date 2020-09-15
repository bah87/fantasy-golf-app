import React from 'react';
import { Redirect } from 'react-router-dom';
import { Signup } from './signup';
import { Login } from './login';

export class Enter extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      signUp: false,
    };
  }

  render() {
    const { loggedIn, signUp } = this.state;
    console.log(this.props);
    return (
      <div>
        {!loggedIn && (
          <div>
            {signUp ? <Signup onLogin={this.login.bind(this)} /> : <Login onLogin={this.login.bind(this)} />}
            <button onClick={this.toggleSignUp.bind(this)}>
              {signUp ? 'Already have an account? Login' : `Don't have an account? Sign up`}
            </button>
          </div>
        )}
        {loggedIn && <Redirect to="/create-team" />}
      </div>
    );
  }

  login() {
    console.log('logged in...');
    this.setState({ loggedIn: true });
  }

  toggleSignUp() {
    this.setState({ signUp: !this.state.signUp });
  }
}
