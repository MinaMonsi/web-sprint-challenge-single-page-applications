import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

const Header = () => {
    
    return(
        <div>
            <header>
                <h1>Lambda Eats</h1>
            </header>

            <Link to='/' style={{padding: 20}}>Home</Link>
            <Link to='/food' style={{padding: 20}}>Food</Link> 
            <Link to='/drinks' style={{padding: 20}}>Drinks</Link>

        </div>
    )
}

export default Header;