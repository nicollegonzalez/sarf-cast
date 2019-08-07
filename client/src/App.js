import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link, Switch} from 'react-router-dom';
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

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';




class App extends React.Component {

  constructor(props){
    super(props)
    this.state = { 
      currentlyLoggedIn: null,
      signupShowing: false,
      loginShowing: false,
      //For Search Bar
      allTheCounties: ["Marin", "San Francisco", "Monterey", "Santa Cruz","San Mateo","Los Angeles","San Luis Obispo","Santa Barbara","San Diego","Orange County","Ventura"],
      dropDownCounties: ["Marin", "San Francisco", "Monterey", "Santa Cruz","San Mateo","Los Angeles","San Luis Obispo","Santa Barbara","San Diego","Orange County","Ventura"],
      // listOpen: false,
      // headerTitle: "Select location"

      // Passed down to County Component
      theCounty: "Monterey",
      validSurfBreaks: [],
      // Passed down to SurfBreak Component
      theSurfBreak: "Carmel Beach",
      //To handle loading
      ready: false,

   };

   this.service = new AuthService();
  
  }


getCurrentlyLoggedInUser = () =>{
  this.service.currentUser()
  .then((theUser)=>{
    this.setState({currentlyLoggedIn: theUser})
  })
  .catch(()=>{
    this.setState({currentlyLoggedIn: null})
  })
}


toggleForm = (whichForm) =>{

  let theForm;

  if(whichForm === "signup"){
    theForm = 'signupShowing'
  } else {
    theForm = 'loginShowing'
  }

  this.setState({[theForm]: !this.state[theForm]})
}


getAllRegionalSurfBreaks = () => {
  axios.get(`${process.env.REACT_APP_BASE}/region/${this.state.theCounty}`)
  .then((theRegionalSurfBreaks)=>{
    this.setState({
      validSurfBreaks: theRegionalSurfBreaks.data,
      ready: true,
    })
    console.log(this.state.validSurfBreaks);
  })
}

// showDropDown = () => {
//   // return this.state.dropDownCounties.map((eachCounty, i)=>{
//     return <DropDownMenu key={i}
//      title="Select County"
//      list={this.state.dropDownCounties}
//     />
//   // })
// }

// toggleSelectedCounty(id, key){
//   let temp = this.state[key]
//   temp[id].selected = !temp[id].selected
//   this.setState({
//     [key]: temp
//   })
// }

dataFromChild = (data) => {
  // console.log(data);
  let  theSelectedCounty= data;

  this.setState({theCounty: theSelectedCounty})
}




  componentDidMount() {
    this.getCurrentlyLoggedInUser();
    this.getAllRegionalSurfBreaks();
  }


render(){

  console.log('This is my state',this.state);


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

<Switch>

 
         
          <Route exact path="/"
          render ={(props)=> <Home
             {...props} 
             theCounty = {this.state.theCounty}
             allTheCounties = {this.state.allTheCounties}
             dropDownCounties = {this.state.dropDownCounties}
             ready = {this.state.ready}
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
