import React, { useEffect, useRef, useState } from 'react';
import "../styles/puppies-for-sell.css";
import Loading from '../components/loading/Loading';
import allBreed from '../data/all-breeds.json'
import Fuse from 'fuse.js';
import AlertPopup from '../components/alert-message/AlertMessage';
import DropDown from '../components/drop-down/DropDown';
import SmallFilterPopup from '../components/small-filter-popup/SmallFilterPopup';
import FilterSidebar from '../components/filter-sidebar/FilterSidebar';
import PaginationBar from '../components/puppies-for-sell-componets/PaginationPagebar';


interface Props{
    breedQuery: string | null;
    genderQuery: string | null;
    paginationPage: number;
    puppySinglePageArr: any[];
    totalPages: number;
}
const PuppiesForSellContainer: React.FC<Props> = ({breedQuery, genderQuery, paginationPage, puppySinglePageArr, totalPages}) => {
    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * puppySinglePageArr.length));
    const breeds = allBreed.breedList
    const [breedsArr, setBreedsArr] = useState(breeds)
    const [query, setQuery] = useState('');
    const inputRef = useRef(null)
    const [results, setResults] = useState<any>(breedsArr);
    const [emptyQuery, setEmptyQuery] = useState(true)
    const checkerUlLiCheckerRef = useRef<HTMLUListElement | null>(null)
    const checkerUlLiCheckerFirstChildRef = useRef<HTMLLIElement | null>(null)
    const [selectedBreedCheck, setSelectedBreedCheck] = useState<any[]>([]);
    const [readMore, setReadMore] = useState(true)

    const handleReadMore =()=>{
        setReadMore(prevReadMore => !prevReadMore)
    }

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



    const handleSelectionCheck = () => {
        // Store the filtered array in selectedBreedCheck state
        setSelectedBreedCheck(breedsArr.filter((item) => item.isSelected));
    }
    const handleCheckAndUncheckBreed =(name: string | null)=>{
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
    }
    const closeSearch=()=>{
        handleSelectionCheck()
        setQuery('')

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
    const fuse = new Fuse(breedsArr, {
        keys: ['name', 'slug'], // Specify which keys to search
        includeScore: true,
    });
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
        handleSelectionCheck()

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


    const filterDropButton = useRef<HTMLButtonElement>(null);
    const dropDownRef = useRef<HTMLDivElement>(null);
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
  
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


    const handleFilterClick =()=>{
        const el = document.getElementById("tippy-tooltip-dropdown_xzdk")
        const btnEl = document.getElementById("arrow_up2-toggle_up2")
        if(el && btnEl){
            el.classList.toggle('opec_z_index_hidden')
            btnEl.classList.toggle('up2')
        }
    }
    const handleOpenSidebar =()=>{
        const el = document.getElementById('FilterSidebar-responsive_1024')
        const el2 = document.getElementById('SmallFilterPopup-responsive_768')

        if(el && el2){
            el.classList.remove('hidden')
            el2.classList.remove('hidden')
        }
    }

    useEffect(()=>{

        setBreedsArr((prevList) =>
            prevList.map((breed) =>
              breed.slug === breedQuery
                ? { ...breed, isSelected: true } // Toggle isSelected
                : breed
            )
          );


        
        
        
          // Work on gender filter from small nav here  
          console.log(genderQuery)
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
                            {/* <script type="application/ld+json">
                                {
                                    "@context": "https://schema.org",
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                                                            {
                                                "@type": "ListItem",
                                                "position": 1,
                                                "item": {
                                                    "@id": "https://www.puppyspot.com",
                                                    "name": "PuppySpot"
                                                }
                                            },
                                                            {
                                                "@type": "ListItem",
                                                "position": 2,
                                                "item": {
                                                    "@id": "https://www.puppyspot.com/puppies-for-sale",
                                                    "name": "Puppies for Sale"
                                                }
                                            }
                                                    ]
                                }
                            </script> */}
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
                <div className="dog-count"><span className="js-dog-count bold">2887</span><span className="js-dog-result-label"> Available Puppies</span></div>
                <button onClick={handleOpenSidebar} className="js-open-filters puppies-for-sale__filter-open text-tangerine mobile-green-filter">
                    <img src="/svg/filter-icon.svg" />
                    Filters
                </button>
                <div style={{ position: 'relative', display: 'inline-block' }}>
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
                    <DropDown x={x} y={y} dropDownRef={dropDownRef}/>
                </div>

            </section>

            <section className="puppies-for-sale__sidebar">
                <div className="puppies-for-sale-filter puppies-for-sale__filters js-filter-menu hidden">
                    {/* <div className="puppies-for-sale-filter__title">
                        <div className="puppies-for-sale-filter__title__label">FILTER OPTIONS</div>
                        <div className="puppies-for-sale-filter__title__close js-close-filters"><img src="/img/puppies-for-sale-filter-close.png"/></div>
                    </div> */}

                    <div className="puppies-for-sale-filter__content">
                        <div className="puppies-for-sale-filter__header">
                            <span className="bold">Filters</span>
                            <div>
                                <a className="js-clear-filters ab-filters-btn text-underline" href="javascript:void(0)">
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
                                                        <input name="gender" type="radio" id="gender-male" value="male" />
                                                        <label htmlFor="gender-male" className="gtag-filter_all gtag-filter_male">Male</label>
                                                    </div>
                                                    <div className="input-container" data-facet-id="2">
                                                        <input name="gender" type="radio" id="gender-female" value="female" />
                                                        <label htmlFor="gender-female" className="gtag-filter_all gtag-filter_female">Female</label>
                                                    </div>
                                                    <div className="input-container">
                                                        <input name="gender" type="radio" id="gender-either" value="all" defaultChecked />
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
                                                                <ul ref={checkerUlLiCheckerRef} className="selectr-options" role="tree" aria-hidden="false" aria-expanded="true">
                                                                    {
                                                                        query
                                                                        ?
                                                                        null
                                                                        :
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

                                                                    }
                                                                    {
                                                                        results.length > 0
                                                                        ?
                                                                        results.map((item: any, index: number)=> {
                                                                            return (
                                                                                <li 
                                                                                    key={index} 
                                                                                    id={`breed-check-item-name_${item.slug}`} 
                                                                                    onClick={()=>handleCheckAndUncheckBreed(item.slug)} 
                                                                                    className={item.isSelected ? 'selectr-option selected active' : 'selectr-option'} 
                                                                                    role="treeitem" 
                                                                                    tabIndex={-1} 
                                                                                    aria-selected="false" 
                                                                                    data-facet-id={item.id}
                                                                                >
                                                                                {item.name}
                                                                                </li>
                                                                            )
                                                                        })
                                                                        :
                                                                        <div className="selectr-notice">No results.</div>
                                                                    }
                                                                </ul>
                                                                {/* <ul className="selectr-options" role="tree" aria-hidden="false" aria-expanded="true">
                                                                        <li className="selectr-option selected active" role="treeitem" tabIndex={-1} aria-selected="true">
                                                                        All Breeds
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="334">
                                                                        Goldendoodle
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="390">
                                                                        Cavapoo
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="444">
                                                                        Bernedoodle
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="322">
                                                                        Poodle
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="228">
                                                                        Golden Retriever
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="222">
                                                                        Dachshund
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="345">
                                                                        Maltipoo
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="276">
                                                                        Cavalier King Charles Spaniel
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="231">
                                                                        Labrador Retriever
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="225">
                                                                        French Bulldog
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="302">
                                                                        Havanese
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="226">
                                                                        German Shepherd Dog
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="249">
                                                                        Yorkshire Terrier
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="244">
                                                                        Shih Tzu
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="220">
                                                                        Cocker Spaniel
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="238">
                                                                        Pomeranian
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="320">
                                                                        Miniature Schnauzer
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="232">
                                                                        Maltese
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="327">
                                                                        Labradoodle
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="212">
                                                                        Beagle
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="347">
                                                                        Cockapoo
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="219">
                                                                        Chihuahua
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="324">
                                                                        Pembroke Welsh Corgi
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="437">
                                                                        Pomsky
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="258">
                                                                        Australian Shepherd
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="217">
                                                                        Boston Terrier
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="434">
                                                                        Bichonpoo
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="264">
                                                                        Bernese Mountain Dog
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="218">
                                                                        Bichon Frise
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="245">
                                                                        Siberian Husky
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="447">
                                                                        Havapoo
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="404">
                                                                        Aussiedoodle
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="285">
                                                                        Coton de Tulear
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="367">
                                                                        Morkie
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="344">
                                                                        Yorkiepoo
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="299">
                                                                        Great Dane
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="378">
                                                                        Shihpoo
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="241">
                                                                        Rottweiler
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="216">
                                                                        Boxer
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="415">
                                                                        Sheepadoodle
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="253">
                                                                        West Highland White Terrier
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="263">
                                                                        Shiba Inu
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="240">
                                                                        Pug
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="385">
                                                                        Cavachon
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="214">
                                                                        Bulldog
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="233">
                                                                        Miniature Pinscher
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="236">
                                                                        Pekingese
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="243">
                                                                        Shetland Sheepdog
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="223">
                                                                        Doberman Pinscher
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="211">
                                                                        Basset Hound
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="383">
                                                                        Mal-Shi
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="425">
                                                                        Frenchton
                                                                        </li><li className="selectr-option hidden" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="476">
                                                                        Saint Berdoodle
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="346">
                                                                        Pomapoo
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="275">
                                                                        Portuguese Water Dog
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="230">
                                                                        Jack Russell Terrier
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="381">
                                                                        Shichon
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="341">
                                                                        Puggle
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="268">
                                                                        Samoyed
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="518">
                                                                        Corgipoo
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="286">
                                                                        Newfoundland
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="522">
                                                                        American Corgi
                                                                        </li><li className="selectr-option hidden" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="209">
                                                                        Akita
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="382">
                                                                        Shorkie
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="242">
                                                                        Scottish Terrier
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="278">
                                                                        Old English Sheepdog
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="576">
                                                                        Golden Mountain Doodle
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="221">
                                                                        Collie
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="517">
                                                                        Yoranian
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="387">
                                                                        Schnoodle
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="235">
                                                                        Papillon
                                                                        </li><li className="selectr-option hidden" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="290">
                                                                        Dogue de Bordeaux
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="274">
                                                                        Cairn Terrier
                                                                        </li><li className="selectr-option hidden" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="572">
                                                                        Frenchie Pug
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="247">
                                                                        Vizsla
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="559">
                                                                        Yo-Chon
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="580">
                                                                        Golden Cavadoodle
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="330">
                                                                        Chinese Shar-Pei
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="289">
                                                                        Dalmatian
                                                                        </li><li className="selectr-option hidden" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="305">
                                                                        Keeshond
                                                                        </li><li className="selectr-option" role="treeitem" tabIndex={-1} aria-selected="false" data-facet-id="343">
                                                                        Cane Corso
                                                                        </li>
                                                                </ul> */}
                                                        </div>
                                                        <select className="js-breed-searchbar selectr-hidden" multiple={true} tabIndex={-1} aria-hidden="true">
                                                            <option value="" data-breed-slug="" className="js-breed-searchbar__all" data-is-default="" selected={true}>
                                                            All Breeds
                                                            </option>
                                                            <option id="goldendoodle" data-facet-id="334" data-breed-slug="goldendoodle" value="goldendoodle">
                                                            Goldendoodle
                                                            </option>
                                                            <option id="cavapoo" data-facet-id="390" data-breed-slug="cavapoo" value="cavapoo">
                                                            Cavapoo
                                                            </option>
                                                            <option id="bernedoodle" data-facet-id="444" data-breed-slug="bernedoodle" value="bernedoodle">
                                                            Bernedoodle
                                                            </option>
                                                            <option id="poodle" data-facet-id="322" data-breed-slug="poodle" value="poodle">
                                                            Poodle
                                                            </option>
                                                            <option id="golden-retriever" data-facet-id="228" data-breed-slug="golden-retriever" value="golden-retriever">
                                                            Golden Retriever
                                                            </option>
                                                            <option id="dachshund" data-facet-id="222" data-breed-slug="dachshund" value="dachshund">
                                                            Dachshund
                                                            </option>
                                                            <option id="maltipoo" data-facet-id="345" data-breed-slug="maltipoo" value="maltipoo">
                                                            Maltipoo
                                                            </option>
                                                            <option id="cavalier-king-charles-spaniel" data-facet-id="276" data-breed-slug="cavalier-king-charles-spaniel" value="cavalier-king-charles-spaniel">
                                                            Cavalier King Charles Spaniel
                                                            </option>
                                                            <option id="labrador-retriever" data-facet-id="231" data-breed-slug="labrador-retriever" value="labrador-retriever">
                                                            Labrador Retriever
                                                            </option>
                                                            <option id="french-bulldog" data-facet-id="225" data-breed-slug="french-bulldog" value="french-bulldog">
                                                            French Bulldog
                                                            </option>
                                                            <option id="havanese" data-facet-id="302" data-breed-slug="havanese" value="havanese">
                                                            Havanese
                                                            </option>
                                                            <option id="german-shepherd-dog" data-facet-id="226" data-breed-slug="german-shepherd-dog" value="german-shepherd-dog">
                                                            German Shepherd Dog
                                                            </option>
                                                            <option id="yorkshire-terrier" data-facet-id="249" data-breed-slug="yorkshire-terrier" value="yorkshire-terrier">
                                                            Yorkshire Terrier
                                                            </option>
                                                            <option id="shih-tzu" data-facet-id="244" data-breed-slug="shih-tzu" value="shih-tzu">
                                                            Shih Tzu
                                                            </option>
                                                            <option id="cocker-spaniel" data-facet-id="220" data-breed-slug="cocker-spaniel" value="cocker-spaniel">
                                                            Cocker Spaniel
                                                            </option>
                                                            <option id="pomeranian" data-facet-id="238" data-breed-slug="pomeranian" value="pomeranian">
                                                            Pomeranian
                                                            </option>
                                                            <option id="miniature-schnauzer" data-facet-id="320" data-breed-slug="miniature-schnauzer" value="miniature-schnauzer">
                                                            Miniature Schnauzer
                                                            </option>
                                                            <option id="maltese" data-facet-id="232" data-breed-slug="maltese" value="maltese">
                                                            Maltese
                                                            </option>
                                                            <option id="labradoodle" data-facet-id="327" data-breed-slug="labradoodle" value="labradoodle">
                                                            Labradoodle
                                                            </option>
                                                            <option id="beagle" data-facet-id="212" data-breed-slug="beagle" value="beagle">
                                                            Beagle
                                                            </option>
                                                            <option id="cockapoo" data-facet-id="347" data-breed-slug="cockapoo" value="cockapoo">
                                                            Cockapoo
                                                            </option>
                                                            <option id="chihuahua" data-facet-id="219" data-breed-slug="chihuahua" value="chihuahua">
                                                            Chihuahua
                                                            </option>
                                                            <option id="pembroke-welsh-corgi" data-facet-id="324" data-breed-slug="pembroke-welsh-corgi" value="pembroke-welsh-corgi">
                                                            Pembroke Welsh Corgi
                                                            </option>
                                                            <option id="pomsky" data-facet-id="437" data-breed-slug="pomsky" value="pomsky">
                                                            Pomsky
                                                            </option>
                                                            <option id="australian-shepherd" data-facet-id="258" data-breed-slug="australian-shepherd" value="australian-shepherd">
                                                            Australian Shepherd
                                                            </option>
                                                            <option id="boston-terrier" data-facet-id="217" data-breed-slug="boston-terrier" value="boston-terrier">
                                                            Boston Terrier
                                                            </option>
                                                            <option id="bichonpoo" data-facet-id="434" data-breed-slug="bichonpoo" value="bichonpoo">
                                                            Bichonpoo
                                                            </option>
                                                            <option id="bernese-mountain-dog" data-facet-id="264" data-breed-slug="bernese-mountain-dog" value="bernese-mountain-dog">
                                                            Bernese Mountain Dog
                                                            </option>
                                                            <option id="bichon-frise" data-facet-id="218" data-breed-slug="bichon-frise" value="bichon-frise">
                                                            Bichon Frise
                                                            </option>
                                                            <option id="siberian-husky" data-facet-id="245" data-breed-slug="siberian-husky" value="siberian-husky">
                                                            Siberian Husky
                                                            </option>
                                                            <option id="havapoo" data-facet-id="447" data-breed-slug="havapoo" value="havapoo">
                                                            Havapoo
                                                            </option>
                                                            <option id="aussiedoodle" data-facet-id="404" data-breed-slug="aussiedoodle" value="aussiedoodle">
                                                            Aussiedoodle
                                                            </option>
                                                            <option id="coton-de-tulear" data-facet-id="285" data-breed-slug="coton-de-tulear" value="coton-de-tulear">
                                                            Coton de Tulear
                                                            </option>
                                                            <option id="morkie" data-facet-id="367" data-breed-slug="morkie" value="morkie">
                                                            Morkie
                                                            </option>
                                                            <option id="yorkiepoo" data-facet-id="344" data-breed-slug="yorkiepoo" value="yorkiepoo">
                                                            Yorkiepoo
                                                            </option>
                                                            <option id="great-dane" data-facet-id="299" data-breed-slug="great-dane" value="great-dane">
                                                            Great Dane
                                                            </option>
                                                            <option id="shihpoo" data-facet-id="378" data-breed-slug="shihpoo" value="shihpoo">
                                                            Shihpoo
                                                            </option>
                                                            <option id="rottweiler" data-facet-id="241" data-breed-slug="rottweiler" value="rottweiler">
                                                            Rottweiler
                                                            </option>
                                                            <option id="boxer" data-facet-id="216" data-breed-slug="boxer" value="boxer">
                                                            Boxer
                                                            </option>
                                                            <option id="sheepadoodle" data-facet-id="415" data-breed-slug="sheepadoodle" value="sheepadoodle">
                                                            Sheepadoodle
                                                            </option>
                                                            <option id="west-highland-white-terrier" data-facet-id="253" data-breed-slug="west-highland-white-terrier" value="west-highland-white-terrier">
                                                            West Highland White Terrier
                                                            </option>
                                                            <option id="shiba-inu" data-facet-id="263" data-breed-slug="shiba-inu" value="shiba-inu">
                                                            Shiba Inu
                                                            </option>
                                                            <option id="pug" data-facet-id="240" data-breed-slug="pug" value="pug">
                                                            Pug
                                                            </option>
                                                            <option id="cavachon" data-facet-id="385" data-breed-slug="cavachon" value="cavachon">
                                                            Cavachon
                                                            </option>
                                                            <option id="bulldog" data-facet-id="214" data-breed-slug="bulldog" value="bulldog">
                                                            Bulldog
                                                            </option>
                                                            <option id="miniature-pinscher" data-facet-id="233" data-breed-slug="miniature-pinscher" value="miniature-pinscher">
                                                            Miniature Pinscher
                                                            </option>
                                                            <option id="pekingese" data-facet-id="236" data-breed-slug="pekingese" value="pekingese">
                                                            Pekingese
                                                            </option>
                                                            <option id="shetland-sheepdog" data-facet-id="243" data-breed-slug="shetland-sheepdog" value="shetland-sheepdog">
                                                            Shetland Sheepdog
                                                            </option>
                                                            <option id="doberman-pinscher" data-facet-id="223" data-breed-slug="doberman-pinscher" value="doberman-pinscher">
                                                            Doberman Pinscher
                                                            </option>
                                                            <option id="basset-hound" data-facet-id="211" data-breed-slug="basset-hound" value="basset-hound">
                                                            Basset Hound
                                                            </option>
                                                            <option id="mal-shi" data-facet-id="383" data-breed-slug="mal-shi" value="mal-shi">
                                                            Mal-Shi
                                                            </option>
                                                            <option id="frenchton" data-facet-id="425" data-breed-slug="frenchton" value="frenchton">
                                                            Frenchton
                                                            </option>
                                                            <option id="saint-berdoodle" data-facet-id="476" data-breed-slug="saint-berdoodle" value="saint-berdoodle" className="hidden">
                                                            Saint Berdoodle
                                                            </option>
                                                            <option id="pomapoo" data-facet-id="346" data-breed-slug="pomapoo" value="pomapoo">
                                                            Pomapoo
                                                            </option>
                                                            <option id="portuguese-water-dog" data-facet-id="275" data-breed-slug="portuguese-water-dog" value="portuguese-water-dog">
                                                            Portuguese Water Dog
                                                            </option>
                                                            <option id="russell-terrier" data-facet-id="230" data-breed-slug="russell-terrier" value="russell-terrier">
                                                            Jack Russell Terrier
                                                            </option>
                                                            <option id="shichon" data-facet-id="381" data-breed-slug="shichon" value="shichon">
                                                            Shichon
                                                            </option>
                                                            <option id="puggle" data-facet-id="341" data-breed-slug="puggle" value="puggle">
                                                            Puggle
                                                            </option>
                                                            <option id="samoyed" data-facet-id="268" data-breed-slug="samoyed" value="samoyed">
                                                            Samoyed
                                                            </option>
                                                            <option id="corgipoo" data-facet-id="518" data-breed-slug="corgipoo" value="corgipoo">
                                                            Corgipoo
                                                            </option>
                                                            <option id="newfoundland" data-facet-id="286" data-breed-slug="newfoundland" value="newfoundland">
                                                            Newfoundland
                                                            </option>
                                                            <option id="american-corgi" data-facet-id="522" data-breed-slug="american-corgi" value="american-corgi">
                                                            American Corgi
                                                            </option>
                                                            <option id="akita" data-facet-id="209" data-breed-slug="akita" value="akita" className="hidden">
                                                            Akita
                                                            </option>
                                                            <option id="shorkie" data-facet-id="382" data-breed-slug="shorkie" value="shorkie">
                                                            Shorkie
                                                            </option>
                                                            <option id="scottish-terrier" data-facet-id="242" data-breed-slug="scottish-terrier" value="scottish-terrier">
                                                            Scottish Terrier
                                                            </option>
                                                            <option id="old-english-sheepdog" data-facet-id="278" data-breed-slug="old-english-sheepdog" value="old-english-sheepdog">
                                                            Old English Sheepdog
                                                            </option>
                                                            <option id="golden-mountain-doodle" data-facet-id="576" data-breed-slug="golden-mountain-doodle" value="golden-mountain-doodle">
                                                            Golden Mountain Doodle
                                                            </option>
                                                            <option id="collie" data-facet-id="221" data-breed-slug="collie" value="collie">
                                                            Collie
                                                            </option>
                                                            <option id="yoranian" data-facet-id="517" data-breed-slug="yoranian" value="yoranian">
                                                            Yoranian
                                                            </option>
                                                            <option id="schnoodle" data-facet-id="387" data-breed-slug="schnoodle" value="schnoodle">
                                                            Schnoodle
                                                            </option>
                                                            <option id="papillon" data-facet-id="235" data-breed-slug="papillon" value="papillon">
                                                            Papillon
                                                            </option>
                                                            <option id="dogue-de-bordeaux" data-facet-id="290" data-breed-slug="dogue-de-bordeaux" value="dogue-de-bordeaux" className="hidden">
                                                            Dogue de Bordeaux
                                                            </option>
                                                            <option id="cairn-terrier" data-facet-id="274" data-breed-slug="cairn-terrier" value="cairn-terrier">
                                                            Cairn Terrier
                                                            </option>
                                                            <option id="frenchie-pug" data-facet-id="572" data-breed-slug="frenchie-pug" value="frenchie-pug" className="hidden">
                                                            Frenchie Pug
                                                            </option>
                                                            <option id="vizsla" data-facet-id="247" data-breed-slug="vizsla" value="vizsla">
                                                            Vizsla
                                                            </option>
                                                            <option id="yo-chon" data-facet-id="559" data-breed-slug="yo-chon" value="yo-chon">
                                                            Yo-Chon
                                                            </option>
                                                            <option id="golden-cavadoodle" data-facet-id="580" data-breed-slug="golden-cavadoodle" value="golden-cavadoodle">
                                                            Golden Cavadoodle
                                                            </option>
                                                            <option id="chinese-shar-pei" data-facet-id="330" data-breed-slug="chinese-shar-pei" value="chinese-shar-pei">
                                                            Chinese Shar-Pei
                                                            </option>
                                                            <option id="dalmatian" data-facet-id="289" data-breed-slug="dalmatian" value="dalmatian">
                                                            Dalmatian
                                                            </option>
                                                            <option id="keeshond" data-facet-id="305" data-breed-slug="keeshond" value="keeshond" className="hidden">
                                                            Keeshond
                                                            </option>
                                                            <option id="cane-corso" data-facet-id="343" data-breed-slug="cane-corso" value="cane-corso">
                                                            Cane Corso
                                                            </option>
                                                        </select>
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
                                                    <div className="input-container" data-facet-id="11">
                                                        <input type="checkbox" id="active-dogs" value="11" className="js-collection-input" name="collection" />
                                                        <label htmlFor="active-dogs" className="filter_characteristic_top_all filter_characteristic_top_active_dogs">Top Active Dog Breeds</label>
                                                    </div>
                                                    <div className="input-container" data-facet-id="2">
                                                        <input type="checkbox" id="best-apartment-dogs" value="2" className="js-collection-input" name="collection" />
                                                        <label htmlFor="best-apartment-dogs" className="filter_characteristic_top_all filter_characteristic_apartment_dogs">Best Apartment Dogs</label>
                                                    </div>
                                                    <div className="input-container" data-facet-id="4">
                                                        <input type="checkbox" id="best-family-dogs" value="4" className="js-collection-input" name="collection" />
                                                        <label htmlFor="best-family-dogs" className="filter_characteristic_top_all filter_characteristic_family_dogs">Best Family Dogs</label>
                                                    </div>
                                                    <div className="input-container" data-facet-id="5">
                                                        <input type="checkbox" id="teacup-puppies" value="5" className="js-collection-input" name="collection" />
                                                        <label htmlFor="teacup-puppies" className="filter_characteristic_top_all filter_characteristic_teacup_dogs">Teacup Puppies</label>
                                                    </div>
                                                    <div className="input-container" data-facet-id="3">
                                                        <input type="checkbox" id="allergy-friendly-dogs" value="3" className="js-collection-input" name="collection" />
                                                        <label htmlFor="allergy-friendly-dogs" className="filter_characteristic_top_all filter_characteristic_allergy_dogs">Allergy Friendly Dogs</label>
                                                    </div>
                                                    <div className="input-container" data-facet-id="6">
                                                        <input type="checkbox" id="doodle-puppies" value="6" className="js-collection-input" name="collection" />
                                                        <label htmlFor="doodle-puppies" className="filter_characteristic_top_all filter_characteristic_doodles_dogs">Doodle Puppies</label>
                                                    </div>
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
                                                <div className="input-container" data-facet-id="8">
                                                <input type="checkbox" id="variety-8" value="8" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-8">American</label>
                                                </div>
                                                <div className="input-container" data-facet-id="40">
                                                <input type="checkbox" id="variety-40" value="40" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-40">American and English</label>
                                                </div>
                                                <div className="input-container" data-facet-id="43">
                                                <input type="checkbox" id="variety-43" value="43" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-43">American and European</label>
                                                </div>
                                                <div className="input-container" data-facet-id="37">
                                                <input type="checkbox" id="variety-37" value="37" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-37">American and German</label>
                                                </div>
                                                <div className="input-container hidden" data-facet-id="44">
                                                <input type="checkbox" id="variety-44" value="44" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-44">Broken-Coated</label>
                                                </div>
                                                <div className="input-container" data-facet-id="45">
                                                <input type="checkbox" id="variety-45" value="45" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-45">Brush Coat</label>
                                                </div>
                                                <div className="input-container hidden" data-facet-id="46">
                                                <input type="checkbox" id="variety-46" value="46" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-46">Coated</label>
                                                </div>
                                                <div className="input-container" data-facet-id="34">
                                                <input type="checkbox" id="variety-34" value="34" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-34">English</label>
                                                </div>
                                                <div className="input-container hidden" data-facet-id="47">
                                                <input type="checkbox" id="variety-47" value="47" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-47">European</label>
                                                </div>
                                                <div className="input-container" data-facet-id="56">
                                                <input type="checkbox" id="variety-56" value="56" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-56">F1</label>
                                                </div>
                                                <div className="input-container" data-facet-id="57">
                                                <input type="checkbox" id="variety-57" value="57" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-57">F1b</label>
                                                </div>
                                                <div className="input-container hidden" data-facet-id="58">
                                                <input type="checkbox" id="variety-58" value="58" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-58">F2</label>
                                                </div>
                                                <div className="input-container" data-facet-id="48">
                                                <input type="checkbox" id="variety-48" value="48" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-48">Fluffy-Coated</label>
                                                </div>
                                                <div className="input-container hidden" data-facet-id="9">
                                                <input type="checkbox" id="variety-9" value="9" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-9">German</label>
                                                </div>
                                                <div className="input-container hidden" data-facet-id="10">
                                                <input type="checkbox" id="variety-10" value="10" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-10">Hairless</label>
                                                </div>
                                                <div className="input-container hidden" data-facet-id="49">
                                                <input type="checkbox" id="variety-49" value="49" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-49">Horse Coat</label>
                                                </div>
                                                <div className="input-container" data-facet-id="26">
                                                <input type="checkbox" id="variety-26" value="26" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-26">Long Coat</label>
                                                </div>
                                                <div className="input-container" data-facet-id="30">
                                                <input type="checkbox" id="variety-30" value="30" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-30">Long Coat Apple Head</label>
                                                </div>
                                                <div className="input-container" data-facet-id="36">
                                                <input type="checkbox" id="variety-36" value="36" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-36">Long Haired</label>
                                                </div>
                                                <div className="input-container" data-facet-id="18">
                                                <input type="checkbox" id="variety-18" value="18" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-18">Medium F1</label>
                                                </div>
                                                <div className="input-container" data-facet-id="19">
                                                <input type="checkbox" id="variety-19" value="19" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-19">Medium F1B</label>
                                                </div>
                                                <div className="input-container" data-facet-id="31">
                                                <input type="checkbox" id="variety-31" value="31" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-31">Medium F1B Reverse</label>
                                                </div>
                                                <div className="input-container hidden" data-facet-id="20">
                                                <input type="checkbox" id="variety-20" value="20" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-20">Medium F2</label>
                                                </div>
                                                <div className="input-container" data-facet-id="21">
                                                <input type="checkbox" id="variety-21" value="21" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-21">Medium Multi-generation</label>
                                                </div>
                                                <div className="input-container" data-facet-id="50">
                                                <input type="checkbox" id="variety-50" value="50" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-50">Medium-Coated</label>
                                                </div>
                                                <div className="input-container" data-facet-id="39">
                                                <input type="checkbox" id="variety-39" value="39" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-39">Miniature</label>
                                                </div>
                                                <div className="input-container" data-facet-id="22">
                                                <input type="checkbox" id="variety-22" value="22" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-22">Miniature F1</label>
                                                </div>
                                                <div className="input-container" data-facet-id="23">
                                                <input type="checkbox" id="variety-23" value="23" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-23">Miniature F1B</label>
                                                </div>
                                                <div className="input-container hidden" data-facet-id="32">
                                                <input type="checkbox" id="variety-32" value="32" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-32">Miniature F1B Reverse</label>
                                                </div>
                                                <div className="input-container" data-facet-id="24">
                                                <input type="checkbox" id="variety-24" value="24" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-24">Miniature F2</label>
                                                </div>
                                                <div className="input-container" data-facet-id="5">
                                                <input type="checkbox" id="variety-5" value="5" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-5">Miniature Long Haired</label>
                                                </div>
                                                <div className="input-container" data-facet-id="25">
                                                <input type="checkbox" id="variety-25" value="25" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-25">Miniature Multi-generation</label>
                                                </div>
                                                <div className="input-container" data-facet-id="6">
                                                <input type="checkbox" id="variety-6" value="6" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-6">Miniature Smooth Haired</label>
                                                </div>
                                                <div className="input-container" data-facet-id="7">
                                                <input type="checkbox" id="variety-7" value="7" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-7">Miniature Wire Haired</label>
                                                </div>
                                                <div className="input-container hidden" data-facet-id="59">
                                                <input type="checkbox" id="variety-59" value="59" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-59">Multi-generation</label>
                                                </div>
                                                <div className="input-container hidden" data-facet-id="35">
                                                <input type="checkbox" id="variety-35" value="35" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-35">Phalene (ears down)</label>
                                                </div>
                                                <div className="input-container hidden" data-facet-id="11">
                                                <input type="checkbox" id="variety-11" value="11" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-11">Powderpuff</label>
                                                </div>
                                                <div className="input-container" data-facet-id="12">
                                                <input type="checkbox" id="variety-12" value="12" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-12">Rough-coated</label>
                                                </div>
                                                <div className="input-container" data-facet-id="28">
                                                <input type="checkbox" id="variety-28" value="28" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-28">Short-haired</label>
                                                </div>
                                                <div className="input-container" data-facet-id="27">
                                                <input type="checkbox" id="variety-27" value="27" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-27">Smooth Coat</label>
                                                </div>
                                                <div className="input-container" data-facet-id="29">
                                                <input type="checkbox" id="variety-29" value="29" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-29">Smooth Coat Apple Head</label>
                                                </div>
                                                <div className="input-container" data-facet-id="13">
                                                <input type="checkbox" id="variety-13" value="13" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-13">Smooth-coated</label>
                                                </div>
                                                <div className="input-container" data-facet-id="1">
                                                <input type="checkbox" id="variety-1" value="1" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-1">Standard</label>
                                                </div>
                                                <div className="input-container" data-facet-id="14">
                                                <input type="checkbox" id="variety-14" value="14" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-14">Standard F1</label>
                                                </div>
                                                <div className="input-container" data-facet-id="15">
                                                <input type="checkbox" id="variety-15" value="15" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-15">Standard F1B</label>
                                                </div>
                                                <div className="input-container" data-facet-id="33">
                                                <input type="checkbox" id="variety-33" value="33" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-33">Standard F1B Reverse</label>
                                                </div>
                                                <div className="input-container" data-facet-id="16">
                                                <input type="checkbox" id="variety-16" value="16" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-16">Standard F2</label>
                                                </div>
                                                <div className="input-container hidden" data-facet-id="2">
                                                <input type="checkbox" id="variety-2" value="2" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-2">Standard Long Haired</label>
                                                </div>
                                                <div className="input-container" data-facet-id="17">
                                                <input type="checkbox" id="variety-17" value="17" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-17">Standard Multi-generation</label>
                                                </div>
                                                <div className="input-container" data-facet-id="3">
                                                <input type="checkbox" id="variety-3" value="3" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-3">Standard Smooth Haired</label>
                                                </div>
                                                <div className="input-container hidden" data-facet-id="4">
                                                <input type="checkbox" id="variety-4" value="4" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-4">Standard Wire Haired</label>
                                                </div>
                                                <div className="input-container" data-facet-id="41">
                                                <input type="checkbox" id="variety-41" value="41" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-41">Toy</label>
                                                </div>
                                                <div className="input-container" data-facet-id="51">
                                                <input type="checkbox" id="variety-51" value="51" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-51">Toy F1</label>
                                                </div>
                                                <div className="input-container" data-facet-id="52">
                                                <input type="checkbox" id="variety-52" value="52" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-52">Toy F1B</label>
                                                </div>
                                                <div className="input-container hidden" data-facet-id="53">
                                                <input type="checkbox" id="variety-53" value="53" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-53">Toy F1B Reverse</label>
                                                </div>
                                                <div className="input-container hidden" data-facet-id="54">
                                                <input type="checkbox" id="variety-54" value="54" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-54">Toy F2</label>
                                                </div>
                                                <div className="input-container" data-facet-id="55">
                                                <input type="checkbox" id="variety-55" value="55" name="variety" />
                                                <label className='variety-classes_all' htmlFor="variety-55">Toy Multi-Generation</label>
                                                </div>
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
                                                    <div className="input-container" data-facet-id="1">
                                                    <input type="checkbox" id="variety-size-1" value="1" name="varietySize" />
                                                    <label htmlFor="variety-size-1" className='variety-size_all'>Miniature</label>
                                                    </div>
                                                    <div className="input-container" data-facet-id="2">
                                                    <input type="checkbox" id="variety-size-2" value="2" name="varietySize" />
                                                    <label htmlFor="variety-size-2" className='variety-size_all'>Medium</label>
                                                    </div>
                                                    <div className="input-container" data-facet-id="3">
                                                    <input type="checkbox" id="variety-size-3" value="3" name="varietySize" />
                                                    <label htmlFor="variety-size-3" className='variety-size_all'>Standard</label>
                                                    </div>
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
                                                    <input name="ages" type="radio" id="all-ages" value="" data-max-age="" data-min-age="" defaultChecked data-is-default="" />
                                                    <label htmlFor="all-ages" className="gtag-filter_age_all gtag-filter_age_any">Any age</label>
                                                    </div>
                                                    <div className="input-container" data-facet-id="upto8">
                                                    <input name="ages" type="radio" id="up-to-8" value="upto8" data-max-age="8" data-min-age="" />
                                                    <label htmlFor="up-to-8" className="gtag-filter_age_all gtag-filter_age_up_to_8">Up to 8 weeks</label>
                                                    </div>
                                                    <div className="input-container" data-facet-id="upto12">
                                                    <input name="ages" type="radio" id="up-to-12" value="upto12" data-max-age="12" data-min-age="" />
                                                    <label htmlFor="up-to-12" className="gtag-filter_age_all gtag-filter_age_up_to_12">Up to 12 weeks</label>
                                                    </div>
                                                    <div className="input-container" data-facet-id="upto16">
                                                    <input name="ages" type="radio" id="up-to-16" value="upto16" data-max-age="16" data-min-age="" />
                                                    <label htmlFor="up-to-16" className="gtag-filter_age_all gtag-filter_age_up_to_16">Up to 16 weeks</label>
                                                    </div>
                                                    <div className="input-container" data-facet-id="17plus">
                                                    <input name="ages" type="radio" id="17-plus" value="17plus" data-max-age="" data-min-age="17" />
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
                                                    <li className="input-container hidden" data-facet-id="6">
                                                    <input type="checkbox" name="color" data-id="6" id="color-6" value="6" />
                                                    <label className='color-inputs_label_options' htmlFor="color-6">Agouti &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="108">
                                                    <input type="checkbox" name="color" data-id="108" id="color-108" value="108" />
                                                    <label className='color-inputs_label_options' htmlFor="color-108">Apricot</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="229">
                                                    <input type="checkbox" name="color" data-id="229" id="color-229" value="229" />
                                                    <label className='color-inputs_label_options' htmlFor="color-229">Apricot &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="195">
                                                    <input type="checkbox" name="color" data-id="195" id="color-195" value="195" />
                                                    <label className='color-inputs_label_options' htmlFor="color-195">Apricot Fawn</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="175">
                                                    <input type="checkbox" name="color" data-id="175" id="color-175" value="175" />
                                                    <label className='color-inputs_label_options' htmlFor="color-175">Beaver</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="181">
                                                    <input type="checkbox" name="color" data-id="181" id="color-181" value="181" />
                                                    <label className='color-inputs_label_options' htmlFor="color-181">Beaver Sable</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1">
                                                    <input type="checkbox" name="color" data-id="1" id="color-1" value="1" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1">Beige</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="278">
                                                    <input type="checkbox" name="color" data-id="278" id="color-278" value="278" />
                                                    <label className='color-inputs_label_options' htmlFor="color-278">Belge</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="35">
                                                    <input type="checkbox" name="color" data-id="35" id="color-35" value="35" />
                                                    <label className='color-inputs_label_options' htmlFor="color-35">Bi</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="144">
                                                    <input type="checkbox" name="color" data-id="144" id="color-144" value="144" />
                                                    <label className='color-inputs_label_options' htmlFor="color-144">Bi-Color</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="1000046">
                                                    <input type="checkbox" name="color" data-id="1000046" id="color-1000046" value="1000046" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000046">Biscuit</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="2">
                                                    <input type="checkbox" name="color" data-id="2" id="color-2" value="2" />
                                                    <label className='color-inputs_label_options' htmlFor="color-2">Black</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="186">
                                                    <input type="checkbox" name="color" data-id="186" id="color-186" value="186" />
                                                    <label className='color-inputs_label_options' htmlFor="color-186">Black &amp; Apricot</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="182">
                                                    <input type="checkbox" name="color" data-id="182" id="color-182" value="182" />
                                                    <label className='color-inputs_label_options' htmlFor="color-182">Black &amp; Brindle</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="187">
                                                    <input type="checkbox" name="color" data-id="187" id="color-187" value="187" />
                                                    <label className='color-inputs_label_options' htmlFor="color-187">Black &amp; Brown</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="124">
                                                    <input type="checkbox" name="color" data-id="124" id="color-124" value="124" />
                                                    <label className='color-inputs_label_options' htmlFor="color-124">Black &amp; Cream</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="81">
                                                    <input type="checkbox" name="color" data-id="81" id="color-81" value="81" />
                                                    <label className='color-inputs_label_options' htmlFor="color-81">Black &amp; Fawn</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="219">
                                                    <input type="checkbox" name="color" data-id="219" id="color-219" value="219" />
                                                    <label className='color-inputs_label_options' htmlFor="color-219">Black &amp; Gold</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="188">
                                                    <input type="checkbox" name="color" data-id="188" id="color-188" value="188" />
                                                    <label className='color-inputs_label_options' htmlFor="color-188">Black &amp; Gray</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="197">
                                                    <input type="checkbox" name="color" data-id="197" id="color-197" value="197" />
                                                    <label className='color-inputs_label_options' htmlFor="color-197">Black &amp; Mahogany</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="95">
                                                    <input type="checkbox" name="color" data-id="95" id="color-95" value="95" />
                                                    <label className='color-inputs_label_options' htmlFor="color-95">Black &amp; Red</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="130">
                                                    <input type="checkbox" name="color" data-id="130" id="color-130" value="130" />
                                                    <label className='color-inputs_label_options' htmlFor="color-130">Black &amp; Rust</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="3">
                                                    <input type="checkbox" name="color" data-id="3" id="color-3" value="3" />
                                                    <label className='color-inputs_label_options' htmlFor="color-3">Black &amp; Silver</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="159">
                                                    <input type="checkbox" name="color" data-id="159" id="color-159" value="159" />
                                                    <label className='color-inputs_label_options' htmlFor="color-159">Black &amp; Silver Brindle</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="4">
                                                    <input type="checkbox" name="color" data-id="4" id="color-4" value="4" />
                                                    <label className='color-inputs_label_options' htmlFor="color-4">Black &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="160">
                                                    <input type="checkbox" name="color" data-id="160" id="color-160" value="160" />
                                                    <label className='color-inputs_label_options' htmlFor="color-160">Black &amp; Tan Brindle</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="242">
                                                    <input type="checkbox" name="color" data-id="242" id="color-242" value="242" />
                                                    <label className='color-inputs_label_options' htmlFor="color-242">Black &amp; Tan Merle</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="7">
                                                    <input type="checkbox" name="color" data-id="7" id="color-7" value="7" />
                                                    <label className='color-inputs_label_options' htmlFor="color-7">Black &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="240">
                                                    <input type="checkbox" name="color" data-id="240" id="color-240" value="240" />
                                                    <label className='color-inputs_label_options' htmlFor="color-240">Black and White Piebald</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="16">
                                                    <input type="checkbox" name="color" data-id="16" id="color-16" value="16" />
                                                    <label className='color-inputs_label_options' htmlFor="color-16">Black Brindle</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="239">
                                                    <input type="checkbox" name="color" data-id="239" id="color-239" value="239" />
                                                    <label className='color-inputs_label_options' htmlFor="color-239">Black Brindle &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="1000012">
                                                    <input type="checkbox" name="color" data-id="1000012" id="color-1000012" value="1000012" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000012">Black Brown &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="82">
                                                    <input type="checkbox" name="color" data-id="82" id="color-82" value="82" />
                                                    <label className='color-inputs_label_options' htmlFor="color-82">Black Fawn &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="203">
                                                    <input type="checkbox" name="color" data-id="203" id="color-203" value="203" />
                                                    <label className='color-inputs_label_options' htmlFor="color-203">Black Gold &amp; Silver</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="204">
                                                    <input type="checkbox" name="color" data-id="204" id="color-204" value="204" />
                                                    <label className='color-inputs_label_options' htmlFor="color-204">Black Gold &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="207">
                                                    <input type="checkbox" name="color" data-id="207" id="color-207" value="207" />
                                                    <label className='color-inputs_label_options' htmlFor="color-207">Black Gray &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="43">
                                                    <input type="checkbox" name="color" data-id="43" id="color-43" value="43" />
                                                    <label className='color-inputs_label_options' htmlFor="color-43">Black Red &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000066">
                                                    <input type="checkbox" name="color" data-id="1000066" id="color-1000066" value="1000066" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000066">Black Roan</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="1000024">
                                                    <input type="checkbox" name="color" data-id="1000024" id="color-1000024" value="1000024" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000024">Black Rust &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="96">
                                                    <input type="checkbox" name="color" data-id="96" id="color-96" value="96" />
                                                    <label className='color-inputs_label_options' htmlFor="color-96">Black Sabled Fawn</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="97">
                                                    <input type="checkbox" name="color" data-id="97" id="color-97" value="97" />
                                                    <label className='color-inputs_label_options' htmlFor="color-97">Black Sabled Silver</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="230">
                                                    <input type="checkbox" name="color" data-id="230" id="color-230" value="230" />
                                                    <label className='color-inputs_label_options' htmlFor="color-230">Black Silver &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="44">
                                                    <input type="checkbox" name="color" data-id="44" id="color-44" value="44" />
                                                    <label className='color-inputs_label_options' htmlFor="color-44">Black Tan &amp; Bluetick</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="46">
                                                    <input type="checkbox" name="color" data-id="46" id="color-46" value="46" />
                                                    <label className='color-inputs_label_options' htmlFor="color-46">Black Tan &amp; Redtick</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="39">
                                                    <input type="checkbox" name="color" data-id="39" id="color-39" value="39" />
                                                    <label className='color-inputs_label_options' htmlFor="color-39">Black Tan &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000078">
                                                    <input type="checkbox" name="color" data-id="1000078" id="color-1000078" value="1000078" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000078">Black Tri</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000079">
                                                    <input type="checkbox" name="color" data-id="1000079" id="color-1000079" value="1000079" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000079">Black Tri Merle</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000013">
                                                    <input type="checkbox" name="color" data-id="1000013" id="color-1000013" value="1000013" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000013">Black White &amp; Brown</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="205">
                                                    <input type="checkbox" name="color" data-id="205" id="color-205" value="205" />
                                                    <label className='color-inputs_label_options' htmlFor="color-205">Black White &amp; Silver</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="90">
                                                    <input type="checkbox" name="color" data-id="90" id="color-90" value="90"/>
                                                    <label className='color-inputs_label_options' htmlFor="color-90">Black White &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="64">
                                                    <input type="checkbox" name="color" data-id="64" id="color-64" value="64"/>
                                                    <label className='color-inputs_label_options' htmlFor="color-64">Black, Brindle &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000098">
                                                    <input type="checkbox" name="color" data-id="1000098" id="color-1000098" value="1000098"/>
                                                    <label className='color-inputs_label_options' htmlFor="color-1000098">Black, Brown Undercoat</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000101">
                                                    <input type="checkbox" name="color" data-id="1000101" id="color-1000101" value="1000101"/>
                                                    <label className='color-inputs_label_options' htmlFor="color-1000101">Black, Silver Undercoat</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="91">
                                                    <input type="checkbox" name="color" data-id="91" id="color-91" value="91"/>
                                                    <label className='color-inputs_label_options' htmlFor="color-91">Blenheim</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="17">
                                                    <input type="checkbox" name="color" data-id="17" id="color-17" value="17"/>
                                                    <label className='color-inputs_label_options' htmlFor="color-17">Blue</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="125">
                                                    <input type="checkbox" name="color" data-id="125" id="color-125" value="125"/>
                                                    <label className='color-inputs_label_options' htmlFor="color-125">Blue &amp; Cream</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="220">
                                                    <input type="checkbox" name="color" data-id="220" id="color-220" value="220"/>
                                                    <label className='color-inputs_label_options' htmlFor="color-220">Blue &amp; Gold</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="131">
                                                    <input type="checkbox" name="color" data-id="131" id="color-131" value="131"/>
                                                    <label className='color-inputs_label_options' htmlFor="color-131">Blue &amp; Rust</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="93">
                                                    <input type="checkbox" name="color" data-id="93" id="color-93" value="93" />
                                                    <label className='color-inputs_label_options' htmlFor="color-93">Blue &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="8">
                                                    <input type="checkbox" name="color" data-id="8" id="color-8" value="8" />
                                                    <label className='color-inputs_label_options' htmlFor="color-8">Blue &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="222">
                                                    <input type="checkbox" name="color" data-id="222" id="color-222" value="222" />
                                                    <label className='color-inputs_label_options' htmlFor="color-222">Blue &amp; White Pied</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="18">
                                                    <input type="checkbox" name="color" data-id="18" id="color-18" value="18" />
                                                    <label className='color-inputs_label_options' htmlFor="color-18">Blue Brindle</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000005">
                                                    <input type="checkbox" name="color" data-id="1000005" id="color-1000005" value="1000005" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000005">Blue Brindle &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="98">
                                                    <input type="checkbox" name="color" data-id="98" id="color-98" value="98" />
                                                    <label className='color-inputs_label_options' htmlFor="color-98">Blue Brindled Fawn</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="19">
                                                    <input type="checkbox" name="color" data-id="19" id="color-19" value="19" />
                                                    <label className='color-inputs_label_options' htmlFor="color-19">Blue Fawn</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="227">
                                                    <input type="checkbox" name="color" data-id="227" id="color-227" value="227" />
                                                    <label className='color-inputs_label_options' htmlFor="color-227">Blue Fawn &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="254">
                                                    <input type="checkbox" name="color" data-id="254" id="color-254" value="254" />
                                                    <label className='color-inputs_label_options' htmlFor="color-254">Blue Leopard</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="37">
                                                    <input type="checkbox" name="color" data-id="37" id="color-37" value="37" />
                                                    <label className='color-inputs_label_options' htmlFor="color-37">Blue Merle</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000050">
                                                    <input type="checkbox" name="color" data-id="1000050" id="color-1000050" value="1000050" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000050">Blue Merle &amp; Gold</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="1000049">
                                                    <input type="checkbox" name="color" data-id="1000049" id="color-1000049" value="1000049" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000049">Blue Merle &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="120">
                                                    <input type="checkbox" name="color" data-id="120" id="color-120" value="120" />
                                                    <label className='color-inputs_label_options' htmlFor="color-120">Blue Merle &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="121">
                                                    <input type="checkbox" name="color" data-id="121" id="color-121" value="121" />
                                                    <label className='color-inputs_label_options' htmlFor="color-121">Blue Merle White &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="31">
                                                    <input type="checkbox" name="color" data-id="31" id="color-31" value="31" />
                                                    <label className='color-inputs_label_options' htmlFor="color-31">Blue Mottled</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="117">
                                                    <input type="checkbox" name="color" data-id="117" id="color-117" value="117" />
                                                    <label className='color-inputs_label_options' htmlFor="color-117">Blue Roan</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="118">
                                                    <input type="checkbox" name="color" data-id="118" id="color-118" value="118" />
                                                    <label className='color-inputs_label_options' htmlFor="color-118">Blue Roan &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="176">
                                                    <input type="checkbox" name="color" data-id="176" id="color-176" value="176" />
                                                    <label className='color-inputs_label_options' htmlFor="color-176">Blue Sable</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000062">
                                                    <input type="checkbox" name="color" data-id="1000062" id="color-1000062" value="1000062" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000062">Blue Sable &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="41">
                                                    <input type="checkbox" name="color" data-id="41" id="color-41" value="41" />
                                                    <label className='color-inputs_label_options' htmlFor="color-41">Blue Tan &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000082">
                                                    <input type="checkbox" name="color" data-id="1000082" id="color-1000082" value="1000082" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000082">Blue Tri</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="48">
                                                    <input type="checkbox" name="color" data-id="48" id="color-48" value="48" />
                                                    <label className='color-inputs_label_options' htmlFor="color-48">Brindle</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="65">
                                                    <input type="checkbox" name="color" data-id="65" id="color-65" value="65" />
                                                    <label className='color-inputs_label_options' htmlFor="color-65">Brindle &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="216">
                                                    <input type="checkbox" name="color" data-id="216" id="color-216" value="216" />
                                                    <label className='color-inputs_label_options' htmlFor="color-216">Brindle Merle &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000047">
                                                    <input type="checkbox" name="color" data-id="1000047" id="color-1000047" value="1000047" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000047">Brindlequin</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="249">
                                                    <input type="checkbox" name="color" data-id="249" id="color-249" value="249" />
                                                    <label className='color-inputs_label_options' htmlFor="color-249">Bronze &amp; White </label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="21">
                                                    <input type="checkbox" name="color" data-id="21" id="color-21" value="21" />
                                                    <label className='color-inputs_label_options' htmlFor="color-21">Brown</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="1000059">
                                                    <input type="checkbox" name="color" data-id="1000059" id="color-1000059" value="1000059" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000059">Brown &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="209">
                                                    <input type="checkbox" name="color" data-id="209" id="color-209" value="209" />
                                                    <label className='color-inputs_label_options' htmlFor="color-209">Brown &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="210">
                                                    <input type="checkbox" name="color" data-id="210" id="color-210" value="210" />
                                                    <label className='color-inputs_label_options' htmlFor="color-210">Brown Black &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="22">
                                                    <input type="checkbox" name="color" data-id="22" id="color-22" value="22" />
                                                    <label className='color-inputs_label_options' htmlFor="color-22">Brown Brindle</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="1000109">
                                                    <input type="checkbox" name="color" data-id="1000109" id="color-1000109" value="1000109" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000109">Brown Tan &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="42">
                                                    <input type="checkbox" name="color" data-id="42" id="color-42" value="42" />
                                                    <label className='color-inputs_label_options' htmlFor="color-42">Brown White &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="268">
                                                    <input type="checkbox" name="color" data-id="268" id="color-268" value="268" />
                                                    <label className='color-inputs_label_options' htmlFor="color-268">Brown, Black Overlay</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="115">
                                                    <input type="checkbox" name="color" data-id="115" id="color-115" value="115" />
                                                    <label className='color-inputs_label_options' htmlFor="color-115">Buff</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="116">
                                                    <input type="checkbox" name="color" data-id="116" id="color-116" value="116" />
                                                    <label className='color-inputs_label_options' htmlFor="color-116">Buff &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="184">
                                                    <input type="checkbox" name="color" data-id="184" id="color-184" value="184" />
                                                    <label className='color-inputs_label_options' htmlFor="color-184">Cafe Au Lait</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="166">
                                                    <input type="checkbox" name="color" data-id="166" id="color-166" value="166" />
                                                    <label className='color-inputs_label_options' htmlFor="color-166">Charcoal</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="275">
                                                    <input type="checkbox" name="color" data-id="275" id="color-275" value="275" />
                                                    <label className='color-inputs_label_options' htmlFor="color-275">Chestnut</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="89">
                                                    <input type="checkbox" name="color" data-id="89" id="color-89" value="89" />
                                                    <label className='color-inputs_label_options' htmlFor="color-89">Chestnut Brindle</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="75">
                                                    <input type="checkbox" name="color" data-id="75" id="color-75" value="75" />
                                                    <label className='color-inputs_label_options' htmlFor="color-75">Chocolate</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="189">
                                                    <input type="checkbox" name="color" data-id="189" id="color-189" value="189" />
                                                    <label className='color-inputs_label_options' htmlFor="color-189">Chocolate &amp; Apricot</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="126">
                                                    <input type="checkbox" name="color" data-id="126" id="color-126" value="126" />
                                                    <label className='color-inputs_label_options' htmlFor="color-126">Chocolate &amp; Cream</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000000">
                                                    <input type="checkbox" name="color" data-id="1000000" id="color-1000000" value="1000000" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000000">Chocolate &amp; Fawn</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="226">
                                                    <input type="checkbox" name="color" data-id="226" id="color-226" value="226" />
                                                    <label className='color-inputs_label_options' htmlFor="color-226">Chocolate &amp; Gold</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="134">
                                                    <input type="checkbox" name="color" data-id="134" id="color-134" value="134" />
                                                    <label className='color-inputs_label_options' htmlFor="color-134">Chocolate &amp; Rust</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="94">
                                                    <input type="checkbox" name="color" data-id="94" id="color-94" value="94" />
                                                    <label className='color-inputs_label_options' htmlFor="color-94">Chocolate &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="99">
                                                    <input type="checkbox" name="color" data-id="99" id="color-99" value="99" />
                                                    <label className='color-inputs_label_options' htmlFor="color-99">Chocolate &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="152">
                                                    <input type="checkbox" name="color" data-id="152" id="color-152" value="152" />
                                                    <label className='color-inputs_label_options' htmlFor="color-152">Chocolate Brindle</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000048">
                                                    <input type="checkbox" name="color" data-id="1000048" id="color-1000048" value="1000048" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000048">Chocolate Brindle &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="101">
                                                    <input type="checkbox" name="color" data-id="101" id="color-101" value="101" />
                                                    <label className='color-inputs_label_options' htmlFor="color-101">Chocolate Brindled Fawn</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="232">
                                                    <input type="checkbox" name="color" data-id="232" id="color-232" value="232" />
                                                    <label className='color-inputs_label_options' htmlFor="color-232">Chocolate Dapple</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="1000102">
                                                    <input type="checkbox" name="color" data-id="1000102" id="color-1000102" value="1000102" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000102">Chocolate Gold &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="183">
                                                    <input type="checkbox" name="color" data-id="183" id="color-183" value="183" />
                                                    <label className='color-inputs_label_options' htmlFor="color-183">Chocolate Merle</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="1000064">
                                                    <input type="checkbox" name="color" data-id="1000064" id="color-1000064" value="1000064" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000064">Chocolate Merle &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="1000053">
                                                    <input type="checkbox" name="color" data-id="1000053" id="color-1000053" value="1000053" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000053">Chocolate Merle &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="194">
                                                    <input type="checkbox" name="color" data-id="194" id="color-194" value="194" />
                                                    <label className='color-inputs_label_options' htmlFor="color-194">Chocolate Phantom</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="238">
                                                    <input type="checkbox" name="color" data-id="238" id="color-238" value="238" />
                                                    <label className='color-inputs_label_options' htmlFor="color-238">Chocolate Roan &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="161">
                                                    <input type="checkbox" name="color" data-id="161" id="color-161" value="161" />
                                                    <label className='color-inputs_label_options' htmlFor="color-161">Chocolate Sable</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000061">
                                                    <input type="checkbox" name="color" data-id="1000061" id="color-1000061" value="1000061" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000061">Chocolate Sable &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="102">
                                                    <input type="checkbox" name="color" data-id="102" id="color-102" value="102" />
                                                    <label className='color-inputs_label_options' htmlFor="color-102">Chocolate Sabled Fawn</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="170">
                                                    <input type="checkbox" name="color" data-id="170" id="color-170" value="170" />
                                                    <label className='color-inputs_label_options' htmlFor="color-170">Chocolate Stag Red</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="1000071">
                                                    <input type="checkbox" name="color" data-id="1000071" id="color-1000071" value="1000071" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000071">Chocolate Tan &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="45">
                                                    <input type="checkbox" name="color" data-id="45" id="color-45" value="45" />
                                                    <label className='color-inputs_label_options' htmlFor="color-45">Chocolate White &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="274">
                                                    <input type="checkbox" name="color" data-id="274" id="color-274" value="274" />
                                                    <label className='color-inputs_label_options' htmlFor="color-274">Cinnamon</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="211">
                                                    <input type="checkbox" name="color" data-id="211" id="color-211" value="211" />
                                                    <label className='color-inputs_label_options' htmlFor="color-211">Copper &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="49">
                                                    <input type="checkbox" name="color" data-id="49" id="color-49" value="49" />
                                                    <label className='color-inputs_label_options' htmlFor="color-49">Cream</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="103">
                                                    <input type="checkbox" name="color" data-id="103" id="color-103" value="103" />
                                                    <label className='color-inputs_label_options' htmlFor="color-103">Cream &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="87">
                                                    <input type="checkbox" name="color" data-id="87" id="color-87" value="87" />
                                                    <label className='color-inputs_label_options' htmlFor="color-87">Cream Brindle</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="50">
                                                    <input type="checkbox" name="color" data-id="50" id="color-50" value="50" />
                                                    <label className='color-inputs_label_options' htmlFor="color-50">Cream Sable</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000035">
                                                    <input type="checkbox" name="color" data-id="1000035" id="color-1000035" value="1000035" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000035">Dark Brown</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="145">
                                                    <input type="checkbox" name="color" data-id="145" id="color-145" value="145" />
                                                    <label className='color-inputs_label_options' htmlFor="color-145">Dark Golden</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000068">
                                                    <input type="checkbox" name="color" data-id="1000068" id="color-1000068" value="1000068" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000068">Dark Wheaten</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="259">
                                                    <input type="checkbox" name="color" data-id="259" id="color-259" value="259" />
                                                    <label className='color-inputs_label_options' htmlFor="color-259">Deadgrass</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="148">
                                                    <input type="checkbox" name="color" data-id="148" id="color-148" value="148" />
                                                    <label className='color-inputs_label_options' htmlFor="color-148">English Cream</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000052">
                                                    <input type="checkbox" name="color" data-id="1000052" id="color-1000052" value="1000052" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000052">Fallow</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="23">
                                                    <input type="checkbox" name="color" data-id="23" id="color-23" value="23" />
                                                    <label className='color-inputs_label_options' htmlFor="color-23">Fawn</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="127">
                                                    <input type="checkbox" name="color" data-id="127" id="color-127" value="127" />
                                                    <label className='color-inputs_label_options' htmlFor="color-127">Fawn (Isabella) Cream</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="132">
                                                    <input type="checkbox" name="color" data-id="132" id="color-132" value="132" />
                                                    <label className='color-inputs_label_options' htmlFor="color-132">Fawn (Isabella) &amp; Rust</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="128">
                                                    <input type="checkbox" name="color" data-id="128" id="color-128" value="128" />
                                                    <label className='color-inputs_label_options' htmlFor="color-128">Fawn (Isabella) &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="142">
                                                    <input type="checkbox" name="color" data-id="142" id="color-142" value="142" />
                                                    <label className='color-inputs_label_options' htmlFor="color-142">Fawn &amp; Black</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="171">
                                                    <input type="checkbox" name="color" data-id="171" id="color-171" value="171" />
                                                    <label className='color-inputs_label_options' htmlFor="color-171">Fawn &amp; Rust</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="77">
                                                    <input type="checkbox" name="color" data-id="77" id="color-77" value="77" />
                                                    <label className='color-inputs_label_options' htmlFor="color-77">Fawn &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="24">
                                                    <input type="checkbox" name="color" data-id="24" id="color-24" value="24" />
                                                    <label className='color-inputs_label_options' htmlFor="color-24">Fawn Brindle</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="78">
                                                    <input type="checkbox" name="color" data-id="78" id="color-78" value="78" />
                                                    <label className='color-inputs_label_options' htmlFor="color-78">Fawn Brindle &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="104">
                                                    <input type="checkbox" name="color" data-id="104" id="color-104" value="104" />
                                                    <label className='color-inputs_label_options' htmlFor="color-104">Fawn Brindled Black</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="25">
                                                    <input type="checkbox" name="color" data-id="25" id="color-25" value="25" />
                                                    <label className='color-inputs_label_options' htmlFor="color-25">Fawn Sable</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="269">
                                                    <input type="checkbox" name="color" data-id="269" id="color-269" value="269" />
                                                    <label className='color-inputs_label_options' htmlFor="color-269">Fawn, Black Overlay</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="155">
                                                    <input type="checkbox" name="color" data-id="155" id="color-155" value="155" />
                                                    <label className='color-inputs_label_options' htmlFor="color-155">Fawnequin</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="70">
                                                    <input type="checkbox" name="color" data-id="70" id="color-70" value="70" />
                                                    <label className='color-inputs_label_options' htmlFor="color-70">Flashy Brindle</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="73">
                                                    <input type="checkbox" name="color" data-id="73" id="color-73" value="73" />
                                                    <label className='color-inputs_label_options' htmlFor="color-73">Flashy Fawn</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="149">
                                                    <input type="checkbox" name="color" data-id="149" id="color-149" value="149" />
                                                    <label className='color-inputs_label_options' htmlFor="color-149">Fox Red</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="54">
                                                    <input type="checkbox" name="color" data-id="54" id="color-54" value="54" />
                                                    <label className='color-inputs_label_options' htmlFor="color-54">Gold</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="105">
                                                    <input type="checkbox" name="color" data-id="105" id="color-105" value="105" />
                                                    <label className='color-inputs_label_options' htmlFor="color-105">Gold &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="156">
                                                    <input type="checkbox" name="color" data-id="156" id="color-156" value="156" />
                                                    <label className='color-inputs_label_options' htmlFor="color-156">Gold Brindle</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="157">
                                                    <input type="checkbox" name="color" data-id="157" id="color-157" value="157" />
                                                    <label className='color-inputs_label_options' htmlFor="color-157">Gold Sable</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="228">
                                                    <input type="checkbox" name="color" data-id="228" id="color-228" value="228" />
                                                    <label className='color-inputs_label_options' htmlFor="color-228">Gold Sable &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="146">
                                                    <input type="checkbox" name="color" data-id="146" id="color-146" value="146" />
                                                    <label className='color-inputs_label_options' htmlFor="color-146">Golden</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="262">
                                                    <input type="checkbox" name="color" data-id="262" id="color-262" value="262" />
                                                    <label className='color-inputs_label_options' htmlFor="color-262">Golden Rust</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="51">
                                                    <input type="checkbox" name="color" data-id="51" id="color-51" value="51" />
                                                    <label className='color-inputs_label_options' htmlFor="color-51">Gray</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="212">
                                                    <input type="checkbox" name="color" data-id="212" id="color-212" value="212" />
                                                    <label className='color-inputs_label_options' htmlFor="color-212">Gray &amp; Black</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="9">
                                                    <input type="checkbox" name="color" data-id="9" id="color-9" value="9" />
                                                    <label className='color-inputs_label_options' htmlFor="color-9">Gray &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="79">
                                                    <input type="checkbox" name="color" data-id="79" id="color-79" value="79" />
                                                    <label className='color-inputs_label_options' htmlFor="color-79">Gray Brindle</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="52">
                                                    <input type="checkbox" name="color" data-id="52" id="color-52" value="52" />
                                                    <label className='color-inputs_label_options' htmlFor="color-52">Gray Sable</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="164">
                                                    <input type="checkbox" name="color" data-id="164" id="color-164" value="164" />
                                                    <label className='color-inputs_label_options' htmlFor="color-164">Grizzle</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="150">
                                                    <input type="checkbox" name="color" data-id="150" id="color-150" value="150" />
                                                    <label className='color-inputs_label_options' htmlFor="color-150">Harlequin</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="143">
                                                    <input type="checkbox" name="color" data-id="143" id="color-143" value="143" />
                                                    <label className='color-inputs_label_options' htmlFor="color-143">Honey Pied</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="223">
                                                    <input type="checkbox" name="color" data-id="223" id="color-223" value="223" />
                                                    <label className='color-inputs_label_options' htmlFor="color-223">Isabella</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="1000060">
                                                    <input type="checkbox" name="color" data-id="1000060" id="color-1000060" value="1000060" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000060">Isabella &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="68">
                                                    <input type="checkbox" name="color" data-id="68" id="color-68" value="68" />
                                                    <label className='color-inputs_label_options' htmlFor="color-68">Lavender</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000054">
                                                    <input type="checkbox" name="color" data-id="1000054" id="color-1000054" value="1000054" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000054">Lavender &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="69">
                                                    <input type="checkbox" name="color" data-id="69" id="color-69" value="69" />
                                                    <label className='color-inputs_label_options' htmlFor="color-69">Lavender &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="40">
                                                    <input type="checkbox" name="color" data-id="40" id="color-40" value="40" />
                                                    <label className='color-inputs_label_options' htmlFor="color-40">Lemon &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="147">
                                                    <input type="checkbox" name="color" data-id="147" id="color-147" value="147" />
                                                    <label className='color-inputs_label_options' htmlFor="color-147">Light Golden</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="55">
                                                    <input type="checkbox" name="color" data-id="55" id="color-55" value="55" />
                                                    <label className='color-inputs_label_options' htmlFor="color-55">Lilac</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="1000032">
                                                    <input type="checkbox" name="color" data-id="1000032" id="color-1000032" value="1000032" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000032">Lilac &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="107">
                                                    <input type="checkbox" name="color" data-id="107" id="color-107" value="107" />
                                                    <label className='color-inputs_label_options' htmlFor="color-107">Lilac &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="1000111">
                                                    <input type="checkbox" name="color" data-id="1000111" id="color-1000111" value="1000111" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000111">Lilac Fawn &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="1000070">
                                                    <input type="checkbox" name="color" data-id="1000070" id="color-1000070" value="1000070" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000070">Lilac White &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="26">
                                                    <input type="checkbox" name="color" data-id="26" id="color-26" value="26" />
                                                    <label className='color-inputs_label_options' htmlFor="color-26">Liver</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="53">
                                                    <input type="checkbox" name="color" data-id="53" id="color-53" value="53" />
                                                    <label className='color-inputs_label_options' htmlFor="color-53">Liver &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="136">
                                                    <input type="checkbox" name="color" data-id="136" id="color-136" value="136" />
                                                    <label className='color-inputs_label_options' htmlFor="color-136">Liver &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="234">
                                                    <input type="checkbox" name="color" data-id="234" id="color-234" value="234" />
                                                    <label className='color-inputs_label_options' htmlFor="color-234">Liver &amp; White, Blue Factored</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="241">
                                                    <input type="checkbox" name="color" data-id="241" id="color-241" value="241" />
                                                    <label className='color-inputs_label_options' htmlFor="color-241">Liver Merle</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="256">
                                                    <input type="checkbox" name="color" data-id="256" id="color-256" value="256" />
                                                    <label className='color-inputs_label_options' htmlFor="color-256">Liver Pepper</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000065">
                                                    <input type="checkbox" name="color" data-id="1000065" id="color-1000065" value="1000065" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000065">Liver Roan</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="137">
                                                    <input type="checkbox" name="color" data-id="137" id="color-137" value="137" />
                                                    <label className='color-inputs_label_options' htmlFor="color-137">Liver White &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="47">
                                                    <input type="checkbox" name="color" data-id="47" id="color-47" value="47" />
                                                    <label className='color-inputs_label_options' htmlFor="color-47">Mahogany</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="247">
                                                    <input type="checkbox" name="color" data-id="247" id="color-247" value="247" />
                                                    <label className='color-inputs_label_options' htmlFor="color-247">Mahogany &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="151">
                                                    <input type="checkbox" name="color" data-id="151" id="color-151" value="151" />
                                                    <label className='color-inputs_label_options' htmlFor="color-151">Mantle</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="153">
                                                    <input type="checkbox" name="color" data-id="153" id="color-153" value="153" />
                                                    <label className='color-inputs_label_options' htmlFor="color-153">Mantle Merle</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="245">
                                                    <input type="checkbox" name="color" data-id="245" id="color-245" value="245" />
                                                    <label className='color-inputs_label_options' htmlFor="color-245">Merle</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="154">
                                                    <input type="checkbox" name="color" data-id="154" id="color-154" value="154" />
                                                    <label className='color-inputs_label_options' htmlFor="color-154">Merlequin</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="177">
                                                    <input type="checkbox" name="color" data-id="177" id="color-177" value="177" />
                                                    <label className='color-inputs_label_options' htmlFor="color-177">Orange</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="139">
                                                    <input type="checkbox" name="color" data-id="139" id="color-139" value="139" />
                                                    <label className='color-inputs_label_options' htmlFor="color-139">Orange &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="178">
                                                    <input type="checkbox" name="color" data-id="178" id="color-178" value="178" />
                                                    <label className='color-inputs_label_options' htmlFor="color-178">Orange Sable</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="225">
                                                    <input type="checkbox" name="color" data-id="225" id="color-225" value="225" />
                                                    <label className='color-inputs_label_options' htmlFor="color-225">Orange Sable &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="193">
                                                    <input type="checkbox" name="color" data-id="193" id="color-193" value="193" />
                                                    <label className='color-inputs_label_options' htmlFor="color-193">Phantom</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="5">
                                                    <input type="checkbox" name="color" data-id="5" id="color-5" value="5" />
                                                    <label className='color-inputs_label_options' htmlFor="color-5">Red</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="190">
                                                    <input type="checkbox" name="color" data-id="190" id="color-190" value="190" />
                                                    <label className='color-inputs_label_options' htmlFor="color-190">Red &amp; Apricot</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000010">
                                                    <input type="checkbox" name="color" data-id="1000010" id="color-1000010" value="1000010" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000010">Red &amp; Black</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="133">
                                                    <input type="checkbox" name="color" data-id="133" id="color-133" value="133" />
                                                    <label className='color-inputs_label_options' htmlFor="color-133">Red &amp; Rust</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="135">
                                                    <input type="checkbox" name="color" data-id="135" id="color-135" value="135" />
                                                    <label className='color-inputs_label_options' htmlFor="color-135">Red &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="10">
                                                    <input type="checkbox" name="color" data-id="10" id="color-10" value="10" />
                                                    <label className='color-inputs_label_options' htmlFor="color-10">Red &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="28">
                                                    <input type="checkbox" name="color" data-id="28" id="color-28" value="28" />
                                                    <label className='color-inputs_label_options' htmlFor="color-28">Red Brindle</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="80">
                                                    <input type="checkbox" name="color" data-id="80" id="color-80" value="80" />
                                                    <label className='color-inputs_label_options' htmlFor="color-80">Red Brindle &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="233">
                                                    <input type="checkbox" name="color" data-id="233" id="color-233" value="233" />
                                                    <label className='color-inputs_label_options' htmlFor="color-233">Red Dapple</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="85">
                                                    <input type="checkbox" name="color" data-id="85" id="color-85" value="85" />
                                                    <label className='color-inputs_label_options' htmlFor="color-85">Red Fawn</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000108">
                                                    <input type="checkbox" name="color" data-id="1000108" id="color-1000108" value="1000108" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000108">Red Fawn &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="86">
                                                    <input type="checkbox" name="color" data-id="86" id="color-86" value="86" />
                                                    <label className='color-inputs_label_options' htmlFor="color-86">Red Fawn Brindle</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="165">
                                                    <input type="checkbox" name="color" data-id="165" id="color-165" value="165" />
                                                    <label className='color-inputs_label_options' htmlFor="color-165">Red Gold</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="264">
                                                    <input type="checkbox" name="color" data-id="264" id="color-264" value="264" />
                                                    <label className='color-inputs_label_options' htmlFor="color-264">Red Golden</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="38">
                                                    <input type="checkbox" name="color" data-id="38" id="color-38" value="38" />
                                                    <label className='color-inputs_label_options' htmlFor="color-38">Red Merle</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="217">
                                                    <input type="checkbox" name="color" data-id="217" id="color-217" value="217" />
                                                    <label className='color-inputs_label_options' htmlFor="color-217">Red Merle &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="119">
                                                    <input type="checkbox" name="color" data-id="119" id="color-119" value="119" />
                                                    <label className='color-inputs_label_options' htmlFor="color-119">Red Roan</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="29">
                                                    <input type="checkbox" name="color" data-id="29" id="color-29" value="29" />
                                                    <label className='color-inputs_label_options' htmlFor="color-29">Red Sable</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="235">
                                                    <input type="checkbox" name="color" data-id="235" id="color-235" value="235" />
                                                    <label className='color-inputs_label_options' htmlFor="color-235">Red Sable &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="202">
                                                    <input type="checkbox" name="color" data-id="202" id="color-202" value="202" />
                                                    <label className='color-inputs_label_options' htmlFor="color-202">Red Sesame</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="34">
                                                    <input type="checkbox" name="color" data-id="34" id="color-34" value="34" />
                                                    <label className='color-inputs_label_options' htmlFor="color-34">Red Speckled</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="237">
                                                    <input type="checkbox" name="color" data-id="237" id="color-237" value="237" />
                                                    <label className='color-inputs_label_options' htmlFor="color-237">Red Tri</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="88">
                                                    <input type="checkbox" name="color" data-id="88" id="color-88" value="88" />
                                                    <label className='color-inputs_label_options' htmlFor="color-88">Red Wheaten</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="270">
                                                    <input type="checkbox" name="color" data-id="270" id="color-270" value="270" />
                                                    <label className='color-inputs_label_options' htmlFor="color-270">Red, Black Overlay</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="243">
                                                    <input type="checkbox" name="color" data-id="243" id="color-243" value="243" />
                                                    <label className='color-inputs_label_options' htmlFor="color-243">Red, Blue Factored</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="71">
                                                    <input type="checkbox" name="color" data-id="71" id="color-71" value="71" />
                                                    <label className='color-inputs_label_options' htmlFor="color-71">Reverse Brindle</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="72">
                                                    <input type="checkbox" name="color" data-id="72" id="color-72" value="72" />
                                                    <label className='color-inputs_label_options' htmlFor="color-72">Reverse Flashy Brindle</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="92">
                                                    <input type="checkbox" name="color" data-id="92" id="color-92" value="92" />
                                                    <label className='color-inputs_label_options' htmlFor="color-92">Ruby</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="261">
                                                    <input type="checkbox" name="color" data-id="261" id="color-261" value="261" />
                                                    <label className='color-inputs_label_options' htmlFor="color-261">Rust</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="265">
                                                    <input type="checkbox" name="color" data-id="265" id="color-265" value="265" />
                                                    <label className='color-inputs_label_options' htmlFor="color-265">Rust Golden</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="56">
                                                    <input type="checkbox" name="color" data-id="56" id="color-56" value="56" />
                                                    <label className='color-inputs_label_options' htmlFor="color-56">Sable</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="11">
                                                    <input type="checkbox" name="color" data-id="11" id="color-11" value="11" />
                                                    <label className='color-inputs_label_options' htmlFor="color-11">Sable &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="57">
                                                    <input type="checkbox" name="color" data-id="57" id="color-57" value="57" />
                                                    <label className='color-inputs_label_options' htmlFor="color-57">Sable Merle</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="122">
                                                    <input type="checkbox" name="color" data-id="122" id="color-122" value="122" />
                                                    <label className='color-inputs_label_options' htmlFor="color-122">Sable Merle &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="236">
                                                    <input type="checkbox" name="color" data-id="236" id="color-236" value="236" />
                                                    <label className='color-inputs_label_options' htmlFor="color-236">Sable Piebald</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="198">
                                                    <input type="checkbox" name="color" data-id="198" id="color-198" value="198" />
                                                    <label className='color-inputs_label_options' htmlFor="color-198">Salt &amp; Pepper</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="273">
                                                    <input type="checkbox" name="color" data-id="273" id="color-273" value="273" />
                                                    <label className='color-inputs_label_options' htmlFor="color-273">Sandy</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="67">
                                                    <input type="checkbox" name="color" data-id="67" id="color-67" value="67" />
                                                    <label className='color-inputs_label_options' htmlFor="color-67">Seal</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="12">
                                                    <input type="checkbox" name="color" data-id="12" id="color-12" value="12" />
                                                    <label className='color-inputs_label_options' htmlFor="color-12">Seal &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="66">
                                                    <input type="checkbox" name="color" data-id="66" id="color-66" value="66" />
                                                    <label className='color-inputs_label_options' htmlFor="color-66">Seal Brindle &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000043">
                                                    <input type="checkbox" name="color" data-id="1000043" id="color-1000043" value="1000043" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000043">Sealed Brindle</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000033">
                                                    <input type="checkbox" name="color" data-id="1000033" id="color-1000033" value="1000033" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000033">Sealed Flashy Brindle</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="224">
                                                    <input type="checkbox" name="color" data-id="224" id="color-224" value="224" />
                                                    <label className='color-inputs_label_options' htmlFor="color-224">Shaded Cream</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="106">
                                                    <input type="checkbox" name="color" data-id="106" id="color-106" value="106" />
                                                    <label className='color-inputs_label_options' htmlFor="color-106">Silver</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="13">
                                                    <input type="checkbox" name="color" data-id="13" id="color-13" value="13" />
                                                    <label className='color-inputs_label_options' htmlFor="color-13">Silver &amp; White</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="185">
                                                    <input type="checkbox" name="color" data-id="185" id="color-185" value="185" />
                                                    <label className='color-inputs_label_options' htmlFor="color-185">Silver Beige</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="158">
                                                    <input type="checkbox" name="color" data-id="158" id="color-158" value="158" />
                                                    <label className='color-inputs_label_options' htmlFor="color-158">Silver Brindle</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="231">
                                                    <input type="checkbox" name="color" data-id="231" id="color-231" value="231" />
                                                    <label className='color-inputs_label_options' htmlFor="color-231">Silver Dapple</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="196">
                                                    <input type="checkbox" name="color" data-id="196" id="color-196" value="196" />
                                                    <label className='color-inputs_label_options' htmlFor="color-196">Silver Fawn</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="215">
                                                    <input type="checkbox" name="color" data-id="215" id="color-215" value="215" />
                                                    <label className='color-inputs_label_options' htmlFor="color-215">Silver Gray</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="162">
                                                    <input type="checkbox" name="color" data-id="162" id="color-162" value="162" />
                                                    <label className='color-inputs_label_options' htmlFor="color-162">Silver Sable</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="271">
                                                    <input type="checkbox" name="color" data-id="271" id="color-271" value="271" />
                                                    <label className='color-inputs_label_options' htmlFor="color-271">Silver, Black Overlay</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="206">
                                                    <input type="checkbox" name="color" data-id="206" id="color-206" value="206" />
                                                    <label className='color-inputs_label_options' htmlFor="color-206">Silver, Gold &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="112">
                                                    <input type="checkbox" name="color" data-id="112" id="color-112" value="112" />
                                                    <label className='color-inputs_label_options' htmlFor="color-112">Slate</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="168">
                                                    <input type="checkbox" name="color" data-id="168" id="color-168" value="168" />
                                                    <label className='color-inputs_label_options' htmlFor="color-168">Stag Red</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="74">
                                                    <input type="checkbox" name="color" data-id="74" id="color-74" value="74" />
                                                    <label className='color-inputs_label_options' htmlFor="color-74">Tan</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="213">
                                                    <input type="checkbox" name="color" data-id="213" id="color-213" value="213" />
                                                    <label className='color-inputs_label_options' htmlFor="color-213">Tan &amp; Black</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="214">
                                                    <input type="checkbox" name="color" data-id="214" id="color-214" value="214" />
                                                    <label className='color-inputs_label_options' htmlFor="color-214">Tan &amp; White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="244">
                                                    <input type="checkbox" name="color" data-id="244" id="color-244" value="244" />
                                                    <label className='color-inputs_label_options' htmlFor="color-244">Tawny</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="36">
                                                    <input type="checkbox" name="color" data-id="36" id="color-36" value="36" />
                                                    <label className='color-inputs_label_options' htmlFor="color-36">Tri</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="179">
                                                    <input type="checkbox" name="color" data-id="179" id="color-179" value="179" />
                                                    <label className='color-inputs_label_options' htmlFor="color-179">Tri-Colored</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="76">
                                                    <input type="checkbox" name="color" data-id="76" id="color-76" value="76" />
                                                    <label className='color-inputs_label_options' htmlFor="color-76">Wheaten</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="1000055">
                                                    <input type="checkbox" name="color" data-id="1000055" id="color-1000055" value="1000055" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000055">Wheaten Brindle</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="14">
                                                    <input type="checkbox" name="color" data-id="14" id="color-14" value="14" />
                                                    <label className='color-inputs_label_options' htmlFor="color-14">White</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="191">
                                                    <input type="checkbox" name="color" data-id="191" id="color-191" value="191" />
                                                    <label className='color-inputs_label_options' htmlFor="color-191">White &amp; Apricot</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="276">
                                                    <input type="checkbox" name="color" data-id="276" id="color-276" value="276" />
                                                    <label className='color-inputs_label_options' htmlFor="color-276">White &amp; Badger</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="15">
                                                    <input type="checkbox" name="color" data-id="15" id="color-15" value="15" />
                                                    <label className='color-inputs_label_options' htmlFor="color-15">White &amp; Biscuit</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="58">
                                                    <input type="checkbox" name="color" data-id="58" id="color-58" value="58" />
                                                    <label className='color-inputs_label_options' htmlFor="color-58">White &amp; Black</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="59">
                                                    <input type="checkbox" name="color" data-id="59" id="color-59" value="59" />
                                                    <label className='color-inputs_label_options' htmlFor="color-59">White &amp; Blue</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="60">
                                                    <input type="checkbox" name="color" data-id="60" id="color-60" value="60" />
                                                    <label className='color-inputs_label_options' htmlFor="color-60">White &amp; Blue Merle</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="140">
                                                    <input type="checkbox" name="color" data-id="140" id="color-140" value="140" />
                                                    <label className='color-inputs_label_options' htmlFor="color-140">White &amp; Brindle</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="1000001">
                                                    <input type="checkbox" name="color" data-id="1000001" id="color-1000001" value="1000001" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000001">White &amp; Brown</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000027">
                                                    <input type="checkbox" name="color" data-id="1000027" id="color-1000027" value="1000027" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000027">White &amp; Buff</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="114">
                                                    <input type="checkbox" name="color" data-id="114" id="color-114" value="114" />
                                                    <label className='color-inputs_label_options' htmlFor="color-114">White &amp; Chocolate</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000026">
                                                    <input type="checkbox" name="color" data-id="1000026" id="color-1000026" value="1000026" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000026">White &amp; Cream</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="141">
                                                    <input type="checkbox" name="color" data-id="141" id="color-141" value="141" />
                                                    <label className='color-inputs_label_options' htmlFor="color-141">White &amp; Fawn</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000045">
                                                    <input type="checkbox" name="color" data-id="1000045" id="color-1000045" value="1000045" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000045">White &amp; Gray</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="1000011">
                                                    <input type="checkbox" name="color" data-id="1000011" id="color-1000011" value="1000011" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000011">White &amp; Lemon</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="138">
                                                    <input type="checkbox" name="color" data-id="138" id="color-138" value="138" />
                                                    <label className='color-inputs_label_options' htmlFor="color-138">White &amp; Liver</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000030">
                                                    <input type="checkbox" name="color" data-id="1000030" id="color-1000030" value="1000030" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000030">White &amp; Orange</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="61">
                                                    <input type="checkbox" name="color" data-id="61" id="color-61" value="61" />
                                                    <label className='color-inputs_label_options' htmlFor="color-61">White &amp; Red</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="62">
                                                    <input type="checkbox" name="color" data-id="62" id="color-62" value="62" />
                                                    <label className='color-inputs_label_options' htmlFor="color-62">White &amp; Red Merle</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="173">
                                                    <input type="checkbox" name="color" data-id="173" id="color-173" value="173" />
                                                    <label className='color-inputs_label_options' htmlFor="color-173">White &amp; Sable</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="192">
                                                    <input type="checkbox" name="color" data-id="192" id="color-192" value="192" />
                                                    <label className='color-inputs_label_options' htmlFor="color-192">White &amp; Silver</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="277">
                                                    <input type="checkbox" name="color" data-id="277" id="color-277" value="277" />
                                                    <label className='color-inputs_label_options' htmlFor="color-277">White &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="1000051">
                                                    <input type="checkbox" name="color" data-id="1000051" id="color-1000051" value="1000051" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000051">White &amp; Yellow</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000004">
                                                    <input type="checkbox" name="color" data-id="1000004" id="color-1000004" value="1000004" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000004">White Black &amp; Red</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="174">
                                                    <input type="checkbox" name="color" data-id="174" id="color-174" value="174" />
                                                    <label className='color-inputs_label_options' htmlFor="color-174">White Black &amp; Tan</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="123">
                                                    <input type="checkbox" name="color" data-id="123" id="color-123" value="123" />
                                                    <label className='color-inputs_label_options' htmlFor="color-123">White Merle</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="167">
                                                    <input type="checkbox" name="color" data-id="167" id="color-167" value="167" />
                                                    <label className='color-inputs_label_options' htmlFor="color-167">White with Cream</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="272">
                                                    <input type="checkbox" name="color" data-id="272" id="color-272" value="272" />
                                                    <label className='color-inputs_label_options' htmlFor="color-272">White, Red Shading</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="129">
                                                    <input type="checkbox" name="color" data-id="129" id="color-129" value="129" />
                                                    <label className='color-inputs_label_options' htmlFor="color-129">Wild Boar</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="180">
                                                    <input type="checkbox" name="color" data-id="180" id="color-180" value="180" />
                                                    <label className='color-inputs_label_options' htmlFor="color-180">Wolf Sable</label>
                                                    </li>
                                                    <li className="input-container hidden" data-facet-id="1000019">
                                                    <input type="checkbox" name="color" data-id="1000019" id="color-1000019" value="1000019" />
                                                    <label className='color-inputs_label_options' htmlFor="color-1000019">Wolfgray &amp; Black</label>
                                                    </li>
                                                    <li className="input-container" data-facet-id="163">
                                                    <input type="checkbox" name="color" data-id="163" id="color-163" value="163" />
                                                    <label className='color-inputs_label_options' htmlFor="color-163">Yellow</label>
                                                    </li>
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
                                                        <input name="canTravel" type="radio" id="travel-check-all-puppies" value="" checked={true} data-is-default="" />
                                                        <label htmlFor="travel-check-all-puppies"  className="filter_only_ready_to_travel">All Puppies</label>
                                                    </div>
                                                    <div className="input-container" data-facet-id="1">
                                                        <input name="canTravel" type="radio" id="travel-check" value="1" />
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

            <div className="puppies-for-sale__results">
                <AlertPopup />

                <div className="js-puppy-list-container puppies-for-sale__puppy-list puppy-list-small-gap auto-content">
                     {
                        puppySinglePageArr.map((item, index)=>{
                            return (
                                <React.Fragment key={item.id}>

                                    <a key={index} href={item.link}>
                                        <div className="card">
                                            <div className="card__display">
                                                {
                                                    item.video_icon === 'N/A'
                                                    ?
                                                    <></>
                                                    :
                                                    <img 
                                                        className="card__video-icon" 
                                                        alt="Puppy with video" 
                                                        width="30" 
                                                        height="30" 
                                                        src={item.video_icon}
                                                    />
                                                }
                                                    <img 
                                                        className="card__image ls-is-cached lazyloaded" 
                                                        data-cy="puppy-card-image" 
                                                        data-src={item.image}
                                                        alt={`${item.breed} puppy for sale Snoopy, dog for sale`} 
                                                        width="163" 
                                                        height="163" 
                                                        // src={item.image}
                                                        src='/img/503060929_medium.jpg'
                                                    />
                                                    {
                                                        item.banner_text === 'N/A'
                                                        ?
                                                        <></>
                                                        :
                                                        <div className="card__banner orange">
                                                            <span>{item.banner_text}</span>
                                                        </div>
                                                    }
                                            </div>
                                            <div className="card__details_container">
                                                <div className="card__details">
                                                    <p className="name" data-cy="puppy-card-name">
                                                        {item.name}
                                                    </p>
    
                                                    <p className="breed">{item.breed}</p>
                                                    <p className="age">{item.age} weeks<span className="hidden">old</span></p>
                                                </div>
                                                <div className="card__actions">
    
                                                                                                                    {/* //Repalce data-puppy */}
    
    
                                                    <button className="favorite-puppy-circle js-favorite-puppy" data-puppy="771124"></button>
                                                </div>
                                            </div>
    
                                        </div>
                                    </a>
    
                                    {index === randomIndex && 
                                    <div style={{padding: "0 4px 4px 0"}} id="container-puppies-for-sale-trust-card">
                                        <div className="card card--small pd-1  bg-cover bg-no-repeat bg-center bg-[#FFFFFF]" style={{backgroundImage: "url(/img/season.webp)"}}>
                                            <div className="w-full h-full flex-col gap-4 flex items-center justify-center "></div>
                                        </div>
                                    </div>
                                    }
                                </React.Fragment>
                            )
                        })
                     }                                                       

                </div>

                <div className="js-puppy-pagination-container puppies-for-sale__pagination">
                        <PaginationBar currentPage={paginationPage} totalPages={totalPages}/>
                </div>
            </div>

        </div>
        <SmallFilterPopup />
        <FilterSidebar />
    </>
  );
}

export default PuppiesForSellContainer;