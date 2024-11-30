import React, { useEffect, useState } from 'react';
import SitemapContainer from '../../container/Sitemap';
import Footer from '../../components/footer';
import "../../styles/legal.css"

interface Props{
}
const Sitemap: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "PuppySpotAdoption Sitemap | PuppySpot";
    }, []);


  return (
    <>
        <SitemapContainer />
        <Footer />
    </>
  );
}

export default Sitemap;
