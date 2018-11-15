import React from 'react';
import { Link } from 'react-router-dom';
import HomeImg from '../../Assets/home-img.png';
import {  } from 'react-icons/fa';
export class HomeComponent extends React.Component {
  render() {
    return (
      <div className="Container">
          <h1 ><strong>Revature ERS</strong></h1>
          <h6 ><strong>Employee Reimbursement System</strong></h6>
        
        
          <img id="home-image" src={HomeImg} alt="Network, Connections, Communication, Digital, Internet"/>
         
          <br/>
          <Link to="/manager-sign-in">
          <h6 >Manager Portal</h6>
          </Link>
          <br /> 
          <Link to="/employee-sign-in">
          <h6 >Employee Portal</h6>
          </Link>
        </div>
        
    )
  }
}

