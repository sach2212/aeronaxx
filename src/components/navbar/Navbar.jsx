import React, { useState } from "react";
import "./navbar.css";
import logo from "/image/aer.png";
import logo1 from "/image/logo1.png";
import { FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };  

  return (
    <div>
      <input type="checkbox" id="active" checked={isActive} 
      onChange={toggleMenu} />
      <label htmlFor="active" className="menu-btn">
        <  FaBars  />
      </label>
      <div className="wrapper">
        <ul style={{ display: isActive ? 'block' : 'none' }}>
          <li><Link to="/aeronaxx/">Home</Link></li>
          <li><Link to="/aeronaxx">about</Link></li>
          <li><Link to="/aeronaxx">services</Link></li>
      
          
          {/* <li><a href="">About</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Gallery</a></li> */}
           
        </ul>
      </div>
    </div>
  );

  
};

export default Navbar;
