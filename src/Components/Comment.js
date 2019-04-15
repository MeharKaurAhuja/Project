import React from 'react';
import '../App.css';

const Comment = (props) => {
    const { comments } = props; 

    const commentList = comments.map( comment => {
      
      return (
        <div>
            <div className='a1' key={comment.id}>
              <div> <b>Name:</b> { comment.name } </div>
              <div> <b>Comment:</b> { comment.text } </div><br />
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

export default Comment;
