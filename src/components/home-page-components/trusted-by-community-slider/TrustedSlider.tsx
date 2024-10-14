import { useEffect, useRef, useState } from "react";
import "./index.css"

interface Props{
}
const TrustedSlider: React.FC<Props> = ({}) => {
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
        const trackerBar = document.getElementById('trusted-slider-tracker-bar');
        const trackerBarParent = document.getElementById('trusted-slider-tracker-bar-parent');
    
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
        const rightArrow = document.getElementById('carouselArrowCircleRight-trusted_slider');
        const leftArrow = document.getElementById('carouselArrowCircleLeft-trusted_slider');
    
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




    return(
        <div className="trusted-by-community-module__sectionRight--zkUIU">
            <div 
                ref={scrollContainerRef}
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
                onMouseUp={onMouseUp}
                onMouseMove={onMouseMove} 
                id="parent-carousel-module__wrapper" 
                className="carousel-module__wrapper--O59lP"
            >
                <div id="carouselArrowCircleLeft-trusted_slider" className="trusted-by-community-module__carouselArrowCircleLeft--S7twT" style={{display: "none"}} onClick={handleLeftBtnClick}>
                    <img src="/img/carousel-arrow.svg" />
                </div>
                <div id="carouselArrowCircleRight-trusted_slider" className="trusted-by-community-module__carouselArrowCircleRight--c8e5w"style={{display: "flex"}} onClick={handleRightBtnClick}>
                    <img src="/img/carousel-arrow.svg" />
                </div>

                <div ref={sliderElementRef} id="child-carousel-module__wrapper" className="carousel-module__content--qDPHs false trusted-by-community-module__carouselContent--cNBUb">

                    <div className="trusted-by-community-module__itemFlexItem--hnQXC" style={{userSelect: 'none'}}>
                        <div className="trusted-by-community-module__itemWrapper--RB3sa">
                        <img
                            draggable="false"
                            className="trusted-by-community-module__itemImage--W95SX"
                            src="https://cdn-yotpo-images-production.yotpo.com/Review/634219690/617358142/original.jpg?1728218283"
                            loading="lazy"
                        />
                        <div className="trusted-by-community-module__itemContent--PNEfz">
                            <div className="trusted-by-community-module__itemStars--E9nzp">
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"
                                ></path>
                                </svg>
                            </div>
                            </div>
                            <div className="trusted-by-community-module__reviewContent--U-TcQ">
                            We received our second Bernadoodle from the PuppySpot and he is
                            equally as amazing as puppy #1. He came healthy and clean via van
                            transport. The transport company communicated regularly with us as
                            they avoided hurricane Helene. We are loving every moment with our
                            new pup and look forward to giving him the best life possible.
                            </div>
                            <div className="trusted-by-community-module__reviewQuote--BoFUw">
                            - <b>Dawn J.</b>, Florida
                            </div>
                            <div className="trusted-by-community-module__createdAt--w5q4-">
                            10/06/2024
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="trusted-by-community-module__itemFlexItem--hnQXC" style={{userSelect: 'none'}}>
                        <div className="trusted-by-community-module__itemWrapper--RB3sa">
                        <img
                            draggable="false"
                            className="trusted-by-community-module__itemImage--W95SX"
                            src="https://cdn-yotpo-images-production.yotpo.com/Review/633425308/616414931/original.jpg?1727963628"
                            loading="lazy"
                        />
                        <div className="trusted-by-community-module__itemContent--PNEfz">
                            <div className="trusted-by-community-module__itemStars--E9nzp">
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"
                                ></path>
                                </svg>
                            </div>
                            </div>
                            <div className="trusted-by-community-module__reviewContent--U-TcQ">
                            We love him and thank you puppyspot for helping with everything
                            </div>
                            <div className="trusted-by-community-module__reviewQuote--BoFUw">
                            - <b>Roger H.</b>, Iowa
                            </div>
                            <div className="trusted-by-community-module__createdAt--w5q4-">
                            10/03/2024
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="trusted-by-community-module__itemFlexItem--hnQXC" style={{userSelect: 'none'}}>
                        <div className="trusted-by-community-module__itemWrapper--RB3sa">
                        <img
                            draggable="false"
                            className="trusted-by-community-module__itemImage--W95SX"
                            src="https://cdn-yotpo-images-production.yotpo.com/Review/631566926/614647003/original.jpg?1727467528"
                            loading="lazy"
                        />
                        <div className="trusted-by-community-module__itemContent--PNEfz">
                            <div className="trusted-by-community-module__itemStars--E9nzp">
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"
                                ></path>
                                </svg>
                            </div>
                            </div>
                            <div className="trusted-by-community-module__reviewContent--U-TcQ">
                            From start to finish every member of the staff was enthusiastic,
                            knowledgeable, helpful with excellent resources and they let me
                            know how my puppy was and her transport plans every step of the
                            way. Their working relationship with Premier Pet Transport was
                            great. The Van drivers Clay and Nathan . we’re extremely helpful
                            in telling me how well she traveled and ate. Bravo and thank you
                            to all of you! Emmy is one very happy puppy and I’m truly her
                            grateful person
                            </div>
                            <div className="trusted-by-community-module__reviewQuote--BoFUw">
                            - <b>Glo W.</b>, Vermont
                            </div>
                            <div className="trusted-by-community-module__createdAt--w5q4-">
                            09/27/2024
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="trusted-by-community-module__itemFlexItem--hnQXC" style={{userSelect: 'none'}}>
                        <div className="trusted-by-community-module__itemWrapper--RB3sa">
                        <img
                            draggable="false"
                            className="trusted-by-community-module__itemImage--W95SX"
                            src="https://cdn-yotpo-images-production.yotpo.com/Review/630378914/613383754/original.jpg?1727239491"
                            loading="lazy"
                        />
                        <div className="trusted-by-community-module__itemContent--PNEfz">
                            <div className="trusted-by-community-module__itemStars--E9nzp">
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"
                                ></path>
                                </svg>
                            </div>
                            </div>
                            <div className="trusted-by-community-module__reviewContent--U-TcQ">
                            Excellent service, very responsive and knowledgeable
                            representatives. The chaperone was kind, and our morkie puppy is
                            the best! Healthy, happy, and absolutely adorable! Thank you Puppy
                            Spot!
                            </div>
                            <div className="trusted-by-community-module__reviewQuote--BoFUw">
                            - <b>John T. L.</b>, California
                            </div>
                            <div className="trusted-by-community-module__createdAt--w5q4-">
                            09/25/2024
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="trusted-by-community-module__itemFlexItem--hnQXC" style={{userSelect: 'none'}}>
                        <div className="trusted-by-community-module__itemWrapper--RB3sa">
                        <img
                            draggable="false"
                            className="trusted-by-community-module__itemImage--W95SX"
                            src="https://cdn-yotpo-images-production.yotpo.com/Review/621837184/608324608/original.jpg?1726254575"
                            loading="lazy"
                        />
                        <div className="trusted-by-community-module__itemContent--PNEfz">
                            <div className="trusted-by-community-module__itemStars--E9nzp">
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"
                                ></path>
                                </svg>
                            </div>
                            </div>
                            <div className="trusted-by-community-module__reviewContent--U-TcQ">
                            Everything went perfectly. I felt confident I was getting a
                            beautiful Havanese baby once the actual breeder reached out to me
                            once the purchase was made. Puppyspot kept me in the loop as to
                            how she was doing and when she would be arriving by a companion
                            flight add on. The companion traveling with my baby was amazing
                            and texted me every step of the way too! Highly recommend them to
                            anyone looking for a specific breed. Thank you puppy spot!!
                            </div>
                            <div className="trusted-by-community-module__reviewQuote--BoFUw">
                            - <b>Lisa S.</b>, Massachusetts
                            </div>
                            <div className="trusted-by-community-module__createdAt--w5q4-">
                            09/13/2024
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="trusted-by-community-module__itemFlexItem--hnQXC" style={{userSelect: 'none'}}>
                        <div className="trusted-by-community-module__itemWrapper--RB3sa">
                        <img
                            draggable="false"
                            className="trusted-by-community-module__itemImage--W95SX"
                            src="https://cdn-yotpo-images-production.yotpo.com/Review/619757344/605764160/original.jpg?1725860318"
                            loading="lazy"
                        />
                        <div className="trusted-by-community-module__itemContent--PNEfz">
                            <div className="trusted-by-community-module__itemStars--E9nzp">
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"
                                ></path>
                                </svg>
                            </div>
                            </div>
                            <div className="trusted-by-community-module__reviewContent--U-TcQ">
                            I had an excellent experience with the PuppySpot. They were always
                            quick to respond to my questions. I highly recommend them!
                            </div>
                            <div className="trusted-by-community-module__reviewQuote--BoFUw">
                            - <b>Pamela M.</b>, Nevada
                            </div>
                            <div className="trusted-by-community-module__createdAt--w5q4-">
                            09/09/2024
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="trusted-by-community-module__itemFlexItem--hnQXC" style={{userSelect: 'none'}}>
                        <div className="trusted-by-community-module__itemWrapper--RB3sa">
                        <img
                            draggable="false"
                            className="trusted-by-community-module__itemImage--W95SX"
                            src="https://cdn-yotpo-images-production.yotpo.com/Review/619658045/605690540/original.jpg?1725831555"
                            loading="lazy"
                        />
                        <div className="trusted-by-community-module__itemContent--PNEfz">
                            <div className="trusted-by-community-module__itemStars--E9nzp">
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"
                                ></path>
                                </svg>
                            </div>
                            </div>
                            <div className="trusted-by-community-module__reviewContent--U-TcQ">
                            Skye is a wonderful addition to our family I love her so much
                            potty training is another thing but we're working on it :-)
                            </div>
                            <div className="trusted-by-community-module__reviewQuote--BoFUw">
                            - <b>Mary Ann M.</b>, Oregon
                            </div>
                            <div className="trusted-by-community-module__createdAt--w5q4-">
                            09/08/2024
                            </div>
                        </div>
                        </div>
                    </div>

                    <div className="trusted-by-community-module__itemFlexItem--hnQXC" style={{userSelect: 'none'}}>
                        <div className="trusted-by-community-module__itemWrapper--RB3sa">
                        <img
                            draggable="false"
                            className="trusted-by-community-module__itemImage--W95SX"
                            src="https://cdn-yotpo-images-production.yotpo.com/Review/619174635/605137099/original.jpg?1725648321"
                            loading="lazy"
                        />
                        <div className="trusted-by-community-module__itemContent--PNEfz">
                            <div className="trusted-by-community-module__itemStars--E9nzp">
                            <div style={{display: 'flex', flexDirection: 'row'}}>
                                <svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"></path></svg><svg
                                width="20"
                                height="19"
                                viewBox="0 0 20 19"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    id="Star Copy 4"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10 15L4.12215 18.0902L5.24472 11.5451L0.489435 6.90983L7.06107 5.95492L10 0L12.9389 5.95492L19.5106 6.90983L14.7553 11.5451L15.8779 18.0902L10 15Z"
                                    fill="#EB9D33"
                                ></path>
                                </svg>
                            </div>
                            </div>
                            <div className="trusted-by-community-module__reviewContent--U-TcQ">
                            I could not have been happier or more satisifed with my Puppyspot
                            experience. The staff were great - responsive, kind,
                            understanding, and helpful. My puppy is just perfect and a
                            wonderful addition to our family. Thank you!
                            </div>
                            <div className="trusted-by-community-module__reviewQuote--BoFUw">
                            - <b>Angela B.</b>, Texas
                            </div>
                            <div className="trusted-by-community-module__createdAt--w5q4-">
                            09/06/2024
                            </div>
                        </div>
                        </div>
                    </div>

                </div>

            </div>

            <div id="trusted-slider-tracker-bar-parent" className="trusted-by-community-module__barWrapper--Y7GkC">
                <div  className="trusted-by-community-module__outsideBar--nBbBm">
                    <div id="trusted-slider-tracker-bar" className="trusted-by-community-module__insideBar--i8y1X" style={{width: 'calc(16.6503% + 2px)', left: "calc(0%)"}}></div>
                </div>
            </div>
            
        </div>
    )
};

export default TrustedSlider;