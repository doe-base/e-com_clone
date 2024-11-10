import React, { useEffect } from 'react';
import Footer from '../components/footer';
import PuppiesForSellContainer from '../container/PuppiesForSell';
import AuthenticationPopup from '../components/authentication-popups/AuthenticationPopup';

interface Props{
}
const PuppiesForSell: React.FC<Props> = ({}) => {
    const params = new URLSearchParams(window.location.search);
    //Work on Auto selecting the query
    const query = params.get('query');
    const gender = params.get('gender');

    useEffect(() =>{
        document.title = "Puppies for Sale | Dogs for sale | PuppySpot";
        document.body.classList.add('gray-background')
    }, []);

  return (
    <div>
      <AuthenticationPopup />
      <PuppiesForSellContainer breedQuery={query} genderQuery={gender} />
      <Footer />
    </div>
  );
}

export default PuppiesForSell;
