import React, { Component } from 'react';
import Login from './Login';
import Home from './Home';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../css/App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: "",
      isAuthenticated: false
    }
  }

  login = (username, password) => {
    console.log(username, password)
    axios.post('/login', {
        username: username,
        password: password
    }).then((response) => {
      console.log(response)
    })
  }

  render() {
    return (
      <Router>
        <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header class="mdl-layout__header">
            <div class="mdl-layout__header-row">

              <span class="mdl-layout-title">Title</span>

              <div class="mdl-layout-spacer"></div>

              <nav class="mdl-navigation mdl-layout--large-screen-only">
                <Link to="/login"><a class="mdl-navigation__link" href="">Login</a></Link>
                <Link to="/register"><a class="mdl-navigation__link" href="">Register</a></Link>
                <a class="mdl-navigation__link" href="">Link</a>
                <a class="mdl-navigation__link" href="">Link</a>
              </nav>
            </div>
          </header>
          <div class="mdl-layout__drawer">
            <span class="mdl-layout-title">Title</span>
            <nav class="mdl-navigation">
              <a class="mdl-navigation__link" href="">Link</a>
              <a class="mdl-navigation__link" href="">Link</a>
              <a class="mdl-navigation__link" href="">Link</a>
              <a class="mdl-navigation__link" href="">Link</a>
            </nav>
          </div>
          <main class="mdl-layout__content">
            <div class="page-content">
               <Route exact path="/" render={props => <Home authenticated={this.state.isAuthenticated} {...props}/>} />
               <Route path="/login" render={(props) => <Login login={this.login} {...props}/>} />
            </div>
          </main>
        </div>
      </Router>


    );
  }
}

export default App;
