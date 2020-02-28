import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/header';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/login' component={Login}/>
      <Route exact path='/register' component={Register}/>
    </div>
  );
}

export default App;
