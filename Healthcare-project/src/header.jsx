import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.png';
import React from 'react';


function Header(){

  const logostyle={
    width:'200px',
  }
  const navs={
    fontWeight:'bold'
  }
  const textdeco={
    textDecoration:'none'
   }
 return(
<>
<nav className="navbar fixed-top navbar-expand-md bg-light">

  <a href="#" className="navbar-brand">
  <img src={logo} style={logostyle} alt="" className='img-fluid' />
</a>

<button className="navbar-toggler" data-bs-toggle='collapse' data-bs-target='#navs'>
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse p-2  justify-content-end px-3 pe-4 navbar-collapse" id='navs'>
<ul className="navbar-nav">
  <li className="nav-item"><a href="#" className="nav-link me-3" style={navs}>Home</a></li>
  <li className="nav-item"><a href="#" className="nav-link me-3"style={navs}>Services</a></li>
  <li className="nav-item"><a href="#" className="nav-link me-3"style={navs}>Doctors</a></li>
  <li className="nav-item"><a href="#" className="nav-link me-3" style={navs}>Contact</a></li>
 
</ul>
<button className="btn btn-success px-5"><a href="#" style={textdeco} className='text-light'>Book a Meeting</a></button>
</div>
</nav>

</>
 


 );


}
export default Header