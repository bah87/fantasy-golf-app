import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppNavbar } from './components/app-navbar';
import { Team } from './components/team';
import { Enter } from './components/enter';
import { ProtectedRoute } from './util/route-util';
import './App.css';

export class App extends Component {
  render() {
    const { user, error, loginUser, signupUser } = this.props;

    return (
      <div className="App">
        <AppNavbar />
        <header className="App-header">
          <Switch>
            <ProtectedRoute path="/create-team" loggedIn user={user} component={Team} />
            <Route
              path="/login"
              render={() => <Enter loginUser={loginUser} signupUser={signupUser} error={error} user={user} />}
            />
          </Switch>
        </header>
      </div>
    );
  }
}
