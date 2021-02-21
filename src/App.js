import './App.css';
import React from 'react';
import MovieApp from './components/MovieApp';
import Details from './components/Details';
import { Route, Switch } from 'react-router-dom';
function App() {
    
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MovieApp} />
        <Route path="/movie/:id" component={Details} /> 
      </Switch>
    </div>
  );
}

export default App;
