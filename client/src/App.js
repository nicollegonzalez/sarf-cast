import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
//Auth Components
import Signup from './components/signup/Signup.js';
import Login from './components/login/Login.js';
import AuthService from './services/AuthService.js';
//Nav Component
import Navbar from './components/navbar/Navbar.js'
//Other Components
import Home from './components/home/Home'
import County from './components/county/County'
import SurfBreak from './components/surfbreak/SurfBreak'
import Profile from './components/profile/Profile'
import EditProfile from './components/editprofile/EditProfile'

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';




class App extends React.Component {

  constructor(props){
    super(props)
    this.state = { 
      //For user stuff
      currentlyLoggedIn: null,
      signupShowing: false,
      loginShowing: false,
      //For Search Bar
      allTheCounties: ["Marin", "San Francisco", "Monterey", "Santa Cruz","San Mateo","Los Angeles","San Luis Obispo","Santa Barbara","San Diego","Orange County","Ventura"],
      dropDownCounties: ["Marin", "San Francisco", "Monterey", "Santa Cruz","San Mateo","Los Angeles","San Luis Obispo","Santa Barbara","San Diego","Orange County","Ventura"],
      // listOpen: false,
      // headerTitle: "Select location"

      // Passed down to County Component
      theCounty: "",
      validSurfBreaks: [],
      // Passed down to SurfBreak Component
      theSurfBreak: "",
      //To handle loading
      ready: false,

   };

   this.service = new AuthService();
  
  }

  goHome = () =>{
    axios.get(`http://localhost:5000`, {withCredentials: true})
    .then((response)=>{
      this.setState({currentlyLoggedIn: null})
    })
    .catch((err)=>{
      console.log(err)
    })
      
      
  }
    


getCurrentlyLoggedInUser = () =>{
  this.service.currentUser()
  .then((theUser)=>{
    // console.log(theUser);
    this.setState({currentlyLoggedIn: theUser, ready: true})

  })
  .catch(()=>{
    this.setState({currentlyLoggedIn: null})
  })
}


toggleForm = (whichForm) =>{

  let theForm;

  if(whichForm === "signup"){
    theForm = 'signupShowing'
  } else if(whichForm === "login"){
    theForm = 'loginShowing'
  } else if(whichForm === "profile"){
    theForm = 'profileShowing'
  }

  this.setState({[theForm]: !this.state[theForm]})
}


getAllRegionalSurfBreaks = () => {
  // console.log("show me the county >>>>>>>>>>>>>>>>>>>>>>>>>>>>> ", this.state);
  axios.get(`${process.env.REACT_APP_BASE}/region/${this.state.theCounty}`)
  .then((theRegionalSurfBreaks)=>{
    // console.log("*************", typeof(theRegionalSurfBreaks.data))
    
    if(typeof(theRegionalSurfBreaks.data) === "object") {
      // console.log("the if condition <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ", typeof(theRegionalSurfBreaks.data), this.state)
      this.setState({
        validSurfBreaks: theRegionalSurfBreaks.data,
        // ready: true,
      })
    } 

    // console.log(this.state.validSurfBreaks);
  })
  .catch((err)=>{
    // console.log(err);
  })
}


dataFromChild = async (data) => {
  // console.log(data);
  let  theSelectedCounty= data;

  await this.setState({theCounty: theSelectedCounty})

  this.getAllRegionalSurfBreaks()


}




  componentDidMount() {
    this.getCurrentlyLoggedInUser();
    this.getAllRegionalSurfBreaks();
  }


render(){



  // console.log('This is my state',this.state);


    return (
      <div>


      <Navbar 
      theUser = {this.state.currentlyLoggedIn} 
      userLogOut = {()=> this.service.logout()}
      toggleForm = {this.toggleForm}
      getUser = {this.getCurrentlyLoggedInUser}
      
      />

      {this.state.signupShowing && 
        <Signup getUser = {this.getCurrentlyLoggedInUser}
        toggleForm = {this.toggleForm}
         />
      }

      {this.state.loginShowing && 
        <Login getUser = {this.getCurrentlyLoggedInUser}
        toggleForm = {this.toggleForm}
        />
      }

      {this.state.profileShowing && 
        <Profile theUser = {this.state.currentlyLoggedIn}
        toggleForm = {this.toggleForm}
        goHome = {this.goHome}
        ready = {this.state.ready}
        />
        // <EditProfile getUser = {this.getCurrentlyLoggedInUser}
        // toggleForm = {this.toggleForm}
        // currentlyLoggedIn = {this.state.currentlyLoggedIn}
        // />
        // <EditProfile getUser = {this.getCurrentlyLoggedInUser}
        // toggleForm = {this.toggleForm}
        // currentlyLoggedIn = {this.state.currentlyLoggedIn}
        // />
      }

<Switch>

 
         
          <Route exact path="/"
          render ={(props)=> <Home
             {...props} 
             theCounty = {this.state.theCounty}
             allTheCounties = {this.state.allTheCounties}
             dropDownCounties = {this.state.dropDownCounties}
             ready = {this.state.ready}
             getAllRegionalSurfBreaks = {this.getAllRegionalSurfBreaks}
             dataFromChild = {this.dataFromChild} 
           />} 
          />


          <Route exact path="/region/:region"
          render ={(props)=> <County
             {...props} 
             allRegionalSurfBreaks ={ this.state.validSurfBreaks}
             theCounty = {this.state.theCounty}
             ready = {this.state.ready}
            
           />} 
          />

          <Route exact path={`/region/${this.state.theCounty}/:spotID`}
          render ={(props)=> <SurfBreak
             {...props} 
             allRegionalSurfBreaks ={ this.state.validSurfBreaks}
             theCounty = {this.state.theCounty}
             ready = {this.state.ready}

           />} 
          />

        </Switch>


      
    
      </div>
    );
  }
}

export default App;
