import { getPlayer } from './player';

const handleFetchError = (err) => {
  // should probably set something in redux store
  // for now just log for debugging
  // maybe export this method from shared util
  console.log('handleFetchError called: ', err);
};

export const fetchPlayers = () => {
  console.log('fetchPlayers called');
  const tid = '026'; // hardcoded for 2020 US Open
  return fetch(`https://statdata.pgatour.com/r/${tid}/field.json`).then((data) => {
    return data.json().then((fieldData) => {
      return fieldData.Tournament.Players.map((playerParams) => {
        return getPlayer(playerParams);
      });
    });
  }, handleFetchError);
};
