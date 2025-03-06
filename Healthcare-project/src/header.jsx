import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.png';

function Header(){

  const logostyle={
    width:'200px',
  }
 return(
<>
<nav className="navbar fixed-top bg-light  navbar-expand-md">
<a href="#" className="navbar-brand">
  <img src={logo} style={logostyle} alt="" className='img-fluid' />
</a>
<button className="navbar-toggler" data-bs-toggle='collapse' data-bs-target='#navs'>
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse px-3 justify-content-end pe-4 navbar-collapse" id='navs'>
<ul className="navbar-nav">
  <li className="nav-item"><a href="#" className="nav-link me-3">HOME</a></li>
  <li className="nav-item"><a href="#" className="nav-link me-3">SERVICES</a></li>
  <li className="nav-item"><a href="#" className="nav-link me-3">DOCTORS</a></li>
  <li className="nav-item"><a href="#" className="nav-link me-3">HOW IT WORKS</a></li>
  <li className="nav-item"><a href="#" className="nav-link me-3">CONTACT</a></li>
  <li className="nav-item"><a href="#" className="nav-link me-5">REVIEWS</a></li>
</ul>
<button className="btn btn-success px-5"><a href="#"></a>Book a Meeting</button>
</div>
</nav>

</>
 


 );


}
export default Header