import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import BreedPuppiesForSellContainer from '../container/BreedPuppiesForSell';
import AuthenticationPopup from '../components/authentication-popups/AuthenticationPopup';
import { useParams } from 'react-router-dom';
import AllbreedList from '../data/all-breeds.json'

interface Props{
}
interface Breed {
  id: number;
  slug: string;
  name: string;
  discription: string;
}
const BreedPuppiesForSell: React.FC<Props> = ({}) => {
  const [breedObj, setBreedObj] = useState<Breed>()
  const { breedSlug } = useParams();

  const [allBreed, setAllBreed] = useState(AllbreedList.breedList)
  function findBySlug(items: Breed[], idToMatch: string | undefined): Breed | undefined {
    return items.find(item => item.slug === idToMatch);
  }
  useEffect(()=>{
    setBreedObj(findBySlug(allBreed, breedSlug))
  }, []);

    useEffect(() =>{
        document.title = "Puppies for Sale | Dogs for sale | PuppySpot";
        document.body.classList.add('gray-background')
    }, []);

  return (
    <div>
      <AuthenticationPopup />
      <BreedPuppiesForSellContainer breedObj={breedObj} />
      <Footer />
    </div>
  );
}

export default BreedPuppiesForSell;
