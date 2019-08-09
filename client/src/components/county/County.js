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
    
    if(this.props.theCounty && this.props.allRegionalSurfBreaks)
    return (
      <div>
        {/* <h1>All The SurfBreaks for {this.props.theCounty}:</h1> */}
        <h1>All The SurfBreaks for {this.props.theCounty}:</h1>
        
        {this.displayAllRegionalSurfBreaks()}
  
      </div>
    )
    else 
    return(<h1>loading...</h1>)
  }
}

export default County;