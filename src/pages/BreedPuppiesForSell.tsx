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


  // Costomise with breed name. Eg, Alika Puppies for Sale
    useEffect(() =>{
        document.title = `${breedObj?.name ? breedObj.name : ''} Puppies for Sale | PuppySpot`;
        document.body.classList.add('gray-background')
    }, [breedObj]);

  return (
    <div>
      <AuthenticationPopup />
      <BreedPuppiesForSellContainer breedObj={breedObj} />
      <Footer />
    </div>
  );
}

export default BreedPuppiesForSell;
