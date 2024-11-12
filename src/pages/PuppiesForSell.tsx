import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import PuppiesForSellContainer from '../container/PuppiesForSell';
import AuthenticationPopup from '../components/authentication-popups/AuthenticationPopup';
import AllPuppies from '../data/puppy-data/all_puppies.json'


function getItemsByPage<T>(page: number, array: T[]): T[] {
  if (typeof page !== 'number' || Number.isNaN(page)) { page = 1 }
  page === 0 && (page = 1)
  const itemsPerPage = 35;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return array.slice(startIndex, endIndex);
}
interface Props{}
const PuppiesForSell: React.FC<Props> = ({}) => {
    const params = new URLSearchParams(window.location.search);
    //Work on Auto selecting the query
    const query = params.get('query');
    const gender = params.get('gender');
    const page = Number(params.get('page'));

    const [filterArray, setFilterArray] = useState(AllPuppies) // It will be all pupies by default, but will be filtered base on the url params
    const [puppySinglePageArr, setPuppySinglePageArr] = useState(getItemsByPage(page, filterArray))
    const [totalPages, setTotalPages] = useState(Math.floor(filterArray.length / 35))


    useEffect(() =>{
        document.title = "Puppies for Sale | Dogs for sale | PuppySpot";
        document.body.classList.add('gray-background')
    }, []);

  return (
    <div>
      <AuthenticationPopup />
      <PuppiesForSellContainer 
        breedQuery={query} 
        genderQuery={gender} 
        paginationPage={page} 
        puppySinglePageArr={puppySinglePageArr} 
        totalPages={totalPages}
      />
      <Footer />
    </div>
  );
}

export default PuppiesForSell;
