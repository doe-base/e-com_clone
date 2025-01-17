import React, { useEffect, useState } from 'react';
import "./index.css"
import { navbar, pages } from '../../contants/routes'

function TopBanner() {
  
  const [showFirstLink, setShowFirstLink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstLink((prev) => !prev);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='sales-banner_green' className="sales-banner green">
      {showFirstLink ? (
        <a href={navbar.PHONE_WHATSAPP} className="phone">
          Call our Puppy Concierges: 8AM-Midnight
        </a>
      ) : (
        <a href={pages.PUPPIES_FOR_SELL} className="phone">
          Adopt Now For Valentine's Day Delivery 
        </a>
      )}
    </div>
  );
}

export default TopBanner;

