import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/Home';
import Private from './components/private/Private'
import Edit from './components/private/Edit';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <a href={process.env.REACT_APP_LOGIN}><button>LOGIN</button></a> */}
        <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/private" component={Private} />
        <Route path="/edit" component={Edit} />
        </Switch>
      </div>
    );
  }
}

export default App;
