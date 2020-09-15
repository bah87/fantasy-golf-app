import * as UserApiUtil from '../util/user-api-util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_TEAM = 'RECEIVE_TEAM';

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user,
  };
};

const receiveTeam = (team) => {
  return {
    type: RECEIVE_TEAM,
    team,
  };
};

export const fetchTeam = (email) => (dispatch) => {
  return UserApiUtil.fetchTeam(email).then((team) => {
    dispatch(receiveTeam(team));
  });
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
