import React, { useEffect, useState } from 'react';
import '../styles/breed-overview.css'
import Footer from '../components/footer';
import { useParams } from 'react-router-dom';
import BreedsOverviewContainer from '../container/BreedsOverview';

interface Props{
}
const BreedOverview: React.FC<Props> = ({}) => {
    const { breedSlug } = useParams();

    // Map the breedSlug to the Overview information when gotten

    //Change to actucal name of breed
    const breed_name = 'Breed'
    useEffect(() =>{
        document.title = `${breed_name} Facts, Information, and Characteristics | PuppySpot`;
    }, []);


  return (
    <>
        <BreedsOverviewContainer />
        <Footer />
    </>
  );
}

export default BreedOverview;
