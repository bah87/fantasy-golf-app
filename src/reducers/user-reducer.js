import merge from 'lodash/merge';
import { RECEIVE_USER, RECEIVE_TEAM } from '../actions/user-actions';

export const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, { user: action.user });
    case RECEIVE_TEAM:
      return merge({}, state, { user: { ...state.user, team: action.team } });
    default:
      return state;
  }
};
