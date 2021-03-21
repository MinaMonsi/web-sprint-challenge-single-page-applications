import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
import "./index.css";
import App from "./App";

//wrapped app in <BrowserRouter> so that it doesn't have to be used in app
ReactDOM.render(<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById("root"));
