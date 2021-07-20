import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextAnimation from "react-animate-text";

ReactDOM.render(
  <App />, document.getElementById('root')
);

const Demo = () => <TextAnimation>Scientific Full-Stack Web Developer</TextAnimation>;
ReactDOM.render(
  <Demo />, document.getElementById("app"));