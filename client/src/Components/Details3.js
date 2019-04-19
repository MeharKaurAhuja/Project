import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Comment from './Comment';
import AddComment from './AddComment';
import '../App.css';

class Details3 extends React.Component {
    
    // initializing our state
    state = {
        img1: [1,219,'LIKE'],
        comments: [
          { name: 'Jim', text:'I love this place', id: 1 }
        ],
        showComm: false
    }
    
    // we have used it so that when we open our page it opens from the top
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    // function to display comments on clicking the button
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
    
    // function to like or unlike on clicking the button
    handleClick = (e,param) => {
        //console.log('Clicked', e[0]);
       
        //to increase likes
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
        // to unlike
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
    
      // to add a comment with certain id
      addComment = (comment) => {
        console.log('Inside App Component', comment);
        comment.id = Math.floor(Math.random() * 10);
        console.log(comment.id);
        let comments = [...this.state.comments, comment];
        this.setState({
          comments
        })
      }
      
      
      // this is our UI
      // you can understand them on the screen as it gets render
      render() {
        return (
            <div className="card4">
                <div className='row'>
                <br /><br /><br />
                    <div className='col m7'>
                        <div className="detail1">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg" alt="oops! not available" />
                        </div>
                    </div>
                    <div className='col m5'>
                        <p className="detail2">Lorem ipsum dolor sit amet, vix nostro docendi ad. Facilis suscipit abhorreant mel eu, idque maluisset corrumpit cu mel. Nostrud fuisset democritum no mel, pri ornatus ullamcorper eu. Has vocibus luptatum inciderint id, vel ut dolore quodsi pertinax.Lorem ipsum dolor sit amet, vix nostro docendi ad. Facilis suscipit abhorreant mel eu, idque maluisset corrumpit cu mel. Nostrud fuisset democritum no mel, pri ornatus ullamcorper eu. Has vocibus luptatum inciderint id, vel ut dolore quodsi pertinax.
                        </p>
                        <br />
                        <input type="button" value={this.state.img1[2]} className="like" onClick={this.handleClick.bind(this,this.state.img1)} />
                        <span className='like'> {this.state.img1[1]} </span>

                        <input type="button" value="Show Comments" className='like' onClick={this.handleComm}/>


                        <br /><br />

                        <div className='comm'>
                            {this.state.showComm ? (
                            <div>
                             <Comment comments = {this.state.comments}/>

                             </div>) :
                             (null)}
                              <br />
                             <AddComment addComment={this.addComment} /><br />

                         </div>
                    </div>
                </div>
                <br /><br /><br />
            </div>
        )}
      }

export default Details3;