import React, { useEffect, useState } from 'react';
import '../styles/dog-registration.css'
import DogRegistrationContainer from '../container/DogRegistration';
import Footer from '../components/footer';

interface Props{
}
const DogRegistration: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "PuppySpot Dog Registration | PuppySpot";
    }, []);


  return (
    <>
        <DogRegistrationContainer />
        <Footer />
    </>
  );
}

export default DogRegistration;
