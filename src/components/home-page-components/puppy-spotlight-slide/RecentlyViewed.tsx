import { useEffect, useRef, useState } from "react";
import "./index.css";
import ScrollContainer from 'react-indiana-drag-scroll';
import LoginPopup from "../../popups/single-puppy-popups/LoginPopup";
import AllPuppies from "../../../data/puppy-data/all_puppies.json"

interface Props{
    recentlyViewed: any[];
}
const getPuppiesByIds = (idArray: string[], allPuppies: any[]) => {
    return allPuppies.filter((puppy) => idArray.includes(puppy.puppy_id));
};
const RecentlyViewed: React.FC<Props> = ({ recentlyViewed }) => {

    const [movementCount, setMovementCount] = useState(0); // Use state for movementCount
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const sliderElementRef = useRef<HTMLDivElement>(null);
    const [loginPopup, setLoginPopup] = useState(false)
    const [notEnoghtToScroll, setNotEnoghtToScroll] = useState(false)
    const filteredPuppies = getPuppiesByIds(recentlyViewed, AllPuppies);

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
                const rightArrow = document.getElementById('recently-viewed-puppy-spotlight-carouselArrowCircleRight');
                const leftArrow = document.getElementById('recently-viewed-puppy-spotlight-carouselArrowCircleLeft');
    
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


    const handleLike =(e: React.MouseEvent<SVGSVGElement, MouseEvent>)=>{
        e.preventDefault();
        e.stopPropagation();
        setLoginPopup(true)
    }

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
        <>
            <div            
                id="recently-viewed-parent-slider-carousel-holder" 
                className="carousel-module__wrapper--O59lP featured-puppies-module__carouselWrapper--bYSHH"
            >
                <ScrollContainer vertical={false} innerRef={scrollContainerRef} style={{scrollBehavior: 'smooth'}}>
                    <div id="recently-viewed-puppy-spotlight-carouselArrowCircleLeft" className="featured-puppies-module__carouselArrowCircleLeft--qWBNd" style={{display: "none"}} onClick={handleLeftBtnClick}>
                        <img src="/img/carousel-arrow.svg" />
                    </div>
                    <div id="recently-viewed-puppy-spotlight-carouselArrowCircleRight" className="featured-puppies-module__carouselArrowCircleRight--3M3TT" style={{display: "flex"}} onClick={handleRightBtnClick}>
                        <img src="/img/carousel-arrow.svg" />
                    </div>
                    <div ref={sliderElementRef} id="recently-viewed-puppy-spotlight-slider-carousel-holder" className="carousel-module__content--qDPHs  false featured-puppies-module__carouselContent--5fzAU">

                        
                        {
                            filteredPuppies.map((item, index) => {
                                return (
                                    <a 
                                        key={index}
                                        style={{userSelect: 'none'}}
                                        href={item.link}
                                        className="featured-puppies-module__itemWrapper--O0u+N"
                                        draggable="false"
                                    >
                                    <div className="featured-puppies-module__img--U7ezR">
                                        <img
                                            width="220"
                                            height="220"
                                            src={item.image}
                                            draggable="false"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="featured-puppies-module__content--A6vru">
                                        <div className="featured-puppies-module__descriptionContent--aNTW4">
                                        <p className="featured-puppies-module__title--3vIaM">{item.name}</p>
                                        <p className="featured-puppies-module__subtitleLabel--qIScN">
                                            {item.breed}
                                        </p>
                                        <p className="featured-puppies-module__timeLabel--LYtEG">
                                            {item.sex} · {item.age} week{Number(item.age) > 1 ? 's' : ''}
                                        </p>
                                        </div>
                                        <svg
                                        onClick={(e) =>handleLike(e)}
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="transparent"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="featured-puppies-module__heartIcon--jWh5x js-favorite-puppy"
                                        data-puppy={item.puppy_id}
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
                                )
                            })
                        }
                        

                    </div>
                </ScrollContainer>
            </div>

            <LoginPopup loginPopup={loginPopup}  setLoingPopup={setLoginPopup}/>
        </>
    )
}
export default RecentlyViewed;
