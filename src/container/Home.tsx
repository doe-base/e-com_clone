import React, { useEffect, useState } from 'react';
import "../styles/home.css";
import Fuse from 'fuse.js';
import allBreed from '../data/all-breeds.json';
import FavouritePuppySlider from '../components/home-page-components/favorite-puppy-side/FavoritePuppySlider';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrustedSlider from '../components/home-page-components/trusted-by-community-slider/TrustedSlider';

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

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 180,
        autoplaySpeed: 3000,
        cssEase: "linear",
        centerMode: true, // This centers the active item
        centerPadding: '0px', // Remove extra padding to fully center

        customPaging: (i: any) => (
            <div
                style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: i === 0 ? "#333" : "#bbb", // Example color
                    borderRadius: "50%",
                    display: "inline-block",
                }}
            />
        ),
      };

      const [screenWidth, setScreenWidth] = useState(window.innerWidth);
      useEffect(() => {
        const handleResize = () => {
          setScreenWidth(window.innerWidth);
    
          // Change the text when width is below 800px
          const element = document.getElementById('root-why-puppyspot-h3');
          if (element) {
            if (window.innerWidth < 800) {
              element.innerText = "Why we’re the leading puppy adoption service";
            } else {
              element.innerText = "Why we’re the leading puppy adoption service in America";
            }
          }
        };
    
        // Add event listener
        window.addEventListener('resize', handleResize);
    
        // Initial check when component mounts
        handleResize();
    
        // Cleanup on unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <div>
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

            <div className="w-full flex items-center justify-center bg-white h-[65px] overflow-hidden track_trustpilot">
                <div className="trustpilot-module__wrapper--rTgiM">
                    <a className="trustpilot-module__linkDiv--sTp39 470small" href="https://www.trustpilot.com/review/puppyspot.com" target="_blank" rel="noreferrer">
                        <div className="trustpilot-module__item--GouFp flex"><img className="h-8 trustpilot-module__trustImage--JcJz0" src="/img/trustpilot.svg" height="35" /></div>
                        <div className="trustpilot-module__item--GouFp flex trustpilot-module__starsImage--7b3Fe"><img className="h-8 trustpilot-module__starsImage--7b3Fe" src="/img/stars-4.5.svg" height="35" /></div>
                        <span className="trustpilot-module__item--GouFp font-nunito">4,700+ reviews</span>
                    </a>
                </div>
            </div>
        </div>

        <div id="root-spotted-by">
            <div className="root-spotted-by-inner">
                <div className="root-spotted-by-inner-inner">
                    <div className="spotted-by-text-part">
                        <span className="">SPOTTED<br />BY</span>
                    </div>
                    <div className="spotted-by-image-part">
                        <div className="sportted-by-image-part-inner">
                            <img
                                className="object-cover"
                                src="/img/partners/american-kennel.webp"
                                width="109"
                                height="42"
                            /><img
                                className="object-cover"
                                src="/img/partners/good-morning-america.webp"
                                width="82"
                                height="50"
                            />
                        </div>
                        <div className="sportted-by-image-part-inner">
                            <img
                                className="object-cover"
                                src="/img/partners/make-a-wish.webp"
                                width="109"
                                height="30"
                            /><img
                                className="object-cover"
                                src="/img/partners/fox-friends.webp"
                                width="65"
                                height="38"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="root-favorite-breeds">
            <div className="favorite-breeds-module__wrapper--7M+J3">
                <div className="favorite-breeds-module__title--fkU9E">Our Customers’ Favorite Breeds</div>
                <div className="favorite-breeds-module__subtitle--NOOAw">Let’s help find you a puppy you’ll love.</div>

                <FavouritePuppySlider />
            </div>
        </div>

        <div id="root-why-puppyspot">
            <div className="styles-module__container--CCD9B styles-module__smallPadding--Jh4ha">
                <h3 id='root-why-puppyspot-h3' className="styles-module__title--lW8PU">Why we’re the leading puppy adoption service in America</h3>
                
                <div id='big-screen-why-us' className="styles-module__cardsContainer--NzIp7">
                    <div>
                        <div className="styles-module__card--D5UVp"><img className="styles-module__buttonIcon--aT7sj" src="https://www.puppyspot.com/preact/./img/your-perfect-puppy.svg" alt="Your Perfect Puppy"/>
                            <div className="styles-module__cardInfo--r+Wfi">
                                <h4 className="styles-module__cardTitle--uTDQy">Your Perfect Puppy</h4>
                                <p className="styles-module__cardDescription--SZBTD">Breeds in every size, color, and temperament</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="styles-module__card--D5UVp">
                            <img className="styles-module__buttonIcon--aT7sj" src="https://www.puppyspot.com/preact/./img/certified-breeders.svg" alt="Certified Breeders"/>
                            <div className="styles-module__cardInfo--r+Wfi">
                                <h4 className="styles-module__cardTitle--uTDQy">Certified Breeders</h4>
                                <p className="styles-module__cardDescription--SZBTD">Licensed, vetted and committed to our puppies</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="styles-module__card--D5UVp">
                            <img className="styles-module__buttonIcon--aT7sj" src="https://www.puppyspot.com/preact/./img/health-commitment.svg" alt="10-Year Health Commitment"/>
                            <div className="styles-module__cardInfo--r+Wfi">
                                <h4 className="styles-module__cardTitle--uTDQy">10-Year Health Commitment</h4>
                                <p className="styles-module__cardDescription--SZBTD">Certified documents, vaccinations, and checkups</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="styles-module__card--D5UVp">
                            <img className="styles-module__buttonIcon--aT7sj" src="https://www.puppyspot.com/preact/./img/handle-care-delivery.svg" alt="Handle with Care Delivery"/>
                            <div className="styles-module__cardInfo--r+Wfi">
                                <h4 className="styles-module__cardTitle--uTDQy">Handle with<br/>Care Delivery</h4>
                                <p className="styles-module__cardDescription--SZBTD">White glove travel options to bring your puppy home</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="styles-module__card--D5UVp">
                            <img className="styles-module__buttonIcon--aT7sj" src="https://www.puppyspot.com/preact/./img/caring-experts.svg" alt="Caring Experts"/>
                            <div className="styles-module__cardInfo--r+Wfi">
                                <h4 className="styles-module__cardTitle--uTDQy">Caring<br/>Experts</h4>
                                <p className="styles-module__cardDescription--SZBTD">Helping you every step to find your perfect puppy </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="small-screen-why-us">
                    <Slider {...settings}>
                        <div>
                            <div className="styles-module__card--D5UVp"><img className="styles-module__buttonIcon--aT7sj" src="https://www.puppyspot.com/preact/./img/your-perfect-puppy.svg" alt="Your Perfect Puppy"/>
                                <div className="styles-module__cardInfo--r+Wfi">
                                    <h4 className="styles-module__cardTitle--uTDQy">Your Perfect Puppy</h4>
                                    <p className="styles-module__cardDescription--SZBTD">Breeds in every size, color, and temperament</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="styles-module__card--D5UVp">
                                <img className="styles-module__buttonIcon--aT7sj" src="https://www.puppyspot.com/preact/./img/certified-breeders.svg" alt="Certified Breeders"/>
                                <div className="styles-module__cardInfo--r+Wfi">
                                    <h4 className="styles-module__cardTitle--uTDQy">Certified Breeders</h4>
                                    <p className="styles-module__cardDescription--SZBTD">Licensed, vetted and committed to our puppies</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="styles-module__card--D5UVp">
                                <img className="styles-module__buttonIcon--aT7sj" src="https://www.puppyspot.com/preact/./img/health-commitment.svg" alt="10-Year Health Commitment"/>
                                <div className="styles-module__cardInfo--r+Wfi">
                                    <h4 className="styles-module__cardTitle--uTDQy">10-Year Health Commitment</h4>
                                    <p className="styles-module__cardDescription--SZBTD">Certified documents, vaccinations, and checkups</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="styles-module__card--D5UVp">
                                <img className="styles-module__buttonIcon--aT7sj" src="https://www.puppyspot.com/preact/./img/handle-care-delivery.svg" alt="Handle with Care Delivery"/>
                                <div className="styles-module__cardInfo--r+Wfi">
                                    <h4 className="styles-module__cardTitle--uTDQy">Handle with<br/>Care Delivery</h4>
                                    <p className="styles-module__cardDescription--SZBTD">White glove travel options to bring your puppy home</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="styles-module__card--D5UVp">
                                <img className="styles-module__buttonIcon--aT7sj" src="https://www.puppyspot.com/preact/./img/caring-experts.svg" alt="Caring Experts"/>
                                <div className="styles-module__cardInfo--r+Wfi">
                                    <h4 className="styles-module__cardTitle--uTDQy">Caring<br/>Experts</h4>
                                    <p className="styles-module__cardDescription--SZBTD">Helping you every step to find your perfect puppy </p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>

                
            </div>
        </div>

        <div id="root-trusted-by-community">
            <div className="trusted-by-community-module__wrapper--0Kxj-">

                <div className="trusted-by-community-module__sectionLeft--Jg8fx">
                    <img
                        className="trusted-by-community-module__titleImage--148v6"
                        src="https://www.puppyspot.com/preact/./img/trusted-by-community-icon.svg"
                        loading="lazy"
                    />
                    <h3 className="trusted-by-community-module__title--b4Rre">
                        Loved by the Community
                    </h3>
                    <p className="trusted-by-community-module__text--t6baY">
                        PuppySpot serves you best by putting the health and well-being of your
                        puppy first. Don't take our word for it,
                        <strong> here's what real customers have to say about PuppySpot.</strong>
                    </p>
                    <div className="trusted-by-community-module__boxGreen--hTMmj">
                        <img src="https://www.puppyspot.com/preact/./img/trusted-by-community-check-mark.svg" loading="lazy"/>
                        <span className="trusted-by-community-module__label--GvukA">We’ve been placing healthy puppies in happy homes for nearly
                        <strong className="trusted-by-community-module__highlight--Sjvw8"> 20 </strong>years.</span>
                    </div>
                    <div className="trusted-by-community-module__wrapperButtons--ItUX- first">
                        <div className="trusted-by-community-module__flexRow--EOUTG">
                            <div className="trusted-by-community-module__flexItem--InltY">
                                <a className="button-module__wrapper--jJ7g9 button-module__contained--zXwYo" href="/reviews">
                                Read more reviews
                                </a>
                            </div>
                            <div className="trusted-by-community-module__flexItem--InltY">
                                <a
                                className="button-module__wrapper--jJ7g9 button-module__outlined--dnOJw"
                                href="/puppies-for-sale">
                                Browse all puppies
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="trusted-by-community-module__middleSection--kXg9e">
                    <div className="trusted-by-community-module__middleSectionMask--ao9Kc"></div>
                </div>

                <TrustedSlider />

            </div>
        </div>

    </div>
  );
}

export default HomeContainer;
