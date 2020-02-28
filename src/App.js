import React from 'react';

import Login from './components/Login';
import Register from './components/Register';
import Header from './components/header';
import {Route, Link} from 'react-router-dom';

import { useState } from 'react';
import AddRecipe from "./components/AddRecipe"
import SearchBar from "./components/SearchBar"


function App() {
  return (
    <div className="App">

      <Header />
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
      <SearchBar />
      <br></br>
      <AddRecipe />

    </div>
  );
}

export default App;
