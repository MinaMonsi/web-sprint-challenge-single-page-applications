import React from "react";
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Food from './components/Food';
import Drinks from './components/Drinks';


const App = () => {
  return (
    <BrowserRouter>

    <div class="lambdaApp">
      <Header /> 
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
