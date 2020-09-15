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

export const loginUser = (user) => (dispatch) => {
  return UserApiUtil.loginUser(user).then((resultUser) => {
    dispatch(receiveUser(resultUser));
  });
};

export const signupUser = (user) => (dispatch) => {
  return UserApiUtil.signupUser(user).then((resultUser) => {
    dispatch(receiveUser(resultUser));
  });
};
