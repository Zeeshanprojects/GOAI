import React from 'react'
import Images from '../assets/Images/Image'
import "./Header.css"
export default function Header() {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={Images.logo} alt='logo' className='logo'/>
    </a>
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
          <a className="nav-link " aria-current="page" href="#">
            Home
          </a>
        </li>
         <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
        Vision
          </a>
        </li>
            <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
            Technology
          </a>
        </li>
          <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
            Platform
          </a>
        </li>
               <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
            Membership
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
