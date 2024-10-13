import { useEffect, useRef, useState } from "react";

interface Props{
}
const PuppyCharacterSlide: React.FC<Props> = ({}) => {
    const [movementCount, setMovementCount] = useState(0); // Use state for movementCount
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const sliderElementRef = useRef<HTMLDivElement>(null);

    const handleTrackBarMovment =(newMovementCount: number)=>{
        if (!scrollContainerRef.current || !sliderElementRef.current) {
            return;
        }
    
        const sliderWidth = scrollContainerRef.current.clientWidth;
        const maxMovement = sliderElementRef.current.scrollWidth - sliderWidth;
        const trackerBar = document.getElementById('puppy-character-trusted-slider-tracker-bar');
        const trackerBarParent = document.getElementById('puppy-character-trusted-slider-tracker-bar-parent');
    
        if (!trackerBar || !trackerBarParent) {
            return;
        }
    
        const trackerMaxWidth = trackerBarParent.clientWidth - trackerBar.clientWidth; // Parent width minus bar width
        const percentageMoved = newMovementCount / maxMovement; // Percentage moved across the slider
        
        // Ensure the tracker bar stays within bounds
        const newLeft = Math.max(0, Math.min(percentageMoved * trackerMaxWidth, trackerMaxWidth));
    
        trackerBar.style.left = `${newLeft}px`; // Set new left position of tracker bar
    }

    const handleRightBtnClick = () => {

        if (scrollContainerRef.current && sliderElementRef.current) {
            const sliderWidth = scrollContainerRef.current.clientWidth; // Width of the parent container
            const maxMovement = sliderElementRef.current.scrollWidth  - sliderWidth;
    
            if (movementCount < maxMovement) {
                const newMovementCount = Math.min(movementCount + sliderWidth, maxMovement); // Cap at maxMovement
                setMovementCount(newMovementCount);
                scrollContainerRef.current.scrollLeft = newMovementCount

                handleTrackBarMovment(newMovementCount)
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

                handleTrackBarMovment(newMovementCount)
            }

        }
    };
    
    

    const onMouseDown = (e: React.MouseEvent) => {
        if (!scrollContainerRef.current) return;
        setIsDown(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
        setIsScrolling(false); // Reset scroll flag when mouse is pressed down
    };
    const onMouseLeave = () => {
        setIsDown(false);
    };
    const onMouseUp = (e: React.MouseEvent) => {
        setIsDown(false);
        if (isScrolling) {
            e.preventDefault(); // Prevent click if the user scrolled
        }
    };
    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDown || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 1; // Multiply by 1 for normal speed
        const newScrollLeft = scrollLeft - walk; // Calculate new scroll position
        scrollContainerRef.current.scrollLeft = newScrollLeft;
        setIsScrolling(true); // Set the scroll flag to true once movement is detected
    
        // Update movementCount based on new scrollLeft
        setMovementCount(newScrollLeft);

        handleTrackBarMovment(newScrollLeft)
    };
    

    useEffect(()=>{
        const rightArrow = document.getElementById('puppy-character-carouselArrowCircleRight-trusted_slider');
        const leftArrow = document.getElementById('puppy-character-carouselArrowCircleLeft-trusted_slider');
    
        if (scrollContainerRef.current){
            const maxScrollLeft = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
        
            if (movementCount <= 0) {
                // We're at the start of the slider
                leftArrow!.style.display = 'none';
            } else {
                leftArrow!.style.display = 'flex';
            }
        
            if (movementCount >= maxScrollLeft) {
                // We're at the end of the slider
                rightArrow!.style.display = 'none';
            } else {
                rightArrow!.style.display = 'flex';
            }
        }
    }, [movementCount])

    // Attach these handlers to your anchors:
    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isScrolling) {
            e.preventDefault(); // If user has scrolled, prevent anchor click
        }
    };


    return (
        <>
            <div className="puppy-collections-module__carouselOutsideWrapper--sP7PV">

                <div                 
                    ref={scrollContainerRef}
                    onMouseDown={onMouseDown}
                    onMouseLeave={onMouseLeave}
                    onMouseUp={onMouseUp}
                    onMouseMove={onMouseMove}  
                    id="puppy-character-parent-carousel-module__wrapper" 
                    className="carousel-module__wrapper--O59lP puppy-collections-module__carouselWrapper--9nBE1"
                >
                    <div id="puppy-character-carouselArrowCircleLeft-trusted_slider" className="puppy-collections-module__carouselArrowCircleLeft--bmUIM" style={{display: "none", zIndex: '4'}} onClick={handleLeftBtnClick}>
                        <img src="https://www.puppyspot.com/preact/./img/carousel-arrow.svg" />
                    </div>

                    <div id="puppy-character-carouselArrowCircleRight-trusted_slider" className="puppy-collections-module__carouselArrowCircleRight--KpvQM" style={{display: "flex", zIndex: '4'}} onClick={handleRightBtnClick}>
                        <img src="https://www.puppyspot.com/preact/./img/carousel-arrow.svg" />
                    </div>

                    <div ref={sliderElementRef} id="puppy-character-child-carousel-module__wrapper" className="carousel-module__content--qDPHs false puppy-collections-module__carouselContent--phAfk">
                        <a
                            onClick={handleAnchorClick}
                            style={{userSelect: 'none'}}
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
                            onClick={handleAnchorClick}
                            style={{userSelect: 'none'}}
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
                            onClick={handleAnchorClick}
                            style={{userSelect: 'none'}}
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
                            onClick={handleAnchorClick}
                            style={{userSelect: 'none'}}
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
                            onClick={handleAnchorClick}
                            style={{userSelect: 'none'}}
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
                            onClick={handleAnchorClick}
                            style={{userSelect: 'none'}}
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
                    <div id="puppy-character-trusted-slider-tracker-bar" className="responsive-puppy-character-slider-trackbar puppy-collections-module__insideBar--yPSGF" style={{width: "55.5vw", left: "calc(0%)"}}></div>
                </div>
            </div>
        </>
    )
}

export default PuppyCharacterSlide;