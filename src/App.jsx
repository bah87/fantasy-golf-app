import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import LeaderboardContainer from './components/leaderboard/leaderboard-container';
// import { Player } from './components/player';
// import { Team } from './components/team';
// import { UpdateTeam } from './components/update-team';
import { AppNavbar } from './components/app-navbar';
import StandingsContainer from './components/standings-container';
import NewStandingsContainer from './components/new-standings-container';
import { ProtectedRoute } from './util/route-util';
import './App.css';

export class App extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
    this.props.fetchLeaderboard();
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
            <ProtectedRoute
              path='/standings'
              loggedIn
              component={NewStandingsContainer}
            />
          </Switch>
        </header>
      </div>
    );
  }
}
