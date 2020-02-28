import React from 'react';
import { useState } from 'react';
// import './App.css';
import AddRecipe from "./components/AddRecipe"
import SearchBar from "./components/SearchBar"

function App() {
  return (
    <div className="App">
      <SearchBar />
      <br></br>
      <AddRecipe />
    </div>
  );
}

export default App;
