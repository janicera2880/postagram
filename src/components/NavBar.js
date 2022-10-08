import React from "react";
import { Link } from "react-router-dom";

function NavBar () {

    return (

        <div className="navbar">
            <nav>
                <Link to="/">Home</Link>
                
                <Link to="/Login">Login</Link>
                
                <Link to="/Postcards">Search</Link>
               
                <Link to='/Postcardform'>Upload</Link>
            </nav>
        </div>
    )
}
export default NavBar;