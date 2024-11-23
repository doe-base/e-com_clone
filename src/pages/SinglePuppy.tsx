import React, { useEffect, useState } from 'react';
import '../styles/single-puppy.css'
import SinglePuppyContainer from '../container/SinglePuppy';
import Footer from '../components/footer';
import { useParams } from 'react-router-dom';
import allIndivialPuppies from '../data/individual-puppy-data/individual_puppy1.json'


function getObjectById(array: any[], id: string | undefined): any | undefined {
  return array.find(item => item.puppy_id === id);
}

interface Props{};
const SinglePuppy: React.FC<Props> = ({}) => {
    const { puppyId } = useParams();
    const [ puppyInfo, setPuppyInfo ] = useState(getObjectById(allIndivialPuppies, puppyId))
    useEffect(() =>{
        document.title = `${puppyInfo.puppy_name && puppyInfo.puppy_name}, a ${puppyInfo.puppy_info_details.Color && puppyInfo.puppy_info_details.Color} ${puppyInfo.sex && puppyInfo.sex} ${puppyInfo.breed && puppyInfo.breed} | PuppySpot`;
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
        <SinglePuppyContainer puppyInfo={puppyInfo} />
        <Footer />
    </>
  );
}

export default SinglePuppy;
