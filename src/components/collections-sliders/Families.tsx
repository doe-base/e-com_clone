import { useEffect, useRef, useState } from "react";
import "./index.css";
import ScrollContainer from 'react-indiana-drag-scroll';


interface Props{
}
const Families: React.FC<Props> = ({}) => {
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
                                <a className="hyperlink black" href="/breed/collections/best-family-dogs" style={{color: '#000'}}>
                            Popular Breeds for Families
                                </a>
                                                <a className="hyperlink" href="/breed/collections/best-family-dogs">
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
                                                                    <a href="/puppies-for-sale/breed/goldendoodle">
                                        <div className="card card--breed">
    <div className="card__display">
        <picture className="">
                    <img id="" alt="" className="card__image ls-is-cached lazyloaded" data-cy="" data-src="https://photos.puppyspot.com/breeds/334/card/500786611_medium.jpg" loading="lazy" src="https://photos.puppyspot.com/breeds/334/card/500786611_medium.jpg" />
        </picture>

    </div>
    <div className="card__details">
        <h3>Goldendoodle</h3>
                    <p className="card__description">Friendly, smart and devoted</p>
                    </div>
</div>                                    </a>
                                                            </li>
                                                <li className="swiper-slide card-slider__breed swiper-slide-next" style={{width: "285px; margin-right: 20px"}}>
                                                                    <a href="/puppies-for-sale/breed/labrador-retriever">
                                        <div className="card card--breed">
    <div className="card__display">
        <picture className="">
                    <img id="" alt="" className="card__image ls-is-cached lazyloaded" data-cy="" data-src="https://photos.puppyspot.com/breeds/231/card/500421880_medium.jpg" loading="lazy" src="https://photos.puppyspot.com/breeds/231/card/500421880_medium.jpg" />
        </picture>

    </div>
    <div className="card__details">
        <h3>Labrador Retriever</h3>
                    <p className="card__description">Friendly, active and brave</p>
                    </div>
</div>                                    </a>
                                                            </li>
                                                <li className="swiper-slide card-slider__breed" style={{width: "285px; margin-right: 20px"}}>
                                                                    <a href="/puppies-for-sale/breed/labradoodle">
                                        <div className="card card--breed">
    <div className="card__display">
        <picture className="">
                    <img id="" alt="" className="card__image lazyloaded" data-cy="" data-src="https://photos.puppyspot.com/breeds/327/card/500425943_medium.jpg" loading="lazy" src="https://photos.puppyspot.com/breeds/327/card/500425943_medium.jpg" />
        </picture>

    </div>
    <div className="card__details">
        <h3>Labradoodle</h3>
                    <p className="card__description">Friendly, smart and affectionate</p>
                    </div>
</div>                                    </a>
                                                            </li>
                                                <li className="swiper-slide card-slider__breed" style={{width: "285px; margin-right: 20px"}}>
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
                                                <li className="swiper-slide card-slider__breed" style={{width: "285px; margin-right: 20px"}}>
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
                                                <li className="swiper-slide card-slider__breed" style={{width: "285px; margin-right: 20px"}}>
                                                                    <a href="/puppies-for-sale/breed/bulldog">
                                        <div className="card card--breed">
    <div className="card__display">
        <picture className="">
                    <img id="" alt="" className=" card__image lazyloading" data-cy="" data-src="https://photos.puppyspot.com/breeds/214/card/500412403_medium.jpg" loading="lazy" src="https://photos.puppyspot.com/breeds/214/card/500412403_medium.jpg" />
        </picture>

    </div>
    <div className="card__details">
        <h3>Bulldog</h3>
                    <p className="card__description">Calm, friendly and brave</p>
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

export default Families;
