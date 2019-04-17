import React from 'react';
import '../App.css';
import Comment from './Comment';
import AddComment from './AddComment';

class Upload extends React.Component {
   
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: '', imgn :[1,20,'LIKE'],
        comments: [
          { name: 'Jim', text:'I love this place', id: 1 }
        ],
        images:[],
        showComm: false};
  }
    handleClick = (e,param) => {
       console.log('Clicked', e);
       
        
        if(e[2]==='LIKE'){
            const inc = e[1]+1;
                this.setState({
                    imgn: [1,inc,'UNLIKE']
                })
            }
        
        else{
            const dec = e[1]-1;
                this.setState({
                    imgn: [1,dec,'LIKE']
                })  
            }
            
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
    addComment = (comment) => {
        console.log('Inside App Component', comment);
        comment.id = Math.floor(Math.random() * 10);
        console.log(comment.id);
        let comments = [...this.state.comments, comment];
        this.setState({
          comments
        })
      }
    
  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    //console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<div><img src={imagePreviewUrl} className="time" alt="not available" /><br />
                      <input type="button" value={this.state.imgn[2]} className="like" onClick={this.handleClick.bind(this,this.state.imgn)} />
                        <span className='like'> {this.state.imgn[1]} </span>
                        <input type="button" value="Show Comments" className='like' onClick={this.handleComm}/>
                    
                        {this.state.showComm ? (
                        <div>
                            <Comment comments = {this.state.comments}/><br />
                        
                        </div>) :
                    (null)}
                    <AddComment addComment={this.addComment} />
                        </div>);
    } else {
      $imagePreview = (<div className="previewText" ></div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
          
        </form>
        <div className="imgPreview">
            <h1>Hey there!</h1> 
          {$imagePreview}
        </div>
      </div>
    )
  }
}


export default Upload;