import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './root';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGolfBall } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

library.add(faGolfBall);

ReactDOM.render(<Root />, document.getElementById('root'));
