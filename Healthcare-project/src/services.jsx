import 'bootstrap/dist/css/bootstrap.min.css';

function Services(){
  const textdeco={
    textDecoration:'none'
   }
return(
  <>
  <h3 className="text-center text-primary mt-4">Services</h3>
  <div className=" row  mt-4 p-4 container-fluid">
    <div className="col-sm-12 mt-2 col-md-6 col-lg-6 row justify-content-center">
      <div className="card  bg-light shadow col-sm-10 col-md-10 col-lg-8">
        <div className="card-header text-center">
        <h3 className="text-primary">Dermatology</h3>
        </div>
        <div className="card-img-top">image</div>
        <div className="card-body">
          <p>From diagnosing and treating skin conditions, our dermatologists are here to help you achieve healthy skin</p>
        </div>
        <div className="my-2 d-grid">
          <button className="btn btn-primary"><a href="#" className='text-light' style={textdeco}>Consult the Doctor</a></button>
        </div>
      </div>
    </div>
    <div className="col-sm-12 mt-2 col-md-6 col-lg-6 row justify-content-center">
    <div className="card shadow bg-light col-sm-10 col-md-10 col-lg-8">
        <div className="card-header text-center">
          <h3 className="text-primary">Psychology</h3>
        </div>
        <div className="card-img-top">image</div>
        <div className="card-body">
          <p>Professional and empathetic psychological support to help you navigate life's challenges and improve your mental well-being</p>
        </div>
        <div className="d-grid my-2">
          <button className="btn btn-primary"><a href="#" className='text-light' style={textdeco}>Consult the Doctor</a></button>
        </div>
        
      </div>
    </div>
  </div>
  <div className="container-fluid  p-4 row">
  <div className="col-sm-12 col-md-6 mt-2 col-lg-6 row justify-content-center">
  <div className="card shadow bg-light col-sm-10 col-md-10 col-lg-8">
        <div className="card-header text-center">
        <h3 className="text-primary">Psychiatry</h3>
        </div>
        <div className="card-img-top">image</div>
        <div className="card-body">
          <p>From psychiatric assessments to therapy and medication management, our goal is to empower you.</p>
        </div>
        <div className="card-footer">
        <div className="d-grid">
          <button className="btn btn-primary"><a href="#" className='text-light' style={textdeco}>Consult the Doctor</a></button>
        </div>
        </div>
      </div>
  </div>
  <div className="col-sm-12 col-md-6 col-lg-6 row justify-content-center">
  <div className="card shadow bg-light col-sm-10 col-md-10 mt-2 col-lg-8">
        <div className="card-header text-center ">
        <h3 className="text-primary">Gynecology</h3>
        </div>
        <div className="card-img-top">image</div>
        <div className="card-body">
          <p>Our doctors are committed to providing comprehensive, confidential, and evidence-based medical services.</p>
        </div>
        <div className="card-footer">
        <div className="d-grid">
          <button className="btn btn-primary"><a href="#" className='text-light' style={textdeco}>Consult the Doctor</a></button>
        </div>
        </div>
      </div>
  </div>
  </div>
  
  </>
);

}
export default Services