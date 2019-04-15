import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Comment from './Comment';
import AddComment from './AddComment';
import '../App.css';

class Timeline extends Component {
    state = {
        img1: [1,219,'LIKE'],
        img2: [2,167,'LIKE'],
        img3: [3,200,'LIKE'],
        comments: [
          { name: 'Jim', text:'I love this place', id: 1 }
        ]
    }

    handleClick = (e,param) => {
       console.log('Clicked', e[0]);
       
        
        if(e[2]==='LIKE'){
            const inc = e[1]+1;
            
            if(e[0]==1){
                this.setState({
                    img1: [1,inc,'UNLIKE']
                })
            }
            else if(e[0]==2){
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
            if(e[0]==1){
                this.setState({
                    img1: [1,dec,'LIKE']
                })  
            }
            else if(e[0]==2){
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
            
            <div className='card card2'>
            <div class="timeline-page">
                <h1>Hey there!</h1> <br />
                <img className="time" src="https://i.imgur.com/5G0SJtn.jpg" alt="oops! not available" />
                <br />
                <br />
                
                <input type="button" value={this.state.img1[2]} className="like" onClick={this.handleClick.bind(this,this.state.img1)} />
                <span className="likes">{this.state.img1[1]}</span>
                <AddComment addComment={this.addComment} /><br /><br />
                <Comment comments={this.state.comments}/><br />
                <br />
                <br />
                <img className="time" src="https://i.imgur.com/5G0SJtn.jpg" alt="oops! not available" />
                <br />
                <br />
                
                <input type="button" value={this.state.img2[2]} className="like" onClick={this.handleClick.bind(this,this.state.img2)} />
                <span className="likes">{this.state.img2[1]}</span>
                <AddComment addComment={this.addComment} /><br /><br />
                <Comment comments={this.state.comments}/><br />
                <br />
                <br />
                <img className="time" src="https://i.imgur.com/5G0SJtn.jpg" alt="oops! not available" />
                <br />
                <br />
                
                <input type="button" value={this.state.img3[2]} className="like" onClick={this.handleClick.bind(this,this.state.img3)} />
                <span className="likes">{this.state.img3[1]}</span>
                <AddComment addComment={this.addComment} /><br /><br />
                <Comment comments={this.state.comments}/><br />
                <br />
                <br />
                
            </div>
            </div>
                
        )
    }
}

export default Timeline;