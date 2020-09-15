import * as UserApiUtil from '../util/user-api-util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_LOGIN_SIGNUP_ERROR = 'RECEIVE_LOGIN_SIGNUP_ERROR';

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

const receiveError = (error) => {
  return {
    type: RECEIVE_LOGIN_SIGNUP_ERROR,
    error,
  };
};

export const loginUser = () => (dispatch) => {
  return UserApiUtil.loginUser()
    .then((user) => {
      dispatch(receiveUser(user));
    })
    .catch((error) => {
      dispatch(receiveError(error));
    });
};

export const signupUser = () => (dispatch) => {
  return UserApiUtil.signupUser()
    .then((user) => {
      dispatch(receiveUser(user));
    })
    .catch((error) => {
      dispatch(receiveError(error));
    });
};
