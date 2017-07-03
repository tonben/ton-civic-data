import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Main from '../compenents/Main';
import Sponsors from '../compenents/Sponsors';
import Registration from '../compenents/Registration';

import logo from '../logo.png';
import '../App.css';
import '../Navigation.css';

export default class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <div className="Nav_logo">
          <img src={logo} className="Nav_Logo" alt="logo" />
        </div>

        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="registration">Registration</a></li>
            <li><a href="faq">FAQ</a></li>
            <li><a href="sponsors">Sponsors</a></li>
        </ul>
      </div>
    );
  }
}