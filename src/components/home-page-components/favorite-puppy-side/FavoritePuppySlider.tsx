import React, { useEffect, useRef, useState } from 'react';
import "./index.css";
import ScrollContainer from 'react-indiana-drag-scroll';


interface Props{
}
const FavouritePuppySlider: React.FC<Props> = ({}) => {

    const [movementCount, setMovementCount] = useState(0); // Use state for movementCount
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const sliderElementRef = useRef<HTMLDivElement>(null);
    
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
    
    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                const scrollLeft = scrollContainerRef.current.scrollLeft;
                setMovementCount(scrollLeft); // Update movementCount based on the scrollLeft value
    
                const maxScrollLeft = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
                const rightArrow = document.getElementById('carouselArrowCircleRight');
                const leftArrow = document.getElementById('carouselArrowCircleLeft');
    
                if (scrollLeft <= 0) {
                    leftArrow!.style.display = 'none';
                } else {
                    leftArrow!.style.display = 'flex';
                }
    
                if (scrollLeft >= maxScrollLeft) {
                    rightArrow!.style.display = 'none';
                } else {
                    rightArrow!.style.display = 'flex';
                }
            }
        };
    
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }
    
        // Cleanup the event listener on component unmount
        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);
  
  return (
        <div 
            id='parent-slider-carousel-holder' 
            className="carousel-module__wrapper--O59lP favorite-breeds-module__wrapperCarousel--EqX9F" 
            style={{width: 'fit-content'}}
        >
            
            <ScrollContainer vertical={false} innerRef={scrollContainerRef} style={{scrollBehavior: 'smooth'}}>
                <div id='carouselArrowCircleLeft' className="favorite-breeds-module__carouselArrowCircleLeft--u68nI" style={{display: "none", zIndex: '5'}} onClick={handleLeftBtnClick}><img src="/img/carousel-arrow.svg"/></div>
                <div id='carouselArrowCircleRight' className="favorite-breeds-module__carouselArrowCircleRight--s3r4f" style={{display: "flex", zIndex: '5'}} onClick={handleRightBtnClick}><img src="/img/carousel-arrow.svg"/></div>
                
                <div ref={sliderElementRef} id='slider-carousel-holder' className="carousel-module__content--qDPHs  false favorite-breeds-module__contentCarousel--5rbX1 special-scroll-slider-prop">
                    <div className="favorite-breeds-module__paddingDiv--mD7Bq"></div>
                    

                        <a href="/puppies-for-sale/breed/goldendoodle" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                            <img className="favorite-breeds-module__image--GygMi" src="/img/favourite-dogs/Goldendoodle.webp" draggable="false" loading="lazy"/>
                            <div className="favorite-breeds-module__nameWrapper--1IRCA">
                                <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Goldendoodle</span>
                                <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                            </div>
                        </a>

                        <a href="/puppies-for-sale/breed/cavapoo" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                            <img className="favorite-breeds-module__image--GygMi" src="/img/favourite-dogs/Cavapoo.webp" draggable="false" loading="lazy"/>
                            <div className="favorite-breeds-module__nameWrapper--1IRCA">
                                <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Cavapoo</span>
                                <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                            </div>
                        </a>

                        <a href="/puppies-for-sale/breed/Poodle" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                            <img className="favorite-breeds-module__image--GygMi" src="/img/favourite-dogs/Poodle.webp" draggable="false" loading="lazy"/>
                            <div className="favorite-breeds-module__nameWrapper--1IRCA">
                                <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Poodle</span>
                                <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                            </div>
                        </a>

                        <a href="/puppies-for-sale/breed/bernedoodle" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                            <img className="favorite-breeds-module__image--GygMi" src="/img/favourite-dogs/Bernedoodle.webp" draggable="false" loading="lazy"/>
                            <div className="favorite-breeds-module__nameWrapper--1IRCA">
                                <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Bernedoodle</span>
                                <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                            </div>
                        </a>

                        <a href="/puppies-for-sale/breed/golden-retriever" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                            <img className="favorite-breeds-module__image--GygMi" src="/img/favourite-dogs/Labrador Retiever.webp" draggable="false" loading="lazy"/>
                            <div className="favorite-breeds-module__nameWrapper--1IRCA">
                                <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Golden Retriever</span>
                                <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                            </div>
                        </a>

                        <a href="/puppies-for-sale/breed/dachshund" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                            <img className="favorite-breeds-module__image--GygMi" src="/img/favourite-dogs/Dachshund.webp" draggable="false" loading="lazy"/>
                            <div className="favorite-breeds-module__nameWrapper--1IRCA">
                                <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Dachshund</span>
                                <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                            </div>
                        </a>

                        <a href="/puppies-for-sale/breed/french-bulldog" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                            <img className="favorite-breeds-module__image--GygMi" src="/img/favourite-dogs/French Bulldog.webp" draggable="false" loading="lazy"/>
                            <div className="favorite-breeds-module__nameWrapper--1IRCA">
                                <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">French Bulldog</span>
                                <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                            </div>
                        </a>

                        <a href="/puppies-for-sale/breed/cavalier-king-charles-spaniel" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                            <img className="favorite-breeds-module__image--GygMi" src="/img/favourite-dogs/Cavalier King Charles Spaniel.webp" draggable="false" loading="lazy"/>
                            <div className="favorite-breeds-module__nameWrapper--1IRCA">
                                <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Cavalier King Charles Spaniel</span>
                                <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                            </div>
                        </a>

                        <a href="/puppies-for-sale/breed/havanese" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                            <img className="favorite-breeds-module__image--GygMi" src="/img/favourite-dogs/Havanese.webp" draggable="false" loading="lazy"/>
                            <div className="favorite-breeds-module__nameWrapper--1IRCA">
                                <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Havanese</span>
                                <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                            </div>
                        </a>

                        <a href="/puppies-for-sale/breed/labrador-retriever" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                            <img className="favorite-breeds-module__image--GygMi" src="/img/favourite-dogs/Labrador choco 3.webp" draggable="false" loading="lazy"/>
                            <div className="favorite-breeds-module__nameWrapper--1IRCA">
                                <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Labrador Retriever</span>
                                <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                            </div>
                        </a>
                </div>
            </ScrollContainer>
            
        </div>
  );
}

export default FavouritePuppySlider;
