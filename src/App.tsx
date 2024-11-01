import React, { useEffect, useState } from 'react';
import NavContainer from './components/nav/nav-container';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';
import PuppiesForSell from './pages/PuppiesForSell';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutUs from './pages/AboutUs';
import PuppyPromise from './pages/PuppyPromise';
import Career from './pages/Career';
import DogRegistration from './pages/DogRegistration';
import AKC from './pages/AKC';


function App() {
  const [navHeight, setNavHeight] = useState<number>(0)
  const [isPuppiesForSale, setIsPuppiesForSale] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    console.log(currentPath)
    if (currentPath === '/puppies-for-sale/') {
      setIsPuppiesForSale(true);
    } else {
      setIsPuppiesForSale(false);
    }
  }, []); // Runs only on initial render

  return (
    <div className="App">
      <NavContainer setNavHeight={setNavHeight} isPuppiesForSale={isPuppiesForSale}/>
      <div style={{height: `${navHeight}px`}} className='space-height-nav'></div>

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/puppies-for-sale" element={<PuppiesForSell />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/promise" element={<PuppyPromise />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/dog-registration" element={<DogRegistration />} />
          <Route path="/akc" element={<AKC />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
