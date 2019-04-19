import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Comment from './Comment';
import AddComment from './AddComment';
import Upload from './Upload';
import '../App.css';


class Timeline extends Component {   
    state = {
        img1: [1,219,'LIKE'],
        img2: [2,167,'LIKE'],
        img3: [3,200,'LIKE'],
        comments1: [
          { name: 'Jim', text:'I love this place', id: 1 }
        ],
        comments2: [
          { name: 'Ria', text:'Wow!', id: 2 }
        ],
        comments3: [
          { name: 'Arun', text:'Great work!', id: 3 }
        ],
        showComm1: [false,1],
        showComm2: [false,2],
        showComm3: [false,3]
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    handleComm = (e,param) => {
        console.log('Clicked', e);
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
            else{
                this.setState({
                    showComm3:[false,3]
                })
            }
        }
        else{
            if(e[1]===1){
                this.setState({
                    showComm1:[true,1]
                })
            }
            else if(e[1]===2){
                this.setState({
                    showComm2:[true,2]
                })
            }
            else{
                this.setState({
                    showComm3:[true,3]
                })
            }
        }
    }
    handleDetail1 = () => {
         this.props.history.push("/Details1");
    }
    handleDetail2 = () => {
         this.props.history.push("/Details2");
    }
    handleDetail3 = () => {
         this.props.history.push("/Details3");
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
            else{
                this.setState({
                img3: [3,inc,'UNLIKE']
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
            else{
                this.setState({
                    img3: [3,dec,'LIKE']
                })
            }
        }
    
        }
      addComment1 = (comment) => {
        console.log('Inside App Component', comment);
        comment.id = Math.floor(Math.random() * 10);
        console.log(comment.id);
        let comments1 = [...this.state.comments1, comment];
        this.setState({
          comments1
        })
      }
      addComment2 = (comment) => {
        console.log('Inside App Component', comment);
        comment.id = Math.floor(Math.random() * 10);
        console.log(comment.id);
        let comments2 = [...this.state.comments2, comment];
        this.setState({
          comments2
        })
      }
      addComment3 = (comment) => {
        console.log('Inside App Component', comment);
        comment.id = Math.floor(Math.random() * 10);
        console.log(comment.id);
        let comments3 = [...this.state.comments3, comment];
        this.setState({
          comments3
        })
      }
       
    render() {
        return (
        <div className="backImage">
            <br/>
            <h2 className="heythere">Hey there!</h2>
            <div className='card card2'>
                <div className="timeline-page">
                     <Upload />
                    <br />
                    <Link to='/Details1'><img className="time" src="https://i.imgur.com/5G0SJtn.jpg" alt="oops! not available" /></Link>
                    <br />
                    <br />
                
                    <input type="button" value={this.state.img1[2]} className="like" onClick={this.handleClick.bind(this,this.state.img1)} />
                    <span className='like'> {this.state.img1[1]} </span>

                    <input type="button" value="Show Comments" className='like' onClick={this.handleComm.bind(this,this.state.showComm1)}/>
                    <input type="button" value="Details" className="like" onClick={this.handleDetail1} />

                    {this.state.showComm1[0] ? (
                        <div>
                            <Comment comments = {this.state.comments1}/><br />
                        
                        </div>) :
                    (null)}
                    <div className='AddComment1'>
                    <AddComment addComment={this.addComment1} /><br /><br />
                    </div>
                
                    <br />
                    <br />
                    <Link to='/Details2'><img className="time" src="https://i.imgur.com/5G0SJtn.jpg" alt="oops! not available" /></Link>
                    <br />
                    <br />
                
                    <input type="button" value={this.state.img2[2]} className="like" onClick={this.handleClick.bind(this,this.state.img2)} />
                    <span className="like"> {this.state.img2[1]} </span>
                    <input type="button" value="Show Comments" className='like' onClick={this.handleComm.bind(this,this.state.showComm2)}/>
                    <input type="button" value="Details" className="like" onClick={this.handleDetail2} />    
                        
                    {this.state.showComm2[0] ? (
                        <div>
                            <Comment comments = {this.state.comments2}/><br />
                        
                        </div>) :
                    (null)}
                    <div className='AddComment1'>
                    <AddComment addComment={this.addComment2} /><br /><br />
                    </div>
                    <br />
                    <br />
                    <Link to='/Details3'><img className="time" src="https://i.imgur.com/5G0SJtn.jpg" alt="oops! not available" /></Link>
                    <br />
                    <br />
                
                    <input type="button" value={this.state.img3[2]} className="like" onClick={this.handleClick.bind(this,this.state.img3)} />
                    <span className='like'> {this.state.img3[1]} </span>
                    <input type="button" value="Show Comments" className='like' onClick={this.handleComm.bind(this,this.state.showComm3)}/>
                    <input type="button" value="Details" className="like" onClick={this.handleDetail3} />
                    {this.state.showComm3[0] ? (
                        <div>
                            <Comment comments = {this.state.comments3}/><br />
                        
                        </div>) :
                    (null)}
                    <div className='AddComment1'>
                    <AddComment addComment={this.addComment3} /><br /><br />
                    </div>
                    <br />
                    <br />
                
                </div>
            </div>
            <Link to='/'><input type="button" className="logout" value="Logout"/></Link>
                    
            <br/><br/><br/>
            
        </div>
        )
    }
}

export default Timeline;
