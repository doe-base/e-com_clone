import { useEffect, useState } from "react";

interface Props{
}
const PuppyCharacterSlide: React.FC<Props> = ({}) => {
    useEffect(() => {
        // Get the parent container and tracker bar elements by their IDs
        const parentContainer = document.getElementById("puppy-character-trusted-slider-tracker-bar-parent");
        const trackerBar = document.getElementById("puppy-character-trusted-slider-tracker-bar");
    
        if (parentContainer && trackerBar) {
          // Get the width of the parent container
          const parentWidth = parentContainer.offsetWidth;
    
          // Set the width of the tracker bar as a percentage of the parent's width
          const trackerWidth = parentWidth * 0.5; // For example, 20% of the parent width
          trackerBar.style.width = `${trackerWidth}px`;
        }
      }, []);

    let movementCount = 0; // Keep track of the movement
    const handleRightBtnClick = () => {
        const parentElement = document.getElementById('puppy-character-parent-carousel-module__wrapper');
        const sliderElement = document.getElementById('puppy-character-child-carousel-module__wrapper');
        const rightArrow = document.getElementById('puppy-character-carouselArrowCircleRight-trusted_slider');
        const leftArrow = document.getElementById('puppy-character-carouselArrowCircleLeft-trusted_slider');
        const trackerBar = document.getElementById('puppy-character-trusted-slider-tracker-bar'); // Tracking bar
        const trackerBarParent = document.getElementById('puppy-character-trusted-slider-tracker-bar-parent'); // Parent of tracker bar
    
        if (parentElement && sliderElement && trackerBar && trackerBarParent) {
            const sliderWidth = parentElement.clientWidth; // Width of the parent container
            const maxMovement = sliderElement.scrollWidth - sliderWidth; // Maximum scrollable width of slider
            const trackerMaxWidth = trackerBarParent.clientWidth - trackerBar.clientWidth; // Parent width minus bar width
    
            if (movementCount < maxMovement) {
                movementCount += sliderWidth; // Increment movement by the width of the parent
                if (movementCount >= maxMovement) {
                    movementCount = maxMovement; // Cap at maxMovement
                    rightArrow!.style.display = 'none'; // Hide right arrow at the end
                }
                leftArrow!.style.display = 'flex'; // Show left arrow
                console.log(leftArrow)
    
                // Update slider position
                sliderElement.style.transform = `translateX(-${movementCount}px)`;
    
                // Calculate the tracker bar's new position based on movement
                const percentageMoved = movementCount / maxMovement; // Percentage moved across the slider
                const newLeft = percentageMoved * trackerMaxWidth; // Left position proportional to parent width
                trackerBar.style.left = `${newLeft}px`; // Set new left position of tracker bar
            }
        }
    };
    const handleLeftBtnClick = () => {
        const parentElement = document.getElementById('puppy-character-parent-carousel-module__wrapper');
        const sliderElement = document.getElementById('puppy-character-child-carousel-module__wrapper');
        const rightArrow = document.getElementById('puppy-character-carouselArrowCircleRight-trusted_slider');
        const leftArrow = document.getElementById('puppy-character-carouselArrowCircleLeft-trusted_slider');
        const trackerBar = document.getElementById('puppy-character-trusted-slider-tracker-bar'); // Tracking bar
        const trackerBarParent = document.getElementById('puppy-character-trusted-slider-tracker-bar-parent'); // Parent of tracker bar
    
        if (parentElement && sliderElement && trackerBar && trackerBarParent) {
            const sliderWidth = parentElement.clientWidth; // Width of the parent container
            const maxMovement = sliderElement.scrollWidth - sliderWidth; // Maximum scrollable width of slider
            const trackerMaxWidth = trackerBarParent.clientWidth - trackerBar.clientWidth; // Parent width minus bar width
    
            if (movementCount > 0) {
                movementCount -= sliderWidth; // Decrease by the parent width
                if (movementCount <= 0) {
                    movementCount = 0; // Ensure it doesn't go below 0 (start)
                    leftArrow!.style.display = 'none'; // Hide left arrow at the start
                }
                rightArrow!.style.display = 'flex'; // Show right arrow
    
                // Update slider position
                sliderElement.style.transform = `translateX(-${movementCount}px)`;
    
                // Calculate the tracker bar's new position based on movement
                const percentageMoved = movementCount / maxMovement; // Percentage moved across the slider
                const newLeft = percentageMoved * trackerMaxWidth; // Left position proportional to parent width
                trackerBar.style.left = `${newLeft}px`; // Set new left position of tracker bar
            }
        }
    };
    return (
        <>
            <div className="puppy-collections-module__carouselOutsideWrapper--sP7PV">

                <div id="puppy-character-parent-carousel-module__wrapper" className="carousel-module__wrapper--O59lP puppy-collections-module__carouselWrapper--9nBE1">
                    <div id="puppy-character-carouselArrowCircleLeft-trusted_slider" className="puppy-collections-module__carouselArrowCircleLeft--bmUIM" style={{display: "none", zIndex: '4'}} onClick={handleLeftBtnClick}>
                        <img src="https://www.puppyspot.com/preact/./img/carousel-arrow.svg" />
                    </div>

                    <div id="puppy-character-carouselArrowCircleRight-trusted_slider" className="puppy-collections-module__carouselArrowCircleRight--KpvQM" style={{display: "flex", zIndex: '4'}} onClick={handleRightBtnClick}>
                        <img src="https://www.puppyspot.com/preact/./img/carousel-arrow.svg" />
                    </div>

                    <div id="puppy-character-child-carousel-module__wrapper" className="carousel-module__content--qDPHs false puppy-collections-module__carouselContent--phAfk">
                        <a
                            href="/breed/collections/active-dogs"
                            className="puppy-collections-module__carouselItemWrapper--mm+9f"
                            draggable="false"
                            ><div className="puppy-collections-module__carouselItemContent--I4OXN">
                            <img
                                className="puppy-collections-module__carouselItemImage--Mfq83"
                                src="https://www.puppyspot.com/preact/./img/active-dog-breeds.svg"
                                draggable="false"
                                loading="lazy"
                            />
                            <div className="puppy-collections-module__itemLabel--sZrSo">
                                Active Dog Breeds<img
                                className="puppy-collections-module__itemCaret--dOkfu"
                                src="https://www.puppyspot.com/preact/./img/puppy-collections-caret.svg"
                                />
                            </div></div>
                        </a>
                        <a
                            href="/breed/collections/best-apartment-dogs"
                            className="puppy-collections-module__carouselItemWrapper--mm+9f"
                            draggable="false"
                            ><div className="puppy-collections-module__carouselItemContent--I4OXN">
                            <img
                                className="puppy-collections-module__carouselItemImage--Mfq83"
                                src="https://www.puppyspot.com/preact/./img/apartment-breeds.svg"
                                draggable="false"
                                loading="lazy"
                            />
                            <div className="puppy-collections-module__itemLabel--sZrSo">
                                Apartment Breeds<img
                                className="puppy-collections-module__itemCaret--dOkfu"
                                src="https://www.puppyspot.com/preact/./img/puppy-collections-caret.svg"
                                />
                            </div></div>
                        </a>
                        <a
                            href="/breed/collections/doodle-puppies"
                            className="puppy-collections-module__carouselItemWrapper--mm+9f"
                            draggable="false"
                            ><div className="puppy-collections-module__carouselItemContent--I4OXN">
                            <img
                                className="puppy-collections-module__carouselItemImage--Mfq83 puppy-collections-module__bordered--j7Vry"
                                src="https://www.puppyspot.com/preact/./img/doodle-breeds.svg"
                                draggable="false"
                                loading="lazy"
                            />
                            <div className="puppy-collections-module__itemLabel--sZrSo">
                                Doodle Breeds<img
                                className="puppy-collections-module__itemCaret--dOkfu"
                                src="https://www.puppyspot.com/preact/./img/puppy-collections-caret.svg"
                                />
                            </div></div>
                        </a>
                        <a
                            href="/breed/collections/best-family-dogs"
                            className="puppy-collections-module__carouselItemWrapper--mm+9f"
                            draggable="false"
                            ><div className="puppy-collections-module__carouselItemContent--I4OXN">
                            <img
                                className="puppy-collections-module__carouselItemImage--Mfq83"
                                src="https://www.puppyspot.com/preact/./img/family-breeds.svg"
                                draggable="false"
                                loading="lazy"
                            />
                            <div className="puppy-collections-module__itemLabel--sZrSo">
                                Family Breeds<img
                                className="puppy-collections-module__itemCaret--dOkfu"
                                src="https://www.puppyspot.com/preact/./img/puppy-collections-caret.svg"
                                />
                            </div></div>
                        </a>
                        <a
                            href="/breed/collections/allergy-friendly-dogs"
                            className="puppy-collections-module__carouselItemWrapper--mm+9f"
                            draggable="false"
                            ><div className="puppy-collections-module__carouselItemContent--I4OXN">
                            <img
                                className="puppy-collections-module__carouselItemImage--Mfq83"
                                src="https://www.puppyspot.com/preact/./img/hypoallergenic.svg"
                                draggable="false"
                                loading="lazy"
                            />
                            <div className="puppy-collections-module__itemLabel--sZrSo">
                                Hypoallergenic<img
                                className="puppy-collections-module__itemCaret--dOkfu"
                                src="https://www.puppyspot.com/preact/./img/puppy-collections-caret.svg"
                                />
                            </div></div>
                        </a>
                        <a
                            href="/breed/collections/teacup-puppies"
                            className="puppy-collections-module__carouselItemWrapper--mm+9f"
                            draggable="false"
                            ><div className="puppy-collections-module__carouselItemContent--I4OXN">
                            <img
                                className="puppy-collections-module__carouselItemImage--Mfq83"
                                src="https://www.puppyspot.com/preact/./img/teacup-breeds.svg"
                                draggable="false"
                                loading="lazy"
                            />
                            <div className="puppy-collections-module__itemLabel--sZrSo">
                                Teacup Breeds<img
                                className="puppy-collections-module__itemCaret--dOkfu"
                                src="https://www.puppyspot.com/preact/./img/puppy-collections-caret.svg"
                                />
                            </div></div>
                        </a>
                    </div>

                </div>

            </div>

            <div id="puppy-character-trusted-slider-tracker-bar-parent" className="puppy-collections-module__barWrapper---b23T">
                <div className="puppy-collections-module__outsideBar--tiwtO">
                    <div id="puppy-character-trusted-slider-tracker-bar" className="puppy-collections-module__insideBar--yPSGF" style={{width: "calc(16.6503% + 2px)", left: "calc(0%)"}}></div>
                </div>
            </div>
        </>
    )
}

export default PuppyCharacterSlide;