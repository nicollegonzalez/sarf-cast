import React, { Component } from 'react';
import "./home.css"
import DropDownMenu from '../dropdownmenu/DropDownMenu'
// import axios from 'axios';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = { 
    };

  }



  render(){
    
    return(
      <div className="home-component ">
        <div>


          <div clasName="drop-down">
            <DropDownMenu
              {...this.props}
              title="Select County"
              dropDownCounties={this.props.dropDownCounties}
              getAllRegionalSurfBreaks={this.props.getAllRegionalSurfBreaks}
              dataFromChild = {this.props.dataFromChild} 
            />
          </div>


          <div className="ocean ">
            <div className="wave"></div>
            <div className="wave"></div>
          </div>
        </div>
      </div>
      
    )
  }
}

export default Home;