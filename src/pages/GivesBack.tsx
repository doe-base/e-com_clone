import React, { useEffect, useState } from 'react';
import GivesBackContainer from '../container/GivesBack';
import "../styles/gives-back.css"
import Footer from '../components/footer';

interface Props{
}
const GivesBack: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "Gives Back | PuppySpot";
    }, []);


  return (
    <>
        <GivesBackContainer />
        <Footer />
    </>
  );
}

export default GivesBack;
