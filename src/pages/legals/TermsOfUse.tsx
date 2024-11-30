import React, { useEffect, useState } from 'react';
import TermsOfUseContainer from '../../container/TermsOfUse';
import Footer from '../../components/footer';
import "../../styles/legal.css"

interface Props{
}
const TermsOfUse: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "Terms Of Use | PuppySpot";
    }, []);


  return (
    <>
        <TermsOfUseContainer />
        <Footer />
    </>
  );
}

export default TermsOfUse;
