import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/logo.png';

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
<div className="collapse px-3 justify-content-end pe-4 navbar-collapse" id='navs'>
<ul className="navbar-nav">
  <li className="nav-item"><a href="#" className="nav-link me-3" style={navs}>HOME</a></li>
  <li className="nav-item"><a href="#" className="nav-link me-3"style={navs}>SERVICES</a></li>
  <li className="nav-item"><a href="#" className="nav-link me-3"style={navs}>DOCTORS</a></li>
  <li className="nav-item"><a href="#" className="nav-link me-3" style={navs}>HOW IT WORKS</a></li>
  <li className="nav-item"><a href="#" className="nav-link me-3" style={navs}>CONTACT</a></li>
  <li className="nav-item"><a href="#" className="nav-link me-5" style={navs}>REVIEWS</a></li>
</ul>
<button className="btn btn-success px-5"><a href="#" style={textdeco} className='text-light'>Book a Meeting</a></button>
</div>
</nav>

</>
 


 );


}
export default Header