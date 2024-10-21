import React, { useEffect, useState } from 'react';
import '../styles/career.css'
import CareerContainer from '../container/Career';
import Footer from '../components/footer';

interface Props{
}
const Career: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "Careers | PuppySpot";
    }, []);


  return (
    <>
        <CareerContainer />
        <Footer />
    </>
  );
}

export default Career;
