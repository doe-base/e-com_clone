import React, { useEffect, useState } from 'react';
import NavContainer from './components/nav/nav-container';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/Home';
import PuppiesForSell from './pages/PuppiesForSell';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AboutUs from './pages/AboutUs';
import PuppyPromise from './pages/PuppyPromise';
import Career from './pages/Career';
import DogRegistration from './pages/DogRegistration';
import AKC from './pages/AKC';
import SinglePuppy from './pages/SinglePuppy';
import CheckoutDetail from './pages/checkout/Details';
import CheckoutTravel from './pages/checkout/Travel';
import CheckoutEssentials from './pages/checkout/Essentials';
import Checkout from './pages/checkout/Checkout';


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

  const location = window.location.pathname;
  const newPath = location.replace(/\/[^\/]*$/, '');
  // List of paths where the NavContainer should not be displayed
  const hideNavPaths = ["/shop/checkout/details", "/shop/checkout/travel", "/shop/checkout/essentials", "/shop/checkout/checkout"];

  return (
    <div className="App">

      {/* Conditionally render NavContainer */}
      {!hideNavPaths.includes(newPath) && (
        <>
          <NavContainer setNavHeight={setNavHeight} isPuppiesForSale={isPuppiesForSale}/>
          <div style={{height: `${navHeight}px`}} className='space-height-nav'></div>
        </>
      )}

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
          <Route path="/single-puppy" element={<SinglePuppy />} />
          <Route path="/shop/checkout/details/:puppy-id" element={<CheckoutDetail />} />
          {/* This path sould contain a uniqe session code after payment is register */}
          <Route path="/shop/checkout/travel/:puppy-id" element={<CheckoutTravel />} />
          <Route path="/shop/checkout/essentials/:puppy-id" element={<CheckoutEssentials />} />
          <Route path="/shop/checkout/checkout/:puppy-id" element={<Checkout />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
