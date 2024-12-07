import React, { useEffect, useState } from 'react';
import '../styles/collections.css'
import CollectionContainer from '../container/Collection';
import Footer from '../components/footer';

interface Props{
}
const Collection: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "Puppy Breed Collection | PuppySpot";
    }, []);


  return (
    <>
        <CollectionContainer />
        <Footer />
    </>
  );
}

export default Collection;
