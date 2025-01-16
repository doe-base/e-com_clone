import React, { useEffect, useState } from 'react';
import '../styles/breed-overview.css'
import Footer from '../components/footer';
import { useParams } from 'react-router-dom';
import BreedStateContainer from '../container/BreedState';

interface Props{}
const BreedState: React.FC<Props> = ({ }) => {
    const { state } = useParams();

    useEffect(() =>{
        document.title = `Puppies for Sale in ${state} | PuppySpot`;
    }, []);


  return (
    <>
        <BreedStateContainer  state={state}/>
        <Footer />
    </>
  );
}

export default BreedState;