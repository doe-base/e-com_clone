import React, { useEffect, useState } from 'react';
import '../styles/about.css'
import AboutUsContainer from '../container/AboutUs';
import Footer from '../components/footer';

interface Props{
}
const AboutUs: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "About PuppuSpot.com | PuppySpot";
    }, []);


  return (
    <>
        <AboutUsContainer />
        <Footer />
    </>
  );
}

export default AboutUs;
