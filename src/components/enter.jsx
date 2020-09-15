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
    const { user, error, signupUser, loginUser } = this.props;
    return (
      <div>
        {!loggedIn && (
          <div>
            {signUp ? <Signup signupUser={signupUser} error={error} /> : <Login loginUser={loginUser} error={error} />}
            <button
              style={{ background: 'none', border: 'none', textDecoration: 'underline', color: '#007BFF' }}
              onClick={this.toggleSignUp.bind(this)}
            >
              {signUp ? 'Already have an account? Login' : `Don't have an account? Sign up`}
            </button>
          </div>
        )}
        {user && <Redirect to="/create-team" />}
      </div>
    );
  }

  toggleSignUp() {
    this.setState({ signUp: !this.state.signUp });
  }
}
