import { RECEIVE_LEADERBOARD } from '../actions/leaderboard-actions';

export const leaderboardReducer = (state = { leaderboard: [] }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_LEADERBOARD:
      return { leaderboard: action.leaderboard };
    default:
      return state;
  }
};
