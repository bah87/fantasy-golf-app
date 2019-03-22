import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { App } from './App';
import { fetchPlayers } from './actions/players-actions';

const mapStateToProps = (state, _ownProps) => {
  return {
    players: state.players.players
  };
};

const mapDispatchToProps = (dispatch, _ownProps) => {
  return {
    fetchPlayers: () => dispatch(fetchPlayers())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
