import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppNavbar } from './components/app-navbar';
import { Team } from './components/team';
import { Enter } from './components/enter';
import { ProtectedRoute } from './util/route-util';
import './App.css';

export class App extends Component {
  render() {
    const { user, loginUser, signupUser } = this.props;

    return (
      <div className="App">
        <AppNavbar userName={user.name} />
        <header className="App-header">
          <Switch>
            <ProtectedRoute path="/create-team" loggedIn={!!user.name} user={user} component={Team} />
            <Route
              path="/login"
              render={() => (
                <Enter
                  loginUser={loginUser}
                  signupUser={signupUser}
                  error={user.error}
                  user={user.name ? user : null}
                />
              )}
            />
          </Switch>
        </header>
      </div>
    );
  }
}
