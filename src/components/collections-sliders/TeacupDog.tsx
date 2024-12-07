import { useEffect, useRef, useState } from "react";
import "./index.css";
import ScrollContainer from 'react-indiana-drag-scroll';


interface Props{
}
const TeacupDog: React.FC<Props> = ({}) => {
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
                                  <a className="hyperlink black" href="/breed/collections/teacup-puppies" style={{color: '#000'}}>
                              Teacup Dog Breeds
                                  </a>
                                                  <a className="hyperlink" href="/breed/collections/teacup-puppies">
                      <span className="slider-block__top-link">View available puppies</span>
                  </a>
                </h2>
            </div>

            <div className="card-slider ">
                <div onClick={handleLeftBtnClick}  className="card-swiper-button card-swiper-button-prev js-card-prev swiper-button-disabled" tabIndex={0} role="button" aria-label="Previous slide" aria-disabled="true"></div>

                <div className="carousel-module__wrapper--O59lP featured-puppies-module__carouselWrapper--bYSHH" style={{maxWidth: '100%'}}>
                    <ScrollContainer vertical={false} innerRef={scrollContainerRef} style={{scrollBehavior: 'smooth'}}>


                        <ul ref={sliderElementRef} className="carousel-module__content--qDPHs  false featured-puppies-module__carouselContent--5fzAU">
                                                                <li className="swiper-slide card-slider__breed swiper-slide-active" style={{width: "285px; margin-right: 20px"}}>
                                                                    <a href="/puppies-for-sale/breed/yorkshire-terrier">
                                        <div className="card card--breed">
    <div className="card__display">
        <picture className="">
                    <img id="" alt="" className="card__image lazyloaded" data-cy="" data-src="https://photos.puppyspot.com/breeds/249/card/500427607_medium.jpg" loading="lazy" src="https://photos.puppyspot.com/breeds/249/card/500427607_medium.jpg" />
        </picture>

    </div>
    <div className="card__details">
        <h3>Yorkshire Terrier</h3>
                    <p className="card__description">Affectionate, confident and spirited</p>
                    </div>
</div>                                    </a>
                                                            </li>
                                                <li className="swiper-slide card-slider__breed swiper-slide-next" style={{width: "285px; margin-right: 20px"}}>
                                                                    <a href="/puppies-for-sale/breed/pomeranian">
                                        <div className="card card--breed">
    <div className="card__display">
        <picture className="">
                    <img id="" alt="" className="card__image lazyloaded" data-cy="" data-src="https://photos.puppyspot.com/breeds/238/card/500427546_medium.jpg" loading="lazy" src="https://photos.puppyspot.com/breeds/238/card/500427546_medium.jpg" />
        </picture>

    </div>
    <div className="card__details">
        <h3>Pomeranian</h3>
                    <p className="card__description">Confident, curious and spirited</p>
                    </div>
</div>                                    </a>
                                                            </li>
                                                <li className="swiper-slide card-slider__breed" style={{width: "285px; margin-right: 20px"}}>
                                                                    <a href="/puppies-for-sale/breed/maltese">
                                        <div className="card card--breed">
    <div className="card__display">
        <picture className="">
                    <img id="" alt="" className="card__image lazyloaded" data-cy="" data-src="https://photos.puppyspot.com/breeds/232/card/500415464_medium.jpg" loading="lazy" src="https://photos.puppyspot.com/breeds/232/card/500415464_medium.jpg" />
        </picture>

    </div>
    <div className="card__details">
        <h3>Maltese</h3>
                    <p className="card__description">Gentle, playful and charming</p>
                    </div>
</div>                                    </a>
                                                            </li>
                                                <li className="swiper-slide card-slider__breed" style={{width: "285px; margin-right: 20px"}}>
                                                                    <a href="/puppies-for-sale/breed/poodle">
                                        <div className="card card--breed">
    <div className="card__display">
        <picture className="">
                    <img id="" alt="" className="card__image ls-is-cached lazyloaded" data-cy="" data-src="https://photos.puppyspot.com/breeds/322/card/500421875_medium.jpg" loading="lazy" src="https://photos.puppyspot.com/breeds/322/card/500421875_medium.jpg" />
        </picture>

    </div>
    <div className="card__details">
        <h3>Poodle</h3>
                    <p className="card__description">Active, independent and smart</p>
                    </div>
</div>                                    </a>
                                                            </li>
                                                <li className="swiper-slide card-slider__breed" style={{width: "285px; margin-right: 20px"}}>
                                                                    <a href="/puppies-for-sale/breed/maltipoo">
                                        <div className="card card--breed">
    <div className="card__display">
        <picture className="">
                    <img id="" alt="" className="card__image ls-is-cached lazyloaded" data-cy="" data-src="https://photos.puppyspot.com/breeds/345/card/500415501_medium.jpg" loading="lazy" src="https://photos.puppyspot.com/breeds/345/card/500415501_medium.jpg" />
        </picture>

    </div>
    <div className="card__details">
        <h3>Maltipoo</h3>
                    <p className="card__description">Affectionate, charming and playful</p>
                    </div>
</div>                                    </a>
                                                            </li>
                                                <li className="swiper-slide card-slider__breed" style={{width: "285px; margin-right: 20px"}}>
                                                                    <a href="/puppies-for-sale/breed/chihuahua">
                                        <div className="card card--breed">
    <div className="card__display">
        <picture className="">
                    <img id="" alt="" className=" card__image lazyloading" data-cy="" data-src="https://photos.puppyspot.com/breeds/219/card/500422328_medium.jpg" loading="lazy" src="https://photos.puppyspot.com/breeds/219/card/500422328_medium.jpg" />
        </picture>

    </div>
    <div className="card__details">
        <h3>Chihuahua</h3>
                    <p className="card__description">Graceful, charming and confident</p>
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

export default TeacupDog;
