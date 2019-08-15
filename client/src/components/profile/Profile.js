import React, { Component } from 'react';
import axios from 'axios';
import EditProfile from '../profile/Profile'


class Profile extends Component {
 

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
    console.log(this.props.ready);
    console.log(this.props.currentlyLoggedIn);
    if(this.props.ready){
      // if(this.props.currentlyLoggedIn){
      const theUser = this.props.theUser;
      console.log("<><><><><><><><><",theUser);
      if(this.props.theUser.username === "admin"){
        
      }
        return(
          <div className="container">
            <div className="container">
            <button className="btn btn-outline-info" onClick = {()=>{this.deleteUser(theUser.username)}}>Delete User Profile</button>
            </div>

            {/* <div>
            <EditProfile
              {...this.props}
              // currentlyLoggedIn = {this.props.currentlyLoggedIn}
            />
          </div> */}

          {/* <div>
            <EditProfile
            currentlyLoggedIn = {this.props.currentlyLoggedIn}
            />
          </div> */}
           
              

            {/* <EditProfile 
            currentlyLoggedIn = {this.props.currentlyLoggedIn}
            /> */}
          </div>
          


        )  
    }

    else {

      return(<h1>Loading ...</h1>)
    }

    
  }

}
    
    
  

  export default Profile;