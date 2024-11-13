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

  return (
    <>
        <SinglePuppyContainer puppyInfo={puppyInfo} />
        <Footer />
    </>
  );
}

export default SinglePuppy;
