import React from "react";
import "./topbar.css";
import { Link } from 'react-router-dom';


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">

          <span className="logo">Admin Panel</span>
        </div>
        <div className="center">
        <span className="logos">THRIFTY.</span>
        </div>
        <Link to ="/login">
        <button className="logoutButton">Logout</button>
        </Link> 


          
        
      </div>
    </div>
  );
}
