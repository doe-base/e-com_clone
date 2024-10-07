import React, { useState } from 'react';
import "../styles/home.css";
import Fuse from 'fuse.js';
import allBreed from '../data/all-breeds.json';

interface Props{
}
const HomeContainer: React.FC<Props> = ({}) => {

    const [query, setQuery] = useState('');
    const [results, setResults] = useState<any>(allBreed.breedList);
    const [searchBreed, setSearchBreed] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const fuse = new Fuse(allBreed.breedList, {
        keys: ['name', 'slug'], // Specify which keys to search
        includeScore: true,
    });
    const handleSearch = (e: any) => {
        const searchQuery = e.target.value;
        setSearchBreed(searchQuery)
        setQuery(searchQuery);
    
        if (searchQuery.trim()) {
        const fuseResults = fuse.search(searchQuery);
            setResults(fuseResults.map((result: any) => result.item));
        } else {
            setResults(allBreed.breedList);
        }
    };

  return (
    <div className="relative">
        <div className="heroBg"></div>
        <div id="root-hero">
            <div className="hero-module__hero--fxGmC">


                <div className="hero-module__heroContent--x5Q7B">
                    <h1 className="hero-module__heroTitle--pRQaT order-1">The Perfect Puppy People</h1>
                    <h2 className="hero-module__heroSubtitle--i-cGv order-2">America’s leading puppy adoption service</h2>

                    <div className="mt-[20px] button-order ml-[10px] mr-[10px]">
                        <a
                        className="button-module__wrapper--jJ7g9 button-module__contained--zXwYo track_browse_all_home hero-module__heroCta--8TpOf"
                        href="https://www.puppyspot.com/puppies-for-sale"
                        >Browse All Puppies</a>
                    </div>

                    <div className="hero-module__searchbarWrapper--Z0IvD search-order max-w-[clamp(0px,calc(100vw_-_20px),1070px)]">
                        <div className="style-module__wrapper--7jJ94 style-module__open--k2jZl" data-cy="hero-searchbar">
                        <link rel="preload" as="image" type="image/svg+xml" href="https://www.puppyspot.com/preact/./img/dots-loader.svg" />
                        <div className="style-module__content--UlhVY style-module__noBorder--b9CgM">
                            
                            <div className="style-module__reducerWrapper--UVMF-">
                            <div className="style-module__reducer--higDU">
                                <form autoComplete="off" className="style-module__controlWrapper--Cak4k" action="." >
                                <input
                                    type="search"
                                    name="search"
                                    className="style-module__input--8Dj0T"
                                    placeholder="Search for Breeds"
                                    autoComplete="off"
                                    onChange={(e)=> handleSearch(e)} 
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)} 
                                />
                                </form>
                            </div>
                            </div>

                            <button className="style-module__button--uk1Kx" data-cy="submit-button">
                            <i className="style-module__searchIcon--De0gi"></i>
                            </button>
                            
                        </div>
                            {/* DropDown */}
                            <div data-cy="filter-results" className={`style-module__menu--Xf2XU  ${isFocused ? '' : 'hidden'}`}>
                                {
                                    results.length > 0
                                    ?
                                    results.map((item: any, index: number)=> {
                                        return (
                                            <div key={index} className="style-module__item--tuTKJ">{item.name}</div>
                                        )
                                    })
                                    :
                                    <div className="style-module__item--tuTKJ" style={{fontWeight: 'bold'}}>Search "{searchBreed}"</div>
                                }
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  );
}

export default HomeContainer;
