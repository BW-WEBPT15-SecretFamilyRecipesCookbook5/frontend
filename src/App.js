import React from 'react';
import Login from './components/Login';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path='/login' component={Login}/>
      {/* <Route exact path='/login' component={Register}/> */}
    </div>
  );
}

export default App;
