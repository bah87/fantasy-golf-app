import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGolfBall } from '@fortawesome/free-solid-svg-icons';
import { Root } from './root';
import configureStore from './store/store';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

library.add(faGolfBall);

ReactDOM.render(
  <Root store={configureStore()} />,
  document.getElementById('root')
);
