import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { Leaderboard } from './components/leaderboard';
import { Player } from './components/player';
import { AppNavbar } from './components/app-navbar';
import { Home } from './components/home';
import { Schedule } from './components/schedule';
import { Team } from './components/team';
import { Standings } from './components/standings';
import { JoinChallenge } from './components/join-challenge';
import { CreateChallenge } from './components/create-challenge';
import { ProtectedRoute } from './util/route-util';
import { PLAYERS } from './util/player-data';
import './App.css';

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
            <ProtectedRoute exact path='/home' loggedIn component={Home} />
            <ProtectedRoute
              exact
              path='/schedule'
              loggedIn
              component={Schedule}
            />
            <ProtectedRoute
              exact
              path='/join-challenge'
              loggedIn
              component={JoinChallenge}
            />
            <ProtectedRoute
              exact
              path='/create-challenge'
              loggedIn
              component={CreateChallenge}
            />
            <ProtectedRoute
              exact
              path='/standings'
              loggedIn
              component={Standings}
            />
            <ProtectedRoute exact path='/team' loggedIn component={Team} />
            {PLAYERS.map(playerData => {
              const { id, firstName, lastName } = playerData;
              return (
                <ProtectedRoute
                  key={id}
                  exact
                  path={`/player/${id}/${firstName}-${lastName}`}
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
