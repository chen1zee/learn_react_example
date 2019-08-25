import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import App from './App';
// import Clock from "./learn/stateAndLifecycle/stateAndLifecycle"
import LoginButton from "./learn/handlingEvents/handlingEvents"
// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <LoginButton />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
