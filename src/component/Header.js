import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Homepage from "./Homepage";

function Header(){
   return(
    <header className="header">
        <div className="logo">
            <img src='/images/logo.png' alt="Website Logo" />
        </div>
        <div>
            <h1>Company Name</h1>
        </div>
        
        <Router>
            <Switch>
                <Route path="/">
                    <Homepage />
                </Route>
            </Switch>
        </Router>


    </header>
   );

}


export default Header;