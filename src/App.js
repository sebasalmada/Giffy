import React from 'react';

import Home from './pages/Home'

import { Route, Link } from 'wouter'
import './App.css';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail'

function App() {
  return (
    <div className='App'>
      <Link to='/'>
        <h1>GIFFY</h1>
      </Link>
      <Route
        component={Home}
        path='/'
      />
      <Route
        component={SearchResults}
        path='/search/:keyword'
      />
      <Route
        component={Detail}
        path='/gif/:id'
      />
    </div>
  );
}

export default App;
