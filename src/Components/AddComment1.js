import React, { Component } from 'react';

class AddComment1 extends Component {
  state= {
      text: ''
  }
  handleChange= (e) => {
    this.setState({
     [e.target.id]: e.target.value
    }
    )
  }
  handleSubmit= (e) => {
    e.preventDefault();

    console.log('Inside AddComment Component', this.state);
    
    this.props.addComment(this.state);   // We are accessing the function as a prop we passed from the parent component.
      this.setState({
          text: ''
      })
  }
  render(){
    return(
      <div className='AddComment'>
        
          <form className="comment-form form-group" onSubmit={this.handleSubmit}>
            <div className="input-group">
              <span htmlFor='text' className="input-group-addon text3">Comment</span>
              <input type="text" id='text' placeholder="Say something..." value={this.state.text} onChange={this.handleChange} className="form-control" />
            </div>
            <input type="submit" value="Post" className="btn red" />
          </form>
      </div>
    )
  }
}
export default AddComment1;