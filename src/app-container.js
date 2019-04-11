import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { App } from './App';
import { fetchPlayers } from './actions/players-actions';
import { fetchLeaderboard } from './actions/leaderboard-actions';

const mapStateToProps = (state, _ownProps) => {
  return {
    players: Object.values(state.players)
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => {
  return {
    fetchPlayers: () => dispatch(fetchPlayers()),
    fetchLeaderboard: () => dispatch(fetchLeaderboard())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
