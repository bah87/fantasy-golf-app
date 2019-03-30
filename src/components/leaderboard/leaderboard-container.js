import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Leaderboard } from './leaderboard';
import { fetchLeaderboard } from '../../actions/leaderboard-actions';

const mapStateToProps = (state, _ownProps) => {
  const p = state.players;
  let players;
  if (p && p.players && p.stats) {
    players = p.stats.map(x => ({
      ...x,
      fullName: p.players[x.id].fullName
    }));
  }

  return {
    players,
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
