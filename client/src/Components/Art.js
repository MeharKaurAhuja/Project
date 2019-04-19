import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Comment1 from './Comment1';
import AddComment1 from './AddComment1';
import Navbar2 from './Navbar2';
import '../App.css';

class Art extends React.Component {
    state = {
        img1: [1,219,'LIKE'],
        img2: [2,167,'LIKE'],
        img3: [3,200,'LIKE'],
        img4: [4,289,'LIKE'],
        img5: [5,67,'LIKE'],
        img6: [6,543,'LIKE'],
        comments1: [
          { text:'nice', id: 1 }
        ],
        comments2: [{text:'wow!', id: 1 }],
        comments3: [
          { text:'nice work', id: 1 }
        ],
        comments4: [
          { text:'love it!', id: 1 }
        ],
        comments5: [{text:'admirable!', id: 1 }],
        comments6: [
          { text:'admirable!', id: 1 }
        ],
        showComm1: [false,1],
        showComm2: [false,2],
        showComm3: [false,3],
        showComm4: [false,4],
        showComm5: [false,5],
        showComm6: [false,6],
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    handleComm = (e,param) => {
        console.log(e);
        if(e[0]===true){
            if(e[1]===1){
                this.setState({
                    showComm1:[false,1]
                })
            }
            else if(e[1]===2){
                this.setState({
                    showComm2:[false,2]
                })
            }
            else if(e[1]===3){
                this.setState({
                    showComm3:[false,3]
                })
            }
            else if(e[1]===4){
                this.setState({
                    showComm4:[false,4]
                })
            }
            else if(e[1]===5){
                this.setState({
                    showComm5:[false,5]
                })
            }
            else{
                this.setState({
                    showComm6:[false,6]
                })
            }
        }
        else{
            if(e[1]===1){
                console.log("hello");
                this.setState({
                    showComm1:[true,1]
                })
            }
            else if(e[1]===2){
                this.setState({
                    showComm2:[true,2]
                })
            }
            else if(e[1]===3){
                this.setState({
                    showComm3:[true,3]
                })
            }
            else if(e[1]===4){
                this.setState({
                    showComm4:[true,4]
                })
            }
            else if(e[1]===5){
                this.setState({
                    showComm5:[true,5]
                })
            }
            else{
                this.setState({
                    showComm6:[true,6]
                })
            }
        }
    }
    handleClick = (e,param) => {
       //console.log('Clicked', e[0]);
       
        
        if(e[2]==='LIKE'){
            const inc = e[1]+1;
            
            if(e[0]===1){
                this.setState({
                    img1: [1,inc,'UNLIKE']
                })
            }
            else if(e[0]===2){
                this.setState({
                    img2: [2,inc,'UNLIKE']
                })  
            }
            else if(e[0]===3){
                this.setState({
                    img3: [3,inc,'UNLIKE']
                })  
            }
            else if(e[0]===4){
                this.setState({
                    img4: [4,inc,'UNLIKE']
                })  
            }
            else if(e[0]===5){
                this.setState({
                    img5: [5,inc,'UNLIKE']
                })  
            }
            else{
                this.setState({
                img6: [6,inc,'UNLIKE']
                })
            }
        }
        
        else{
            const dec = e[1]-1;
            if(e[0]===1){
                this.setState({
                    img1: [1,dec,'LIKE']
                })  
            }
            else if(e[0]===2){
                this.setState({
                    img2: [2,dec,'LIKE']
                })  
            }
            else if(e[0]===3){
                this.setState({
                    img3: [3,dec,'LIKE']
                })  
            }
            else if(e[0]===4){
                this.setState({
                    img4: [4,dec,'LIKE']
                })  
            }
            else if(e[0]===5){
                this.setState({
                    img5: [5,dec,'LIKE']
                })  
            }
            else{
                this.setState({
                    img6: [6,dec,'LIKE']
                })
            }
        }
    
        }
      addComment1 = (comment) => {
        comment.id = Math.floor(Math.random() * 10);
        let comments1 = [...this.state.comments1, comment];
        this.setState({
          comments1
        })
      }
      addComment2 = (comment) => {
        comment.id = Math.floor(Math.random() * 10);
        let comments2 = [...this.state.comments2, comment];
        this.setState({
          comments2
        })
      }
      addComment3 = (comment) => {
        comment.id = Math.floor(Math.random() * 10);
        let comments3 = [...this.state.comments3, comment];
        this.setState({
          comments3
        })
      }
      addComment4 = (comment) => {
        comment.id = Math.floor(Math.random() * 10);
        let comments4 = [...this.state.comments4, comment];
        this.setState({
          comments4
        })
      }
      addComment5 = (comment) => {
        comment.id = Math.floor(Math.random() * 10);
        let comments5 = [...this.state.comments5, comment];
        this.setState({
          comments5
        })
      }
      addComment6 = (comment) => {
        comment.id = Math.floor(Math.random() * 10);
        let comments6 = [...this.state.comments6, comment];
        this.setState({
          comments6
        })
      }
    render() {
        return (
            <div>
            <Navbar2 />
            <div className="card4">
            <h1 className='heading'>Art And Craft</h1>
            <div className='row'>
                <div className='col m6'>
                    <div className="detail3">
                        <img src="https://cdn.firstcrycdn.com/2018/07/514855921-H.jpg" alt="oops! not available" />
                    </div>
                </div>
                <div className='col m6'>
                    <p className="detail4">Lorem ipsum dolor sit amet, vix nostro docendi ad. Facilis suscipit abhorreant mel eu, idque maluisset corrumpit cu mel. Nostrud fuisset democritum no mel, pri ornatus ullamcorper eu. Has vocibus luptatum inciderint id, vel ut dolore quodsi pertinax.Lorem ipsum dolor sit amet, vix nostro docendi ad. Facilis suscipit abhorreant mel eu, idque maluisset corrumpit cu mel. Nostrud fuisset democritum no mel, pri ornatus ullamcorper eu. Has vocibus luptatum inciderint id, vel ut dolore quodsi pertinax.<br/>
                    Lorem ipsum dolor sit amet, vix nostro docendi ad. Facilis suscipit abhorreant mel eu, idque maluisset corrumpit cu mel. Nostrud fuisset democritum no mel, pri ornatus ullamcorper eu. Has vocibus luptatum inciderint id, vel ut dolore quodsi pertinax.Lorem ipsum dolor sit amet, vix nostro docendi ad. Facilis suscipit abhorreant mel eu, idque maluisset corrumpit cu mel. Nostrud fuisset democritum no mel, pri ornatus ullamcorper eu. Has vocibus luptatum inciderint id, vel ut dolore quodsi pertinax.
                    
                    </p>
                    <br />
                </div>
            </div>
            <br />
            <div className='row'>
                    <div className='col s3'>
                        <img className='image1 im2' src='https://www.addtoevent.co.uk/sites/default/files/styles/one_third/public/wooden%20spoons%20and%20puppet%20crafts.jpg' alt='pic1' />
                        <input type="button" value={this.state.img1[2]} className="like1" onClick={this.handleClick.bind(this,this.state.img1)} />
                        <span className='like'> {this.state.img1[1]} </span>

                        <input type="button" value="Show Comments" className='like1' onClick={this.handleComm.bind(this,this.state.showComm1)}/>


                        <br /><br />

                        <div className='comm1'>
                            {this.state.showComm1[0] ? (
                            <div>
                                <Comment1 comments = {this.state.comments1}/>

                            </div>) :
                            (null)}
                                <br />
                            <AddComment1 addComment={this.addComment1} /><br />
                            
                        </div>
                    
                    </div>
                    <div className='col s3'>
                        <img className='image1 im2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0pmGkiKhWnGg-2dy2GH1Xj8GdyHqwLgtcAmEfuPb0pj7slJRJsw' alt='pic1' />
                        <input type="button" value={this.state.img2[2]} className="like1" onClick={this.handleClick.bind(this,this.state.img2)} />
                        <span className='like'> {this.state.img2[1]} </span>

                        <input type="button" value="Show Comments" className='like1' onClick={this.handleComm.bind(this,this.state.showComm2)}/>


                        <br /><br />

                        <div className='comm1'>
                            {this.state.showComm2[0] ? (
                            <div>
                                <Comment1 comments = {this.state.comments2}/>

                            </div>) :
                            (null)}
                                <br />
                            <AddComment1 addComment={this.addComment2} /><br />
                            
                        </div>
                   </div>
                    <div className='col s3'>
                        <img className='image1 im2' src='http://charitywings.org/wp-content/uploads/2018/03/star-string-art-400x250.jpg' alt='pic1' />
                        <input type="button" value={this.state.img3[2]} className="like1" onClick={this.handleClick.bind(this,this.state.img3)} />
                        <span className='like'> {this.state.img3[1]} </span>

                        <input type="button" value="Show Comments" className='like1' onClick={this.handleComm.bind(this,this.state.showComm3)}/>


                        <br /><br />

                        <div className='comm1'>
                            {this.state.showComm3[0] ? (
                            <div>
                                <Comment1 comments = {this.state.comments3}/>

                            </div>) :
                            (null)}
                                <br />
                            <AddComment1 addComment={this.addComment3} /><br />
                            
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col s3'>
                        <img className='image1 im2' src='https://colourfulminds.co.uk/wp-content/uploads/2017/12/img_4334-400x250.jpg' alt='pic1' />
                        <input type="button" value={this.state.img4[2]} className="like1" onClick={this.handleClick.bind(this,this.state.img4)} />
                        <span className='like'> {this.state.img4[1]} </span>

                        <input type="button" value="Show Comments" className='like1' onClick={this.handleComm.bind(this,this.state.showComm4)}/>


                        <br /><br />

                        <div className='comm1'>
                            {this.state.showComm4[0] ? (
                            <div>
                                <Comment1 comments = {this.state.comments4}/>

                            </div>) :
                            (null)}
                                <br />
                            <AddComment1 addComment={this.addComment4} /><br />
                            
                        </div>
                    </div>
                    <div className='col s3'>
                        <img className='image1 im2' src='https://i.pinimg.com/originals/b5/0e/d5/b50ed5983f792a86ebca6614a5dcbcd3.jpg' alt='pic1' />
                        <input type="button" value={this.state.img5[2]} className="like1" onClick={this.handleClick.bind(this,this.state.img5)} />
                        <span className='like'> {this.state.img5[1]} </span>

                        <input type="button" value="Show Comments" className='like1' onClick={this.handleComm.bind(this,this.state.showComm5)}/>


                        <br /><br />

                        <div className='comm1'>
                            {this.state.showComm5[0] ? (
                            <div>
                                <Comment1 comments = {this.state.comments5}/>

                            </div>) :
                            (null)}
                                <br />
                            <AddComment1 addComment={this.addComment5} /><br />
                            
                        </div>
                   </div>
                    <div className='col s3'>
                        <img className='image1 im2' src='http://www.cartoondistrict.com/wp-content/uploads/2017/09/fun-art-and-craft-ideas-for-kids-400x250.jpg' alt='pic1' />
                        <input type="button" value={this.state.img6[2]} className="like1" onClick={this.handleClick.bind(this,this.state.img6)} />
                        <span className='like'> {this.state.img6[1]} </span>

                        <input type="button" value="Show Comments" className='like1' onClick={this.handleComm.bind(this,this.state.showComm6)}/>


                        <br /><br />

                        <div className='comm1'>
                            {this.state.showComm6[0] ? (
                            <div>
                                <Comment1 comments = {this.state.comments6}/>

                            </div>) :
                            (null)}
                                <br />
                            <AddComment1 addComment={this.addComment6} /><br />
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Art;
