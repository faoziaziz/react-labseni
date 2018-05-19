import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import KepalaApp from './KepalaApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<KepalaApp />, document.getElementById('KepalaApp'))
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
