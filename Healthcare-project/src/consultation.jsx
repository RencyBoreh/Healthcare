import 'bootstrap/dist/css/bootstrap.min.css';
// import Darmatologist from './assets/Darmatologist.jpg';
import consultation from './assets/consultation.PNG';
function Consultation(){
  const textdeco={
    textDecoration:'none'
   }
   const body={
    height:'80vh'
   }
   const img={
    heigth:'70%'
   }
    return(
      <div className="container-fluid mt-5 row bg-success" style={body}>
        <div className="col-sm-12 col-md-6 col-lg-7 container bg-primary">
          <img src={consultation} alt=""  className=''/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-5 container align-content-center  justify-content-center p-5 bg-info">
          <div className="container bg-light align-content-center  shadow p-5">
          <h2 className='my-3'>Consultation with our professional doctors.</h2>
          <p>Our doctors bring years of experience and specialized knowledge to the table, ensuring you receive the highest quality of care. We understand that every individual is unique. Our consultations are tailored to your specific needs, taking into account your medical history, lifestyle, and preferences.</p>
          <div className="d-grid">
          <button className="btn btn-block mt-3 btn-primary px-4"><a href="#" style={textdeco} className='text-light'>Book a Meeting</a></button>
          
          </div>
          
          </div>
         
        </div>
        
      </div>
    );
}
export default Consultation