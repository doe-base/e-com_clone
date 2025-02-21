import React, { useEffect, useState } from 'react';
import NavContainer from './components/nav/nav-container';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@mui/styles";
import { createTheme } from '@mui/material/styles';
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
import ProceedWithAgent from './pages/checkout/ProceedWithAgent'
import BreedPuppiesForSell from './pages/BreedPuppiesForSell';
import Breed from './pages/Breeds';
import BreedOverview from './pages/BreedsOverview';
import CharacteristicPuppyForSell from './pages/CharacteristicPuppyForSell';
import MyAccount from './pages/account/MyAccount';
import useAuthListener from './hooks/use-auth-listener';
import puppyCharacterArr from './data/puppy-characteristics';
import ForgotPassword from './pages/ForgetPassword';
import MyAccountContainer from './container/MyAccountContainer';
import Favorites from './pages/account/Favourite';
import OrderHistory from './pages/account/OrderHistory';
import Privacy from './pages/legals/Privacy';
import TermsOfUse from './pages/legals/TermsOfUse';
import Sitemap from './pages/legals/Sitemap';
import TermsAndConditionsOfCommitment from './pages/legals/TermsAndConditionsOfCommitment';
import TermsAndConditionsOfSale from './pages/legals/TermsAndConditionsOfSale';
import Reviews from './pages/Reviews';
import ResourceCenter from './pages/ResourceCenter';
import ContactUs from './pages/Contact'
import BreederStandards from './pages/BreederStandards'
import PuppyTravel from './pages/PuppyTravel'
import HealthCheck from './pages/HealthCheck'
import GivesBack from './pages/GivesBack'
import Collection from './pages/Collection'
import BreedState from './pages/BreedState';
import PuppyTracker from './pages/PuppyTracker';



function App() {
  const {user} = useAuthListener();
  const [isVerified, setIsVerified] = useState(!user ? '' :  user.emailVerified)
  const location = window.location.pathname;

  const [navHeight, setNavHeight] = useState<number>(0)
  const [isPuppiesForSale, setIsPuppiesForSale] = useState(false);

  const pathSegments = location.split('/').filter(segment => segment);
  const hideNavPaths = ["/shop/checkout", "/shop/review"];

  let theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1000,
        lg: 1200,
        xl: 1536,
        // Add custom breakpoints here (e.g., xxl: 1800)
      }
    },
  });

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/puppies-for-sale/') {
      setIsPuppiesForSale(true);
    } else {
      setIsPuppiesForSale(false);
    }
  }, []);



  return (
    <ThemeProvider theme={theme}>
      <div className="App">

        {/* Conditionally render NavContainer */}
        {!hideNavPaths.includes(`/${pathSegments[0]}/${pathSegments[1]}`) && (
          <>
            <NavContainer setNavHeight={setNavHeight} isPuppiesForSale={isPuppiesForSale} user={user} />
            <div style={{height: `${navHeight}px`}} className='space-height-nav'></div>
          </>
        )}

        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/puppies-for-sale" element={<PuppiesForSell />} />
            <Route path="/puppies-for-sale/breed/:breedSlug" element={<BreedPuppiesForSell />} />
            <Route path="/puppies-for-sale/breed/:breedSlug/puppy/:puppyId" element={<SinglePuppy />} />

            <Route path="/breed" element={<Breed pureordesigner={''} />} />
            {/* <Route path="/puppies-for-sale/breed/:breedSlug/overview" element={<BreedOverview />} /> */}
            <Route path="/breed/purebred-breeds" element={<Breed pureordesigner={'pure'} />} />
            <Route path="/breed/designer-breeds" element={<Breed pureordesigner={'designer'}/>} />
            {
              puppyCharacterArr.map(item => {
                return <Route path={`/breed/collections/${item.slug}`} element={<CharacteristicPuppyForSell charater={item} />} />
              })
            }
            <Route path="/find-puppies/:state" element={<BreedState />} />

            <Route path="/collections" element={<Collection />} />
            <Route path="/log-in" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/promise" element={<PuppyPromise />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/dog-registration" element={<DogRegistration />} />
            <Route path="/akc" element={<AKC />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/resource-center" element={<ResourceCenter />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/puppyspot-standards" element={<BreederStandards />} />
            <Route path="/dog-travel" element={<PuppyTravel />} />
            <Route path="/health-check" element={<HealthCheck />} />
            <Route path="/gives-back" element={<GivesBack />} />




            {/* This path sould contain a uniqe session code after payment is register */}
            <Route path="/shop/checkout/details/:puppyId" element={<CheckoutDetail />} />
            <Route path="/shop/checkout/travel/:paymentID/:puppyId" element={<CheckoutTravel />} />
            <Route path="/shop/checkout/essentials/:paymentID/:puppyId" element={<CheckoutEssentials />} />
            {/*<Route path="/shop/checkout/:paymentID/:puppyId/:paymentOption" element={<Checkout />} />*/}
            <Route path="/shop/review/:paymentID/:puppyId" element={<ProceedWithAgent />} />
            <Route path="/shop/puppy-tracker/:id?" element={<PuppyTracker />} />

            

            {/* Legals */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/terms-and-conditions-of-commitment" element={<TermsAndConditionsOfCommitment />} />
            <Route path="/terms-and-conditions-of-sale" element={<TermsAndConditionsOfSale />} />


            {/* Has to be authenticated */}
            {
              !user
              ?
              null
              :
              <>
                <Route
                  path="/my-account"
                  element={!isVerified ? <MyAccountContainer page={"my-account"} userEmail={!user ? '' : user.email}/> : <MyAccount page={"my-account"} />}
                />
                <Route
                  path="/my-account/favorite-puppies"
                  element={!isVerified ? <MyAccountContainer page={"favorite-puppies"} userEmail={!user ? '' : user.email}/> : <Favorites page={"favorite-puppies"}/>}
                />
                <Route
                  path="/my-account/order-history"
                  element={!isVerified ? <MyAccountContainer page={"order-history"} userEmail={!user ? '' : user.email}/> : <OrderHistory page={"order-history"} userEmail={!user ? '' : user.email} />}
                />
              </>
            }
          </Routes>
        </Router>
      </div>
    </ThemeProvider>

  );
}

export default App;
