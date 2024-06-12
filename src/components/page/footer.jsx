import React, { Component } from 'react'
import '../style/style.css'
import { Link } from 'react-router-dom'

export class Footer extends Component {
  render() {
    return (
      <div className='footer'>

        
      
       <p>Copyright 2024 <span>HeadLineHub.</span> <hub></hub> All rights reserved.</p> 

       <div className="navfooter">
        <Link to='/Aboutus' >About</Link>
        <a href='' >Privacy</a>
        <a href='' >Contact</a>
        
      </div>

 
      </div>
    )
  }
}

export default Footer
