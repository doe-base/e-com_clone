import { useEffect, useRef, useState } from "react";
import "./index.css";
import ScrollContainer from 'react-indiana-drag-scroll';


interface Props{
}
const ActiveLifeStyle: React.FC<Props> = ({}) => {
  const [movementCount, setMovementCount] = useState(0); // Use state for movementCount
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sliderElementRef = useRef<any>(null);

  const handleRightBtnClick = () => {

      if (scrollContainerRef.current && sliderElementRef.current) {
          const sliderWidth = scrollContainerRef.current.clientWidth; // Width of the parent container
          const maxMovement = sliderElementRef.current.scrollWidth;

          if (movementCount < maxMovement) {
              const newMovementCount = Math.min(movementCount + sliderWidth, maxMovement); // Cap at maxMovement
              setMovementCount(newMovementCount);
              scrollContainerRef.current.scrollLeft = newMovementCount
          }
      }
  };

  const handleLeftBtnClick = () => {

      if (scrollContainerRef.current && sliderElementRef.current) {
          const sliderWidth = scrollContainerRef.current.clientWidth; // Width of the parent container

          // Only slide left if we are not already at the beginning
          if (movementCount > 0) {
              const newMovementCount = Math.max(movementCount - sliderWidth, 0); // Ensure it doesn't go below 0
              setMovementCount(newMovementCount);
              scrollContainerRef.current.scrollLeft = newMovementCount
          }
      }
  };




  return (

      <article className="slider-block__container component-white">
        <div className="slider-block__content">
            <div className="slider-block__top">
                <h2 className="slider-block__top-title">
                    <a className="hyperlink black" href="/breed/collections/active-dogs" style={{color: '#000'}}>
                      Top Dog Breeds for Active Lifestyle
                    </a>
                    <a className="hyperlink" href="/breed/collections/active-dogs">
                        <span className="slider-block__top-link">View available puppies</span>
                    </a>
                </h2>
            </div>

            <div className="card-slider ">
                <div onClick={handleLeftBtnClick}  className="card-swiper-button card-swiper-button-prev js-card-prev swiper-button-disabled" tabIndex={0} role="button" aria-label="Previous slide" aria-disabled="true"></div>

                <div className="carousel-module__wrapper--O59lP featured-puppies-module__carouselWrapper--bYSHH" style={{maxWidth: '100%'}}>
                    <ScrollContainer vertical={false} innerRef={scrollContainerRef} style={{scrollBehavior: 'smooth'}}>
                        <ul ref={sliderElementRef} className="carousel-module__content--qDPHs  false featured-puppies-module__carouselContent--5fzAU">

                          <li className="swiper-slide card-slider__breed swiper-slide-active" style={{width: "285px", marginRight: "20px"}}>
                              <a href="/puppies-for-sale/breed/golden-retriever">
                              <div className="card card--breed">
                                <div className="card__display">
                        <picture className="">
                          <img id="" alt="" className="card__image lazyloaded" data-cy="" data-src="https://photos.puppyspot.com/breeds/228/card/500848096_medium.jpg" loading="lazy" src="https://photos.puppyspot.com/breeds/228/card/500848096_medium.jpg" />
                        </picture>

                    </div>
                  <div className="card__details">
                      <h3>Golden Retriever</h3>
                                  <p className="card__description">Friendly, loyal and smart</p>
                                  </div>
              </div>                                    </a>
                          </li>


                          <li className="swiper-slide card-slider__breed swiper-slide-next" style={{width: '285px', marginRight: '20px'}}>
                              <a href="/puppies-for-sale/breed/goldendoodle">
                                  <div className="card card--breed">
                                    <div className="card__display">
                                        <picture className="">
                                          <img id="" alt="" className="card__image lazyloaded" data-cy="" data-src="https://photos.puppyspot.com/breeds/334/card/500786611_medium.jpg" loading="lazy" src="https://photos.puppyspot.com/breeds/334/card/500786611_medium.jpg" />
                                        </picture>

                        </div>
                        <div className="card__details">
                            <h3>Goldendoodle</h3>
                                        <p className="card__description">Friendly, smart and devoted</p>
                                        </div>
                    </div>                                    </a>
                          </li>


                          <li className="swiper-slide card-slider__breed" style={{width: '285px', marginRight: '20px'}}>
                              <a href="/puppies-for-sale/breed/siberian-husky">
                                  <div className="card card--breed">
                                    <div className="card__display">
                                        <picture className="">
                                          <img id="" alt="" className="card__image lazyloaded" data-cy="" data-src="https://photos.puppyspot.com/breeds/245/card/500429198_medium.jpg" loading="lazy" src="https://photos.puppyspot.com/breeds/245/card/500429198_medium.jpg" />
                                        </picture>

                        </div>
                        <div className="card__details">
                            <h3>Siberian Husky</h3>
                                        <p className="card__description">Loyal, friendly and funny</p>
                                        </div>
                    </div>                                    </a>
                          </li>


                          <li className="swiper-slide card-slider__breed" style={{width: '285px', marginRight: '20px'}}>
                              <a href="/puppies-for-sale/breed/beagle">
                                  <div className="card card--breed">
                                    <div className="card__display">
                                        <picture className="">
                                          <img id="" alt="" className="card__image lazyloaded" data-cy="" data-src="https://photos.puppyspot.com/breeds/212/card/502400310_medium.jpg" loading="lazy" src="https://photos.puppyspot.com/breeds/212/card/502400310_medium.jpg" />
                                        </picture>

                        </div>
                        <div className="card__details">
                            <h3>Beagle</h3>
                                        <p className="card__description">Friendly, curious and playful</p>
                                        </div>
                    </div>                                    </a>
                          </li>


                          <li className="swiper-slide card-slider__breed" style={{width: '285px', marginRight: '20px'}}>
                              <a href="/puppies-for-sale/breed/labrador-retriever">
                                  <div className="card card--breed">
                                    <div className="card__display">
                                        <picture className="">
                                          <img id="" alt="" className="card__image lazyloaded" data-cy="" data-src="https://photos.puppyspot.com/breeds/231/card/500421880_medium.jpg" loading="lazy" src="https://photos.puppyspot.com/breeds/231/card/500421880_medium.jpg" />
                                        </picture>

                        </div>
                        <div className="card__details">
                            <h3>Labrador Retriever</h3>
                                        <p className="card__description">Friendly, active and brave</p>
                                        </div>
                    </div>                                    </a>
                          </li>


                          <li className="swiper-slide card-slider__breed" style={{width: '285px', marginRight: '20px'}}>
                              <a href="/puppies-for-sale/breed/poodle">
                                  <div className="card card--breed">
                                    <div className="card__display">
                                        <picture className="">
                                          <img id="" alt="" className="card__image lazyloaded" data-cy="" data-src="https://photos.puppyspot.com/breeds/322/card/500421875_medium.jpg" loading="lazy" src="https://photos.puppyspot.com/breeds/322/card/500421875_medium.jpg" />
                                        </picture>

                        </div>
                        <div className="card__details">
                            <h3>Poodle</h3>
                                        <p className="card__description">Active, independent and smart</p>
                                        </div>
                    </div>                                    </a>
                          </li>


                          <li className="swiper-slide card-slider__breed" style={{width: '285px', marginRight: '20px'}}>
                              <a href="/puppies-for-sale/breed/australian-shepherd">
                                  <div className="card card--breed">
                                    <div className="card__display">
                                        <picture className="">
                                          <img id="" alt="" className="card__image lazyloaded" data-cy="" data-src="https://photos.puppyspot.com/breeds/258/card/500420369_medium.jpg" loading="lazy" src="https://photos.puppyspot.com/breeds/258/card/500420369_medium.jpg" />
                                        </picture>

                        </div>
                        <div className="card__details">
                            <h3>Australian Shepherd</h3>
                                        <p className="card__description">Smart, work-oriented and spirited</p>
                                        </div>
                    </div>                                    </a>
                          </li>


                          <li className="swiper-slide card-slider__breed" style={{width: '285px', marginRight: '20px'}}>
                              <a href="/puppies-for-sale/breed/pembroke-welsh-corgi">
                                  <div className="card card--breed">
                                    <div className="card__display">
                                        <picture className="">
                                          <img id="" alt="" className="card__image lazyloaded" data-cy="" data-src="https://photos.puppyspot.com/breeds/324/card/500411700_medium.jpg" loading="lazy" src="https://photos.puppyspot.com/breeds/324/card/500411700_medium.jpg" />
                                        </picture>

                        </div>
                        <div className="card__details">
                            <h3>Pembroke Welsh Corgi</h3>
                                        <p className="card__description">Smart, alert and affectionate</p>
                                        </div>
                    </div>                                    </a>
                          </li>


                          <li className="swiper-slide card-slider__breed" style={{width: '285px', marginRight: '20px'}}>
                              <a href="/puppies-for-sale/breed/boxer">
                                  <div className="card card--breed">
                                    <div className="card__display">
                                        <picture className="">
                                          <img id="" alt="" className="card__image lazyloaded" data-cy="" data-src="https://photos.puppyspot.com/breeds/216/card/500415693_medium.jpg" loading="lazy" src="https://photos.puppyspot.com/breeds/216/card/500415693_medium.jpg" />
                                        </picture>

                        </div>
                        <div className="card__details">
                            <h3>Boxer</h3>
                                        <p className="card__description">Active, playful and smart</p>
                                        </div>
                    </div>                                    </a>
                          </li>
                        </ul>
                    </ScrollContainer>


                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>

                <div onClick={handleRightBtnClick} className="card-swiper-button card-swiper-button-next js-card-next" tabIndex={0} role="button" aria-label="Next slide" aria-disabled="false"></div>
            </div>
        </div>
      </article>

  );
}

export default ActiveLifeStyle;
