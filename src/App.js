import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { Hooks, Effect, State, Context, Reducer } from './pages/Hooks';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/hooks' exact component={Hooks} />
          <Route path='/hooks/useeffect' exact component={Effect} />
          <Route path='/hooks/usestate' exact component={State} />
          <Route path='/hooks/usecontext' exact component={Context} />
          <Route path='/hooks/usereducer' exact component={Reducer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

