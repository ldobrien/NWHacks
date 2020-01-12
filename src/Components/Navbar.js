import React from 'react'
import ScrollableTabsButtonForce from './ScrollTabs'
import 'materialize-css/dist/css/materialize.min.css'
import './Navbar.css'

const Navbar = () => {
    return(
        <nav className="nav-wrapper dark-blue">
            <div className="container">
                <ScrollableTabsButtonForce/>
            </div>
        </nav>
    )
};

export default Navbar;