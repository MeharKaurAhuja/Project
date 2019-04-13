import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

class Home extends Component {
    render(){
        return(
            <div className="main">
                <div className='home'>
                    <br /><br />
                    <span className='heading'>Welcome to WebSell!</span>
                    <h4 className='sub'>Connect, Share and Earn. </h4>
                </div>
                <div className='sub1'> Share your talents </div>
                <div className='card card1'>
                    <Carousel autoPlay="true" infiniteLoop="true" className="img1">
                        <img src="https://i.imgur.com/FN3XCHj.jpg" alt="painting"  />
                        <img src="https://i.imgur.com/m01a6wp.jpg" alt="painting"  />
                        <img src="https://i.imgur.com/W39vHto.jpg" alt="painting"  />
                    </Carousel>
                    <p className='text'> Lorem ipsum dolor sit amet, ad his alii mandamus, at qui amet suscipit dissentiet. Errem ceteros luptatum at vim, aeque perfecto pro an. Pro eu veniam iriure, ea iriure adipiscing efficiantur duo. Putant sadipscing eum ei, noster tamquam mnesarchum ut duo. Fugit graece laoreet nam ne, causae consectetuer in eos. Vix brute veniam equidem an, et vis velit quaeque, postulant adolescens et has.
                    </p>
                    <Carousel autoPlay="true" infiniteLoop="true" className="img2">
                        <img src="https://i.imgur.com/gSnNjmE.jpg" alt="writing" />
                         <img src="https://i.imgur.com/RJbGu7h.jpg" alt="writing" />
                         <img src="https://i.imgur.com/Lx1Ll5n.jpg" alt="writing" />
                    </Carousel>
                    <br /><br />
                    <p className='text'> Lorem ipsum dolor sit amet, ad his alii mandamus, at qui amet suscipit dissentiet. Errem ceteros luptatum at vim, aeque perfecto pro an. Pro eu veniam iriure, ea iriure adipiscing efficiantur duo. Putant sadipscing eum ei, noster tamquam mnesarchum ut duo. Fugit graece laoreet nam ne, causae consectetuer in eos. Vix brute veniam equidem an, et vis velit quaeque, postulant adolescens et has.
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;