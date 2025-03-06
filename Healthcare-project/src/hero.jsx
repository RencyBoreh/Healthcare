import 'bootstrap/dist/css/bootstrap.min.css';
function Hero(){
 const textdeco={
  textDecoration:'none'
 }
  return(
    <div className="container-fluid mt-5 row bg-success">
      <div className="col-sm-12 col-md-6 col-lg-5 container  justify-content-center p-5 bg-info">
        <div className="container bg-light align-content-center shadow p-5">
        <h2>Consult Your Doctor From Home.</h2>
        <p>Choose the best online therapy services, begin your free assessment and speak to a licensed therapist. Help is at your fingertips.</p>
        <div className="mt-5">
        <button className="btn  btn-success me-3 px-4"><a href="#" style={textdeco} className='text-light'>Book a Meeting</a></button>
        <span><a href="#" style={textdeco}>How It Works</a></span>
        </div>
        
        </div>
       
      </div>
      <div className="col-sm-12 col-md-6 col-lg-7 container bg-primary">2</div>
    </div>
  );
}
export default Hero