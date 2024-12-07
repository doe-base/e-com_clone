import React, { useEffect, useState } from 'react';
import PuppyTravelContainer from '../container/PuppyTravel';
import "../styles/dog-travel.css"
import Footer from '../components/footer';

interface Props{
}
const PuppyTravel: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "Dog Travel | PuppySpot";
    }, []);


  return (
    <>
        <PuppyTravelContainer />
        <Footer />
    </>
  );
}

export default PuppyTravel;
