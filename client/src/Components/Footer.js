import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../App.css';

// using props sent from another component in this function
const Footer = (props) => {
    
    // it returns footer in all webpages with the help of withRouter
    return(
        <footer className='page-footer grey darken-4'>
             <div className="container">
                <div className="row">
                    <div className="col l3 s12">
                        <div className='left'>
                        <h3 className="white-text ">WebSell</h3>
                        <h5 className="grey-text text-lighten-4">Connect, Share and Learn.</h5><br />
                        </div>
                    </div>
                    <div className="col l3 offset-l2 s12">
                        <h5 className="white-text left">Categories</h5>
                        <ul className='category'>
                            <br /><br />
                            <Link to='/Art'><li className="grey-text text-lighten-3 left">Art and Craft</li></Link><br />
                            <Link to='/Painting'><li className="grey-text text-lighten-3 left">Painting</li></Link><br />
                            <Link to='/Photography'><li className="grey-text text-lighten-3 left">Photography</li></Link><br />
                            <Link to='/Poems'><li className="grey-text text-lighten-3 left">Poems</li></Link><br />
                            <Link to='/Dance'><li className="grey-text text-lighten-3 left">Dance</li></Link><br />
                            <Link to='/Singing'><li className="grey-text text-lighten-3 left">Singing</li></Link><br />
                        </ul>
                    </div>
                    <div className="col l3 offset-l1 s12 left">
                        <h5 className="white-text left">Follow Us</h5>
                        <ul>
                            <br /><br />
                            <a href='https://www.instagram.com/'><li><img className='icons left' src='http://www.logospng.com/images/92/acheter-des-vues-instagram-followerspascher-92279.png' /></li></a>
                            <a href='https://twitter.com/'><li><img className='icons left' src='http://www.pngall.com/wp-content/uploads/2016/07/Twitter-Download-PNG.png' /></li></a>
                            <a href='https://www.snapchat.com/'><li><img className='icons left' src='http://pngimg.com/uploads/snapchat/snapchat_PNG60.png' /></li></a>
                            <a href='https://www.facebook.com/'><li><img className='icons left' src='http://www.iconarchive.com/download/i49148/yootheme/social-bookmark/social-facebook-button-blue.ico' /></li></a>
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