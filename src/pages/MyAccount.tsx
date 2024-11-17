import React, { useEffect, useState } from 'react';
import '../styles/account.css'
import MyAccountContainer from '../container/MyAccountContainer';

interface Props{
}
const MyAccount: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "My Account | PuppySpot";
        document.body.classList.add('gray-background')
    }, []);


  return (
    <>
        <MyAccountContainer />
    </>
  );
}

export default MyAccount;
