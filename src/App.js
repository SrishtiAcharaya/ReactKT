import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Hooks from './pages/Hooks';
import { Types, Effect, State, Context, Reducer } from './pages/Types';
import Rules from './pages/Rules';
import CustomHooks from './pages/CustomHooks';
import Example from './pages/Example';



function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/hooks' exact component={Hooks} />
          <Route path='/types' exact component={Types} />
          <Route path='/types/effect' exact component={Effect} />
          <Route path='/types/effect/example' exact component={Example} />
          <Route path='/types/state' exact component={State} />
          <Route path='/types/context' exact component={Context} />
          <Route path='/types/reducer' exact component={Reducer} />
          <Route path='/rules' exact component={Rules} />
          <Route path='/customhooks' exact component={CustomHooks} />    
        </Switch>
      </Router>
    </div>
  );
}

export default App;

