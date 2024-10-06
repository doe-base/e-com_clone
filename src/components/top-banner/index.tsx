import React from 'react';
import "./index.css"

function TopBanner() {
    const us_number = process.env.REACT_APP_US_NUMBER || '+15023820019'
  return (
    <div className="sales-banner green">
        <a href={`https://wa.me/${us_number}`} className="phone">
            Call our Puppy Concierges: 8AM-Midnight
        </a>
    </div>
  );
}

export default TopBanner;

