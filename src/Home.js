import React from 'react';
import Navbar from "./Navbar";
import Header from "./Header";
import HowDoesWorks from "./HowDoesWorks";
import Aboutus from "./Aboutus";
import Services from "./Services";
import Contactus from "./Contactus";
import Footer from "./Footer";


const Home = ()=>{
  
 
 return (
    <>
      <Navbar/>
      <Header/>
      <HowDoesWorks/> 
      <Aboutus/>
      <Services/>
      <Contactus/>
      <Footer/>
      
      
    </>
  );
}

export default Home;