import merge from 'lodash/merge';
import {
  RECEIVE_ALL_PLAYERS,
  RECEIVE_PLAYER_STATS
} from '../actions/players-actions';

export const playersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PLAYERS:
      const players = {};
      action.players.forEach(player => (players[player.id] = player));
      return merge({}, state, { players });
    case RECEIVE_PLAYER_STATS:
      return merge({}, state, { stats: action.playerStats });
    default:
      return state;
  }
};
