import React, { useEffect, useState } from 'react';
import '../styles/single-puppy.css'
import SinglePuppyContainer from '../container/SinglePuppy';
import Footer from '../components/footer';


interface Props{
}
const SinglePuppy: React.FC<Props> = ({}) => {
    
    // const {name, breed, sex} = {};
    useEffect(() =>{
        document.title = " | PuppySpot";
    }, []);


  return (
    <>
        <SinglePuppyContainer />
        <Footer />
    </>
  );
}

export default SinglePuppy;
