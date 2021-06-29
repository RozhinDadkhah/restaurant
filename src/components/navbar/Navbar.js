import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './NavbarItems';


function Navbar({ toggle }) {
    return (
        <>
            <Nav>
                <NavLink to='/'>pizza</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
