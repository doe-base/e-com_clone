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
import BreedPuppiesForSell from './pages/BreedPuppiesForSell';
import Breed from './pages/Breeds';
import BreedOverview from './pages/BreedsOverview';
import CharacteristicPuppyForSell from './pages/CharacteristicPuppyForSell';
import MyAccount from './pages/account/MyAccount';
import useAuthListener from './hooks/use-auth-listener';


const activeDogs = {
  title: 'Top Active Dog Breeds',
  text: 'Are you always on the go and looking for a canine friend to tag along with? Well, you’re in luck because here are some four-legged companions that are sure to keep up with your active lifestyle. These lovely and high-energy breeds would be glad to accompany you on any outdoor physical exercise or family adventure.',
}
const apartmentDogs = {
  title: 'Best Apartment Dogs',
  text: "Whether you're living in a cramped apartment, condo or studio, these easygoing breeds will fit just right in. These dogs are moderately active, they don't require much exercise and would rather chill at home with you. When considering adding a new furry family member into your home, don't forget to consider the breed's energy level, noisiness, and friendliness. Explore our recommended dogs breeds for apartments and small living spaces.",
}
const familyDogs = {
  title: 'Best Family Dogs',
  text: 'Choosing the perfect puppy for your family requires thoughtful consideration of your lifestyle, living condition, energy level, and children ages. You want a puppy that can keep up with your activities, has an outgoing and friendly personality and who is affectionate with the whole family. Discover the best dog breeds for your family.',
}

const friendlyDogs = {
  title: 'Allergy Friendly Dogs',
  text: "While the American Kennel Club says there are no 100% hypoallergenic there are certain breeds that cause fewer allergy symptoms. These dogs shed significantly less than other dogs and, therefore, produce less dander (the main cause of pet allergies in humans). Explore our recommended hypoallergenic dog breeds.",
}
const teaCupDogs = {
  title: 'Teacup Puppies',
  text: 'Teacup puppies are an adorable type of dog that are extra friendly and incredibly cute. Are you considering adding a teacup puppy? Read on to learn more about teacup puppies and how to choose the right one for your family.',
}
const doodleDogs = {
  title: 'Doodle Puppies',
  text: 'Put simply, a Doodle dog is a crossbreed of a Poodle any other breed - that’s where we get the “oodle” in “Doodle” and the “poo” in Cockapoo, Shihpoo and Cavapoo. There are many different types of Doodles and they are known as intelligent, trainable, and affectionate pups.',
}

function App() {
  const [navHeight, setNavHeight] = useState<number>(0)
  const [isPuppiesForSale, setIsPuppiesForSale] = useState(false);
  const {user} = useAuthListener();


  let theme = createTheme({
    breakpoints: {
      values: {
        xs: 0, // Extra small
        sm: 600, // Small
        md: 1000, // Medium
        lg: 1200, // Large
        xl: 1536, // Extra large
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
  }, []); // Runs only on initial render

  const location = window.location.pathname;
  console.log(location)
  // List of paths where the NavContainer should not be displayed
  const pathSegments = location.split('/').filter(segment => segment);
  const hideNavPaths = ["/shop/checkout"];


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
            <Route path="/puppies-for-sale/breed/:breedSlug/overview" element={<BreedOverview />} />
            <Route path="/breed/purebred-breeds" element={<Breed pureordesigner={'pure'} />} />
            <Route path="/breed/designer-breeds" element={<Breed pureordesigner={'designer'}/>} />
            <Route path="/breed/collections/active-dogs" element={<CharacteristicPuppyForSell charater={activeDogs} />} />
            <Route path="/breed/collections/best-apartment-dogs" element={<CharacteristicPuppyForSell charater={apartmentDogs} />} />
            <Route path="/breed/collections/best-family-dogs" element={<CharacteristicPuppyForSell charater={familyDogs} />} />
            <Route path="/breed/collections/allergy-friendly-dogs" element={<CharacteristicPuppyForSell charater={friendlyDogs} />} />
            <Route path="/breed/collections/teacup-puppies" element={<CharacteristicPuppyForSell charater={teaCupDogs} />} />
            <Route path="/breed/collections/doodle-puppies" element={<CharacteristicPuppyForSell charater={doodleDogs} />} />


            <Route path="/log-in" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/promise" element={<PuppyPromise />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/dog-registration" element={<DogRegistration />} />
            <Route path="/akc" element={<AKC />} />
            {/* This path sould contain a uniqe session code after payment is register */}
            <Route path="/shop/checkout/details/:puppyId" element={<CheckoutDetail />} />
            <Route path="/shop/checkout/travel/:paymentID/:puppyId" element={<CheckoutTravel />} />
            <Route path="/shop/checkout/essentials/:paymentID/:puppyId" element={<CheckoutEssentials />} />
            
            <Route path="/shop/checkout/:paymentID/:puppyId/:paymentOption" element={<Checkout />} />

            {/* Has to be authenticated */}
            <Route path="/my-account" element={<MyAccount />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>

  );
}

export default App;
