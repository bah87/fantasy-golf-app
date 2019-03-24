import * as LeaderboardApiUtil from '../util/leaderboard-api-util';

export const RECEIVE_LEADERBOARD = 'RECEIVE_LEADERBOARD';

const receiveLeaderboard = leaderboard => {
  return {
    type: RECEIVE_LEADERBOARD,
    leaderboard
  };
};

export const fetchLeaderboard = () => dispatch => {
  return LeaderboardApiUtil.fetchLeaderboard().then(leaderboard => {
    dispatch(receiveLeaderboard(leaderboard));
  });
};
