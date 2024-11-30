import React, { useEffect, useState } from 'react';
import PrivacyContainer from '../../container/Privacy';
import Footer from '../../components/footer';
import "../../styles/legal.css"

interface Props{
}
const Privacy: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "Privacy Policy | PuppySpot";
    }, []);


  return (
    <>
        <PrivacyContainer />
        <Footer />
    </>
  );
}

export default Privacy;
