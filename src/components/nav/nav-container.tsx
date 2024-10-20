import { useEffect, useRef, useState } from 'react';
import TopBanner from '../top-banner/index';
import Navbar from './big-screen-nav';
import NavDrawer from './nav-drawer';

interface Props{
  setNavHeight: React.Dispatch<React.SetStateAction<number>>;
  isPuppiesForSale: boolean;
}
const NavContainer: React.FC<Props> = ({setNavHeight, isPuppiesForSale}) => {
   const [smallNavOpen, setSmallNavOpen] = useState(false);
   const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, [isPuppiesForSale]);

  return (
    <nav ref={navRef} style={{position: 'fixed', zIndex: '10', width: '100%'}}>
        <TopBanner />

        <Navbar smallNavOpen={smallNavOpen} setSmallNavOpen={setSmallNavOpen} isPuppiesForSale={isPuppiesForSale}/>

        <NavDrawer smallNavOpen={smallNavOpen} setSmallNavOpen={setSmallNavOpen}/>
        
    </nav>
  );
}

export default NavContainer;






