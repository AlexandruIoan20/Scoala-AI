import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => { 
    return( 
        <nav>
            <h1> AI </h1>
            <ul className="navbar-ul">
                <li>
                    <NavLink to = '/'> Acasa </NavLink>
                </li>
                <li>
                    <NavLink to = '/gpts'> GPTs </NavLink>
                </li>
                <li>
                    <NavLink to = '/general'> Informatii </NavLink>
                </li>
                <li>
                    <NavLink to = "/faq"> FAQ </NavLink>
                </li>
                <li>
                    <NavLink to = "/gpts/create"> P: Create </NavLink>
                </li>
            </ul>
        </nav>
    )
} ;

export default NavBar; 