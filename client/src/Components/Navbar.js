import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../App.css';

// using props sent from another component in this function
const Navbar = (props) => {
    
    // it returns navbar in all pages with the help of withRouter
    return(
        <nav className='nav-wrapper grey darken-4 st'>
            <Link to='/' className='left logo'> WebSell </Link>
            <ul className='right list'>
                <li><Link to='/'><h5>Home</h5></Link></li>
                <li><Link to='/Login'><h5>Login</h5></Link></li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar);