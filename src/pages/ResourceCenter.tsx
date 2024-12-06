import React, { useEffect, useState } from 'react';
import '../styles/resource-center.css'
import ResourceCenterContainer from '../container/ResourceCenter';
import Footer from '../components/footer';

interface Props{
}
const ResourceCenter: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "Puppy Resource Center | PuppySpot";
    }, []);


  return (
    <>
        <ResourceCenterContainer />
        <Footer />
    </>
  );
}

export default ResourceCenter;
