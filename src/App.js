import React from 'react';
import {Switch , Router} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage=()=>{
  return(
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}

function App() {
  return (
    <div >
      <Switch>
        <Router exact path='/' component={HomePage}/>
        <Router path='/hats' component={HatsPage}/>
      </Switch> 
    </div>  
  );
}

export default App;
