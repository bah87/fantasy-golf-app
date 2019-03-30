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

const handleFetchTournamentId = res => {
  if (!res || !res.tid) {
    console.log('Error fetching tournament id: ', res);
    return;
  }

  return fetch(
    `https://statdata.pgatour.com/r/${res.tid}/leaderboard-v2mini.json`
  ).then(data => data.json().then(handleFetchTournamentData), handleFetchError);
};

export const fetchLeaderboard = () => {
  return fetch('https://statdata.pgatour.com/r/current/message.json').then(
    res => res.json().then(handleFetchTournamentId),
    handleFetchError
  );
};
