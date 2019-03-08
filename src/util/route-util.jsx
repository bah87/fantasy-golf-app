import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

class Protected extends React.Component {
  render() {
    const { component: Component, path, loggedIn } = this.props;
    return (
      <Route
        path={path}
        render={() =>
          loggedIn ? <Component {...this.props} /> : <Redirect to='/login' />
        }
      />
    );
  }
}

export const ProtectedRoute = withRouter(
  connect(
    null,
    null
  )(Protected)
);
