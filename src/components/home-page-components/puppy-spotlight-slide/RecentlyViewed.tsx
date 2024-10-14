import { useEffect, useRef, useState } from "react";
import "./index.css";

interface Props{
}
const RecentlyViewed: React.FC<Props> = ({}) => {


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


    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false); // Flag to track if the user has scrolled
    const [notEnoghtToScroll, setNotEnoghtToScroll] = useState(false);

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
        if (!notEnoghtToScroll) return;
        if (!isDown || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 1; // Multiply by 1 for normal speed
        const newScrollLeft = scrollLeft - walk; // Calculate new scroll position
        scrollContainerRef.current.scrollLeft = newScrollLeft;
        setIsScrolling(true); // Set the scroll flag to true once movement is detected

        // Update movementCount based on new scrollLeft
        setMovementCount(newScrollLeft);
    };

    // Attach these handlers to your anchors:
    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isScrolling) {
            e.preventDefault(); // If user has scrolled, prevent anchor click
        }
    };

    useEffect(()=>{
        const rightArrow = document.getElementById('recently-viewed-puppy-spotlight-carouselArrowCircleRight');
        const leftArrow = document.getElementById('recently-viewed-puppy-spotlight-carouselArrowCircleLeft');

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

    // Check the total width of the slider and hide the right arrow if no scrolling is needed
    const checkArrowsVisibility = () => {
        const parentElement = document.getElementById('recently-viewed-parent-slider-carousel-holder');
        const sliderElement = document.getElementById('recently-viewed-puppy-spotlight-slider-carousel-holder');
        const rightArrow = document.getElementById('recently-viewed-puppy-spotlight-carouselArrowCircleRight');
        const leftArrow = document.getElementById('recently-viewed-puppy-spotlight-carouselArrowCircleLeft');

        if (parentElement && sliderElement) {
            const sliderWidth = parentElement.clientWidth;
            const scrollableWidth = sliderElement.scrollWidth;

            // If the scrollable width is less than or equal to the parent width, hide the right arrow
            if (scrollableWidth <= sliderWidth) {
                rightArrow!.style.display = 'none';
                leftArrow!.style.display = 'none'; // Hide left arrow as well
                setNotEnoghtToScroll(false)
            } else {
                setNotEnoghtToScroll(true)
                rightArrow!.style.display = 'flex'; // Show right arrow initially
            }
        }
    };

    // Call checkArrowsVisibility when the page loads or the window resizes
    window.addEventListener('load', checkArrowsVisibility);
    window.addEventListener('resize', checkArrowsVisibility);

    return (
        <div            
            ref={scrollContainerRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}  
            id="recently-viewed-parent-slider-carousel-holder" 
            className="carousel-module__wrapper--O59lP featured-puppies-module__carouselWrapper--bYSHH"
        >
            <div id="recently-viewed-puppy-spotlight-carouselArrowCircleLeft" className="featured-puppies-module__carouselArrowCircleLeft--qWBNd" style={{display: "none"}} onClick={handleLeftBtnClick}>
                <img src="/img/carousel-arrow.svg" />
            </div>
            <div id="recently-viewed-puppy-spotlight-carouselArrowCircleRight" className="featured-puppies-module__carouselArrowCircleRight--3M3TT" style={{display: "flex"}} onClick={handleRightBtnClick}>
                <img src="/img/carousel-arrow.svg" />
            </div>
            <div ref={sliderElementRef} id="recently-viewed-puppy-spotlight-slider-carousel-holder" className="carousel-module__content--qDPHs  false featured-puppies-module__carouselContent--5fzAU">

                
                <a 
                    onClick={handleAnchorClick}
                    style={{userSelect: 'none'}}
                    href="/puppies-for-sale/breed/doberman-pinscher/puppy/775233"
                    className="featured-puppies-module__itemWrapper--O0u+N"
                    draggable="false"
                >
                <div className="featured-puppies-module__img--U7ezR">
                    <img
                    width="220"
                    height="220"
                    src="https://photos.puppyspot.com/3/listing/775233/photo/502999977.jpg"
                    draggable="false"
                    loading="lazy"
                    />
                </div>
                <div className="featured-puppies-module__content--A6vru">
                    <div className="featured-puppies-module__descriptionContent--aNTW4">
                    <p className="featured-puppies-module__title--3vIaM">Echo</p>
                    <p className="featured-puppies-module__subtitleLabel--qIScN">
                        Doberman Pinscher
                    </p>
                    <p className="featured-puppies-module__timeLabel--LYtEG">
                        Female · 2 weeks
                    </p>
                    </div>
                    <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="transparent"
                    xmlns="http://www.w3.org/2000/svg"
                    className="featured-puppies-module__heartIcon--jWh5x js-favorite-puppy"
                    data-puppy="775233"
                    >
                    <path
                        d="M3.23853 4.7385C2.92513 5.0519 2.67652 5.42396 2.50691 5.83343C2.3373 6.24291 2.25 6.68178 2.25 7.125C2.25 7.56821 2.3373 8.00709 2.50691 8.41657C2.67652 8.82604 2.92513 9.1981 3.23853 9.5115L9.00003 15.273L14.7615 9.5115C15.3945 8.87856 15.75 8.02011 15.75 7.125C15.75 6.22989 15.3945 5.37144 14.7615 4.7385C14.1286 4.10556 13.2701 3.74998 12.375 3.74998C11.4799 3.74998 10.6215 4.10556 9.98853 4.7385L9.00003 5.727L8.01153 4.7385C7.69813 4.4251 7.32607 4.17649 6.91659 4.00688C6.50712 3.83727 6.06824 3.74997 5.62503 3.74997C5.18181 3.74997 4.74294 3.83727 4.33346 4.00688C3.92399 4.17649 3.55193 4.4251 3.23853 4.7385V4.7385Z"
                        stroke="black"
                        stroke-opacity="0.65"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        style={{pointerEvents: 'none'}}
                    ></path>
                    </svg>
                </div>
                </a>
                <a 
                    onClick={handleAnchorClick}
                    style={{userSelect: 'none'}}
                    href="/puppies-for-sale/breed/shih-tzu/puppy/775223"
                    className="featured-puppies-module__itemWrapper--O0u+N"
                    draggable="false"
                >
                <div className="featured-puppies-module__img--U7ezR">
                    <img
                    width="220"
                    height="220"
                    src="https://photos.puppyspot.com/3/listing/775223/photo/502999798.jpg"
                    draggable="false"
                    loading="lazy"
                    />
                </div>
                <div className="featured-puppies-module__content--A6vru">
                    <div className="featured-puppies-module__descriptionContent--aNTW4">
                    <p className="featured-puppies-module__title--3vIaM">Maggie</p>
                    <p className="featured-puppies-module__subtitleLabel--qIScN">
                        Shih Tzu
                    </p>
                    <p className="featured-puppies-module__timeLabel--LYtEG">
                        Female · 5 weeks
                    </p>
                    </div>
                    <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="transparent"
                    xmlns="http://www.w3.org/2000/svg"
                    className="featured-puppies-module__heartIcon--jWh5x js-favorite-puppy"
                    data-puppy="775223"
                    >
                    <path
                        d="M3.23853 4.7385C2.92513 5.0519 2.67652 5.42396 2.50691 5.83343C2.3373 6.24291 2.25 6.68178 2.25 7.125C2.25 7.56821 2.3373 8.00709 2.50691 8.41657C2.67652 8.82604 2.92513 9.1981 3.23853 9.5115L9.00003 15.273L14.7615 9.5115C15.3945 8.87856 15.75 8.02011 15.75 7.125C15.75 6.22989 15.3945 5.37144 14.7615 4.7385C14.1286 4.10556 13.2701 3.74998 12.375 3.74998C11.4799 3.74998 10.6215 4.10556 9.98853 4.7385L9.00003 5.727L8.01153 4.7385C7.69813 4.4251 7.32607 4.17649 6.91659 4.00688C6.50712 3.83727 6.06824 3.74997 5.62503 3.74997C5.18181 3.74997 4.74294 3.83727 4.33346 4.00688C3.92399 4.17649 3.55193 4.4251 3.23853 4.7385V4.7385Z"
                        stroke="black"
                        stroke-opacity="0.65"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        style={{pointerEvents: 'none'}}
                    ></path>
                    </svg>
                </div>
                </a>
                <a 
                    onClick={handleAnchorClick}
                    style={{userSelect: 'none'}}
                    href="/puppies-for-sale/breed/cavalier-king-charles-spaniel/puppy/775221"
                    className="featured-puppies-module__itemWrapper--O0u+N"
                    draggable="false"
                >
                <div className="featured-puppies-module__img--U7ezR">
                    <img
                    width="220"
                    height="220"
                    src="https://photos.puppyspot.com/1/listing/775221/photo/503000311.jpg"
                    draggable="false"
                    loading="lazy"
                    />
                </div>
                <div className="featured-puppies-module__content--A6vru">
                    <div className="featured-puppies-module__descriptionContent--aNTW4">
                    <p className="featured-puppies-module__title--3vIaM">Reba</p>
                    <p className="featured-puppies-module__subtitleLabel--qIScN">
                        Cavalier King Charles Spaniel
                    </p>
                    <p className="featured-puppies-module__timeLabel--LYtEG">
                        Female · 2 weeks
                    </p>
                    </div>
                    <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="transparent"
                    xmlns="http://www.w3.org/2000/svg"
                    className="featured-puppies-module__heartIcon--jWh5x js-favorite-puppy"
                    data-puppy="775221"
                    >
                    <path
                        d="M3.23853 4.7385C2.92513 5.0519 2.67652 5.42396 2.50691 5.83343C2.3373 6.24291 2.25 6.68178 2.25 7.125C2.25 7.56821 2.3373 8.00709 2.50691 8.41657C2.67652 8.82604 2.92513 9.1981 3.23853 9.5115L9.00003 15.273L14.7615 9.5115C15.3945 8.87856 15.75 8.02011 15.75 7.125C15.75 6.22989 15.3945 5.37144 14.7615 4.7385C14.1286 4.10556 13.2701 3.74998 12.375 3.74998C11.4799 3.74998 10.6215 4.10556 9.98853 4.7385L9.00003 5.727L8.01153 4.7385C7.69813 4.4251 7.32607 4.17649 6.91659 4.00688C6.50712 3.83727 6.06824 3.74997 5.62503 3.74997C5.18181 3.74997 4.74294 3.83727 4.33346 4.00688C3.92399 4.17649 3.55193 4.4251 3.23853 4.7385V4.7385Z"
                        stroke="black"
                        stroke-opacity="0.65"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        style={{pointerEvents: 'none'}}
                    ></path>
                    </svg>
                </div>
                </a>
                

            </div>
        </div>
    )
}
export default RecentlyViewed;
