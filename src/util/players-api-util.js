import { PlayerModel } from '../models/player-model';

const handleFetchError = err => {
  // should probably set something in redux store
  // for now just log for debugging
  // maybe export this method from shared util
  console.log('handleFetchError called: ', err);
};

// needs to be refactored
const handleFetchTournamentId = tid => {
  return fetch(`https://statdata.pgatour.com/r/${tid}/field.json`).then(
    data => {
      return data.json().then(fieldData => {
        return fieldData.Tournament.Players.map(playerData => {
          return new PlayerModel(playerData);
        });
      });
    }
  );
};

export const fetchPlayers = () => {
  console.log('fetchPlayers called');
  return fetch('https://statdata.pgatour.com/r/current/message.json').then(
    res => res.json().then(data => handleFetchTournamentId(data.tid)),
    handleFetchError
  );
};
