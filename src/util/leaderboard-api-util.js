import getTournament from './tournament';
import { getPlayerStats } from './player';

const handleFetchError = err => {
  console.log('Fetch error: ', err);
};

const handleFetchTournamentData = data => {
  if (!data || !data.leaderboard || !data.leaderboard.players) {
    console.log('No tournament or player data: ', data);
    return;
  }

  return {
    tournament: getTournament({
      ...data.leaderboard,
      lastUpdated: data.last_updated
    }),
    playerStats: data.leaderboard.players.map(getPlayerStats)
  };
};

export const fetchLeaderboard = () => {
  const tid = '014'; // hardcoded for Masters
  return fetch(
    `https://statdata.pgatour.com/r/${tid}/leaderboard-v2mini.json`
  ).then(data => data.json().then(handleFetchTournamentData), handleFetchError);
};
