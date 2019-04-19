import React from 'react';
import '../App.css';

// using props sent from another component in this function
const Comment1 = (props) => {
    const { comments } = props; 
    
    // using the function for mapping of array and returning the name and text as shown
    const commentList = comments.map( comment => {
      
      return (
        <div>
            <div className='a1' key={comment.id}>
              <div> <b>Comment:</b> { comment.text } </div>
            </div>
        </div>
      )
    });

    return(
      <div className='infos'>
        { commentList }
      </div>
    )
  }

export default Comment1;