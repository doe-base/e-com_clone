import React, { useEffect, useState } from 'react';
import '../styles/breed.css'
import BreedsContainer from '../container/Breeds';
import Footer from '../components/footer';

interface Props{
}
const Breed: React.FC<Props> = ({}) => {

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
