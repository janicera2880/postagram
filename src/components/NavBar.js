import React from "react";
import { Link } from "react-router-dom";

function NavBar () {

    return (

        <div classname="navbar">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Postcards">Search Destination</Link>
                <Link to='/Postcardform'>Upload New Postagram</Link>
            </nav>
        </div>
    )
}
export default NavBar;