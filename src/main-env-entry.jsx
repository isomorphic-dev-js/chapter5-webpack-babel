import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

console.log("current environment: ", __ENV__);

ReactDOM.render(
  <App></App>,
  document.getElementsByTagName('body')[0]
);
