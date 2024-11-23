import React, { useEffect, useRef, useState } from 'react';
import Fuse from 'fuse.js';
import { useLocation, useNavigate } from 'react-router-dom';





interface BreedObject {
    name: string;
    slug: string;
    isSelected: boolean;
    description: string;
    id: number;
    characterID: number;
}

interface Props {
    breedsArr: BreedObject[];
    setBreedsArr: React.Dispatch<React.SetStateAction<BreedObject[]>>
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>
    results: any;
    setResults: React.Dispatch<any>;
    emptyQuery: boolean;
    setEmptyQuery: React.Dispatch<React.SetStateAction<boolean>>;
    
    selectedBreedCheck: any;
    setSelectedBreedCheck: React.Dispatch<React.SetStateAction<any[]>>;
    genderFilter: string;
    setGenderFilter: React.Dispatch<React.SetStateAction<string>>;
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
}
const PuppiesForSellFilterSidebar: React.FC<Props> = ({
    breedsArr, 
    setBreedsArr, 
    query, 
    setQuery, 
    results, 
    setResults,
    emptyQuery,
    setEmptyQuery,
    selectedBreedCheck,
    setSelectedBreedCheck,
    genderFilter,
    setGenderFilter,
    selectedCharacteristicsFilter,
    setSelectedCharacteristicsFilter,
    selectedVarietyFilter,
    setSelectedVarietyFilter,
    selectedSizeFilter,
    setSelectedSizeFilter,
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
}) => {
    
    const navigate = useNavigate();
    const location = useLocation();
    const inputRef = useRef(null)
    const checkerUlLiCheckerRef = useRef<HTMLUListElement | null>(null)
    const checkerUlLiCheckerFirstChildRef = useRef<HTMLLIElement | null>(null)
    const fuse = new Fuse(breedsArr, {
        keys: ['name', 'slug'], // Specify which keys to search
        includeScore: true,
    });

    const handleGender =()=>{
        const elBtn = document.getElementById('js-collapsible-panel_gender-btn')
        const el = document.getElementById('js-collapsible-panel_gender')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden')
        }
    }
    const handleBreed =()=>{
        const elBtn = document.getElementById('js-collapsible-panel_breed-btn')
        const el = document.getElementById('js-collapsible-panel_breed')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden')
        }
    }
    const handleCharacter =()=>{
        const elBtn = document.getElementById('js-collapsible-panel_characteristics-btn')
        const el = document.getElementById('js-collapsible-panel_characteristics')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden')
        }
    }
    const handleAge =()=>{
        const elBtn = document.getElementById('js-collapsible-panel_age-btn')
        const el = document.getElementById('js-collapsible-panel_age')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden')
        }
    }
    const handleColor =()=>{
        const elBtn = document.getElementById('js-collapsible-panel_color-btn')
        const el = document.getElementById('js-collapsible-panel_color')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden')
        }
    }
    const handleReady =()=>{
        const elBtn = document.getElementById('js-collapsible-panel_ready-btn')
        const el = document.getElementById('js-collapsible-panel_ready')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden')
        }
    }
    const handleVariety =()=>{
        const elBtn = document.getElementById('js-collapsible-panel_variety-btn')
        const el = document.getElementById('js-collapsible-panel_variety')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden')
        }
    }
    const handleSize =()=>{
        const elBtn = document.getElementById('js-collapsible-panel_size-btn')
        const el = document.getElementById('js-collapsible-panel_size')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden')
        }
    }


    const handleGenderSelect =(gender:string)=>{
        setGenderFilter(gender)
        const searchParams = new URLSearchParams(location.search);

        if (gender === "all") {
            searchParams.delete("gender");
        } else {
            searchParams.set("gender", gender);
        }

        navigate(`?${searchParams.toString()}`, { replace: true });
    }

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
    
        if (selectedBreedCheck.length === 0) {
            searchParams.delete("breed_slug"); // Remove parameter if no breeds are selected
            searchParams.delete("variety");
            searchParams.delete("size");
        } else {
            const breedSlugs = selectedBreedCheck.map((breed: BreedObject) => breed.slug); // Extract the slug property
            searchParams.set("breed_slug", breedSlugs.join(",")); // Set selected breeds
        }
    
        navigate(`?${searchParams.toString()}`, { replace: true });
    }, [selectedBreedCheck]);
    
    const handleCheckboxChange = (value: string) => {
        setSelectedCharacteristicsFilter((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((id) => id !== value) // Remove if already selected
                : [...prevSelected, value] // Add if not selected
        );
    };
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);

        if (selectedCharacteristicsFilter.length === 0) {
            searchParams.delete("breed_characteristics"); // Remove param if none selected
        } else {
            searchParams.set("breed_characteristics", selectedCharacteristicsFilter.join(","));
        }

        navigate(`?${searchParams.toString()}`, { replace: true });
    }, [selectedCharacteristicsFilter]);

    const handleVarietyChange = (value: string) => {
        setSelectedVarietyFilter((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((id) => id !== value) // Remove if already selected
                : [...prevSelected, value] // Add if not selected
        );
    };
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);

        if (selectedVarietyFilter.length === 0) {
            searchParams.delete("variety"); // Remove param if none selected
        } else {
            searchParams.set("variety", selectedVarietyFilter.join(","));
        }

        navigate(`?${searchParams.toString()}`, { replace: true });
    }, [selectedVarietyFilter]);

    const handleSizeChange = (value: string) => {
        setSelectedSizeFilter((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((id) => id !== value) // Remove if already selected
                : [...prevSelected, value] // Add if not selected
        );
    };
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);

        if (selectedSizeFilter.length === 0) {
            searchParams.delete("size"); // Remove param if none selected
        } else {
            searchParams.set("size", selectedSizeFilter.join(","));
        }

        navigate(`?${searchParams.toString()}`, { replace: true });
    }, [selectedSizeFilter]);

    const handleColorChange = (value: string) => {
        setSelectedColorFilter((prevSelected) =>
            prevSelected.includes(value)
                ? prevSelected.filter((id) => id !== value) // Remove if already selected
                : [...prevSelected, value] // Add if not selected
        );
    };
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);

        if (selectedColorFilter.length === 0) {
            searchParams.delete("color"); // Remove param if none selected
        } else {
            searchParams.set("color", selectedColorFilter.join(","));
        }

        navigate(`?${searchParams.toString()}`, { replace: true });
    }, [selectedColorFilter]);

    const handleAgeSelect =(age:string)=>{
        setAgeFilter(age)
        const searchParams = new URLSearchParams(location.search);

        if (age === "all-age") {
            searchParams.delete("age");
        } else {
            searchParams.set("age", age);
        }

        navigate(`?${searchParams.toString()}`, { replace: true });
    }

    const handleTravelSelect =(travel:string)=>{
        setTravleFilter(travel)
        const searchParams = new URLSearchParams(location.search);

        if (travel === "all-pupies") {
            searchParams.delete("travel");
        } else {
            searchParams.set("travel", travel);
        }

        navigate(`?${searchParams.toString()}`, { replace: true });
    }

    // Separate selected and unselected items
    const selectedItems = colors.filter((item) => selectedColorFilter.includes(item.value));
    const unselectedItems = colors.filter((item) => !selectedColorFilter.includes(item.value));
    const sortedColors = [...selectedItems, ...unselectedItems];

    // Separate selected and unselected items
    const selectedItemsVariety = varieties.filter((item) => selectedVarietyFilter.includes(item.value));
    const unselectedItemsVariety = varieties.filter((item) => !selectedVarietyFilter.includes(item.value));
    const sortedVarieties = [...selectedItemsVariety, ...unselectedItemsVariety];

    
    const handleSelectionCheck = () => {
        // Store the filtered array in selectedBreedCheck state
        setSelectedBreedCheck(breedsArr.filter((item) => item.isSelected));
    }
    const handleCheckAndUncheckBreed =(name: string)=>{
            setBreedsArr((prevList) =>
                prevList.map((breed) =>
                breed.slug === name
                    ? { ...breed, isSelected: !breed.isSelected } // Toggle isSelected
                    : breed
                )
            );
            handleSelectionCheck()
    }
    const handleSelectAll =()=>{
        setBreedsArr((prevList) =>
                prevList.map((breed) =>(
                    { ...breed, isSelected: false } // Toggle isSelected
                )
            )
          );
          
          handleSelectionCheck()
          const searchParams = new URLSearchParams(location.search);
          searchParams.delete("breed_slug"); // Remove parameter if no breeds are selected
          searchParams.delete("variety");
          searchParams.delete("size");
    }
    const closeSearch=()=>{
        handleSelectionCheck()
        setQuery('')

    }
    const handleSearch = () => {
        if(query === ''){
            setEmptyQuery(true)
        }else{
            setEmptyQuery(false)
        }
        setQuery(query);
    
        if (query.trim()) {
        const fuseResults = fuse.search(query);
            setResults(fuseResults.map((result: any) => result.item));
        } else {
            setResults(breedsArr);
        }
    };

    useEffect(()=>{
        handleSearch()

        if(checkerUlLiCheckerFirstChildRef.current){
            if (selectedBreedCheck.length <= 0) {
                checkerUlLiCheckerFirstChildRef.current.classList.add('selected');
                checkerUlLiCheckerFirstChildRef.current.classList.add('active');
            }else{
                checkerUlLiCheckerFirstChildRef.current.classList.remove('selected');
                checkerUlLiCheckerFirstChildRef.current.classList.remove('active');
            }
        }
    },[query, breedsArr, selectedBreedCheck])
    useEffect(()=>{
        handleSelectionCheck()
    }, [breedsArr])

  return (

    <section className="puppies-for-sale__sidebar">
        <div className="puppies-for-sale-filter puppies-for-sale__filters js-filter-menu hidden">

            <div className="puppies-for-sale-filter__content">
                <div className="puppies-for-sale-filter__header">
                    <span className="bold">Filters</span>
                    <div>
                        <a onClick={resetFilters} className="js-clear-filters ab-filters-btn text-underline" href="javascript:void(0)">
                        Reset
                        </a>
                        <a className="js-close-filters ab-filters-btn text-underline" href="javascript:void(0)">
                        Close
                        </a>
                    </div>
                </div>

                <form id="js-filters" className="puppy-list-filter" autoComplete="off">
                    <ul className="puppy-list-filter__main">
                        <li className="puppy-list-filter__gender js-filter">
                            <div className="collapsible-panel__container js-collapsible-panel-container">
                                <h3
                                    id='js-collapsible-panel_gender-btn' 
                                    className="js-collapsible-panel-handle collapsible-panel__handle js-puppy-list-filter desktop-collapsible-open open"
                                    onClick={handleGender}
                                >
                                    <span>Gender</span>
                                </h3>
                                <div id='js-collapsible-panel_gender' className="js-collapsible-panel">
                                    <div className="collapsible-panel__content">
                                        <div data-filter="puppy_gender" id="target">
                                            <div className="input-container selected" data-facet-id="1">
                                                <input name="gender" type="radio" id="gender-male" value="male" checked={genderFilter === "male"} onClick={()=> handleGenderSelect('male')} />
                                                <label htmlFor="gender-male" className="gtag-filter_all gtag-filter_male">Male</label>
                                            </div>
                                            <div className="input-container" data-facet-id="2">
                                                <input name="gender" type="radio" id="gender-female" value="female" checked={genderFilter === "female"} onClick={()=> handleGenderSelect('female')} />
                                                <label htmlFor="gender-female" className="gtag-filter_all gtag-filter_female">Female</label>
                                            </div>
                                            <div className="input-container">
                                                <input name="gender" type="radio" id="gender-either" value="all" checked={genderFilter === "all"} onClick={()=> handleGenderSelect('all')} />
                                                <label htmlFor="gender-either" className="gtag-filter_all gtag-filter_eitther">All</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="puppy-list-filter__breed js-filter">
                            <div className="collapsible-panel__container js-collapsible-panel-container">
                                <h2 
                                    id='js-collapsible-panel_breed-btn' 
                                    className="js-collapsible-panel-handle collapsible-panel__handle js-puppy-list-filter desktop-collapsible-open open"
                                    onClick={handleBreed}
                                >
                                    <span>Breed</span>
                                </h2>
                                <div id='js-collapsible-panel_breed' className="js-collapsible-panel">
                                    <div className="collapsible-panel__content">
                                        <div data-breed-select="" id="breed" className="breed-searchbar" data-filter="breed_slug" data-breed-id="">
                                            <div className="selectr-container breed-selectr selectr-desktop multiple has-selected open" style={{width: "100%"}}>
                                                <div className="selectr-selected" tabIndex={0} style={{display: 'none'}} aria-expanded="true">
                                                    <ul className="selectr-label selectr-tags"><li className="selectr-tag" tabIndex={-1}>
                                                        All Breeds
                                                        <button className="selectr-tag-remove" type="button"></button>
                                                        </li>
                                                    </ul>
                                                    <div className="selectr-placeholder">Search for Breeds</div>
                                                </div>
                                                <div className="selectr-options-container">
                                                    <div className="selectr-input-container">
                                                        <input 
                                                            ref={inputRef}
                                                            className="selectr-input" 
                                                            autoComplete="off" 
                                                            autoCorrect="off" 
                                                            autoCapitalize="none" 
                                                            spellCheck="true" 
                                                            role="textbox" 
                                                            type="search" 
                                                            placeholder="Search for Breeds" 
                                                            tabIndex={0} 
                                                            value={query}
                                                            onChange={(e)=>setQuery(e.currentTarget.value)} 
                                                        />
                                                        <button onClick={closeSearch} className="selectr-input-clear" style={{display: `${emptyQuery ? 'none' : 'block'}`}} type="button"></button>
                                                    </div>
                                                        <div className="selectr-notice"></div>
                                                        <ul
                                                            ref={checkerUlLiCheckerRef}
                                                            className="selectr-options"
                                                            role="tree"
                                                            aria-hidden="false"
                                                            aria-expanded="true"
                                                        >
                                                            {query ? null : (
                                                                <li
                                                                    ref={checkerUlLiCheckerFirstChildRef}
                                                                    className="selectr-option selected active"
                                                                    role="treeitem"
                                                                    tabIndex={-1}
                                                                    aria-selected="true"
                                                                    onClick={handleSelectAll}
                                                                >
                                                                    All Breeds
                                                                </li>
                                                            )}

                                                            {results.length > 0 ? (
                                                                // Sort items so selected appear on top
                                                                [...results]
                                                                    .sort((a, b) => (b.isSelected ? 1 : 0) - (a.isSelected ? 1 : 0))
                                                                    .map((item, index) => (
                                                                        <li
                                                                            key={index}
                                                                            id={`breed-check-item-name_${item.slug}`}
                                                                            onClick={() => handleCheckAndUncheckBreed(item.slug)}
                                                                            className={
                                                                                item.isSelected
                                                                                    ? "selectr-option selected active"
                                                                                    : "selectr-option"
                                                                            }
                                                                            role="treeitem"
                                                                            tabIndex={-1}
                                                                            aria-selected="false"
                                                                            data-facet-id={item.id}
                                                                        >
                                                                            {item.name}
                                                                        </li>
                                                                    ))
                                                            ) : (
                                                                <div className="selectr-notice">No results.</div>
                                                            )}
                                                        </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="puppy-list-filter__collection js-filter">
                            <div className="collapsible-panel__container js-collapsible-panel-container">
                                <h3 
                                    id='js-collapsible-panel_characteristics-btn' 
                                    className="js-collapsible-panel-handle collapsible-panel__handle  js-puppy-list-filter" 
                                    onClick={handleCharacter}
                                >
                                    <span>Characteristics</span>
                                </h3>
                                <div id='js-collapsible-panel_characteristics' className="js-collapsible-panel hidden">
                                    <div className="collapsible-panel__content">
                                        <div data-filter="breed_collection_ids">
                                            {characters.map((item) => (
                                                <div className="input-container" data-facet-id={item.id} key={item.id}>
                                                    <input
                                                        type="checkbox"
                                                        id={`checkbox-${item.id}`}
                                                        value={item.id}
                                                        className="js-collection-input"
                                                        name="collection"
                                                        checked={selectedCharacteristicsFilter.includes(item.id)}
                                                        onChange={() => handleCheckboxChange(item.id)}
                                                    />
                                                    <label htmlFor={`checkbox-${item.id}`}>{item.label}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={selectedBreedCheck.length <= 0 ? "puppy-list-filter__variety js-filter js-breed-filter hidden" : "puppy-list-filter__variety js-filter js-breed-filter"}  >
                            <div className="collapsible-panel__container js-collapsible-panel-container">
                                <h3 id='js-collapsible-panel_variety-btn' className="js-collapsible-panel-handle collapsible-panel__handle  js-puppy-list-filter" onClick={handleVariety}>
                                <span>Variety</span>
                                </h3>
                                <div id='js-collapsible-panel_variety' className="js-collapsible-panel hidden">
                                    <div className="collapsible-panel__content">
                                        <div data-filter="puppy_variety_id">
                                            {sortedVarieties.map((item) => (
                                                <div className="input-container" data-facet-id={item.value} key={item.value}>
                                                    <input
                                                        type="checkbox"
                                                        id={`variety-${item.value}`}
                                                        value={item.value}
                                                        name="variety"
                                                        checked={selectedVarietyFilter.includes(item.value)}
                                                        onChange={() => handleVarietyChange(item.value)}
                                                    />
                                                    <label className="variety-classes_all" htmlFor={`variety-${item.value}`}>
                                                        {item.label}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className={selectedBreedCheck.length <= 0 ? "puppy-list-filter__variety-sizes js-filter js-breed-filter hidden" : "puppy-list-filter__variety-sizes js-filter js-breed-filter"}>
                            <div className="collapsible-panel__container js-collapsible-panel-container">
                                <h3 id='js-collapsible-panel_size-btn' className="js-collapsible-panel-handle collapsible-panel__handle  js-puppy-list-filter" onClick={handleSize}>
                                <span>Size</span>
                                </h3>
                                <div id='js-collapsible-panel_size' className="js-collapsible-panel hidden">
                                    <div className="collapsible-panel__content">
                                        <div data-filter="variety_size_id">
                                            {[
                                                    { id: "1", label: "Miniature" },
                                                    { id: "2", label: "Medium" },
                                                    { id: "3", label: "Standard" },
                                                ].map((item) => (
                                                    <div className="input-container" data-facet-id={item.id} key={item.id}>
                                                        <input
                                                            type="checkbox"
                                                            id={`variety-size-${item.id}`}
                                                            value={item.id}
                                                            name="varietySize"
                                                            checked={selectedSizeFilter.includes(item.id)}
                                                            onChange={() => handleSizeChange(item.id)}
                                                        />
                                                        <label htmlFor={`variety-size-${item.id}`} className='variety-size_all'>{item.label}</label>
                                                    </div>                                                    
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="puppy-list-filter__age js-filter">
                            <div className="collapsible-panel__container js-collapsible-panel-container">
                                <h3 
                                    id='js-collapsible-panel_age-btn' 
                                    className="js-collapsible-panel-handle collapsible-panel__handle  js-puppy-list-filter"
                                    onClick={handleAge}
                                >
                                <span>Age</span>
                                </h3>
                                <div id='js-collapsible-panel_age' className="js-collapsible-panel hidden">
                                    <div className="collapsible-panel__content">
                                        <div data-filter="litter_birth_date" id="age">
                                            <div className="input-container">
                                            <input name="ages" type="radio" id="all-ages" value="" data-max-age="" data-min-age="" checked={ageFilter === "all-age"} onClick={()=> handleAgeSelect('all-age')} />
                                            <label htmlFor="all-ages" className="gtag-filter_age_all gtag-filter_age_any">Any age</label>
                                            </div>
                                            <div className="input-container" data-facet-id="upto8">
                                            <input name="ages" type="radio" id="up-to-8" value="upto8" data-max-age="8" data-min-age="" checked={ageFilter === "8"} onClick={()=> handleAgeSelect('8')} />
                                            <label htmlFor="up-to-8" className="gtag-filter_age_all gtag-filter_age_up_to_8">Up to 8 weeks</label>
                                            </div>
                                            <div className="input-container" data-facet-id="upto12">
                                            <input name="ages" type="radio" id="up-to-12" value="upto12" data-max-age="12" data-min-age="" checked={ageFilter === "12"} onClick={()=> handleAgeSelect('12')}  />
                                            <label htmlFor="up-to-12" className="gtag-filter_age_all gtag-filter_age_up_to_12">Up to 12 weeks</label>
                                            </div>
                                            <div className="input-container" data-facet-id="upto16">
                                            <input name="ages" type="radio" id="up-to-16" value="upto16" data-max-age="16" data-min-age="" checked={ageFilter === "16"} onClick={()=> handleAgeSelect('16')}  />
                                            <label htmlFor="up-to-16" className="gtag-filter_age_all gtag-filter_age_up_to_16">Up to 16 weeks</label>
                                            </div>
                                            <div className="input-container" data-facet-id="17plus">
                                            <input name="ages" type="radio" id="17-plus" value="17plus" data-max-age="" data-min-age="17" checked={ageFilter === "17"} onClick={()=> handleAgeSelect('17')}  />
                                            <label htmlFor="17-plus" className="gtag-filter_age_all gtag-filter_age_older_than_16">Older than 16
                                            weeks</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </li>

                        <li className="puppy-list-filter__color js-filter">
                            <div className="collapsible-panel__container js-collapsible-panel-container">
                                <h3 
                                    id='js-collapsible-panel_color-btn' 
                                    className="js-collapsible-panel-handle collapsible-panel__handle  js-puppy-list-filter"
                                    onClick={handleColor}
                                >
                                    <span>Color</span>
                                </h3>
                                <div id='js-collapsible-panel_color' className="js-collapsible-panel hidden">
                                    <div className="collapsible-panel__content">
                                        <ul data-filter="puppy_color_id" className="puppy-list-filter__color-list" id="color" style={{marginLeft: '0'}}>
                                            {sortedColors.map((item) => (
                                                <li className="input-container" data-facet-id={item.value} key={item.value}>
                                                    <input
                                                        type="checkbox"
                                                        name="color"
                                                        data-id={item.value}
                                                        id={`color-${item.value}`}
                                                        value={item.value}
                                                        checked={selectedColorFilter.includes(item.value)}
                                                        onChange={() => handleColorChange(item.value)}
                                                    />
                                                    <label className="color-inputs_label_options" htmlFor={`color-${item.value}`}>
                                                        {item.label}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="puppy-list-filter__travelready js-filter">
                            <div className="collapsible-panel__container js-collapsible-panel-container">
                                <h3 
                                    id='js-collapsible-panel_ready-btn' 
                                    className="js-collapsible-panel-handle collapsible-panel__handle  js-puppy-list-filter"
                                    onClick={handleReady}
                                >
                                    <span>Ready To Travel</span>
                                </h3>
                                <div id='js-collapsible-panel_ready' className="js-collapsible-panel hidden">
                                    <div className="collapsible-panel__content">
                                        <div data-filter="can_travel" id="canTravel">
                                            <div className="input-container">
                                                <input name="canTravel" type="radio" id="travel-check-all-puppies" checked={travleFilter === "all-pupies"} onClick={()=> handleTravelSelect('all-pupies')}  />
                                                <label htmlFor="travel-check-all-puppies"  className="filter_only_ready_to_travel">All Puppies</label>
                                            </div>
                                            <div className="input-container" data-facet-id="1">
                                                <input name="canTravel" type="radio" id="travel-check" checked={travleFilter === "1"} onClick={()=> handleTravelSelect('1')} />
                                                <label htmlFor="travel-check" className="filter_only_ready_to_travel">Ready To Travel Now</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <input data-filter="search" name="search" type="hidden" value="" />
                </form>
            </div>

            <div className="bottom-controls hidden">
                <div>
                    <a className="text-tangerine js-clear-filters reset-button" href="javascript:void(0)">
                    CLEAR ALL
                    </a>
                </div>
                <div>
                    <a className="text-tangerine js-close-filters close-button" href="javascript:void(0)">
                    DONE
                    </a>
                </div>
            </div>

        </div>
        <div className="puppies-for-sale__related puppies-for-sale__related-filters"> </div>
    </section>

          
  );
}

export default PuppiesForSellFilterSidebar;