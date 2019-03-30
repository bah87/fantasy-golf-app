import { combineReducers } from 'redux';
import { playersReducer } from './players-reducer';
import { leaderboardReducer } from './leaderboard-reducer';

export const rootReducer = combineReducers({
  players: playersReducer,
  leaderboard: leaderboardReducer
});
