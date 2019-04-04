import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AddSalaries } from './add-salaries';

const mapStateToProps = (state, _ownProps) => {
  return {
    players: state.players && state.players.stats ? state.players.stats : []
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    undefined
  )(AddSalaries)
);
