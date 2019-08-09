import React, { Component } from 'react';
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
      // console.log("I AM INSIDE THE .then")
        // this.props.getAllTheProjectsInAppJS(); //WTF is this
        // this.props.resetEditingSituation();
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    this.setState({
      [event.target.name]:event.target.value
    })
  }



  

  render(){
    // console.log("99999999999999999999999",this.props);
    return(
      <form onSubmit = {this.handleFormSubmit}>

          <div className="container">
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
    )
  }
}

export default EditProfile;