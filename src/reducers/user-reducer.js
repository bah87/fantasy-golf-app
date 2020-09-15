import merge from 'lodash/merge';
import { RECEIVE_USER } from '../actions/user-actions';

export const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, { user: action.user });
    default:
      return state;
  }
};
