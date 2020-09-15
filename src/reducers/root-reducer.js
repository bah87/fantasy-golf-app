import { combineReducers } from 'redux';
import { playersReducer } from './players-reducer';
import { leaderboardReducer } from './leaderboard-reducer';
import { userReducer } from './user-reducer';

export const rootReducer = combineReducers({
  players: playersReducer,
  leaderboard: leaderboardReducer,
  user: userReducer,
});
