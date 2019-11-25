import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ConcurrentApp from './ConcurrentApp';
import App from './App';

// Stable
ReactDOM.render(<App />, document.getElementById('root'));

// Concurrent
// using strict mode - https://reactjs.org/docs/concurrent-mode-adoption.html
// ReactDOM.createRoot(document.getElementById('root')).render(<ConcurrentApp />);

// Blocking
// ReactDOM.createBlockingRoot(document.getElementById('root')).render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
