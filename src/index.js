import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/margo-css/margo.min.css'
import './styles/_ionicons.min.css'
import './styles/styles.css';

import App from './App';
import dayDemos from './data/dayDemosData.js'

import registerServiceWorker from './registerServiceWorker';


document.querySelector('title').innerHTML = 'Muktek Class Notes - 2017-09'
ReactDOM.render(<App dayDemos={dayDemos}/>, document.getElementById('root'));
registerServiceWorker();
