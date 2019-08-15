import React, { Component } from 'react';
import './editprofile.css'
const axios = require('axios');



class EditProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      stanceInput: '',
      favoriteSurfSpotInput: '',
      favoriteSurfBoardShapeInput: '',
      favoriteSurferInput: '',
    }
  }

  handleFormSubmit = (event) => {
    const stance = this.state.stanceInput;
    const favoriteSurfSpot = this.state.favoriteSurfSpotInput;
    const favoriteSurfBoardShape = this.state.favoriteSurfSurfBoardShapeInput;
    const favoriteSurfer = this.state.favoriteSurferInput;

    event.preventDefault();

    axios.post(`http://localhost:5000/api/auth/update/${this.props.currentlyLoggedIn.username}`,
     { theStance: stance,
      theFavoriteSurfSpot: favoriteSurfSpot,
      theFavoriteSurfSurfBoardShape: favoriteSurfBoardShape,
      theFavoriteSurferInput: favoriteSurfer
         })
    .then( () => {
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  deleteUser = (theUser) =>{
    console.log("_+_+_+_+_",theUser);


    axios.delete(`${process.env.REACT_APP_BASE}/auth/${theUser}`)
    .then(()=>{
        this.props.toggleForm('profile');
        this.props.goHome();
    })
    .catch((err)=>{
        console.log(err)
    })
  }


  

  render(){
    const theUser = this.props.theUser;

    if(theUser.username !== "admin"){
      return(
        <div>
        <form onSubmit = {this.handleFormSubmit}>
  
            <div >
              <h3>Edit Account</h3>
  
              <div className="signup-container">
                <div className="left-signup">
                  <legend>Riding Stance:</legend>
                  <input value={this.state.stanceInput}
                    name="stanceInput"
                    onChange={this.handleChange}
                  />
  
                <legend>Local Surf Break:</legend>
                  <input value={this.state.favoriteSurfSpotInput}
                    name="favoriteSurfSpotInput"
                    onChange={this.handleChange}
                  />
  
  
                </div>
  
                <div className="right-signup">
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
  
          <div className="container buttons-div">
            <button className="btn btn-outline-danger" onClick = {()=>{this.deleteUser(theUser.username)}}>Delete User Profile</button>
          </div>
        </div>
        
      )
    }else{
      return(
        <div>
        <form onSubmit = {this.handleFormSubmit}>
  
            <div >
              <h3>Edit Account</h3>
  
              <div className="signup-container">
                <div className="left-signup">
                  <legend>Riding Stance:</legend>
                  <input value={this.state.stanceInput}
                    name="stanceInput"
                    onChange={this.handleChange}
                  />
  
                <legend>Local Surf Break:</legend>
                  <input value={this.state.favoriteSurfSpotInput}
                    name="favoriteSurfSpotInput"
                    onChange={this.handleChange}
                  />
  
  
                </div>
  
                <div className="right-signup">
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
  
          <div className="container buttons-div">
            <button className="btn btn-outline-danger" onClick = {()=>{this.deleteUser(theUser.username)}}>Delete User Profile</button>
            <button className="btn btn-outline-success" onClick = {()=>{this.props.updateSarfCast()}}>Update SarfCast</button>
          </div>
        </div>
        
      )
    }
    
  }
}

export default EditProfile;