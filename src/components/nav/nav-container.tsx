import { useState } from 'react';
import TopBanner from '../top-banner/index';
import Navbar from './big-screen-nav';
import NavDrawer from './nav-drawer';

function NavContainer() {

   const [smallNavOpen, setSmallNavOpen] = useState(false);

  return (
    <nav>
        <TopBanner />

        <Navbar smallNavOpen={smallNavOpen} setSmallNavOpen={setSmallNavOpen}/>

        <NavDrawer smallNavOpen={smallNavOpen} setSmallNavOpen={setSmallNavOpen}/>
    </nav>
  );
}

export default NavContainer;






