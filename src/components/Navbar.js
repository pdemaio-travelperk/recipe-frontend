import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav>
            <Link to="/">List</Link>
            <Link to="/new">Add</Link>
        </nav>
    );
}

export default Navbar;