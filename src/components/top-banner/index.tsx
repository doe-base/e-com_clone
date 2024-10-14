import React from 'react';
import "./index.css"
import { navbar } from '../../contants/routes'

function TopBanner() {
    
  return (
    <div className="sales-banner green">
        <a href={navbar.PHONE_WHATSAPP} className="phone">
            Call our Puppy Concierges: 8AM-Midnight
        </a>
    </div>
  );
}

export default TopBanner;

