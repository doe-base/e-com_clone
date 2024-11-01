import React, { useEffect, useState } from 'react';
import '../styles/akc.css'
import AKCContainer from '../container/AKC';
import Footer from '../components/footer';

interface Props{
}
const AKC: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "PuppySpot Partners with AKC | PuppySpot";
    }, []);


  return (
    <>
        <AKCContainer />
        <Footer />
    </>
  );
}

export default AKC;
