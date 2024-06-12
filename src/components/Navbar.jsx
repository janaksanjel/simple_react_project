import React from 'react';
import './style/style.css';
import { Link } from 'react-router-dom'


function Navbar() {

  const getCurrentDate = () => {
    const date = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <>
      <div className="header">
    
        <div className="logo">The Headline <span>Hub</span></div>
        <p className=" d-flex justify-content-center">Journalism Without Borders</p>
        <div className="top-bar">
          <div><h3>{getCurrentDate()}</h3></div>
        </div>
        <div className="nav-bar">
          <Link to="/"><i className="fa fa-home" /> HOME</Link>
          <Link to="/news"><i className="fa fa-newspaper" /> NEWS</Link>
          
          
          <Link to="/Sport"><i className="fa fa-futbol"></i> SPORT</Link>
          <Link to="/Business"><i className="fa fa-briefcase"></i> BUSINESS</Link>
          <Link to="/Earth"><i className="fa fa-globe"></i> Earth</Link>

          <Link to="/Innovation"><i className="fa fa-lightbulb"></i> INNOVATION</Link>
          <Link to="/Culture"><i className="fa fa-palette"></i> CULTURE</Link>
          <Link to="/features"><i className="fa fa-star" /> FEATURES</Link>

          
          





          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
