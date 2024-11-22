import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import PuppiesForSellContainer from '../container/PuppiesForSell';
import AuthenticationPopup from '../components/authentication-popups/AuthenticationPopup';
import AllPuppies from '../data/puppy-data/all_puppies.json'
import allBreed from '../data/all-breeds.json'
import { useLocation } from 'react-router-dom';


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
    const location = useLocation();
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');
    const page = Number(params.get('page'));
    const gender = params.get('gender');
    const age = params.get('age');
    const travel = params.get('travel');
    const breed_slug = params.get('breed_slug')?.split(',');

    const [filterArray, setFilterArray] = useState(AllPuppies)
    const [breedsArr, setBreedsArr] = useState(allBreed.breedList)
    const [puppySinglePageArr, setPuppySinglePageArr] = useState(getItemsByPage(page, filterArray))
    const [totalPages, setTotalPages] = useState(Math.floor(filterArray.length / 35))
    // Filter States
    const [genderFilter, setGenderFilter] = useState(gender ? gender : 'all')
    const [selectedBreedCheck, setSelectedBreedCheck] = useState<any[]>(breedsArr.filter((item) => breed_slug?.includes(item.slug)));
    const [selectedCharacteristicsFilter, setSelectedCharacteristicsFilter] = useState<any[]>([])
    const [selectedVarietyFilter, setSelectedVarietyFilter] = useState<any[]>([])
    const [selectedSizeFilter, setSelectedSizeFilter] = useState<any[]>([])
    const [ageFilter, setAgeFilter] = useState(age ? age : 'all-pupies')
    const [selectedColorFilter, setSelectedColorFilter] = useState<any[]>([])
    const [travleFilter, setTravleFilter] = useState(travel ? travel : 'all-pupies')

    useEffect(() =>{
        document.title = "Puppies for Sale | Dogs for sale | PuppySpot";
        document.body.classList.add('gray-background')
    }, []);
    useEffect(()=> {
      setBreedsArr((prevBreedsArr) =>
        prevBreedsArr.map((breed) => ({
            ...breed,
            isSelected: Array.isArray(breed_slug) && breed_slug.includes(breed.slug),
        }))
      );
    }, [])
    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const breedCollectionIds = searchParams.get("breed_characteristics");
      if (breedCollectionIds) {
        setSelectedCharacteristicsFilter(breedCollectionIds.split(","));
      }
    }, []);
    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const sizeCollection = searchParams.get("size");
      if (sizeCollection) {
        setSelectedSizeFilter(sizeCollection.split(","));
      }
    }, []);
    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const colorCollection = searchParams.get("color");
      if (colorCollection) {
        setSelectedColorFilter(colorCollection.split(","));
      }
    }, []);
    useEffect(() => {
      const searchParams = new URLSearchParams(location.search);
      const varietyCollection = searchParams.get("variety");
      if (varietyCollection) {
        setSelectedVarietyFilter(varietyCollection.split(","));
      }
    }, []);

    useEffect(()=> {
      setPuppySinglePageArr(getItemsByPage(page, filterArray))
    }, [filterArray])

    useEffect(() => {
      const filterPuppies = () => {
        let filtered = AllPuppies;
    
        // Gender filter
        if (genderFilter !== 'all') {
          filtered = filtered.filter(
            (puppy) => puppy.sex?.toLowerCase() === genderFilter.toLowerCase()
          );
        }
    
        // Breed filter
        if (selectedBreedCheck.length > 0) {
          const breedSlugs = selectedBreedCheck.map((breed) => breed.slug.toLowerCase());
          filtered = filtered.filter((puppy) =>
            breedSlugs.some((slug) => puppy.breed?.toLowerCase().includes(slug))
          );
        }
    
        // Characteristics filter (example: matching temperament)
        if (selectedCharacteristicsFilter.length > 0) {
          const characteristics = selectedCharacteristicsFilter.map((char) => char.toLowerCase());
          console.log(characteristics)
          filtered = filtered.filter((puppy) =>
            puppy.breed_info?.general_breed_info?.some((info) =>
              Object.values(info).some((value) =>
                characteristics.some((char) => value?.toLowerCase().includes(char))
              )
            )
          );
        }
    
        // Variety filter
        if (selectedVarietyFilter.length > 0) {
          const varieties = selectedVarietyFilter.map((variety) => variety.toLowerCase());
          filtered = filtered.filter((puppy) =>
            varieties.some((variety) => puppy.breed?.toLowerCase().includes(variety))
          );
        }
    
        // Size filter
        if (selectedSizeFilter.length > 0) {
          const sizes = selectedSizeFilter.map((size) => size.toLowerCase());
          filtered = filtered.filter((puppy: any) =>
            sizes.some((size) => puppy['size']?.toLowerCase().includes(size))
          );
        }
    
        // Age filter
        if (ageFilter !== 'all-pupies') {
          filtered = filtered.filter((puppy) =>
            puppy.age?.toLowerCase().includes(ageFilter.toLowerCase())
          );
        }
    
        // Color filter
        if (selectedColorFilter.length > 0) {
          const colors = selectedColorFilter.map((color) => color.toLowerCase());
          filtered = filtered.filter((puppy) =>
            colors.some((color) =>
              puppy.puppy_info_details?.Color?.toLowerCase().includes(color)
            )
          );
        }
    
        // Travel filter
        if (travleFilter !== 'all-pupies') {
          filtered = filtered.filter((puppy: any) =>
            puppy['travel_info']
              ? travleFilter.toLowerCase() === puppy['travel_info'].toLowerCase()
              : false
          );
        }
    
        // Update the filtered array state
        setFilterArray(filtered);
      };
    
      filterPuppies();
    }, [
      genderFilter,
      selectedBreedCheck,
      selectedCharacteristicsFilter,
      selectedVarietyFilter,
      selectedSizeFilter,
      ageFilter,
      selectedColorFilter,
      travleFilter,
      AllPuppies,
    ]);
    
  return (
    <div>
      <AuthenticationPopup />
      <PuppiesForSellContainer 
        breedQuery={query} 
        genderQuery={gender} 
        paginationPage={page} 
        puppySinglePageArr={puppySinglePageArr} 
        totalPages={totalPages}
        breedsArr={breedsArr}
        setBreedsArr={setBreedsArr}

        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
        selectedBreedCheck={selectedBreedCheck} 
        setSelectedBreedCheck={setSelectedBreedCheck}
        selectedCharacteristicsFilter={selectedCharacteristicsFilter}
        setSelectedCharacteristicsFilter={setSelectedCharacteristicsFilter}
        selectedVarietyFilter={selectedVarietyFilter}
        setSelectedVarietyFilter={setSelectedVarietyFilter}
        selectedSizeFilter={selectedSizeFilter}
        setSelectedSizeFilter={setSelectedSizeFilter}
        ageFilter={ageFilter}
        setAgeFilter={setAgeFilter}
        selectedColorFilter={selectedColorFilter}
        setSelectedColorFilter={setSelectedColorFilter}
        travleFilter={travleFilter}
        setTravleFilter={setTravleFilter}
      />
      <Footer />
    </div>
  );
}

export default PuppiesForSell;
