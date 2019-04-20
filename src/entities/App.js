import React, { Component } from 'react';
import logo from '../logo.svg';
import UserEntityComponent from './userComponent/user.js';
import '../css/App.css';
import '../css/custom.css';

class ApplicationDemo extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="CustomStyle"> 
            Bhushan Patil First Program
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <UserEntityComponent/>      
      </div>
    );
  }
}

export default ApplicationDemo;
