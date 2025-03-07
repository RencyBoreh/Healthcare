import React from 'react';
import Header from "./header.jsx"
import Hero from './hero.jsx';
import Services from './services.jsx';
import Consultation from './consultation.jsx';
import Doctors from './doctors.jsx';
import Footer from "./footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <>
    <Header/>
    <Hero/>
    <Services/>
    <Consultation/>
    <Doctors/>
    <Footer/>
   </>
  );
 

}

export default App
