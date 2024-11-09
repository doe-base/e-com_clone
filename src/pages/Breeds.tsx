import React, { useEffect, useState } from 'react';
import '../styles/breed.css'
import BreedsContainer from '../container/Breeds';
import Footer from '../components/footer';

interface Props{
  pureordesigner: string;
}
const Breed: React.FC<Props> = ({pureordesigner}) => {
  
    // Work on Filter Pure or designer

    useEffect(() =>{
        document.title = "Complete List Descriptions, and Puppies for Sale | PuppySpot";
        document.body.classList.add('gray-background')
    }, []);


  return (
    <>
        <BreedsContainer />
        <Footer />
    </>
  );
}

export default Breed;
