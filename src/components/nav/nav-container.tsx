import { useEffect, useRef, useState } from 'react';
import TopBanner from '../top-banner/index';
import Navbar from './big-screen-nav';
import NavDrawer from './nav-drawer';

interface Props{
  setNavHeight: React.Dispatch<React.SetStateAction<number>>;
  isPuppiesForSale: boolean;
  user: any;
}
const NavContainer: React.FC<Props> = ({setNavHeight, isPuppiesForSale, user}) => {
   const [smallNavOpen, setSmallNavOpen] = useState(false);
   const navRef = useRef<HTMLDivElement>(null);
   const [isOverviewPage, setIsOverviewPage] = useState(false);
   const  pathname = window.location.pathname;

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, [isPuppiesForSale]);

  useEffect(() => {
    const pathRegex = /^\/puppies-for-sale\/breed\/[^/]+\/overview$/;
    setIsOverviewPage(pathRegex.test(pathname || ''));
  }, [pathname]);

  return (
    <nav ref={navRef} style={{position: 'fixed', zIndex: '10', width: '100%'}}>
        <TopBanner />

        <Navbar smallNavOpen={smallNavOpen} setSmallNavOpen={setSmallNavOpen} isPuppiesForSale={isPuppiesForSale} isOverviewPage={isOverviewPage} user={user}/>

        <NavDrawer smallNavOpen={smallNavOpen} setSmallNavOpen={setSmallNavOpen}/>
        
    </nav>
  );
}

export default NavContainer;






