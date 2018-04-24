import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Demo from './Components/demo/Demo';
import Demo2 from './Components/demo/Demo2';
import registerServiceWorker from './registerServiceWorker';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
ReactDOM.render(
	<App/>
	, document.getElementById('root'));
registerServiceWorker();
