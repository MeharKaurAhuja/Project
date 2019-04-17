import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../App.css';

const Navbar = (props) => {
    return(
        <nav className='nav-wrapper grey darken-4 st'>
            <Link to='/' className='left logo'> WebSell </Link>
            <ul className='right list'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Login'>Login</Link></li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar);