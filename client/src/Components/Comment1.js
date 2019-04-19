import React from 'react';
import '../App.css';

const Comment1 = (props) => {
    const { comments } = props; 

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