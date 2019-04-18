import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../App.css';

const Footer = (props) => {
    return(
        <footer className='page-footer grey darken-4'>
             <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <div className='left'>
                        <h4 className="white-text ">WebSell</h4>
                        <h5 className="grey-text text-lighten-4">Connect, Share and Learn.</h5><br />
                        </div>
                    </div>
                    <div className="col l3 offset-l3 s12">
                        <h5 className="white-text left">Categories</h5>
                        <ul>
                            <br /><br />
                            <Link to='/Art'><li className="grey-text text-lighten-3 left">Art and Craft</li></Link><br />
                            <Link to='/Painting'><li className="grey-text text-lighten-3 left">Painting</li></Link><br />
                            <Link to='/Photography'><li className="grey-text text-lighten-3 left">Photography</li></Link><br />
                            <Link to='/Poems'><li className="grey-text text-lighten-3 left">Poems</li></Link><br />
                            <Link to='/Dance'><li className="grey-text text-lighten-3 left">Dance</li></Link><br />
                            <Link to='/Singing'><li className="grey-text text-lighten-3 left">Singing</li></Link><br />
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2019 Copyright Text
                </div>
            </div>
        </footer>
    )
}

export default withRouter(Footer);