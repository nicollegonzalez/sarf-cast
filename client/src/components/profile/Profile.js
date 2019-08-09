import React, { Component } from 'react';
import axios from 'axios';


class Profile extends Component {
 

  deleteUser = (theUser) =>{


    axios.delete(`http://localhost:5000/api/auth/${theUser}`)
    .then(()=>{
        this.props.toggleForm('profile');
        this.props.goHome();
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  

  render(){

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