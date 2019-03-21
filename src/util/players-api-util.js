const handleFetchError = err => {
  // should probably set something in redux store
  // for now just log for debugging
  // maybe export this method from shared util
  console.log('handleFetchError called: ', err);
};

export const fetchPlayers = () => {
  console.log('fetchPlayers called');
  return fetch('https://statdata.pgatour.com/players/player.json').then(
    res =>
      res.json().then(data => {
        return data && data.plrs ? data.plrs : [];
      }),
    handleFetchError
  );
};
