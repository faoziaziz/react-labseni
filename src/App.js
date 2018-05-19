import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import KepalaApp from './KepalaApp';
import kartuGuys from './laman/Utama';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      [
      //  tester
        kartuGuys
      ]
    );
  }
}

const tester=(
  <div>
    boker
  </div>
);
export default App;
