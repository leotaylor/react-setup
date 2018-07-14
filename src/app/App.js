import React, { Component } from 'react';

import footballRequests from '../footballRequests/footballNerdRequest';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount () {
    footballRequests.getQB()
      .then((qb) => {
        console.log('Active QBs:', qb);
      })
      .catch((err) => {
        console.error(err);
      });
    footballRequests.getRB()
      .then((rb) => {
        console.log('Active Rbs', rb);
      })
      .catch((err) => {
        console.error(err);
      });
    footballRequests.getDefense()
      .then((def) => {
        console.log('Defense', def);
      })
      .catch((err) => {
        console.error(err);
      });
    footballRequests.getWR()
      .then((wr) => {
        console.log('Active WR', wr);
      })
      .catch((err) => {
        console.error(err);
      });
    footballRequests.getTE()
      .then((te) => {
        console.log('Active TE', te);
      })
      .catch((err) => {
        console.error(err);
      });
    footballRequests.getTeams()
      .then((teams) => {
        console.log('NFL Teams', teams);
      })
      .catch((err) => {
        console.error(err);
      });
    footballRequests.getByeWeeks()
      .then((byes) => {
        console.log('Bye Weeks', byes);
      })
      .catch((err) => {
        console.error(err);
      });
    footballRequests.getRankings()
      .then((rankings) => {
        console.log('Draft Rankings', rankings);
      })
      .catch((err) => {
        console.error(err);
      });
    footballRequests.getQbProjections()
      .then((qbProj) => {
        console.log('QB Projections', qbProj);
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
