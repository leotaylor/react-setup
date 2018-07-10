import React, { Component } from 'react';

import {getFootballNerdPlayers} from '../footballRequests/footballNerdRequest';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount () {
    getFootballNerdPlayers()
      .then((players) => {
        console.log(players);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button className='btn btn-danger'>Bootstrap?</button>
      </div>
    );
  }
}

export default App;
