import React from "react";
import {Link} from "react-router-dom";
import {Nav, NavLink} from "../common/styled";

function Navbar() {

    return (
        <Nav>
            <NavLink><Link to="/">List</Link></NavLink>
        <NavLink><Link to="/new">Add</Link></NavLink>
        </Nav>
    );
}

export default Navbar;