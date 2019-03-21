import { RECEIVE_ALL_PLAYERS } from '../actions/players-actions';

export const playersReducer = (state = { players: [] }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_PLAYERS:
      return { players: action.players };
    default:
      return state;
  }
};
