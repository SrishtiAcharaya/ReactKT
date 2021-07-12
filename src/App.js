import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import { Hooks, Effect, State, Context, Reducer, CustomHooks } from './pages/Hooks';
import { Components, Navigation, RouteMatchers, Router } from './pages/Router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route path='/router' exact component = {Router} />
          <Route path='/router/components' exact component= {Components} />
          <Route path='/router/routematchers' exact component= {RouteMatchers} />
          <Route path='/router/navigation' exact component= {Navigation} />
          <Route path='/hooks' exact component={Hooks} />
          <Route path='/hooks/useeffect' exact component={Effect} />
          <Route path='/hooks/usestate' exact component={State} />
          <Route path='/hooks/usecontext' exact component={Context} />
          <Route path='/hooks/usereducer' exact component={Reducer} />
          <Route path='/hooks/CustomHooks' exact component={CustomHooks} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

