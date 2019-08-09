import React, { Component } from 'react';
import axios from 'axios';


class Profile extends Component {
 

  deleteUser = (theUser) =>{


    axios.delete(`http://localhost:5000/api/auth/${theUser}`)
    .then(()=>{
        // this.props.goHome();
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  

  render(){


    // console.log(this.props)
    // if(this.props.getUser()){
    // const theUser = this.props.currentlyLoggedIn;
    // console.log("<><><><><><><><><",theUser);
    if(this.props.ready){
      const theUser = this.props.theUser;
      console.log("<><><><><><><><><",theUser);
        return(
          <div>
            <button onClick = {()=>{this.deleteUser(theUser.username)}}>Delete User Profile</button>
          </div>
        )  
    }
    else {

      return(<h1>Loading ...</h1>)
    }
  }

}
    
    
  

  export default Profile;