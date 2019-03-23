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
              component={Leaderboard}
            />
            <ProtectedRoute exact path='/' loggedIn component={Home} />
            <ProtectedRoute path='/schedule' loggedIn component={Schedule} />
            <ProtectedRoute
              path='/join-challenge'
              loggedIn
              component={JoinChallenge}
            />
            <ProtectedRoute
              path='/create-challenge'
              loggedIn
              component={CreateChallenge}
            />
            <ProtectedRoute path='/standings' loggedIn component={Standings} />
            <ProtectedRoute path='/team' loggedIn component={Team} />
            {this.props.players.map(playerModel => {
              return (
                <ProtectedRoute
                  key={playerModel.id}
                  path={playerModel.url}
                  loggedIn
                  playerModel={playerModel}
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
