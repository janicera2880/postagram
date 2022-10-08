import React from "react";
import { Link } from "react-router-dom";

function NavBar () {

    return (

        <div className="navbar">
            <nav>
                <Link to="/">Home</Link>
                <br></br>
                <Link to="/Login">Login</Link>
                <br></br>
                <Link to="/Postcards">Search</Link>
                <br></br>
                <Link to='/Postcardform'>Upload</Link>
            </nav>
        </div>
    )
}
export default NavBar;