import merge from 'lodash/merge';
import { RECEIVE_USER, RECEIVE_LOGIN_SIGNUP_ERROR } from '../actions/user-actions';

export const userReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, { user: action.user });
    case RECEIVE_LOGIN_SIGNUP_ERROR:
      return merge({}, state, { error: action.error });
    default:
      return state;
  }
};
