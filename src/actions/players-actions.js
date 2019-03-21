import * as PlayersApiUtil from '../util/players-api-util';

export const RECEIVE_ALL_PLAYERS = 'RECEIVE_ALL_PLAYERS';

export const receiveAllPlayers = players => {
  return {
    type: RECEIVE_ALL_PLAYERS,
    players
  };
};

export const fetchPlayers = () => dispatch => {
  return PlayersApiUtil.fetchPlayers().then(players => {
    dispatch(receiveAllPlayers(players));
  });
};
