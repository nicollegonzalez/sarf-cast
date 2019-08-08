import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom'
// import SurfBreak from '../surfbreak/SurfBreak'

class County extends Component {

  displayAllRegionalSurfBreaks () {
    console.log("theeeeesee  are the props ----------- ", this.props);
    console.log("HHmhmhmhmh",this.props.allRegionalSurfBreaks)
    return this.props.allRegionalSurfBreaks.map((eachValidSurfBreak)=>{
        return(
          <div key={eachValidSurfBreak._id}>
            {/* <div>
               {eachValidSurfBreak.spot_name}
            </div> */}
            <Link to = {`/region/${this.props.theCounty}/${eachValidSurfBreak.spot_id}`}>
               {eachValidSurfBreak.spot_name}
            </Link>


          </div> 
      )
    })
  }



  render() {
    console.log("the county props. . . . . . . .. ... . . . . . . . . ..  ", this.props)
    return (
      <div>
        <h1>All The SurfBreaks for {this.props.theCounty}:</h1>
        
        {this.displayAllRegionalSurfBreaks()}
  
      </div>
    );
  }
}

export default County;