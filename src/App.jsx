import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Leaderboard } from './components/leaderboard';
import { Player } from './components/player';
import { ProtectedRoute } from './util/route-util';
import { PLAYERS } from './util/player-data';
import './App.css';
import { AppNavbar } from './components/app-navbar';

export class App extends Component {
  render() {
    return (
      <div className='App'>
        <AppNavbar />
        <header className='App-header'>
          <Switch>
            <ProtectedRoute
              exact
              path='/leaderboard'
              loggedIn
              component={Leaderboard}
            />
            {PLAYERS.map((playerData, index) => {
              return (
                <ProtectedRoute
                  key={playerData.id}
                  exact
                  path={`/player/${index}`}
                  loggedIn
                  playerData={playerData}
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
