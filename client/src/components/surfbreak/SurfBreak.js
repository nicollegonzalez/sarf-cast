import React, { Component } from 'react';
import axios from 'axios';

class SurfBreak extends Component {
  

  // MAYBE A FUNCTION HERE
  displayASingleSurfBreak = () =>{
    console.table(this.props.allRegionalSurfBreaks);
    console.log(this.props.allRegionalSurfBreaks);
  }

  render(){
    return(
      <div>
        <h1>Welcome to the Detailed surf break page</h1>
        {this.displayASingleSurfBreak()}
      </div>
    )
  }
}

export default SurfBreak;