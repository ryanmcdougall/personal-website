import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './reset.css';
import './App.css'
import './Project.css'
import Home from './components/Home';
import Kahoot from './components/Kahoot';
import MPS from './components/MPS';
import Concentration from './components/Concentration'
import Randomizer from'./components/Randomizer'


class App extends Component {

  render() {
    return (
      <div className="App">
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/kwizz' component={Kahoot} />
        <Route path='/MPS' component={MPS} />
        <Route path='/Concentration' component={Concentration} />
        <Route path='/Randomizer' component={Randomizer} />
      </Switch>
        </div>
    );
  }
}

export default App;
