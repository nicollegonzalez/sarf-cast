import React, { Component } from 'react';
import "./home.css"
import DropDownMenu from '../dropdownmenu/DropDownMenu'
// import axios from 'axios';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = { 
      //ENTER STUFF HERE
    };

  }

  // MAYBE A FUNCTION HERE


  render(){
    console.log("history---- ",this.props);
    
    return(
      <div className="home-component">
        <div>


          <div>
            <DropDownMenu
              {...this.props}
              title="Select County"
              dropDownCounties={this.props.dropDownCounties}
              getAllRegionalSurfBreaks={this.props.getAllRegionalSurfBreaks}
              dataFromChild = {this.props.dataFromChild} 
            />
          </div>


          <div className="ocean">
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Home;