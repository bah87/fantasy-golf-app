import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export class ProtectedRoute extends React.Component {
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
