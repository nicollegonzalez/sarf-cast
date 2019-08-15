import React, { Component } from 'react';
import AuthService from '../../services/AuthService';
import './login.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { usernameInput: '', passwordInput: '' };
    this.service = new AuthService();
  }

  handleChange = (e) =>{
      this.setState({[e.target.name]: e.target.value})
  }

  tryToLogin = (e) =>{
      e.preventDefault();
      const uName = this.state.usernameInput;
      const pWord = this.state.passwordInput;
    
      this.service.login(uName, pWord)
      .then(()=>{
          this.props.toggleForm('login');
          this.props.getUser();
      })

  }

  

  render(){
    return(
      <form onSubmit = {this.tryToLogin}>

        <div className="container">

          <h3>Login</h3>

          <div className="login-container">

            <div className="left-login">

              <legend>Username</legend>
              <input value={this.state.usernameInput}
                name="usernameInput"
                onChange={this.handleChange}
              />

              <legend>Password</legend>
              <input value={this.state.passwordInput} 
                name="passwordInput"
                onChange={this.handleChange}
              />

            </div>
            <div className="right-login">
            
              <input 
              />
            </div>

            <button className="btn btn-outline-info">Submit</button>

          </div>



          

        </div>


      </form>
    )
  }
}

export default Login;