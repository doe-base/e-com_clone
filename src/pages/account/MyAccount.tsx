import React, { useEffect, useState } from 'react';
import '../../styles/account.css'
import '../../styles/account2.css'
// import '../../styles/account3.css' //This was suppose to add the full screen account nav drawer
import MyAccountContainer from '../../container/MyAccountContainer';
import MyAccountAuthenticatedContainer from '../../container/MyAccountAuthenticatedContainer';
import AccountSidebar from "../../components/account-components/AccountSidebar";


interface Props{
  page: string;
}

const MyAccount: React.FC<Props> = ({page}) => {

    useEffect(() =>{
        document.title = "My Account | PuppySpot";
        document.body.classList.add('gray-background')
    }, []);


  return (
    <main className="account">
        <AccountSidebar page={page} />
        
        <MyAccountAuthenticatedContainer />
    </main>
  );
}

export default MyAccount;
