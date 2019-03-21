import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import AppContainer from './app-container';

export class Root extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <HashRouter>
          <AppContainer />
        </HashRouter>
      </Provider>
    );
  }
}
