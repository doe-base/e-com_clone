import React, { useEffect, useRef, useState } from 'react';
import "../styles/breed-state.css";
import { pages } from '../contants/routes';
import AllPuppies from '../data/puppy-data/all_puppies.json';
import useAuthListener from '../hooks/use-auth-listener';
import AlertPopup from '../components/alert-message/AlertMessage';
import LoginPopup from "../components/popups/single-puppy-popups/LoginPopup";
import AllReviews from "../data/all-reviews.json"

interface Props{
    state: any;
}
function getPuppiesByLocation(puppiesArray: any, location: any) {
    // Helper function to convert age string to a number for sorting
    const ageToNumber = (age: any) => {
        // Handle cases like "8" or ranges like "8-10"
        const parsed = parseFloat(age.split('-')[0]); 
        return isNaN(parsed) ? Infinity : parsed;
    };

    // Filter puppies by location
    const filteredPuppies = puppiesArray.filter(
        (puppy: any) => puppy.puppy_location.toLowerCase() === location.toLowerCase()
    );

    // Sort puppies by age
    const sortedByAge = filteredPuppies.sort((a: any, b: any) => ageToNumber(a.age) - ageToNumber(b.age));

    // Return the first 4 puppies
    return sortedByAge.slice(0, 4);
}
function getPuppies( puppies: any, location: any, breed: any): any {
    // Filter puppies by location and breed
    const matchingPuppies = puppies.filter(
        (puppy: any) => puppy.puppy_location === location && puppy.breed === breed
    );

    // If there are enough matching puppies, return the first 4
    if (matchingPuppies.length >= 4) {
        return matchingPuppies.slice(0, 4);
    }

    // Otherwise, collect more puppies from any location with the same breed
    const additionalPuppies = puppies.filter(
        (puppy: any) => puppy.breed === breed && !matchingPuppies.includes(puppy)
    );

    // Combine the matching puppies and additional ones, up to 4
    const result = [...matchingPuppies, ...additionalPuppies].slice(0, 4);

    // If still fewer than 4, fill with any puppy regardless of breed or location
    if (result.length < 4) {
        const fillerPuppies = puppies.filter(
            (puppy: any) => !result.includes(puppy)
        );
        return [...result, ...fillerPuppies].slice(0, 4);
    }

    return result;
}
function getReviews( reviews: any, state: any ): any {
    // Filter reviews by state and 5 stars, prioritizing those with images
    const reviewsWithImages = reviews.filter(
        (review: any) => review.state === state && review.stars === 5 && review.images.length > 0
    );

    const reviewsWithoutImages = reviews.filter(
        (review: any) => review.state === state && review.stars === 5 && review.images.length === 0
    );

    // Combine reviews with and without images, prioritizing those with images
    const result = [...reviewsWithImages, ...reviewsWithoutImages].slice(0, 3);

    return result;
}
const BreedStateContainer: React.FC<Props> = ({ state }) => {
    const {user} = useAuthListener();
    const [readMore, setReadMore] = useState(true)
    const handleReadMore =()=>{
        setReadMore(prevReadMore => !prevReadMore)
    }
    const [ReviewsArray, setReivewsArray] = useState(getReviews(AllReviews, state))
    const [PoodleArray, setPoodleArray] = useState(getPuppies(AllPuppies, state, 'Poodle'))
    const [GoldendoodleArray, setGoldendoodleArray] = useState(getPuppies(AllPuppies, state, 'Goldendoodle'))
    const [CavapooArray, setCavapooArray] = useState(getPuppies(AllPuppies, state, 'Cavapoo'))
    const [puppiesFromLocation, setPuppiesFromLocation] = useState<any>(getPuppiesByLocation(AllPuppies, state))
    const [loginPopup, setLoginPopup] = useState(false)
    const [likePuppyListID, setLikePuppyListID] = useState(JSON.parse(localStorage.getItem("liked-puppies-id") || '[]'))
    const [randomIndex, setRandomIndex] = useState(Math.floor(Math.random() * puppiesFromLocation.length));

    const handleLikePuppy = (puppyId: string) => {
        // Retrieve the current liked puppies from localStorage
        const likedPuppiesString = localStorage.getItem('liked-puppies-id');

        // Parse the retrieved value or default to an empty array
        const likedPuppies: string[] = likedPuppiesString ? JSON.parse(likedPuppiesString) : [];

        // Check if the puppy ID is already in the array
        if (!likedPuppies.includes(puppyId)) {
          // Add the new puppy ID to the array
          likedPuppies.push(puppyId);

          // Save the updated array back to localStorage
          localStorage.setItem('liked-puppies-id', JSON.stringify(likedPuppies));

        //   console.log(`Puppy ID ${puppyId} added to liked puppies.`);
        } else {
        //   console.log(`Puppy ID ${puppyId} is already liked.`);
        }
    };
    const handleUnlikePuppy = (puppyId: string) => {
        // Retrieve the current liked puppies from localStorage
        const likedPuppiesString = localStorage.getItem('liked-puppies-id');

        // Parse the retrieved value or default to an empty array
        const likedPuppies: string[] = likedPuppiesString ? JSON.parse(likedPuppiesString) : [];

        // Check if the puppy ID exists in the array
        if (likedPuppies.includes(puppyId)) {
            // Remove the puppy ID from the array
            const updatedPuppies = likedPuppies.filter(id => id !== puppyId);

            // Save the updated array back to localStorage
            localStorage.setItem('liked-puppies-id', JSON.stringify(updatedPuppies));

            // console.log(`Puppy ID ${puppyId} removed from liked puppies.`);
        } else {
            // console.log(`Puppy ID ${puppyId} is not in the liked puppies list.`);
        }
    };
    const handleLike =(e: React.MouseEvent<HTMLDivElement, MouseEvent>, puppyId: string)=>{
        e.preventDefault();
        e.stopPropagation();

        if(!user?.email){
            setLoginPopup(true)
        }else{
            if(likePuppyListID.includes(puppyId)){
                handleUnlikePuppy(puppyId)
            }else{
                handleLikePuppy(puppyId)
            }

            setLikePuppyListID(JSON.parse(localStorage.getItem("liked-puppies-id") || '[]'))
            //In Future Hanlde OPTIMISTICAL like
        }

    }


  return (
    <>
        <div id="puppies-for-sale" className="puppies-for-sale js-puppies-for-sale">
            {/**<Loading /> **/}

            <section className="puppies-for-sale-header">
                <div className="breadcrumbs-full">
                    <div className="ps-breadcrumbs-small column">
                        <span className="ps-breadcrumbs-small__item truncate"><a href={pages.BREED}>All Breeds  </a></span>
                        <span className="ps-breadcrumbs-small__separator"> / </span>
                        <span className="ps-breadcrumbs-small__item"><a href={pages.PUPPIES_FOR_SELL}> Puppies for Sale </a></span>
                        <span className="ps-breadcrumbs-small__separator"> / </span>
                        <span className="ps-breadcrumbs-small__item"> {state}</span>
                    </div>
                </div>
                <div className="puppies-for-sale-header__content">
                    <div className="puppies-for-sale-header__copy">
                        <h1 className="all-puppies-header">
                            <span className="nobr">
                                Purebred and Designer Breed Puppies for Sale Available in {state}
                            </span>
                        </h1>
                    <section className="puppies-for-sale__seo-content seo-content mb-10">
                        <div className="seo-content__container_reponsive_contaier-big">
                            <div className="js-readmore">
                                <div className="js-seo-readmore mobile-read-more-text-ellipsis">
                                    <p>We are the best source for purebred and designer breed puppies. We work with the best breeders across the United States and bring them directly to you. We are experts in helping you find your perfect addition to your family and getting your puppy to you safely and securely. We can also arrange for you to meet your prospective puppy and to pick your puppy up directly. No matter where you are in {state}.</p>
                                </div>
                            </div>
                        </div>
                        <div className="seo-content__container_reponsive_contaier-small">
                            <div className="js-readmore">
                                <div className="js-seo-readmore mobile-read-more-text-ellipsis enabled">
                                    <p>We are the best source for purebred and designer breed puppies.<span className={`dots-delete ${readMore ? '' : 'hidden'}`}>...</span> <span className={`read-more-real-target ${readMore ? 'hidden' : ''}`}>We work with the best breeders across the United States and bring them directly to you. We are experts in helping you find your perfect addition to your family and getting your puppy to you safely and securely. We can also arrange for you to meet your prospective puppy and to pick your puppy up directly. No matter where you are in {state}.</span> <span onClick={handleReadMore} className="seo-breed-content-read-more js-readmore-trigger" data-target="js-seo-readmore">Read {`${readMore ? 'More' : 'Less'}`}</span></p>

                                </div>
                            </div>
                        </div>



                        <div className="mt-[20px] button-order ml-[10px] mr-[10px]" style={{display: 'flex', justifyContent: 'center'}}>
                            <a className="button-module__wrapper--jJ7g9 button-module__outlined--dnOJw  " style={{maxWidth: '310px'}} href={pages.BREED}>Find Your Perfect Breed </a>
                        </div>

                    </section>
                    
                    </div>
                </div>
            </section>
        </div>
            <main className="breed-location">
                <section className="text-center breed-location__cards">
                    <div className="location__recommended-breeds">
                        <div className='content-wrapper'>
                            <div className='available-puppies recommended-breeds'>
                                <div className="recommended-breeds__breed-list auto-content">
                                    <h2 className="breed-location__heading-h2 mx">These are just a few of the puppies we can bring to you in {state}</h2>

                                    <div className="puppies-for-sale__puppy-list bigger auto-content" data-cy="card-grid"> 
                                            {
                                            puppiesFromLocation.map((item: any, index: any)=>{
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
                                                                            src={item.image}
                                                                            // src='/img/503060929_medium.jpg'
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
                                                                        <p className="age">{item.sex} . {item.age} weeks<span className="hidden">old</span></p>
                                                                    </div>
                                                                    <div className="card__actions" onClick={(e) =>handleLike(e, item.puppy_id)}>
                                                                        <button className={`favorite-puppy-circle js-favorite-puppy ${likePuppyListID.includes(item.puppy_id) ? 'favorited' : ''}`} data-puppy={item.puppy_id}></button>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </a>

                                                        {/* {index === randomIndex &&
                                                        <div style={{padding: "0 4px 4px 0"}} id="container-puppies-for-sale-trust-card">
                                                            <div className="card card--small pd-1  bg-cover bg-no-repeat bg-center bg-[#FFFFFF]" style={{backgroundImage: "url(/img/season.webp)"}}>
                                                                <div className="w-full h-full flex-col gap-4 flex items-center justify-center "></div>
                                                            </div>
                                                        </div>
                                                        } */}
                                                    </React.Fragment>
                                                )
                                            })
                                            }

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[20px] button-order ml-[10px] mr-[10px]" style={{display: 'flex', justifyContent: 'center'}}>
                            <a className="button-module__wrapper--jJ7g9 button-module__outlined--dnOJw  " style={{maxWidth: '310px'}} href={pages.PUPPIES_FOR_SELL}>See All Puppies for Sale </a>
                        </div>
                    </div>


                    <div className="location__recommended-breeds">
                        <div className='content-wrapper'>
                            <div className='available-puppies recommended-breeds'>
                                <div className="recommended-breeds__breed-list auto-content">
                                    <h2 className="breed-location__heading-h2 mx">Goldendoodle</h2>

                                    <div className="puppies-for-sale__puppy-list bigger auto-content" data-cy="card-grid"> 
                                            {
                                            GoldendoodleArray.map((item: any, index: any)=>{
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
                                                                            src={item.image}
                                                                            // src='/img/503060929_medium.jpg'
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
                                                                        <p className="age">{item.sex} . {item.age} weeks<span className="hidden">old</span></p>
                                                                    </div>
                                                                    <div className="card__actions" onClick={(e) =>handleLike(e, item.puppy_id)}>
                                                                        <button className={`favorite-puppy-circle js-favorite-puppy ${likePuppyListID.includes(item.puppy_id) ? 'favorited' : ''}`} data-puppy={item.puppy_id}></button>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </a>

                                                    </React.Fragment>
                                                )
                                            })
                                            }

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[20px] button-order ml-[10px] mr-[10px]" style={{display: 'flex', justifyContent: 'center'}}>
                            <a className="button-module__wrapper--jJ7g9 button-module__outlined--dnOJw  " style={{maxWidth: '310px'}} href="/puppies-for-sale/breed/goldendoodle">See all Goldendoodle Puppies</a>
                        </div>
                    </div>


                    <div className="location__recommended-breeds">
                        <div className='content-wrapper'>
                            <div className='available-puppies recommended-breeds'>
                                <div className="recommended-breeds__breed-list auto-content">
                                    <h2 className="breed-location__heading-h2 mx">Cavapoo</h2>

                                    <div className="puppies-for-sale__puppy-list bigger auto-content" data-cy="card-grid"> 
                                            {
                                            CavapooArray.map((item: any, index: any)=>{
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
                                                                            src={item.image}
                                                                            // src='/img/503060929_medium.jpg'
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
                                                                        <p className="age">{item.sex} . {item.age} weeks<span className="hidden">old</span></p>
                                                                    </div>
                                                                    <div className="card__actions" onClick={(e) =>handleLike(e, item.puppy_id)}>
                                                                        <button className={`favorite-puppy-circle js-favorite-puppy ${likePuppyListID.includes(item.puppy_id) ? 'favorited' : ''}`} data-puppy={item.puppy_id}></button>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </a>

                                                    </React.Fragment>
                                                )
                                            })
                                            }

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[20px] button-order ml-[10px] mr-[10px]" style={{display: 'flex', justifyContent: 'center'}}>
                            <a className="button-module__wrapper--jJ7g9 button-module__outlined--dnOJw  " style={{maxWidth: '310px'}} href="/puppies-for-sale/breed/cavapoo">See all Cavapoo Puppies</a>
                        </div>
                    </div>


                    <div className="location__recommended-breeds">
                        <div className='content-wrapper'>
                            <div className='available-puppies recommended-breeds'>
                                <div className="recommended-breeds__breed-list auto-content">
                                    <h2 className="breed-location__heading-h2 mx">Poodle</h2>

                                    <div className="puppies-for-sale__puppy-list bigger auto-content" data-cy="card-grid"> 
                                            {
                                            PoodleArray.map((item: any, index: any)=>{
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
                                                                            src={item.image}
                                                                            // src='/img/503060929_medium.jpg'
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
                                                                        <p className="age">{item.sex} . {item.age} weeks<span className="hidden">old</span></p>
                                                                    </div>
                                                                    <div className="card__actions" onClick={(e) =>handleLike(e, item.puppy_id)}>
                                                                        <button className={`favorite-puppy-circle js-favorite-puppy ${likePuppyListID.includes(item.puppy_id) ? 'favorited' : ''}`} data-puppy={item.puppy_id}></button>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </a>

                                                    </React.Fragment>
                                                )
                                            })
                                            }

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[20px] button-order ml-[10px] mr-[10px]" style={{display: 'flex', justifyContent: 'center'}}>
                            <a className="button-module__wrapper--jJ7g9 button-module__outlined--dnOJw  " style={{maxWidth: '310px'}} href="/puppies-for-sale/breed/poodle">See all Poodle Puppies</a>
                        </div>
                    </div>
                </section>

                <div className="block-hero-container">
                    
                    <div id="location__hero-block">
                        <div className="block-hero">
                            <picture className=""><img src="/img/location-hero.jpg" loading="lazy" className="lazyloaded "/></picture>
                            <div className="template"><h2 className="breed-location__heading-h2">Greet our puppies available in {state}</h2><p>Easy, transparent and safe: healthy and happy puppies from the best breeders.</p><ul className="template-list"><li className="green-check regularLink"><a href="/health-check">10 Year Health Commitment</a></li><li className="green-check regularLink"><a href="/puppyspot-standards">100% Trusted Breeders</a></li><li className="green-check regularLink"><a href="/dog-travel">Trusted Delivery Options</a></li></ul>
                                <div className="cta-white" style={{marginTop: "15px"}}><a href="/puppies-for-sale" style={{marginLeft: "0px"}}>See All Available Puppies</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div id="location__reviews-block">
                    <div className="reviews-component js-reviews-component white">
                        <div className="reviews-component__control">
                                {/* <div className="reviews-component__prev js-review-control prev"></div> */}
                                <h2 className="breed-location__heading-h2">Our {state} Customers Are Ecstatic About Their Puppies! Read Their Reviews</h2>
                                {/* <div className="reviews-component__next js-review-control next"></div> */}
                        </div>

                    {
                        ReviewsArray
                        ?
                        <div className="reviews-component__container">
                            {
                                ReviewsArray.map((item: any)=>{
                                    return(
                                        <div className="reviews-component__review active js-review" id="review-0">
                                            <div className="reviews-component__review-container">
                                                {
                                                    item.images
                                                    ?
                                                    <picture className="reviews-component__thumb-picture">
                                                        <img src={item.images[0].big_url} loading="lazy" className="lazyloaded reviews-component__thumb" />
                                                    </picture>
                                                    :
                                                    null
                                                }
                                                <div className="reviews-component__content">
                                                    <p className="reviews-component__name">{item.name}</p>
                                                    <p className="reviews-component__date">{item.date}</p>
                                                    <p className="reviews-component__breed">{item.breed}</p>
                                                    <ul className="reviews-component__stars"><svg className="text-star-active" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" stroke="currentColor" width="16" height="16"><path stroke-width="1" d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"></path></svg><svg className="text-star-active" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" stroke="currentColor" width="16" height="16"><path stroke-width="1" d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"></path></svg><svg className="text-star-active" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" stroke="currentColor" width="16" height="16"><path stroke-width="1" d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"></path></svg><svg className="text-star-active" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" stroke="currentColor" width="16" height="16"><path stroke-width="1" d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"></path></svg><svg className="text-star-active" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" stroke="currentColor" width="16" height="16"><path stroke-width="1" d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"></path></svg></ul>
                                                    <p className="reviews-component__review">{item.message}</p></div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        null
                    }

                        {/* <ol className="reviews-component__indicator"><li data-index="review-0" className="js-indicator-dots active"></li><li data-index="review-1" className="js-indicator-dots "></li><li data-index="review-2" className="js-indicator-dots "></li></ol> */}
                        <div className="cta-white" style={{marginTop: "20px"}}><a href="/reviews">Read More Reviews</a></div>
                    </div>
                </div>


                <section className="breed-location__state">
                    <div className="content-wrapper" style={{backgroundColor: '#fff'}}>
                        <div id="location__state-faq">
                            <div>
                                <h2 className="breed-location__heading-h2">Frequently Asked Questions about Puppy Ownership in {state}</h2>
                                <div className="text-left"></div>
                                <div className="text-left">
                                    <h3 style={{fontSize: '20px', letterSpacing: '.1px', lineHeight: '22px', textAlign: 'left', margin: '1rem 0'}}>Are the puppies in {state}?</h3>
                                    <p style={{textAlign: 'left'}}>We work with the best breeders all over the United States and bring your puppy to you in {state}! We have a dedicated team of puppy travel experts who make sure your puppy is safe and well-cared for during delivery. <a href="/dog-travel">Learn more about out how we can for your puppy during delivery</a>.</p>
                                </div>
                                <div className="text-left">
                                    <h3 style={{fontSize: '20px', letterSpacing: '.1px', lineHeight: '22px', textAlign: 'left', margin: '1rem 0'}}>What areas in {state} do you serve?</h3>
                                    <p style={{textAlign: 'left'}}>We serve all of {state}! We can bring your puppy to any nearby airport, including LAX and SFO. Depending on where your puppy is, we also might drive your puppy to one of our pickup locations, conveniently located throughout {state}. We'll work with you to determine the best transportation method and meet up location.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="content-wrapper">
                        <div id="location__bottom-cta">
                            <div>
                                <picture className="">
                                    <img src="/img/find-puppy.png" loading="lazy" className="lazyloaded " style={{margin: "0 auto"}}/>
                                </picture>
                                <h3 style={{margin: '1.5rem 0'}}>Find the perfect puppy</h3>
                                <p className="text-center" style={{margin: '1rem 0'}}>Our adorable puppies are all from carefully vetted breeders and can't wait to join their new family.</p>
                                <div className="cta-white">
                                    <a href="/puppies-for-sale">See All Available Puppies</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <LoginPopup loginPopup={loginPopup}  setLoingPopup={setLoginPopup}/>
    </>
  );
}

export default BreedStateContainer;
