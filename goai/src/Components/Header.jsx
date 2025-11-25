import React from 'react'
import { Link } from 'react-router-dom'
import Images from '../assets/Images/Image'
import "./Header.css"
export default function Header() {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid ps-5 pe-5">
    <Link to="/"> <a className="navbar-brand" href="#">
      <img src={Images.logo} alt='logo' className='logo' fetchPriority='high'/>
    </a></Link>
   
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/">
           <a className="nav-link " aria-current="page" href="#">
            Home
          </a></Link>
         
        </li>
        <Link to="/vision">
         <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
        Vision
          </a>
        </li></Link>
        
          
          <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
            Platform
          </a>
        </li>
        <Link to="/payment">
           <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
            Membership
          </a>
        </li></Link>
            
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
            Contact
          </a>
        </li>
          <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
            Login
          </a>
        </li>
        
       
      
      </ul>
    
    </div>
  </div>
</nav>

   </>
  )
}
