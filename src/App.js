import React from "react";
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Home from './components/Home'
import Food from './components/Food'
import Drinks from './components/Drinks'

const App = () => {
  return (
    <BrowserRouter>
    <div>
    <h1>Lambda Eats</h1>
    <Link to='/' style={{padding: 20}}>Home</Link>
    <Link to='/food' style={{padding: 20}}>Food</Link> 
    <Link to='/drinks' style={{padding: 20}}>Drinks</Link>

    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/food' component={Food}/> 
    <Route path='/drinks' component={Drinks}/>
    </Switch>
    </div>
    </BrowserRouter>
  );
};
export default App;
