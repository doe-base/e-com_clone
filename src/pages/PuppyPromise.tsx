import React, { useEffect } from 'react';
import Footer from '../components/footer';
import PuppyPromiseContainer from '../container/PuppyPromise';
import '../styles/puppypromise.css'

interface Props{
}
const PuppyPromise: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "The PuppySpot Promise | PuppySpot";
    }, []);

  return (
    <div>
      <PuppyPromiseContainer />
      <Footer />
    </div>
  );
}

export default PuppyPromise;