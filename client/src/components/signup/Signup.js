import React, { Component } from 'react';
import './signup.css'
import AuthService from '../../services/AuthService';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { 
      usernameInput: '', 
      passwordInput: '',
      stanceInput: '',
      favoriteSurfSpotInput: '',
      favoriteSurfSurfBoardShapeInput: '',
      favoriteSurferInput: '',
    };
    this.service = new AuthService();
  }

  handleChange = (e) =>{
      this.setState({[e.target.name]: e.target.value})
  }

  tryToSignUp = (e) =>{
      e.preventDefault();
      const uName = this.state.usernameInput;
      const pWord = this.state.passwordInput;
      const stance = this.state.stanceInput;
      const favoriteSurfSpot = this.state.favoriteSurfSpotInput;
      const favoriteSurfSurfBoardShape = this.state.favoriteSurfSurfBoardShapeInput;
      const favoriteSurfer = this.state.favoriteSurferInput;

    
    this.service.signup(uName, pWord,stance,favoriteSurfSpot,favoriteSurfSurfBoardShape,favoriteSurfer,favoriteSurfer)
    .then(()=>{
        this.props.toggleForm('signup');
        this.props.getUser();
    })

  }

  

  render(){
    return(
      <form onSubmit = {this.tryToSignUp}>

          <div className="container">
            <h3>Signup For An Account</h3>

            <div className="signup-container">
              <div className="left-signup">
                <legend>Username:</legend>
                <input value={this.state.usernameInput}
                  name="usernameInput"
                  onChange={this.handleChange}
                />

                <legend>Password:</legend>
                <input value={this.state.passwordInput} 
                  name="passwordInput"
                  onChange={this.handleChange}
                />

                <legend>Riding Stance:</legend>
                <input value={this.state.stanceInput}
                  name="stanceInput"
                  onChange={this.handleChange}
                />
              </div>

              <div className="right-signup">
                <legend>Local Surf Break:</legend>
                <input value={this.state.favoriteSurfSpotInput}
                  name="favoriteSurfSpotInput"
                  onChange={this.handleChange}
                />

                <legend>Board Shape:</legend>
                <input value={this.state.favoriteSurfSurfBoardShapeInput}
                  name="favoriteSurfSurfBoardShapeInput"
                  onChange={this.handleChange}
                />

                <legend>Favorite Surfer:</legend>
                <input value={this.state.favoriteSurferInput}
                  name="favoriteSurferInput"
                  onChange={this.handleChange}
                />
              </div>

               <button className="btn btn-outline-info">Submit</button>
            </div>

            

         

            
          </div> 

          



        

      </form>
    )
  }
}

export default Signup;