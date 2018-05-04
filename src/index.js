import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import App from './scripts/Layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
