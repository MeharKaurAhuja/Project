import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Login extends React.Component {
    
    // constructor to initialise all state values
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };
    
    // we have used it so that when we open our page it opens from the top
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    // function to handle the change in values written in the form
    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }
    
    // prevents submittion of form before validation
    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["emailid"] = "";
          fields["password"] = "";
          this.setState({fields:fields});
          alert("Welcome to Websell");
          this.props.history.push("/timeline");
      }
    }
    
    // criteria for form validation
    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;
      
      // validation for email id
      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }
      // validation for password
      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;
    }


    // this is our UI
    // you can understand them on the screen as it gets render
    render() {
        return (
        <div className='login card'>
            <div>
                <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >

                    <span className="label"> Enter your E-mail: </span>
                    <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
                    <div className="errorMsg">{this.state.errors.emailid}</div>
                    <span className="label"> Set your Password: </span>
                    <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.password}</div>
                    <button className="reg"> Login </button> <br /> <br />
                    <Link to='/Register'><span className="foot"> New to Websell? Register here </span></Link>
                </form>
            </div>
         </div>
        );
    }
}

export default Login;