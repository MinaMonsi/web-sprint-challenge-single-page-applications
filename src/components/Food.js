import React from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import PizzaForm from './PizzaForm'

export default function Food(){
    return(
        <BrowserRouter>
        <div>
            <ul>
                <Link to='/form' style={{padding: 20}}>Pizza</Link>
                <Link to='/form'style={{padding: 20}}>Burgers</Link>
                <Link to='/form'style={{padding: 20}}>Salads</Link>
            </ul>

            <Switch>
            <Route path='/form' component={PizzaForm}/>
            </Switch>
            
        </div>
        </BrowserRouter>
    )
}