import React, { useRef, useState } from 'react';
import "./index.css";


interface Props{
}
const FavouritePuppySlider: React.FC<Props> = ({}) => {

    // const [totalWidth, setTotalWidth] = useState<number>(0);
    // useEffect(() => {
    //     const parentElement = document.getElementById('parent-slider-carousel-holder');
        
    //     if (parentElement) {
    //     const childElements = parentElement.children;
    //     let totalWidthSum = 0;

    //     // Iterate over all child elements and accumulate their widths
    //     Array.from(childElements).forEach((child) => {
    //         const childWidth = (child as HTMLElement).offsetWidth;
    //         totalWidthSum += childWidth;
    //     });

    //     // Store the total width in state
    //     setTotalWidth(totalWidthSum);
    //     }
    // }, []);
        

let movementCount = 0; // Keep track of the movement
const handleRightBtnClick = () => {
    const parentElement = document.getElementById('parent-slider-carousel-holder');
    const sliderElement = document.getElementById('slider-carousel-holder');
    const rightArrow = document.getElementById('carouselArrowCircleRight');
    const leftArrow = document.getElementById('carouselArrowCircleLeft');
    
    if (parentElement && sliderElement) {
        const sliderWidth = parentElement.clientWidth; // Width of the parent container
        const maxMovement = sliderElement.scrollWidth - sliderWidth; // Calculate maximum scrollable width

        if (movementCount < maxMovement) {
            movementCount += sliderWidth; // Increment movement by the width of the parent
            if (movementCount >= maxMovement) {
                movementCount = maxMovement; // Cap at maxMovement
                rightArrow!.style.display = 'none'; // Hide right arrow when at the end
            }
            leftArrow!.style.display = 'flex'; // Show left arrow since we're no longer at the start
            sliderElement.style.transform = `translateX(-${movementCount}px)`; // Use negative movement for sliding
        }
    }
};

const handleLeftBtnClick = () => {
    const parentElement = document.getElementById('parent-slider-carousel-holder');
    const sliderElement = document.getElementById('slider-carousel-holder');
    const rightArrow = document.getElementById('carouselArrowCircleRight');
    const leftArrow = document.getElementById('carouselArrowCircleLeft');

    if (parentElement && sliderElement) {
        const sliderWidth = parentElement.clientWidth; // Width of the parent container

        // Only slide left if we are not already at the beginning
        if (movementCount > 0) {
            movementCount -= sliderWidth; // Decrease by the parent width
            if (movementCount <= 0) {
                movementCount = 0; // Ensure it doesn't go below 0 (i.e., the start)
                leftArrow!.style.display = 'none'; // Hide left arrow when at the start
            }
            rightArrow!.style.display = 'flex'; // Show right arrow since we're no longer at the end
            sliderElement.style.transform = `translateX(-${movementCount}px)`; // Slide to the left by `movementCount`
        }
    }
};

  
  return (

    <div id='parent-slider-carousel-holder' className="carousel-module__wrapper--O59lP favorite-breeds-module__wrapperCarousel--EqX9F" style={{width: 'fit-content'}}>
        <div id='carouselArrowCircleLeft' className="favorite-breeds-module__carouselArrowCircleLeft--u68nI" style={{display: "none", zIndex: '5'}} onClick={handleLeftBtnClick}><img src="/img/carousel-arrow.svg"/></div>
        <div id='carouselArrowCircleRight' className="favorite-breeds-module__carouselArrowCircleRight--s3r4f" style={{display: "flex", zIndex: '5'}} onClick={handleRightBtnClick}><img src="/img/carousel-arrow.svg"/></div>
        
        <div id='slider-carousel-holder' className="carousel-module__content--qDPHs  false favorite-breeds-module__contentCarousel--5rbX1">
            <div className="favorite-breeds-module__paddingDiv--mD7Bq"></div>
            
            <a href="/puppies-for-sale/breed/goldendoodle" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/38iL0zXQB2pXvBpHESxB" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Goldendoodle</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

            <a href="/puppies-for-sale/breed/cavapoo" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/rgvy4FzeTIeT0s0wczjM" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Cavapoo</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

            <a href="/puppies-for-sale/breed/Poodle" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/HpAuycLVTW6RkJ6tinDR" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Poodle</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

            <a href="/puppies-for-sale/breed/bernedoodle" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/6BVcLW0aSGYxpPYyEYkn" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Bernedoodle</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

            <a href="/puppies-for-sale/breed/golden-retriever" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/7hUftqFZS5YnXo2Un0cw" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Golden Retriever</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

            <a href="/puppies-for-sale/breed/dachshund" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/BghzZPMxStixVmA5N0yW" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Dachshund</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

            <a href="/puppies-for-sale/breed/french-bulldog" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/2AaYDX5eT7albkpVsgC0" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">French Bulldog</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

            <a href="/puppies-for-sale/breed/cavalier-king-charles-spaniel" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/DfWbKjqTQDJdULZxrO4L" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Cavalier King Charles Spaniel</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

            <a href="/puppies-for-sale/breed/havanese" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/kzKMYVqbRh6UnMUmCg0M" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Havanese</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

            <a href="/puppies-for-sale/breed/labrador-retriever" className="favorite-breeds-module__pointer--cun1c" draggable="false">
                <img className="favorite-breeds-module__image--GygMi" src="https://cdn.buttercms.com/JJEoMHEpTd8LQr7ezHlV" draggable="false" loading="lazy"/>
                <div className="favorite-breeds-module__nameWrapper--1IRCA">
                    <span className="favorite-breeds-module__name--kGVJp favorite-breeds-module__pointer--cun1c">Labrador Retriever</span>
                    <img src="https://www.puppyspot.com/preact/./img/caret.svg"/>
                </div>
            </a>

        </div>
    </div>
            
  );
}

export default FavouritePuppySlider;
