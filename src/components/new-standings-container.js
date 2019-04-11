import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { NewStandings } from './new-standings';

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
  )(NewStandings)
);
