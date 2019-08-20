import React, { Component } from 'react';
import { Line as LineChart } from 'react-chartjs-2';
// import axios from 'axios';

class SurfBreak extends Component {
  

  // displayAForecast = () =>{

  // }


  displayASingleSurfBreak = () =>{
    // console.table(this.props.allRegionalSurfBreaks);
    // console.log(this.props.allRegionalSurfBreaks);
  
    // console.log("theeeeesee  are the props ----------- ", this.props);
    
    let allRegionalSurfBreaks = this.props.allRegionalSurfBreaks;
    let surfBreakID = this.props.match.params.spotID;
    let theSurfBreak = {};
    let forecastDate = "";
    let theFullSurfBreakForecast = [];
    let theSurfBreakWaveForecast = [];
    let maxHeight = 0;
    let chartLabels = ["12","1","2","3","4","5","6","7","8","9","10","11","12","1","2","3","4","5","6","7","8","9","10","11","12"];
    // console.log("allRegionalSurfBreaks:",allRegionalSurfBreaks);
    // console.log("surfBreakID",surfBreakID);

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
    // console.log(theSurfBreak);
    theFullSurfBreakForecast = theSurfBreak.forecast
    // console.log(theFullSurfBreakForecast); 
    // console.log(typeof theFullSurfBreakForecast); //Array of objects?
    

    theFullSurfBreakForecast.forEach((eachHourForecast)=>{
      // console.log(eachHourForecast.size);
      // console.log(typeof eachHourForecast.size);
      theSurfBreakWaveForecast.push(eachHourForecast.size)
    
      if(maxHeight < eachHourForecast.size){
        maxHeight = eachHourForecast.size
      }
      if(forecastDate === ""){
        forecastDate = eachHourForecast.date
      }

    })
    // console.log(theSurfBreakWaveForecast);
    // console.log(forecastDate);
    let date = forecastDate;
  
    let chartHeight = maxHeight * 1.2;

 

    let chartData = {
      labels: chartLabels,
      datasets:[
        {
          label: `Wave Height ${forecastDate}`,
          data: theSurfBreakWaveForecast}
      ],
      options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    suggestedMax: chartHeight,
                }
            }]
        }
     }
    }



    return(

      <div>
         <h1> {theSurfBreak.spot_name} Forecast</h1>
     
         <LineChart 
         data={chartData}
          options={
            chartData.options
          }
          width="600" 
          height="250"/>

         <LineChart 
         data={chartData}
          options={
            chartData.options
          }
          width="600" 
          height="250"/>  

         <LineChart 
         data={chartData}
          options={
            chartData.options
          }
          width="600" 
          height="250"/>
      

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