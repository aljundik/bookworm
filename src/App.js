import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';


const App = () => (
  <div className="ui container">
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  </div>);


export default App;
