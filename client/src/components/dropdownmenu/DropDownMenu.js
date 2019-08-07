import React from 'react';
import './dropdownmenu.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
 

// create our App



class DropDownMenu extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      listOpen: false,
      headerTitle: this.props.title,
    }
  }

  handleClickOutside(){
    this.setState({
      listOpen: false
    })
  }

  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  getTheCounty = () =>{
    this.setState({formShowing: !this.state.formShowing})
  }

  render(){
    const{dropDownCounties} = this.props
    const{listOpen, headerTitle} = this.state
    return(
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
          <div className="dd-header-title">
          {headerTitle} 
          {listOpen
            ? <FontAwesomeIcon icon={faAngleUp} size="2x"/>
            : <FontAwesomeIcon icon={faAngleDown} size="2x"/>
          }</div>
          
      </div>
      {listOpen && <ul className="dd-list">
         {dropDownCounties.map((eachCounty,i) => (
          //  <li className="dd-list-item" key={item.id}>{item.title}</li>
          <li className="dd-list-item" key={i} onClick = {this.getTheCounty}>{eachCounty}</li>
          ))}
      </ul>}
      </div>
    )
  }
}

  // updateQty = (e) =>{
  //   this.setState({quantity: e.target.value})
  // }
  
//   render(){
//     return(
//       <div className="dd-wrapper">
//         <div className="dd-header">
//           <div className="dd-header-title"></div>
//         </div>
//         <ul className="dd-list">
//           <li className="dd-list-item"></li>
//           <li className="dd-list-item"></li>
//           <li className="dd-list-item"></li>
//         </ul>
//       </div>

//     )

//   }



// }


export default DropDownMenu;