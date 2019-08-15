import React from 'react';
import { NavLink} from 'react-router-dom';
import './navbar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'



function Navbar(props){

    const logoutNow = () =>{
        if(props.profileShowing){
            props.toggleForm('profile');
        }
        props.userLogOut()
        .then(()=>{
            props.getUser();
        })
    }


return(
    <nav className="navbar navbar-expand navbar-custom bg-custom py-0">
        <NavLink to="/" className="navbar-brand" href="#">
            <img src="/images/sarfcastlogo.png" alt="sarfcast brand logo" height="42" width="42"/>
            SarfCast
        </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></NavLink>
                </li>
    
            </ul>
        </div>

        <div className="right-nav-links">
            <ul className="navbar-nav">


            {!props.theUser && 
            <span>
            <button className="btn btn-custom ml-3 my-2" onClick = {()=> props.toggleForm('login')} > Login <FontAwesomeIcon icon={faUser}/></button>
            <button className="btn btn-custom ml-3 my-2" onClick = {()=> props.toggleForm('signup')}>Sign Up <FontAwesomeIcon icon={faUserPlus}/></button>
            </span>
            }

            {props.theUser && 
            <span>
            
            <button className="btn btn-custom ml-3 my-2" onClick = {()=> props.toggleForm('profile')} >Edit</button>
            <button className="btn btn-custom ml-3 my-2" onClick = {logoutNow} >Log Out <FontAwesomeIcon icon={faSignOutAlt}/></button>


                <span>Hello, {props.theUser.username}</span>
            </span>
            }
            </ul>
        </div>
    </nav>

)



}

export default Navbar;