import React from 'react';
import { Link, Route } from 'react-router-dom';

export default function(){
    return(
        <div>
            <h2>Food Options</h2>
            <li><Link to={{
                pathname: '/food/1',
                state: {
                    from: 'foods page',
                },
            }}>Pizza</Link></li>
            <Route path='/food/1' render={props=> {
                const {from} = props.location.state;
                return <h3>Pizza Selections from {from}</h3>
                }} />

            <li><Link to='/food/2'>Burgers</Link></li>
            <li><Link to='/food/3'>Salads</Link></li>
            <li><Link to='/food/4'>Drinks</Link></li>
        </div>
    )
}