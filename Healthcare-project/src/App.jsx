import React from 'react';

import Header from "./header.jsx"
import Hero from './hero.jsx';
import Services from './services.jsx';
import Consultation from './consultation.jsx';
import Doctors from './doctors.jsx';
import Footer from "./footer.jsx";
import Contact from './contact.jsx'
import Meeting from './meeting.jsx';
import {Route,Routes} from 'react-router-dom';
import NotFound from './NotFound.jsx';
function App() {
  return(
    
    <>
     <Header />
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/consultation' element={<Consultation/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/meeting' element={<Meeting/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
   
    <Footer /> 
    </>
  
  );
 

}

export default App
{/* <Hero/>
<Services/>
<Consultation/>
<Doctors/>
<Contact/>
<Meeting/> */}