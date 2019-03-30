import * as PlayersApiUtil from '../util/players-api-util';

export const RECEIVE_ALL_PLAYERS = 'RECEIVE_ALL_PLAYERS';
export const RECEIVE_PLAYER_STATS = 'RECEIVE_PLAYER_STATS';

const receiveAllPlayers = players => {
  return {
    type: RECEIVE_ALL_PLAYERS,
    players
  };
};

export const receivePlayerStats = playerStats => {
  return {
    type: RECEIVE_PLAYER_STATS,
    playerStats
  };
};

export const fetchPlayers = () => dispatch => {
  return PlayersApiUtil.fetchPlayers().then(players => {
    dispatch(receiveAllPlayers(players));
  });
};
