import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => { 
    return( 
        <nav>
            <h1> AI </h1>
            <ul>
                <li>
                    <NavLink to = '/'> Home </NavLink>
                </li>
                <li>
                    <NavLink to = '/gpts'> GPTs </NavLink>
                </li>
                <li>
                    <NavLink to = "/faq"> FAQ </NavLink>
                </li>
            </ul>
        </nav>
    )
} ;

export default NavBar; 