import React, { useEffect } from 'react';
import Footer from '../components/footer';
import PuppiesForSellContainer from '../container/PuppiesForSell';
import AuthenticationPopup from '../components/authentication-popups/AuthenticationPopup';

interface Props{
}
const PuppiesForSell: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "Puppies for Sale | Dogs for sale | PuppySpot";
        document.body.classList.add('gray-background')
    }, []);

  return (
    <div>
      <AuthenticationPopup />
      <PuppiesForSellContainer />
      <Footer />
    </div>
  );
}

export default PuppiesForSell;
