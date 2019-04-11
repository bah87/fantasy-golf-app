import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import LeaderboardContainer from './components/leaderboard/leaderboard-container';
import { Player } from './components/player';
import { Team } from './components/player';
import { AppNavbar } from './components/app-navbar';
import { Standings } from './components/standings';
import { ProtectedRoute } from './util/route-util';
import './App.css';

export class App extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }

  render() {
    return (
      <div className='App'>
        <AppNavbar />
        <header className='App-header'>
          <Switch>
            <ProtectedRoute
              path='/leaderboard'
              loggedIn
              component={LeaderboardContainer}
            />
            <ProtectedRoute path='/create-team' loggedIn component={Team} />
            {/* <ProtectedRoute path='/standings' loggedIn component={Standings} /> */}
            {this.props.players.map(player => {
              return (
                <ProtectedRoute
                  key={player.id}
                  path={player.url}
                  loggedIn
                  player={player}
                  component={Player}
                />
              );
            })}
          </Switch>
        </header>
      </div>
    );
  }
}
