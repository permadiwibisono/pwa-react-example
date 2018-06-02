import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router';
import { Link, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const history = createBrowserHistory();

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
      <p className="App-intro">
        This is the {title} page.
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/settings">Settings</Link>
      </p>
      <p>
        <Link to="/contacts">Contacts</Link>
      </p>
    </div>
);

const Home = (props) => (
  <Page title="Home"/>
);

const About = (props) => (
  <Page title="About"/>
);

const Settings = (props) => (
  <Page title="Settings"/>
);

const Contacts = (props) => (
  <Page title="Contacts"/>
);

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/dashboard" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/settings" component={Settings}/>
          <Route exact path="/contacts" component={Contacts}/>
          <Redirect from="/" to="/dashboard"/>
        </Switch>
      </Router>
    );
  }
}

export default App;