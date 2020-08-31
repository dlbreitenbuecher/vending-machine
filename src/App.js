import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Popcorn from './Popcorn'
import Cookies from './Cookies';
import SecondHandClothing from './SecondHandClothing';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path='/popcorn'>
        <Popcorn />
      </Route>
      <Route exact path='/cookies'>
        <Cookies />
      </Route>
      <Route exact path='/second-hand-clothing'>
        <SecondHandClothing />
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
