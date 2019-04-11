import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Standings } from './standings';

const mapStateToProps = (state, _ownProps) => {
  let players = {};
  if (state.players && state.players.stats) {
    state.players.stats.forEach(player => (players[player.id] = player));
  }

  return { players };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Standings)
);
