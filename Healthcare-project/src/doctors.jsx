import 'bootstrap/dist/css/bootstrap.min.css';
function Doctors(){
  const textdeco={
    textDecoration:'none'
   }

  return(
    <div className="container-fluid mt-2">
      <h2 className="text-center text-primary">Our Doctors</h2>
      <div className="container-fluid row">
  
        <div className="col-md-6 col-lg-3 col-sm-12 p-2">
          <div className="card bg-light shadow-sm p-2">
            <div className="card-img-top">image</div>
            <div className="card-title">
            <h3>Dr.Boreh (Psychologist)</h3>
            </div>
            <div className="card-text">Help with anxiety, eating disorders, panic attacks, medications</div>
            <div className="card-link d-grid"><button className="btn btn-success btn-block mt-4">See Profile</button></div>
          </div>
         
        </div>
        <div className="col-md-6 col-lg-3 col-sm-12 p-2">
          <div className="card shadow-sm p-2 bg-light">
            <div className="card-img-top">image</div>
            <div className="card-title"><h3>Dr.Muchiri (Dermatologist)</h3></div>
            <div className="card-text">With experience in diagnosing and treating a wide range of dermatological conditions.</div>
            <div className="card-link d-grid"> <button className="btn btn-success btn-block"><a href="#"style={textdeco} className='text-light'>See Profile</a></button></div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 col-sm-12 p-2">
          <div className="card p-2 bg-light shadow-sm">
            <div className="card-img-top">image</div>
            <div className="card-title"><h3>Dr.Joyce (Gynecologist)</h3></div>
            <div className="card-text">Comprehensive and experienced gynecological care for women's health and well-being</div>
            <div className="card-link d-grid"> <button className="btn btn-success btn-block"><a href="#"style={textdeco} className='text-light'>See Profile</a></button></div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 col-sm-12 p-2">
          <div className="card p-2 bg-light shadow-sm">
            <div className="card-img-top">image</div>
            <div className="card-title"><h3>Dr.Joyce (Gynecologist)</h3></div>
            <div className="card-text">Comprehensive and experienced gynecological care for women's health and well-being</div>
            <div className="card-link d-grid"> <button className="btn btn-success btn-block"><a href="#"style={textdeco} className='text-light'>See Profile</a></button></div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
export default Doctors