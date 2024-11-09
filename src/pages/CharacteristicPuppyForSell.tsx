import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import AuthenticationPopup from '../components/authentication-popups/AuthenticationPopup';
import CharacteristicPuppyForSellContainer from '../container/CharacteristicPuppyForSell';


interface Charater {
  title: string;
  text: string;
}
interface Props{
  charater: Charater;
}
const CharacteristicPuppyForSell: React.FC<Props> = ({charater}) => {


    useEffect(() =>{
        document.title = `${charater.title} | PuppySpot`;
        document.body.classList.add('gray-background')
    }, []);



  return (
    <div>
      <AuthenticationPopup />
      <CharacteristicPuppyForSellContainer characteristic={charater}/>
      <Footer />
    </div>
  );
}

export default CharacteristicPuppyForSell;
