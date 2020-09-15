import * as UserApiUtil from '../util/user-api-util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
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
