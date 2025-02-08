import React, { useEffect, useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Optional: the default styles
import OtherAvaibleBreed from "../components/_other-availble-breed/OtherAvaibleBreed";
import RecentlyViewed from "../components/home-page-components/puppy-spotlight-slide/RecentlyViewed";
import AskAboutMePopup from "../components/popups/single-puppy-popups/AskAboutMePopup";
import LoginPopup from "../components/popups/single-puppy-popups/LoginPopup";
import SharePopup from "../components/popups/single-puppy-popups/SharePopup";
import StarRating from "../components/review-star/ReviewsStar";
import { pages } from "../contants/routes";
import ReviewData from "../data/all-reviews.json"
import AllPuppies from "../data/puppy-data/all_puppies.json"
import useAuthListener from "../hooks/use-auth-listener";


interface Props {
  puppyInfo: any;
  pageTitle: string;
}


const getRandomReviews = (breed: string, reviews: any[]): any[] => {
  // Filter reviews by breed and 5-star rating
  const filteredReviews = reviews.filter(
    (review) => review.breed === breed && review.rating === 5
  );

  // If no matching reviews, shuffle all reviews and return 5 random ones
  if (filteredReviews.length === 0) {
    const allReviewsShuffled = reviews.sort(() => 0.5 - Math.random());
    return allReviewsShuffled.slice(0, 5);
  }

  // Shuffle and return up to 5 filtered reviews
  const shuffledFilteredReviews = filteredReviews.sort(() => 0.5 - Math.random());
  return shuffledFilteredReviews.slice(0, 5);
};

const getPuppiesByBreed = (
  breed: string,
  puppy_id: string,
  allPuppies: any[]
): any[] => {
  // Filter puppies by the same breed and exclude the given puppy_id
  const filteredPuppies = allPuppies.filter(
    (puppy) => puppy.breed === breed && puppy.puppy_id !== puppy_id
  );

  // Shuffle the filtered puppies for randomness
  const shuffledPuppies = filteredPuppies.sort(() => 0.5 - Math.random());

  // Return up to 15 puppies
  return shuffledPuppies.slice(0, 15);
};

const SinglePuppyContainer: React.FC<Props> = ({ puppyInfo, pageTitle }) => {
  const {
    gallery_content,
    slug,
    breed,
    puppy_id,
    puppy_name,
    people_intrested,
    sex,
    age,
    price,
    puppy_info_details,
    about,
    vaccinations_info,
    siblings,
    breed_info
  } = puppyInfo

  const {user} = useAuthListener();
  const [showMore, setShowMore] = useState(false);
  const [sliderCount, setSliderCount] = useState(0);
  const [askAboutMePopup, setAskAboutMePopup] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const [likePuppyListID, setLikePuppyListID] = useState(JSON.parse(localStorage.getItem("liked-puppies-id") || '[]'))
  const [sharePopup, setSharePopup] = useState(false)
  const [recentlyViewed, setRecentlyViewed] = useState(JSON.parse(localStorage.getItem("recently-viewed") || '[]'))
  const [breedReviews, setBreedReviews] = useState(getRandomReviews(breed, ReviewData));
  const [randomPuppies, setRandomPuppies] = useState(getPuppiesByBreed(breed, puppy_id, AllPuppies))


  const handleToggle = () => {
    setShowMore(!showMore);
  };

  const incrementSliderCount = () => {
    setSliderCount((prevCount) => (prevCount >= 2 ? 0 : prevCount + 1));
  };


  useEffect(() => {
    const handleScroll = () => {
      // Select the elements
      const ctaElement = document.getElementById("puppy-profile__cta-js-profile-ctas");
      const buttonElement = document.getElementById("take-me-home-floating-btn");

      if (!ctaElement || !buttonElement) return;

      // Get the bounding rectangle of the CTA element
      const ctaRect = ctaElement.getBoundingClientRect().bottom;

      // Check if the element is within 50px of the viewport top
      if (ctaRect + 50 > 0) {
        buttonElement.classList.add("hidden");
      } else {
        buttonElement.classList.remove("hidden");
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

// Work on Share puppy
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: "Wanted to share this with you",
          url: window.location.href,
          // files: [
          //   new File([""], "image.jpg", {
          //     type: "image/jpeg",
          //     lastModified: new Date().getTime(),
          //   }),
          // ], // Optional: include an image file if available on device
        });
        // console.log("Content shared successfully!");
      } catch (error) {
        // console.error("Error sharing:", error);
      }
    } else {
      // alert("Web Share API is not supported on this browser.");
       setSharePopup(true)
    }
  };


  const phoneNumber = process.env.REACT_APP_US_NUMBER_FORMARTED

  const [currentCount, setCurrentCount] = useState(0)
  var numberOfImages = gallery_content.length

  const next = () => {
    setCurrentCount((prevCount) => (prevCount + 1) % numberOfImages); // Wraps to 0 after the last image
  };

  const prev = () => {
    setCurrentCount((prevCount) => (prevCount - 1 + numberOfImages) % numberOfImages); // Wraps to the last image if it goes below 0
  };

  const openFullImage =(imgUrl: any)=>{
    window.open(imgUrl, '_blank');
  }


  // Like functionality
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

      // console.log(`Puppy ID ${puppyId} added to liked puppies.`);
    } else {
      // console.log(`Puppy ID ${puppyId} is already liked.`);
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
const handleLike =(puppyId: string)=>{

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
     <AskAboutMePopup
        askAboutMePopup={askAboutMePopup}
        setAskAboutMePopup={setAskAboutMePopup}
        puppyId={puppy_id}
        peopleIntrested={people_intrested}
        name={puppy_name}
        breed={breed}
        color={puppy_info_details["Color"]}
        sex={sex}
        age={age}
        galleryContent={gallery_content[0]['urls']['300w']}
      />
     <LoginPopup loginPopup={loginPopup} setLoingPopup={setLoginPopup}/>
     <SharePopup
      sharePopup={sharePopup}
      setSharePopup={setSharePopup}
      galleryContent={gallery_content[0]['urls']['300w']}
      name={puppy_name}
      breed={breed}
      color={puppy_info_details["Color"]}
      sex={sex}
      age={age}
      pageTitle={pageTitle}
    />


      <main className="puppy-profile">
        <section className="puppy-profile__gallery">
          <div className="js-gallery gallery grid-columns-5" data-id="gallery">
            <div className="gallery__label empty-space space-1"></div>
            <div className="gallery__label empty-space space-2"></div>

            {
              gallery_content.map((item: any, index: number) => {

                if(item.gallery_type === 'image'){
                  return (
                    <>
                      <input
                          key={index}
                          type="radio"
                          name="puppy-gallery"
                          id={`gallery-photo-${index}`}
                          className="gallery__control"
                          checked={currentCount === index}
                          onClick={()=>setCurrentCount(index)}
                        />
                        <label htmlFor={`gallery-photo-${index}`} className="gallery__label">
                          <picture className="">
                            <img
                              id=""
                              alt={`${item.breed} puppy for sale ${item.puppy_name}, dog for sale`}
                              className=" lazyloaded"
                              data-cy=""
                              data-src={item.label_img_src}
                              loading="lazy"
                              width="60"
                              src={item.label_img_src}
                            />
                          </picture>
                        </label>
                        <div className="gallery__content" id={`gallery-large-photo-${index}`}>
                          <a onClick={prev} className="js-gallery-arrow-left arrow-button">
                            <img
                              src="/img/puppy-listings/chevron-right-icon.svg"
                              alt="Previous Image"
                              width="8"
                              height="14"
                            />
                          </a>
                          <a onClick={next} className="js-gallery-arrow-right arrow-button">
                            <img
                              src="/img/puppy-listings/chevron-right-icon.svg"
                              alt="Next Image"
                              width="8"
                              height="14"
                            />
                          </a>

                          <picture className="">
                            <img
                              id=""
                              alt={`${item.breed} puppy for sale ${item.puppy_name}, dog for sale`}
                              className="gallery__content-puppy-image ls-is-cached lazyloaded"
                              data-cy=""
                              data-src={item.urls.medium}
                              loading="lazy"
                              data-index="gallery-image-0"
                              sizes="(max-width: 390px) 300px, 570px"
                              data-srcset={`
                                  ${item.urls['220w']} 220w,
                                  ${item.urls['300w']} 300w,
                                  ${item.urls['570w']} 570w
                            `}
                              srcSet={`
                                  ${item.urls['220w']} 220w,
                                  ${item.urls['300w']} 300w,
                                  ${item.urls['570w']} 570w
                              `}
                              src={item.urls.medium}
                            />
                          </picture>

                          <div className="photo-count">{index + 1} / {numberOfImages}</div>
                        </div>
                    </>
                  )
                }if (item.gallery_type === 'video'){
                  return (
                    <>
                      <input
                        type="radio"
                        name="puppy-gallery"
                        id={`gallery-video-${index}`}
                        className="gallery__control radio-video"
                        checked={currentCount === index}
                        onClick={()=>setCurrentCount(index)}
                      />
                      <label
                        htmlFor={`gallery-video-${index}`}
                        className="gallery__label  gallery__label-video"
                      >
                        <picture className="">
                          <img
                            id=""
                            alt=""
                            className=" lazyloaded"
                            data-cy=""
                            data-src={item.label_img_src}
                            loading="lazy"
                            width="60"
                            height="60"
                            src={item.label_img_src}
                          />
                        </picture>
                      </label>
                      <div className="gallery__content gallery__content-video">
                        <a onClick={prev} className="js-gallery-arrow-left arrow-button">
                          <img
                            src="/img/puppy-listings/chevron-right-icon.svg"
                            alt="Previous Image"
                            width="8"
                            height="14"
                          />
                        </a>
                        <a onClick={next} className="js-gallery-arrow-right arrow-button">
                          <img
                            src="/img/puppy-listings/chevron-right-icon.svg"
                            alt="Next Image"
                            width="8"
                            height="14"
                          />
                        </a>

                        <div className="cloudflare-video-container right"></div>
                        <div className="cloudflare-video-container left"></div>
                        <div className="video-container" id="gallery-video">
                          <iframe
                            className="js-cloudflare-player cloudflare-player"
                            src={item.urls.video_url}
                            style={{ border: "medium", width: "100%" }}
                            height="640"
                            width="640"
                            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                            allowFullScreen={true}
                          ></iframe>
                        </div>
                        <div className="photo-count video">{index + 1} / {numberOfImages}</div>
                      </div>
                    </>
                  )
                }

              })
            }

            <div className="gallery__label empty-space space-3"></div>
            <div className="gallery__label empty-space space-4"></div>
          </div>
        </section>


        <section className="puppy-profile__information">
          <div className="ps-breadcrumbs-small column">
            <span className="ps-breadcrumbs-small__item truncate">
              <a href={`/puppies-for-sale/breed/${slug}`}>
                {breed}
              </a>
            </span>
            <span className="ps-breadcrumbs-small__separator"> / </span>
            <span className="ps-breadcrumbs-small__item">{puppy_name} {puppy_id}</span>
          </div>
          <section className="puppy-profile__name-urgency">
            <div className="puppy-title">
              <nav className="js-puppy-page-nav puppy-profile__nav puppy-profile__navigation">
                <h1 className="strong">{puppy_name}</h1>
              </nav>
            </div>
            <div id="content-share-button">
              <button
                className="styles-module__shareContainer--IMFl2"
                id="shareButtonOpen"
                onClick={handleShare}
              >
                Share{" "}
                <img
                  className="styles-module__shareDesktopIcon--zrKne"
                  src="/img/share-desktop.svg"
                  alt="Share"
                />
              </button>



              <button
                className={`favorite-puppy-circle js-favorite-puppy ${likePuppyListID.includes(puppy_id) ? 'favorited' : ''}`}
                data-puppy={puppy_id}
                data-target="pdp"
                onClick={(e) =>handleLike(puppy_id)}
              ></button>



            </div>
          </section>
          {
            people_intrested == 'N/A' || !people_intrested
            ?
            null
            :
            <section className="puppy-profile__interested">
              <span className="number-viewing">{people_intrested}</span> people are interested in{" "}
              {puppy_name}
            </section>
          }
          <section className="puppy-profile__details">
            <article className="puppy-profile__details-listing">
              <p className="puppy-profile__details-gender-and-age">
                {sex} • {age} week{Number(age) > 1 && "s"}
              </p>
              <div
                className="puppy-profile__details-price"
                data-cy="puppy-price"
              >
                {price}
                <br />
              </div>
            </article>
          </section>
          <section className="puppy-profile__sub-details ">
            {/*Birth date does not match age*/}
            {/*<p>
              <span>Birthday</span>{puppy_info_details["Birthday"]}
            </p>*/}
            <p>
              <span>Available</span>I'm ready today!
            </p>
            <p id="mom-weight">
              <span>Mom's Weight</span>{puppy_info_details["Mom's Weight"]}
            </p>
            <p id="dad-weight">
              <span>Dad's Weight</span>{puppy_info_details["Dad's Weight"]}
            </p>
            <p>
              <span>Color</span>{puppy_info_details["Color"]}<span>{"   "}</span>
              <Tippy
                content="As a puppy matures, it is not uncommon to see changes to their coat color, hair type, and pigmentation. Most coats will either lighten or darken over time. These changes typically occur as their adult coat comes in, but grooming and environmental factors can speed up the process. Due to this being a natural occurrence in many breeds, we cannot guarantee a puppy's permanent color or hair type at maturity."
                arrow={false} // Show the arrow
                theme="light" // Optional: custom theme
                animation="fade" // Optional: animation style
                className="tooltip-unique_popUP"
              >
                <button
                  type="button"
                  aria-label="information"
                  className="tooltip remove-horizontal-margin"
                  data-tippy=""
                  data-original-title="As a puppy matures, it is not uncommon to see changes to their coat color, hair type, and pigmentation. Most coats will either lighten or darken over time. These changes typically occur as their adult coat comes in, but grooming and environmental factors can speed up the process. Due to this being a natural occurrence in many breeds, we cannot guarantee a puppy's permanent color or hair type at maturity."
                ></button>
              </Tippy>
            </p>
            <p style={{ gridArea: "registry" }}>
              <span>Registry</span>
              <span style={{ color: "initial" }} id="akc-puppy-exp">
                {puppy_info_details["Registry"]}
              </span>
            </p>
          </section>
          <section id="puppy-profile__cta-js-profile-ctas" className="puppy-profile__cta js-profile-ctas">
            <a
              className="button ghost js-open-puppy-request"
              data-puppy={puppy_id}
              data-cy="prf-trigger"
              onClick={()=> setAskAboutMePopup(true)}
            >
              Ask About Me
            </a>
            <a
              className="button main js-funnel-cookie js-add-to-cart zrz-add-to-cart"
              href={`/shop/checkout/details/${puppy_id}`}
              data-puppy={puppy_id}
              data-funnel="Profile"
              data-cy="cy-checkout"
            >
              Take Me Home
            </a>
          </section>
          <section className="puppy-profile__bottom-links">
            <p>
              <a
                className="hyperlink js-financing"
                data-puppy={puppy_id}
                href={`${pages.FINANCING}/${puppy_id}`}
              >
                Financing Options
              </a>
              <span> are Available.</span>
            </p>
          </section>

          <section className="puppy-profile__call-in">
            <picture className="">
              <img
                id=""
                alt=""
                className="call-in-phone-img ls-is-cached lazyloaded"
                data-cy=""
                data-src="/img/components/how-puppyspot-works/puppy-concierge.svg"
                loading="lazy"
                width="72"
                height="65"
                src="/img/components/how-puppyspot-works/puppy-concierge.svg"
              />
            </picture>

            <p>
              <span>Have specific questions about {puppy_name}?</span>
              <span>
                Call{" "}
                <a className="hyperlink underline" href={`tel:${phoneNumber}`}>
                  {phoneNumber}
                </a>
              </span>
            </p>
          </section>

          <section className="puppy-profile__about-puppy">
            <h3>About {puppy_name}</h3>
            <p>
              {about}
            </p>
            {
              vaccinations_info == 'N/A' || !vaccinations_info
              ?
              null
              :
              <div className="information_box">
                <i></i>
                <p>
                  {puppy_name} will be current on <b>vaccinations</b> &amp;{" "}
                  <b>vet exams</b> before going home.
                </p>
              </div>
            }
          </section>

            {
              siblings.length < 1
              ?
              null
              :
              <section id="root-littermates" className="puppy-profile__littermates">
                <div className="littermates-module__container--u2Krw">
                  <h2 className="littermates-module__title--NVYR1">
                    {puppy_name}'s Siblings
                  </h2>
                  <div
                    className={`${"littermates-module__grid--Y5aAj"} ${
                      showMore ? "littermates-module__seeMore--i9iG+" : ""
                    }`}
                  >
                    {
                      siblings.map((item: any, index: number) => {
                        return (
                          <a
                            href="/puppies-for-sale/breed/cocker-spaniel/puppy/768768"
                            className="littermates-module__gridItem--hM41O"
                          >
                            <div className="littermates-module__imgResizer--eJRod">
                              <img
                                src={item.image}
                                className="littermates-module__img--iRBZP"
                              />
                              {
                                item.found_home == "N/A" || !item.found_home
                                ?
                                null
                                :
                                item.found_home == 'I found a new home!'
                                ?
                                <div className="littermates-module__reserved--pjd46 littermates-module__foundNewHome--p2F+y">
                                  I found a new home!
                                  <div className="littermates-module__reservedRightDecoration--O3Ue2">
                                    <svg
                                      width="11"
                                      height="32"
                                      viewBox="0 0 11 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 0H10.5L2.5 16L10.5 32H0V0Z"
                                        fill="#FFF"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                                :
                                <div className="littermates-module__reserved--pjd46 ">
                                  {item.found_home}
                                  <div className="littermates-module__reservedRightDecoration--O3Ue2">
                                    <svg
                                      width="11"
                                      height="32"
                                      viewBox="0 0 11 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0 0H10.5L2.5 16L10.5 32H0V0Z"
                                        fill="#B8EAF8"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              }
                            </div>
                            <div className="littermates-module__litterInfo--9JNb8">
                              <div className="littermates-module__litterName--AVRuu">
                                {item.name}
                              </div>
                              <div className="littermates-module__litterGenderWrapper--bpLnf">
                                <img
                                  className="littermates-module__litterGenderIcon--sEa9K"
                                  src={`/img/${item.gender.toLowerCase()}.svg`}
                                />
                                <div className="littermates-module__litterGender--6kTcY">
                                  {item.gender}
                                </div>
                              </div>
                            </div>
                          </a>
                        )
                      })
                    }

                  </div>
                  {
                    siblings.length < 3
                    ?
                    null
                    :
                    <div className="littermates-module__buttonWrapper--z-bMD">
                      <button
                        className={`${"littermates-module__button--Eh76Q"} ${
                          showMore ? "littermates-module__seeingMore--HhzIn" : ""
                        }`}
                        onClick={handleToggle}
                      >
                        <span>
                          {showMore ? "See Less Littermates" : "See More Littermates"}
                        </span>
                        <img src="/img/carrot.svg" />
                      </button>
                    </div>
                  }
                </div>
              </section>
            }

          <section
            id="root-trusted-breeder"
            className="puppy-profile__trusted-breeder"
          >
            <div className="trusted-breeder-module__container--zJals">
              <div className="trusted-breeder-module__wrapper--7rs4Q">
                <svg
                  className="trusted-breeder-module__icon--RdVtL"
                  width="27"
                  height="24"
                  viewBox="0 0 27 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4026 2.20251C14.7435 1.14994 16.2242 1.14994 16.564 2.20251L18.2901 7.54423C18.3644 7.77336 18.5088 7.973 18.7027 8.11463C18.8966 8.25626 19.13 8.33262 19.3696 8.3328H24.9549C26.056 8.3328 26.5128 9.74994 25.6231 10.4014L21.1049 13.7019C20.9108 13.8438 20.7664 14.0439 20.6923 14.2734C20.6182 14.5029 20.6182 14.7502 20.6924 14.9797L22.4174 20.3214C22.7583 21.3751 21.5594 22.2505 20.6696 21.5991L16.1515 18.2985C15.9573 18.1565 15.7234 18.0801 15.4833 18.0801C15.2432 18.0801 15.0093 18.1565 14.8151 18.2985L10.2969 21.5991C9.40715 22.2505 8.20828 21.3739 8.54919 20.3214L10.2742 14.9797C10.3484 14.7502 10.3484 14.5029 10.2743 14.2734C10.2002 14.0439 10.0558 13.8438 9.86169 13.7019L5.34351 10.4014C4.4526 9.74994 4.91169 8.3328 6.01169 8.3328H11.5958C11.8356 8.33286 12.0693 8.25661 12.2634 8.11497C12.4575 7.97332 12.6021 7.77354 12.6765 7.54423L14.4026 2.20251Z"
                    fill="#FFC700"
                  ></path>
                  <path
                    d="M11.4192 2.20251C11.7601 1.14994 13.2408 1.14994 13.5806 2.20251L15.3067 7.54423C15.381 7.77336 15.5254 7.973 15.7193 8.11463C15.9132 8.25626 16.1466 8.33262 16.3863 8.3328H21.9715C23.0726 8.3328 23.5294 9.74994 22.6397 10.4014L18.1215 13.7019C17.9274 13.8438 17.783 14.0439 17.7089 14.2734C17.6348 14.5029 17.6348 14.7502 17.709 14.9797L19.434 20.3214C19.7749 21.3751 18.576 22.2505 17.6862 21.5991L13.1681 18.2985C12.9739 18.1565 12.74 18.0801 12.4999 18.0801C12.2598 18.0801 12.0259 18.1565 11.8317 18.2985L7.31352 21.5991C6.42375 22.2505 5.22489 21.3739 5.5658 20.3214L7.2908 14.9797C7.36498 14.7502 7.36502 14.5029 7.29092 14.2734C7.21682 14.0439 7.07238 13.8438 6.8783 13.7019L2.36011 10.4014C1.4692 9.74994 1.9283 8.3328 3.0283 8.3328H8.61239C8.85221 8.33286 9.08591 8.25661 9.28003 8.11497C9.47414 7.97332 9.61872 7.77354 9.69307 7.54423L11.4192 2.20251Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <div>
                  <b>Trusted Breeder.</b> This breeder has been verified by
                  PuppySpot for 6 years.
                </div>
              </div>
            </div>
          </section>

          <section
            id="bring-puppy-home"
            className="puppy-profile__bring-puppy-home"
          >
            <div className="puppy-profile__uvp-container bring-puppy-home-module__container--zU6YG">
              <h2 className="bring-puppy-home-module__title--melh8">
                Bringing {puppy_name} Home
              </h2>
              <p className="bring-puppy-home-module__subText--YRa0j">
                We have 3 travel packages for {puppy_name}:
              </p>
              <div className="bring-puppy-home-module__listContainer--CPj2i">
                <div className="bring-puppy-home-module__itemContainer--41kgD">
                  <img
                    src="/img/car.svg"
                    width="34"
                    height="34"
                  />
                  <div className="bring-puppy-home-module__textItem---L3UE">
                    <p className="bring-puppy-home-module__itemTitle--dQWXF">
                      Breeder Meet Up
                    </p>
                    <p>
                      Meet the breeder near their home and pickup your puppy
                    </p>
                  </div>
                </div>
                <div className="bring-puppy-home-module__itemContainer--41kgD">
                  <img
                    src="/img/house.svg"
                    width="34"
                    height="34"
                  />
                  <div className="bring-puppy-home-module__textItem---L3UE">
                    <p className="bring-puppy-home-module__itemTitle--dQWXF">
                      Deliver Near You
                    </p>
                    <p>
                      Pickup your puppy from our USDA-licensed travel partner at
                      a location near to your home
                    </p>
                  </div>
                </div>
                <div className="bring-puppy-home-module__itemContainer--41kgD">
                  <img
                    src="/img/airplane.svg"
                    width="34"
                    height="34"
                  />
                  <div className="bring-puppy-home-module__textItem---L3UE">
                    <p className="bring-puppy-home-module__itemTitle--dQWXF">
                      Puppy Chaperone
                    </p>
                    <p>
                      Puppy flies in cabin with a trained, USDA-licensed puppy
                      chaperone
                    </p>
                  </div>
                </div>
              </div>
              <div className="bring-puppy-home-module__comfortContainer--Dlj25">
                <img
                  src="/img/happy.svg"
                  width="24"
                  height="24"
                />
                <div className="bring-puppy-home-module__comfortTextContainer--7eogM">
                  <p className="bring-puppy-home-module__comfortTitle--tAERa">
                    We prioritize puppy comfort.
                  </p>
                  <p className="bring-puppy-home-module__comfortDescription--sJ2cO">
                    Our dedicated team and travel partners always put the health
                    and wellbeing of your puppy first, making sure they arrive
                    safely, and as quickly as possible.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/*
          <section
            id="root-parents"
            className="puppy-profile__parents hidden"
            style={{ margin: "0" }}
          ></section>
          <section
            id="root-littermates"
            className="puppy-profile__littermates"
          ></section>
          <section
            id="root-trusted-breeder"
            className="puppy-profile__trusted-breeder"
          ></section>
          <section
            id="root-puppy-breeder"
            className="puppy-profile__puppy-breeder"
          ></section>
          <section
            id="bring-puppy-home"
            className="puppy-profile__bring-puppy-home"
          ></section> */}

          <section className="puppy-profile__breed-detail">
            <div className="fast-facts js-fact-facts">
              <div className="fast-facts__holder">
                <div className="ast-facts__title">
                  <h2 style={{ margin: "0" }}>
                    Quick Facts About {breed}
                  </h2>




                  {/* {DAta gotten from breed data object goes here} */}


                  {/* <p style={{ marginBottom: "1rem" }}>
                    Cocker Spaniels are smart, sweet dogs that are great for
                    families.
                  </p> */}






                </div>
                <ul>
                  <li>
                    <div
                      className="fast-facts__container"
                      data-icon="temperament"
                    >
                      <div className="fast-facts__energy-descriptors">
                        <span>Temperament</span>
                        <span className="bold">{breed_info["general_breed_info"]["Temperament"]}</span>
                      </div>
                    </div>
                  </li>
                  <div className="fast-facts__divider"></div>
                  <li>
                    <div className="fast-facts__container" data-icon="energy">
                      <div className="fast-facts__energy-descriptors">
                        <span>Energy</span>
                        <span className="bold">{breed_info["general_breed_info"]["Energy"]}</span>
                      </div>
                      <div className="fast-facts__energy-bar">
                        {
                          breed_info["general_breed_info"]["Energy"] == "High"
                          ?
                          <>
                            <div className="fast-facts__energy-level filled"></div>
                            <div className="fast-facts__energy-level filled"></div>
                            <div className="fast-facts__energy-level filled"></div>
                          </>
                          :
                          breed_info["general_breed_info"]["Energy"] == "Moderate"
                          ?
                          <>
                            <div className="fast-facts__energy-level filled"></div>
                            <div className="fast-facts__energy-level filled"></div>
                            <div className="fast-facts__energy-level "></div>
                          </>
                          :
                          breed_info["general_breed_info"]["Energy"] == "Low"
                          ?
                          <>
                            <div className="fast-facts__energy-level filled"></div>
                            <div className="fast-facts__energy-level "></div>
                            <div className="fast-facts__energy-level "></div>
                          </>
                          :
                          <>
                            <div className="fast-facts__energy-level"></div>
                            <div className="fast-facts__energy-level"></div>
                            <div className="fast-facts__energy-level"></div>
                          </>
                        }
                      </div>
                    </div>
                  </li>
                  <div className="fast-facts__divider"></div>
                  <li>
                    <div className="fast-facts__container" data-icon="breed">
                      <div className="fast-facts__energy-descriptors">
                        <span>Breed Group</span>
                        <span className="bold">{breed_info["general_breed_info"]["Breed Group"]}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cta-white">
              <a
                href={`/puppies-for-sale/breed/${slug}/overview`}
                target="_blank"
              >
                Read More about {breed}
              </a>
            </div>
          </section>
          <div id="take-me-home-floating-btn" className="puppy-profile__floating-cta show-for-small js-floating-cta hidden">
            <a
              className="button main js-funnel-cookie js-floating-cta-button zrz-add-to-cart"
              href={`/shop/checkout/details/${puppy_id}`}
              data-puppy={puppy_id}
              data-funnel="Profile"
            >
              Take Me Home
            </a>
          </div>
        </section>


        <section className="puppy-profile__reviews">
          <h2 className="puppy-profile__reviews--title">
            PuppySpot's {breed} Reviews
          </h2>

          <div className="puppy-profile__review-stars">
            <div>
              <ul className="stars stars--pl-0">
                <span id="root-star-render">
                  <svg
                    className="text-star-active"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    stroke="currentColor"
                    width="16"
                    height="16"
                  >
                    <path
                      stroke-width="1"
                      d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"
                    ></path>
                  </svg>
                  <svg
                    className="text-star-active"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    stroke="currentColor"
                    width="16"
                    height="16"
                  >
                    <path
                      stroke-width="1"
                      d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"
                    ></path>
                  </svg>
                  <svg
                    className="text-star-active"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    stroke="currentColor"
                    width="16"
                    height="16"
                  >
                    <path
                      stroke-width="1"
                      d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"
                    ></path>
                  </svg>
                  <svg
                    className="text-star-active"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    stroke="currentColor"
                    width="16"
                    height="16"
                  >
                    <path
                      stroke-width="1"
                      d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    stroke="currentColor"
                    width="16"
                    height="16"
                  >
                    <path
                      fill="#FFC107"
                      stroke="#FFC107"
                      stroke-width="1"
                      d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L8 12Z"
                    ></path>
                    <path
                      fill="#c4c4c4"
                      stroke="#c4c4c4"
                      stroke-width="1"
                      d="M8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12L8 0Z"
                    ></path>
                  </svg>
                </span>
              </ul>
              <span className="puppy-profile__reviews--score">4.6</span>
            </div>
            (16,535 reviews)
          </div>

          <div id="profile-reviews_js-reviews-component--big" className="profile-reviews js-reviews-component">
            <div className="profile-reviews__container">
              {
                !breedReviews
                ?
                null
                :
                breedReviews.map((item, index) =>{
                  return (
                    <div
                      key={index}
                      className="profile-reviews__review js-review active"
                      id={`review-${index}`}
                    >
                      <div>
                        {
                          !item.images
                          ?
                          null
                          :
                          item.images.map((item2: any, index: any) => {
                            return (
                              <picture className="" key={index} onClick={()=> openFullImage(item2.big_url)}>
                                <img
                                  id=""
                                  alt=""
                                  className="profile-reviews__about-thumb lazyloaded"
                                  style={{marginBottom: '0.4rem'}}
                                  data-cy=""
                                  data-src={item2.small_url}
                                  loading="lazy"
                                  width="150"
                                  height="150"
                                  src={item2.small_url}
                                />
                              </picture>
                            )
                          })
                        }
                      </div>

                      <div className="profile-reviews__about">
                        <p className="profile-reviews__about-name">by {item.name}</p>
                        <ul className="profile-reviews__about-stars">
                          {
                            !item.stars
                            ?
                            null
                            :
                            <StarRating stars={item.stars} />
                          }
                        </ul>
                        <p className="profile-reviews__about-date">{item.date}</p>
                      </div>

                      <p className="profile-reviews__copy" id="">
                        {item.message}
                      </p>
                    </div>
                  )
                })
              }
            </div>
          </div>

          <div id="profile-reviews_js-reviews-component--small" className="profile-reviews js-reviews-component">
            <div className="profile-reviews__container">
            {
                !breedReviews
                ?
                null
                :
                breedReviews.map((item, index) =>{
                  return (
                    <div
                      key={index}
                      className={`profile-reviews__review js-review ${sliderCount === index ? 'active' : 'hidden'}`}
                      onClick={incrementSliderCount}
                      id={`review-${index}`}
                    >
                      <div>
                        {
                          !item.images
                          ?
                          null
                          :
                          item.images.map((item2: any, index: any) => {
                            return (
                              <picture className="" key={index} onClick={()=> openFullImage(item2.big_url)}>
                                <img
                                  id=""
                                  alt=""
                                  className="profile-reviews__about-thumb lazyloaded"
                                  style={{marginBottom: '0.4rem'}}
                                  data-cy=""
                                  data-src={item2.small_url}
                                  loading="lazy"
                                  width="150"
                                  height="150"
                                  src={item2.small_url}
                                />
                              </picture>
                            )
                          })
                        }
                      </div>
                      {/* <picture className="">
                        <img
                          id=""
                          alt=""
                          className="profile-reviews__about-thumb lazyloaded"
                          data-cy=""
                          data-src="https://cdn-yotpo-images-production.yotpo.com/Review/527428976/495802457/square.jpg?1701528011"
                          loading="lazy"
                          width="150"
                          height="150"
                          src="https://cdn-yotpo-images-production.yotpo.com/Review/527428976/495802457/square.jpg?1701528011"
                        />
                      </picture> */}

                      <div className="profile-reviews__about">
                        <p className="profile-reviews__about-name">by {item.name}</p>
                        <ul className="profile-reviews__about-stars">

                        {
                          !item.stars
                          ?
                          null
                          :
                          <StarRating stars={item.stars} />
                        }
                        </ul>
                        <p className="profile-reviews__about-date">{item.date}</p>
                      </div>
                      <p className="profile-reviews__copy" id="">
                        {item.message}
                      </p>
                    </div>
              )
            })
          }

            </div>

            <ol className="profile-reviews__indicator">
              <li data-index="review-0" className={`js-indicator-dots ${sliderCount === 0 ? 'active' : ''}`}></li>
              <li data-index="review-1" className={`js-indicator-dots ${sliderCount === 1 ? 'active' : ''}`}></li>
              <li data-index="review-2" className={`js-indicator-dots ${sliderCount === 2 ? 'active' : ''}`}></li>
            </ol>
          </div>

          <div className="cta-white">
            <a href={pages.CUSTOMER_REVIEW}>Read More Reviews</a>
          </div>
        </section>
      </main>

{
      !randomPuppies || randomPuppies.length < 1
      ?
      null
      :
      <div className="featured-puppies-module__wrapper--c1np1">
          <h3 className="featured-puppies-module__title--3vIaM" style={{whiteSpace: 'wrap', textOverflow: 'unset'}}>Other Available {breed} Puppies</h3>
          <OtherAvaibleBreed randomPuppies={randomPuppies} />
      </div>
}

      <div className="cta-white">
          <a href={`/puppies-for-sale/breed/${slug}`}>
              View All {breed} Puppies
          </a>
      </div>

        <div id="root-why-puppyspot">
            <div className="styles-module__container--CCD9B styles-module__smallPadding--Jh4ha">
              <h3 className="styles-module__title--lW8PU">Why we’re the leading puppy adoption service</h3>
              <div className="styles-module__cardsContainer--NzIp7">
                <div>
                    <div className="styles-module__card--D5UVp">
                      <img className="styles-module__buttonIcon--aT7sj" src="/img/your-perfect-puppy.svg" alt="Your Perfect Puppy"/>
                      <div className="styles-module__cardInfo--r+Wfi">
                        <h4 className="styles-module__cardTitle--uTDQy">Your Perfect Puppy</h4>
                        <p className="styles-module__cardDescription--SZBTD">Breeds in every size, color, and temperament</p>
                      </div>
                    </div>
                </div>

                <div>
                  <div className="styles-module__card--D5UVp">
                    <img className="styles-module__buttonIcon--aT7sj" src="/img/certified-breeders.svg" alt="Certified Breeders"/>
                    <div className="styles-module__cardInfo--r+Wfi">
                      <h4 className="styles-module__cardTitle--uTDQy">Certified Breeders</h4>
                      <p className="styles-module__cardDescription--SZBTD">Licensed, vetted and committed to our puppies</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="styles-module__card--D5UVp">
                    <img className="styles-module__buttonIcon--aT7sj" src="/img/health-commitment.svg" alt="10-Year Health Commitment"/>
                    <div className="styles-module__cardInfo--r+Wfi">
                      <h4 className="styles-module__cardTitle--uTDQy">10-Year Health Commitment</h4>
                      <p className="styles-module__cardDescription--SZBTD">Certified documents, vaccinations, and checkups</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="styles-module__card--D5UVp">
                    <img className="styles-module__buttonIcon--aT7sj" src="/img/handle-care-delivery.svg" alt="Handle with Care Delivery"/>
                    <div className="styles-module__cardInfo--r+Wfi">
                      <h4 className="styles-module__cardTitle--uTDQy">Handle with Care Delivery</h4>
                      <p className="styles-module__cardDescription--SZBTD">White glove travel options to bring your puppy home</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="styles-module__card--D5UVp">
                    <img className="styles-module__buttonIcon--aT7sj" src="/img/caring-experts.svg" alt="Caring Experts"/>
                    <div className="styles-module__cardInfo--r+Wfi">
                      <h4 className="styles-module__cardTitle--uTDQy">Caring Experts</h4>
                      <p className="styles-module__cardDescription--SZBTD">Helping you every step to find your perfect puppy</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
        </div>

        {
            recentlyViewed.length <= 0
            ?
            null
            :
            <div className="featured-puppies-module__wrapper--c1np1">
                <h3 className="featured-puppies-module__title--3vIaM">Recently Viewed</h3>
                <RecentlyViewed recentlyViewed={recentlyViewed} />
            </div>
        }
    </>
  );
};

export default SinglePuppyContainer;
