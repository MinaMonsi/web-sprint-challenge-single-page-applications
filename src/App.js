import React from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom';


function Home(props){
  return<div></div>
}
function Food(props){
  return<h2>Food Selections</h2>
}
function Drinks(props){
  return<h2>Drink Selections</h2>
}


const App = () => {
  return (
    <BrowserRouter>
    <h1>Lambda Eats</h1>
    <Link to='/' style={{padding: 20}}>Home</Link>
    <Link to='/food' style={{padding: 20}}>Food</Link>
    <Link to='/drinks' style={{padding: 20}}>Drinks</Link>

    <Route path='/' component={Home}/>
    <Route path='/food' component={Food}/>
    <Route path='/drinks' component={Drinks}/>
    
    </BrowserRouter>
      

      
    
  
  );
};
export default App;
