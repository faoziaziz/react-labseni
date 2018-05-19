import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import kartuGuys from './laman/Utama';
import JalurLaman from './laman/Jalur';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      [
        <JalurLaman />
      ]

    );
  }
}



export default App;
