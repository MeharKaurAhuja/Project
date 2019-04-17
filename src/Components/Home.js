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
                <div className='sub1'> Categories </div>
                <div className='card card3'>
                <div className='row'>
                    <div className='col s3'>
                        <h4 className='im1'>Art and Craft</h4>
                        <Link to='/Art'><img className='image im' src='http://www.indialine.com/travel/images/wooden-handicrafts.jpg' onMouseOver={e => (e.currentTarget.src = "https://stylenrich.com/wp-content/uploads/2016/08/duct-tape-diy-cycle-basket-crafts-stylenrich.jpg")} onMouseOut={e => (e.currentTarget.src = "http://www.indialine.com/travel/images/wooden-handicrafts.jpg")} alt='art and craft' /></Link>
                    
                    </div>
                    <div className='col s3'>
                        <h4 className='im1'>Painting</h4>
                        <Link to='/Painting'><img className='image im' src='http://www.indialine.com/travel/images/madhubani-painting.jpg'
                        onMouseOver={e => (e.currentTarget.src = "https://315gqf1cb88e2qagu3f9xz91-wpengine.netdna-ssl.com/wp-content/uploads/2016/06/Harriet-Faith-FTR-Buck-350x250.jpg")} onMouseOut={e => (e.currentTarget.src = "http://www.indialine.com/travel/images/madhubani-painting.jpg")} alt='painting' /></Link>
                   
                   </div>
                    <div className='col s3'>
                        <h4 className='im1'>Photography</h4>
                        <Link to='/Photography'><img className='image im' src='https://cdn.firespring.com/images/781e971c-5e98-4f55-ae79-5f9a06176ac5.jpg' onMouseOver={e => (e.currentTarget.src = 'https://i.pinimg.com/originals/7f/33/eb/7f33ebf08f27713b51c51659a79da2dc.jpg')} onMouseOut={e => (e.currentTarget.src = "https://cdn.firespring.com/images/781e971c-5e98-4f55-ae79-5f9a06176ac5.jpg")} alt='photography' /></Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col s3'>
                        <h4 className='im1'>Poems</h4>
                        <Link to='/Poems'><img className='image im' src='https://i2.wp.com/www.multiculturallywed.com/wp-content/uploads/2015/08/Rumi-2667-Wedding-Vows-Persian-Wedding-Reading.jpg?fit=350%2C250' onMouseOver={e => (e.currentTarget.src = "https://bdayhindi.com/wp-content/uploads/Best-Happy-Birthday-Wishes-for-Lover-350x250.jpg")} onMouseOut={e => (e.currentTarget.src = "https://i2.wp.com/www.multiculturallywed.com/wp-content/uploads/2015/08/Rumi-2667-Wedding-Vows-Persian-Wedding-Reading.jpg?fit=350%2C250")} alt='poems' /></Link>
                    
                    </div>
                    <div className='col s3'>
                        <h4 className='im1'>Dance Videos</h4>
                        <Link to='/Dance'><img className='image im' src='https://orig00.deviantart.net/1631/f/2012/166/e/b/dance_animation_2_by_gray_gryphon-d53lxgr.gif' onMouseOver={e => (e.currentTarget.src = "https://gifimage.net/wp-content/uploads/2017/11/fusion-gif-1.gif")} onMouseOut={e => (e.currentTarget.src = "https://orig00.deviantart.net/1631/f/2012/166/e/b/dance_animation_2_by_gray_gryphon-d53lxgr.gif")} alt='dance' /></Link>
                   
                   </div>
                    <div className='col s3'>
                        <h4 className='im1'>Singing</h4>
                        <Link to='/Singing'><img className='image im' src='https://i.makeagif.com/media/3-24-2017/WXnA5S.gif' onMouseOver={e => (e.currentTarget.src = "https://i.imgur.com/Tdtz3VK.gif")} onMouseOut={e => (e.currentTarget.src = "https://i.makeagif.com/media/3-24-2017/WXnA5S.gif")} alt='singing' /></Link>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Home;