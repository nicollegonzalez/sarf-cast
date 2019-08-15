import React, { Component } from 'react';
// import axios from 'axios';

class SurfBreak extends Component {
  


  // displayASingleSurfBreak = () =>{
  //   // console.table(this.props.allRegionalSurfBreaks);
  //   // console.log(this.props.allRegionalSurfBreaks);
  
  //   // console.log("theeeeesee  are the props ----------- ", this.props);
  //   console.log(this.props.allRegionalSurfBreaks)
  //   // let theBreak = 
  //   return this.props.allRegionalSurfBreaks.map((eachValidSurfBreak)=>{
  //       return(
  //         <div key={eachValidSurfBreak._id}>
            
  //              {eachValidSurfBreak.spot_name}
            


  //         </div> 
  //     )
  //   })
  // }

  displayASingleSurfBreak = () =>{
    // console.table(this.props.allRegionalSurfBreaks);
    // console.log(this.props.allRegionalSurfBreaks);
  
    // console.log("theeeeesee  are the props ----------- ", this.props);
    
    let allRegionalSurfBreaks = this.props.allRegionalSurfBreaks;
    let surfBreakID = this.props.match.params.spotID;
    let theSurfBreak = {};
    console.log("allRegionalSurfBreaks:",allRegionalSurfBreaks);
    console.log("surfBreakID",surfBreakID);

    // console.log(theSurfBreak);
    // theSurfBreak = allRegionalSurfBreaks.filter((eachSurfBreak)=>{
    //   return surfBreakID.toString() == eachSurfBreak.spot_id.toString() //to string before it wasn'y working
    // })
    // console.log(theSurfBreak);

    console.log(theSurfBreak);
    allRegionalSurfBreaks.forEach((eachSurfBreak)=>{
      if(eachSurfBreak.spot_id.toString() === surfBreakID){
        theSurfBreak = eachSurfBreak;
        console.log("YASSS")
      }
    })
    console.log(theSurfBreak);

    return(

      <div>
         <h1> {theSurfBreak.spot_name} Forecast</h1>

         
      
      

      </div> 
  )



  }

  render(){
    console.log(this.props);
    console.log(this.props.match.params);
    return(
  
       <div>
       
       {this.displayASingleSurfBreak()}
 
     </div>
    )
    
  }
}

export default SurfBreak;