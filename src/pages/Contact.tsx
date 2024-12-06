import React, { useEffect, useState } from 'react';
import ContactUsContainer from '../container/Contact';
import Footer from '../components/footer';

interface Props{
}
const ContactUs: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "Contact Us | PuppySpot";
    }, []);


  return (
    <>
        <ContactUsContainer />
        <Footer />
    </>
  );
}

export default ContactUs;
