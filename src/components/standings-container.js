import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchLeaderboard } from '../actions/leaderboard-actions';
import { Leaderboard } from './leaderboard';

const mapStateToProps = (state, _ownProps) => {
  let players = {};
  if (state.players && state.players.stats) {
    state.players.stats.forEach(player => (players[player.id] = player));
  }

  return { players };
};

const mapDispatchToProps = (dispatch, _ownProps) => {
  return {
    fetchLeaderboard: () => dispatch(fetchLeaderboard())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Leaderboard)
);
