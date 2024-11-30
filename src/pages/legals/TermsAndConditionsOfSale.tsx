import React, { useEffect, useState } from 'react';
import TermsAndConditionsOfSaleContainer from '../../container/TermsAndConditionsOfSale';
import Footer from '../../components/footer';
import "../../styles/legal.css"

interface Props{
}
const TermsAndConditionsOfSale: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "Terms and Conditions of Commitment | PuppySpot";
    }, []);


  return (
    <>
        <TermsAndConditionsOfSaleContainer />
        <Footer />
    </>
  );
}

export default TermsAndConditionsOfSale;
