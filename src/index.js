import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import App from './App';
// import Clock from "./learn/stateAndLifecycle/stateAndLifecycle"
// import LoginButton from "./learn/handlingEvents/handlingEvents"
// import Forms from "./learn/forms/forms"
// import HandleMultiple from "./learn/forms/handleMultiple"
// import Calculator from "./learn/liftingStateUp/liftingStateUp"
// import WelcoomeDialog from "./learn/compositionVsInheritance/compositionVsInheritance"
// import Parent from "./learn/accessibility/accessibility"
// import MyComponent from "./learn/codeSplitting/codeSplitting"
// import App from "./learn/context/context"
// import App from "./learn/context/dynamicValue"
// import App from "./learn/errorBoundaries/errorBoundaries"
// import App from "./learn/forwardingRefs/forwardRefs"
// import App from "./learn/forwardingRefs/hocRef"
// import App from "./learn/fragments/fragments"
// import App from "./learn/hoc/hoc"
// import App from "./learn/integratingWithOtherLib/integratingWithOtherLib"
// import ListOfTenThings from "./learn/jsxInDepth/jsxInDepth"
// import CounterButton from "./learn/optimizingPerform/optimizingPerform"
// import App from "./learn/portals/portals"
// import App from "./learn/profiler/profiler"
// import App from "./learn/refAndTheDom/refAndTheDom"
// import MouseTracker from "./learn/renderProps/renderProps"
import App from "./hook_learn/hookEffect"
// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
