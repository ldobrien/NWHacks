import React from 'react'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return(
        <nav className="nav-wrapper pink">
            <div className="container">
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/insurance">Insurance</NavLink></li>
                    <li><NavLink to="/preop">PreOp</NavLink></li>
                    <li><NavLink to="/postop">PostOp</NavLink></li>
                    <li><NavLink to="/personal">Personal</NavLink></li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar;