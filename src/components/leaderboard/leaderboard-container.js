import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Leaderboard } from './leaderboard';
import { fetchLeaderboard } from '../../actions/leaderboard-actions';

const mapStateToProps = (state, _ownProps) => {
  return {
    players: state.players && state.players.stats ? state.players.stats : [],
    tournament: state.leaderboard.tournament
  };
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
