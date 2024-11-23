import React, { useEffect, useRef, useState } from 'react';
import "../styles/puppies-for-sell.css";
import Loading from '../components/loading/Loading';
import allBreed from '../data/all-breeds.json'
import DropDown from '../components/drop-down/DropDown';
import SmallFilterPopup from '../components/small-filter-popup/SmallFilterPopup';
import MediumFilterSidebar from '../components/filter-sidebar/MediumFilterSidebar';
import PuppiesForSellFilterSidebar from '../components/puppies-for-sell-componets/Siderbar';
import FilterResult from '../components/puppies-for-sell-componets/FilterResult';
import AllPuppies from '../data/puppy-data/all_puppies.json'
import { useLocation } from "react-router-dom";



interface BreedObject {
    name: string;
    slug: string;
    isSelected: boolean;
    description: string;
    id: number;
    characterID: number;
}
interface Props{
    breedQuery: string | null;
    genderQuery: string | null;
    paginationPage: number;
    puppySinglePageArr: any[];
    totalPages: number;
    breedsArr: BreedObject[];
    setBreedsArr: React.Dispatch<React.SetStateAction<BreedObject[]>>

    genderFilter: string;
    setGenderFilter: React.Dispatch<React.SetStateAction<string>>;
    selectedBreedCheck: any[]; 
    setSelectedBreedCheck: React.Dispatch<React.SetStateAction<any[]>>;
    selectedCharacteristicsFilter: any[]; 
    setSelectedCharacteristicsFilter: React.Dispatch<React.SetStateAction<any[]>>;
    selectedVarietyFilter: any[]; 
    setSelectedVarietyFilter: React.Dispatch<React.SetStateAction<any[]>>;
    selectedSizeFilter: any[];
    setSelectedSizeFilter: React.Dispatch<React.SetStateAction<any[]>>;
    ageFilter: string;
    setAgeFilter: React.Dispatch<React.SetStateAction<string>>;
    selectedColorFilter: any[]; 
    setSelectedColorFilter: React.Dispatch<React.SetStateAction<any[]>>;
    travleFilter: string;
    setTravleFilter: React.Dispatch<React.SetStateAction<string>>;

    resetFilters: ()=> void;
    colors: any[]; 
    varieties: any[];
    characters: any[];
    filterArray: any[];
    sortOption: string; 
    setSortOption: React.Dispatch<React.SetStateAction<string>>;
}
const PuppiesForSellContainer: React.FC<Props> = ({
    breedQuery, 
    genderQuery, 
    paginationPage, 
    puppySinglePageArr, 
    totalPages,
    breedsArr, 
    setBreedsArr,
    genderFilter,
    setGenderFilter,
    selectedBreedCheck,
    setSelectedBreedCheck,
    selectedCharacteristicsFilter,
    setSelectedCharacteristicsFilter,
    selectedVarietyFilter,
    selectedSizeFilter, 
    setSelectedSizeFilter,
    setSelectedVarietyFilter,
    ageFilter,
    setAgeFilter,
    selectedColorFilter,
    setSelectedColorFilter,
    travleFilter,
    setTravleFilter,
    resetFilters,
    colors, 
    varieties,
    characters,
    filterArray,
    sortOption,
    setSortOption,
}) => {
    const location = useLocation();
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any>(breedsArr);
    const [emptyQuery, setEmptyQuery] = useState(true)
    const [readMore, setReadMore] = useState(true)
    const filterDropButton = useRef<HTMLButtonElement>(null);
    const dropDownRef = useRef<HTMLDivElement>(null);
    const dropDownContainerRef = useRef<HTMLDivElement>(null);

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const handleReadMore =()=>{
        setReadMore(prevReadMore => !prevReadMore)
    }
    const handleSelectionCheck = () => {
        // Store the filtered array in selectedBreedCheck state
        setSelectedBreedCheck(breedsArr.filter((item) => item.isSelected));
    }
    const removeItemById = (id: number) => {
        setBreedsArr((prevList) =>
            prevList.map((breed) =>
              breed.id === id
                ? { ...breed, isSelected: false } // Toggle isSelected
                : breed
            )
          );
          handleSelectionCheck()
    };
    const handleFilterClick =()=>{
        const el = document.getElementById("tippy-tooltip-dropdown_xzdk")
        const btnEl = document.getElementById("arrow_up2-toggle_up2")
        if(el && btnEl){
            el.classList.toggle('opec_z_index_hidden')
            btnEl.classList.toggle('up2')
        }
    }

    // Close dropdown when clicking outside
    const handleFilterClickClose =()=>{
        const el = document.getElementById("tippy-tooltip-dropdown_xzdk")
        const btnEl = document.getElementById("arrow_up2-toggle_up2")
        if(el && btnEl){
            el.classList.add('opec_z_index_hidden')
            btnEl.classList.remove('up2')
        }
    }
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                dropDownContainerRef.current &&
                !dropDownContainerRef.current.contains(event.target as Node)
            ) {
                handleFilterClickClose();
            }
        };

        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);
    useEffect(() => {
        handleFilterClickClose();
      }, [location]);

    const handleOpenSidebar =()=>{
        const el = document.getElementById('FilterSidebar-responsive_1024')
        const el2 = document.getElementById('SmallFilterPopup-responsive_768')

        if(el && el2){
            el.classList.remove('hidden')
            el2.classList.remove('hidden')
        }
    }

    useEffect(() => {
      const buttonElement = filterDropButton.current;
      const dropDownElement = dropDownRef.current;
  
      if (buttonElement && dropDownElement) {
        // Get the button's position and size
        const buttonRect = buttonElement.getBoundingClientRect();
  
        // Calculate the position of the dropdown using the button's position
        setX(buttonRect.left + dropDownElement.getBoundingClientRect().left);
        setY(buttonRect.bottom + dropDownElement.getBoundingClientRect().height);
      }
    }, []);
    useEffect(()=>{

        setBreedsArr((prevList) =>
            prevList.map((breed) =>
              breed.slug === breedQuery
                ? { ...breed, isSelected: true } // Toggle isSelected
                : breed
            )
          );
    }, [])

  return (
    <>
        <div id="puppies-for-sale" className="puppies-for-sale js-puppies-for-sale">
            <Loading />

            <section className="puppies-for-sale-header">
                <div className="breadcrumbs-full">
                    <div className="ps-breadcrumbs-small column">
                        <span className="ps-breadcrumbs-small__item truncate"><a href="https://www.puppyspot.com">PuppySpot </a></span>
                        <span className="ps-breadcrumbs-small__separator">
                        / 
                        </span>
                        <span className="ps-breadcrumbs-small__item"> Puppies for Sale</span>
                    </div>
                </div>
                <div className="puppies-for-sale-header__content">
                    <div className="puppies-for-sale-header__copy">
                        <h1 className="all-puppies-header">
                            <span className="nobr">
                            Available Puppies
                            </span>
                        </h1>
                    <section className="puppies-for-sale__seo-content seo-content mb-10">
                        <div className="seo-content__container_reponsive_contaier-big">
                            <div className="js-readmore">
                                <div className="js-seo-readmore mobile-read-more-text-ellipsis">
                                    <p>Welcome to PuppySpot! Take a moment to browse our incredible selection of adorable, ready for love puppies. We only work with the country’s top breeders, offer three handle with care delivery options and a 10-year health commitment. So wherever you live we can deliver your perfect puppy! Complimentary consultations with one of our Puppy Concierges are available when you’re ready.</p>
                                </div>
                            </div>
                        </div>
                        <div className="seo-content__container_reponsive_contaier-small">
                            <div className="js-readmore">
                                <div className="js-seo-readmore mobile-read-more-text-ellipsis enabled">
                                    <p>Welcome to PuppySpot! Take a moment to browse our incredible selection<span className={`dots-delete ${readMore ? '' : 'hidden'}`}>...</span> <span className={`read-more-real-target ${readMore ? 'hidden' : ''}`}>adorable, ready for love puppies. We only work with the country’s top breeders, offer three handle with care delivery options and a 10-year health commitment. So wherever you live we can deliver your perfect puppy! Complimentary consultations with one of our Puppy Concierges are available when you’re ready.</span> <span onClick={handleReadMore} className="seo-breed-content-read-more js-readmore-trigger" data-target="js-seo-readmore">Read {`${readMore ? 'More' : 'Less'}`}</span></p>
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                    <ul className={selectedBreedCheck.length <= 0 ? "js-puppies-for-sale-header__breeds puppies-for-sale-header__breeds hidden" : "js-puppies-for-sale-header__breeds puppies-for-sale-header__breeds"}>
                        {
                            selectedBreedCheck.map(item => {
                                return (
                                    <li key={item.slug} className="breed-searchbar__breed-tag">
                                        {item.name}
                                        <button onClick={()=>removeItemById(item.id)} className="selectr-tag-remove" type="button" data-slug="goldendoodle"></button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    </div>
                </div>
            </section>

            <section className="puppies-for-sale__filter-nav">
                <div className="dog-count">
                    {
                        filterArray.length <= 0
                        ?
                        <span className="js-dog-count bold">{AllPuppies.length}</span>
                        :
                        <span className="js-dog-count bold">{filterArray.length}</span>
                    }
                    <span className="js-dog-result-label"> Available Puppies</span>
                    
                </div>
                <button onClick={handleOpenSidebar} className="js-open-filters puppies-for-sale__filter-open text-tangerine mobile-green-filter">
                    <img src="/svg/filter-icon.svg" />
                    Filters
                </button>
                <div ref={dropDownContainerRef} style={{ position: 'relative', display: 'inline-block' }}>
                    <button 
                        ref={filterDropButton} 
                        className="js-open-sort puppies-for-sale__filter-nav-sort text-tangerine ab-sorting" 
                        data-tippy=""
                        onClick={handleFilterClick}
                    >
                        <span id='arrow_up2-toggle_up2' className="arrow down">
                        Sort by <span className="js-sort-label text-black" data-cy="filter-sort">Featured</span>
                        </span>
                    </button>
                    <DropDown x={x} y={y} dropDownRef={dropDownRef} sortOption={sortOption} setSortOption={setSortOption}/>
                </div>

            </section>

            <PuppiesForSellFilterSidebar
                breedsArr={breedsArr} 
                setBreedsArr={setBreedsArr} 
                query={query}
                setQuery={setQuery}
                results={results}
                setResults={setResults}
                emptyQuery={emptyQuery}
                setEmptyQuery={setEmptyQuery}
                
                selectedBreedCheck={selectedBreedCheck}
                setSelectedBreedCheck={setSelectedBreedCheck}
                genderFilter={genderFilter}
                setGenderFilter={setGenderFilter}
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

                resetFilters={resetFilters}
                colors={colors}
                varieties={varieties}
                characters={characters}
                filterArray={filterArray}
            />

            <FilterResult 
                paginationPage={paginationPage} 
                totalPages={totalPages} 
                puppySinglePageArr={puppySinglePageArr}
                filterArray={filterArray}
            />

        </div>
        {/* <SmallFilterPopup 
            breedsArr={breedsArr} 
            setBreedsArr={setBreedsArr} 
            query={query}
            setQuery={setQuery}
            results={results}
            setResults={setResults}
            emptyQuery={emptyQuery}
            setEmptyQuery={setEmptyQuery}
            selectedBreedCheck={selectedBreedCheck}
            setSelectedBreedCheck={setSelectedBreedCheck}
        /> */}
        {/* <MediumFilterSidebar 
            breedsArr={breedsArr} 
            setBreedsArr={setBreedsArr} 
            query={query}
            setQuery={setQuery}
            results={results}
            setResults={setResults}
            emptyQuery={emptyQuery}
            setEmptyQuery={setEmptyQuery}
            selectedBreedCheck={selectedBreedCheck}
            setSelectedBreedCheck={setSelectedBreedCheck}
        /> */}
    </>
  );
}

export default PuppiesForSellContainer;