import React, {useState} from 'react';
import HomeContainer from '../container/Home';
import Footer from '../components/footer';


interface Props{
}
const HomePage: React.FC<Props> = ({}) => {

  return (
    <div>
      <HomeContainer />
      <Footer />
    </div>
  );
}

export default HomePage;
