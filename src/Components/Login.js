import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Login extends Component {
    state = {
        name: 'mehak'
    }
 handleSubmit= (e) => {
    e.preventDefault();

    console.log('Inside Component', this.state);

      this.setState({
          name: 'hello'
      })
      this.props.history.push("/timeline");
  }
    render(){
        return(
            <div className='login card'>
                
                    <form onSubmit={this.handleSubmit}>
                        <span className="label"> Enter your E-mail: </span>
                        <input type='email' id='email'/> <br />
                        <span className="label"> Enter your Password: </span>
                        <input type="password" id='pswd'/> <br /><br />
                        <input type="submit" value="Login" className="log" /> <br /> <br />
                        <Link to='/Register'><span className="foot"> New to WebSell? Register here </span></Link>
                    </form>
             
            </div>
        );
    }
}

export default Login;