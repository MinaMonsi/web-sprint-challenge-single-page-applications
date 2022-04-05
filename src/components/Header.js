import React from "react";
import "../App.css"
import { useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();
    return(
        <div>
            <button className="button" onClick={(evt) => history.push(`/`)}>Home</button>
            <button className="button" onClick={(evt) => history.push(`/help`)}>Help</button>

        </div>
    )
}

export default Header;