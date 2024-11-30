import React, { useEffect, useState } from 'react';
import TermsAndConditionsOfCommitmentContainer from '../../container/TermsAndConditionsOfCommitment';
import Footer from '../../components/footer';
import "../../styles/legal.css"

interface Props{
}
const TermsAndConditionsOfCommitment: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "Terms and Conditions of Commitment | PuppySpot";
    }, []);


  return (
    <>
        <TermsAndConditionsOfCommitmentContainer />
        <Footer />
    </>
  );
}

export default TermsAndConditionsOfCommitment;
