import React, { Component } from 'react';
// import axios from 'axios';

class SurfBreak extends Component {
  


  displayASingleSurfBreak = () =>{
    // console.table(this.props.allRegionalSurfBreaks);
    // console.log(this.props.allRegionalSurfBreaks);
  }

  render(){
    return(
      <div className="container">
        <h1>Surf Break Forecast</h1>
        <img src="/images/thewedge.jpg" alt="the wedge forecast chart" height="150" width="600"/>

        <div className="container">
        <img src="/images/thewedgemap.jpg" alt="the wedge map" height="600" width="400"/>
        </div>
        


        {/* /images/thewedge.png */}
      </div>
    )
  }
}

export default SurfBreak;