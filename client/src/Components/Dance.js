import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Comment1 from './Comment1';
import AddComment1 from './AddComment1';
import '../App.css';
import Navbar2 from './Navbar2';

class Dance extends React.Component {
    state = {
        img1: [1,219,'LIKE'],
        img2: [2,167,'LIKE'],
        img3: [3,200,'LIKE'],
        img4: [4,289,'LIKE'],
        img5: [5,67,'LIKE'],
        img6: [6,543,'LIKE'],
        comments: [
          { text:'I love this place', id: 1 }
        ],
        showComm: false
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    handleComm = () => {
        if(this.state.showComm===true){
            this.setState({
                showComm:false
            })
        }
        else{
            this.setState({
                showComm:true
            })
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
      addComment = (comment) => {
        console.log('Inside App Component', comment);
        comment.id = Math.floor(Math.random() * 10);
        console.log(comment.id);
        let comments = [...this.state.comments, comment];
        this.setState({
          comments
        })
      }
    render() {
        return (
            <div>
            <Navbar2 />
            <div className="card4">
            <h1 className='heading'>Dance</h1>
            <div className='row'>
                <div className='col m6'>
                    <div className="detail3">
                        <img src="https://media.giphy.com/media/Gt1IikDkRnLe8/giphy.gif" />
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
                        <img className='image1 im2' src='https://media.giphy.com/media/KHMMyhiKTf92E/giphy.gif' alt='pic1' />
                        <input type="button" value={this.state.img1[2]} className="like1" onClick={this.handleClick.bind(this,this.state.img1)} />
                        <span className='like'> {this.state.img1[1]} </span>

                        <input type="button" value="Show Comments" className='like1' onClick={this.handleComm}/>


                        <br /><br />

                        <div className='comm1'>
                            {this.state.showComm ? (
                            <div>
                                <Comment1 comments = {this.state.comments}/>

                            </div>) :
                            (null)}
                                <br />
                            <AddComment1 addComment={this.addComment} /><br />
                            
                        </div>
                    
                    </div>
                    <div className='col s3'>
                        <img className='image1 im2' src='https://media1.tenor.com/images/258c33570e1e4ba2dbdb9e8dd435701d/tenor.gif?itemid=4059586' alt='pic1' />
                        <input type="button" value={this.state.img2[2]} className="like1" onClick={this.handleClick.bind(this,this.state.img2)} />
                        <span className='like'> {this.state.img2[1]} </span>

                        <input type="button" value="Show Comments" className='like1' onClick={this.handleComm}/>


                        <br /><br />

                        <div className='comm1'>
                            {this.state.showComm ? (
                            <div>
                                <Comment1 comments = {this.state.comments}/>

                            </div>) :
                            (null)}
                                <br />
                            <AddComment1 addComment={this.addComment} /><br />
                            
                        </div>
                   </div>
                    <div className='col s3'>
                        <img className='image1 im2' src='https://i.imgur.com/1zibF2J.gif' alt='pic1' />
                        <input type="button" value={this.state.img3[2]} className="like1" onClick={this.handleClick.bind(this,this.state.img3)} />
                        <span className='like'> {this.state.img3[1]} </span>

                        <input type="button" value="Show Comments" className='like1' onClick={this.handleComm}/>


                        <br /><br />

                        <div className='comm1'>
                            {this.state.showComm ? (
                            <div>
                                <Comment1 comments = {this.state.comments}/>

                            </div>) :
                            (null)}
                                <br />
                            <AddComment1 addComment={this.addComment} /><br />
                            
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col s3'>
                        <img className='image1 im2' src='https://media1.tenor.com/images/e0e86e41a53e4dd5c034164e7f0c3004/tenor.gif?itemid=5894447' alt='pic1' />
                        <input type="button" value={this.state.img4[2]} className="like1" onClick={this.handleClick.bind(this,this.state.img4)} />
                        <span className='like'> {this.state.img4[1]} </span>

                        <input type="button" value="Show Comments" className='like1' onClick={this.handleComm}/>


                        <br /><br />

                        <div className='comm1'>
                            {this.state.showComm ? (
                            <div>
                                <Comment1 comments = {this.state.comments}/>

                            </div>) :
                            (null)}
                                <br />
                            <AddComment1 addComment={this.addComment} /><br />
                            
                        </div>
                    </div>
                    <div className='col s3'>
                        <img className='image1 im2' src='https://i.gifer.com/MNAg.gif' alt='pic1' />
                        <input type="button" value={this.state.img5[2]} className="like1" onClick={this.handleClick.bind(this,this.state.img5)} />
                        <span className='like'> {this.state.img5[1]} </span>

                        <input type="button" value="Show Comments" className='like1' onClick={this.handleComm}/>


                        <br /><br />

                        <div className='comm1'>
                            {this.state.showComm ? (
                            <div>
                                <Comment1 comments = {this.state.comments}/>

                            </div>) :
                            (null)}
                                <br />
                            <AddComment1 addComment={this.addComment} /><br />
                            
                        </div>
                   </div>
                    <div className='col s3'>
                        <img className='image1 im2' src='https://data.whicdn.com/images/272973421/original.gif' alt='pic1' />
                        <input type="button" value={this.state.img6[2]} className="like1" onClick={this.handleClick.bind(this,this.state.img6)} />
                        <span className='like'> {this.state.img6[1]} </span>

                        <input type="button" value="Show Comments" className='like1' onClick={this.handleComm}/>


                        <br /><br />

                        <div className='comm1'>
                            {this.state.showComm ? (
                            <div>
                                <Comment1 comments = {this.state.comments}/>

                            </div>) :
                            (null)}
                                <br />
                            <AddComment1 addComment={this.addComment} /><br />
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Dance;