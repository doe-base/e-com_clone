import React, { useEffect, useState } from 'react';
import BreederStandardsContainer from '../container/BreederStandards';
import "../styles/breeder-standards.css"
import Footer from '../components/footer';

interface Props{
}
const BreederStandards: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "Breeder Standards | PuppySpot";
    }, []);


  return (
    <>
        <BreederStandardsContainer />
        <Footer />
    </>
  );
}

export default BreederStandards;
