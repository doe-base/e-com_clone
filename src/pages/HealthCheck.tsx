import React, { useEffect, useState } from 'react';
import HealthCheckContainer from '../container/HealthCheck';
import "../styles/health-check.css"
import Footer from '../components/footer';

interface Props{
}
const HealthCheck: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "Health Check | PuppySpot";
    }, []);


  return (
    <>
        <HealthCheckContainer />
        <Footer />
    </>
  );
}

export default HealthCheck;
