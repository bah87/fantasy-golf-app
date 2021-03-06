import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { App } from './App';
import { fetchPlayers } from './actions/players-actions';
import { fetchLeaderboard } from './actions/leaderboard-actions';
import { loginUser, signupUser, fetchTeam } from './actions/user-actions';

const mapStateToProps = (state, _ownProps) => {
  return {
    players: Object.values(state.players),
    user: state.user.user || {},
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => {
  return {
    fetchPlayers: () => dispatch(fetchPlayers()),
    fetchLeaderboard: () => dispatch(fetchLeaderboard()),
    loginUser: (user) => dispatch(loginUser(user)),
    signupUser: (user) => dispatch(signupUser(user)),
    fetchTeam: (email) => dispatch(fetchTeam(email)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
