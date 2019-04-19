import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../App.css';

const Navbar2 = (props) => {
    return(
        <nav className='nav-wrapper blue lighten-3 st'>
            <ul className='list st2'>
                <li><Link to='/Art'><h5>Art and Craft</h5></Link></li>
                <li><Link to='/Painting'><h5>Painting</h5></Link></li>
                <li><Link to='/Photography'><h5>Photography</h5></Link></li>
                <li><Link to='/Poems'><h5>Poems</h5></Link></li>
                <li><Link to='/Dance'><h5>Dance</h5></Link></li>
                <li><Link to='/Singing'><h5>Singing</h5></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar2;