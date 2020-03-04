import React, { useState } from 'react';

import Login from './components/Login';
import Register from './components/Register';
import Header from './components/header';
import {Route, Link} from 'react-router-dom';
import AddRecipe from "./components/AddRecipe"
import SearchBar from "./components/SearchBar"
import Dashboard from "./components/Dashboard"


function App() {
  return (
    <div className="App">
      <div>
        <Link to='/dashboard'>Dashboard</Link>
      </div>
      <Header />
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
      <Route exact path='/dashboard' component={Dashboard}/>
      <Route exact path='/addrecipe' component={AddRecipe}/>
    </div>
  );
}

export default App;
