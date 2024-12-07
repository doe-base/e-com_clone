import React, { useEffect, useState } from 'react';
import '../styles/single-puppy.css'
import SinglePuppyContainer from '../container/SinglePuppy';
import Footer from '../components/footer';
import { useParams } from 'react-router-dom';
import allIndivialPuppies1 from '../data/individual-puppy-data/_split_restructured_puppies-data1.json'
import allIndivialPuppies2 from '../data/individual-puppy-data/_split_restructured_puppies-data2.json'
import allIndivialPuppies3 from '../data/individual-puppy-data/_split_restructured_puppies-data3.json'
import allIndivialPuppies4 from '../data/individual-puppy-data/_split_restructured_puppies-data4.json'
import allIndivialPuppies5 from '../data/individual-puppy-data/_split_restructured_puppies-data5.json'
import allIndivialPuppies6 from '../data/individual-puppy-data/_split_restructured_puppies-data6.json'


const allPuppies = [
  allIndivialPuppies1,
  allIndivialPuppies2,
  allIndivialPuppies3,
  allIndivialPuppies4,
  allIndivialPuppies5,
  allIndivialPuppies6,
];


function findItemById<T extends { puppy_id: string }>(
  arrays: T[][],
  id: string | undefined
): T | undefined {
  for (const array of arrays) {
    const found = array.find(item => item.puppy_id === id);
    if (found) {
      return found;
    }
  }
  return undefined;
}


interface Props{};
const SinglePuppy: React.FC<Props> = ({}) => {
    const { puppyId } = useParams();
    const [ puppyInfo, setPuppyInfo ] = useState(findItemById(allPuppies, puppyId))
    const [ pageTitle, setPageTitle ] = useState('')

    useEffect(() =>{
        if(puppyInfo){
          setPageTitle(`${puppyInfo.puppy_name && puppyInfo.puppy_name}, a ${puppyInfo.puppy_info_details.Color && puppyInfo.puppy_info_details.Color} ${puppyInfo.sex && puppyInfo.sex} ${puppyInfo.breed && puppyInfo.breed} | PuppySpot`)
          document.title = `${puppyInfo.puppy_name && puppyInfo.puppy_name}, a ${puppyInfo.puppy_info_details.Color && puppyInfo.puppy_info_details.Color} ${puppyInfo.sex && puppyInfo.sex} ${puppyInfo.breed && puppyInfo.breed} | PuppySpot`;
        }
    }, []);

    const saveToRecentlyViewed = (dogId: string | undefined) => {
      const key = "recently-viewed";

      // Get the existing list from local storage
      const existingList = JSON.parse(localStorage.getItem(key) || "[]");

      // Check if dogId is already in the list and remove it to prevent duplication
      const updatedList = existingList.filter((id: string) => id !== dogId);

      // Add the new dog ID to the front of the list
      updatedList.unshift(dogId);

      // Ensure the list doesn't exceed 15 items
      if (updatedList.length > 15) {
        updatedList.pop(); // Remove the oldest item (last one in the list)
      }

      // Save the updated list back to local storage
      localStorage.setItem(key, JSON.stringify(updatedList));
    };


    useEffect(() => {
      saveToRecentlyViewed(puppyId);
    }, []);

  return (
    <>
        {
          puppyInfo
          &&
          <SinglePuppyContainer pageTitle={pageTitle} puppyInfo={puppyInfo} />
        }
        <Footer />
    </>
  );
}

export default SinglePuppy;
