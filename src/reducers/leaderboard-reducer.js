import merge from 'lodash/merge';
import { RECEIVE_LEADERBOARD } from '../actions/leaderboard-actions';

export const leaderboardReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LEADERBOARD:
      return merge({}, state, { tournament: action.leaderboard });
    default:
      return state;
  }
};
