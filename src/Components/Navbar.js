import React from 'react'
import ScrollableTabsButtonForce from './ScrollTabs'
import 'materialize-css/dist/css/materialize.min.css'

const Navbar = () => {
    return(
        <nav className="nav-wrapper blue-grey">
            <div className="container">
                <ScrollableTabsButtonForce/>
            </div>
        </nav>
    )
};

export default Navbar;