import { useEffect, useRef, useState } from "react";
import { breeds_pages, pages } from "../../../contants/routes";
import ScrollContainer from 'react-indiana-drag-scroll';


interface Props{
}
const PuppyCharacterSlide: React.FC<Props> = ({}) => {
    
    const [movementCount, setMovementCount] = useState(0); // Use state for movementCount
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const sliderElementRef = useRef<HTMLDivElement>(null);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleTrackBarMovment = (newMovementCount: number) => {
        if (!scrollContainerRef.current || !sliderElementRef.current) {
            return;
        }
    
        const sliderWidth = scrollContainerRef.current.clientWidth;
        const maxMovement = sliderElementRef.current.scrollWidth - sliderWidth;
        const trackerBar = document.getElementById('puppy-character-trusted-slider-tracker-bar');
        const trackerBarParent = document.getElementById('puppy-character-trusted-slider-tracker-bar-parent');
    
        if (!trackerBar || !trackerBarParent || maxMovement === 0) {
            return;
        }
    
        const trackerMaxWidth = trackerBarParent.clientWidth - trackerBar.clientWidth;
        const percentageMoved = newMovementCount / maxMovement;
        const newLeft = Math.max(0, Math.min(percentageMoved * trackerMaxWidth, trackerMaxWidth));
    
        trackerBar.style.left = `${newLeft}px`;
    };

    const handleRightBtnClick = () => {
        if (scrollContainerRef.current && sliderElementRef.current) {
            const sliderWidth = scrollContainerRef.current.clientWidth;
            const maxMovement = sliderElementRef.current.scrollWidth - sliderWidth;
    
            if (movementCount < maxMovement) {
                const newMovementCount = Math.min(movementCount + sliderWidth, maxMovement);
                setMovementCount(newMovementCount);
                scrollContainerRef.current.scrollLeft = newMovementCount;
    
                handleTrackBarMovment(newMovementCount);
            }
        }
    };
    
    const handleLeftBtnClick = () => {
        if (scrollContainerRef.current && sliderElementRef.current) {
            const sliderWidth = scrollContainerRef.current.clientWidth;
    
            if (movementCount > 0) {
                const newMovementCount = Math.max(movementCount - sliderWidth, 0);
                setMovementCount(newMovementCount);
                scrollContainerRef.current.scrollLeft = newMovementCount;
    
                handleTrackBarMovment(newMovementCount);
            }
        }
    };
    
    

    

    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                const scrollLeft = scrollContainerRef.current.scrollLeft;
                setMovementCount(scrollLeft); // Update movementCount based on the scrollLeft value
    
                // Call the function to update the track bar position
                handleTrackBarMovment(scrollLeft);
    
                const maxScrollLeft = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
                const rightArrow = document.getElementById('puppy-character-carouselArrowCircleRight-trusted_slider');
                const leftArrow = document.getElementById('puppy-character-carouselArrowCircleLeft-trusted_slider');
    
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
        <>
            <div className="puppy-collections-module__carouselOutsideWrapper--sP7PV">

                <div                 
                    id="puppy-character-parent-carousel-module__wrapper" 
                    className="carousel-module__wrapper--O59lP puppy-collections-module__carouselWrapper--9nBE1"
                >
                    <ScrollContainer vertical={false} innerRef={scrollContainerRef} style={{scrollBehavior: 'smooth'}}>
                        <div id="puppy-character-carouselArrowCircleLeft-trusted_slider" className="puppy-collections-module__carouselArrowCircleLeft--bmUIM" style={{display: "none", zIndex: '4'}} onClick={handleLeftBtnClick}>
                            <img src="/img/carousel-arrow.svg" />
                        </div>

                        <div id="puppy-character-carouselArrowCircleRight-trusted_slider" className="puppy-collections-module__carouselArrowCircleRight--KpvQM" style={{display: "flex", zIndex: '4'}} onClick={handleRightBtnClick}>
                            <img src="/img/carousel-arrow.svg" />
                        </div>

                        <div ref={sliderElementRef} id="puppy-character-child-carousel-module__wrapper" className="carousel-module__content--qDPHs false puppy-collections-module__carouselContent--phAfk">
                            <a
                                style={{userSelect: 'none'}}
                                href={breeds_pages.ACTIVE_DOGS}
                                className="puppy-collections-module__carouselItemWrapper--mm+9f"
                                draggable="false"
                                ><div className="puppy-collections-module__carouselItemContent--I4OXN">
                                <img
                                    className="puppy-collections-module__carouselItemImage--Mfq83"
                                    src="/img/active-dog-breeds.svg"
                                    draggable="false"
                                    loading="lazy"
                                />
                                <div className="puppy-collections-module__itemLabel--sZrSo">
                                    Active Dog Breeds<img
                                    className="puppy-collections-module__itemCaret--dOkfu"
                                    src="/img/puppy-collections-caret.svg"
                                    />
                                </div></div>
                            </a>


                            <a
                                style={{userSelect: 'none'}}
                                href={breeds_pages.BEST_APARTMENT_DOGS}
                                className="puppy-collections-module__carouselItemWrapper--mm+9f"
                                draggable="false"
                                ><div className="puppy-collections-module__carouselItemContent--I4OXN">
                                <img
                                    className="puppy-collections-module__carouselItemImage--Mfq83"
                                    src="/img/apartment-breeds.svg"
                                    draggable="false"
                                    loading="lazy"
                                />
                                <div className="puppy-collections-module__itemLabel--sZrSo">
                                    Apartment Breeds<img
                                    className="puppy-collections-module__itemCaret--dOkfu"
                                    src="/img/puppy-collections-caret.svg"
                                    />
                                </div></div>
                            </a>


                            <a
                                style={{userSelect: 'none'}}
                                href={breeds_pages.DOODLE_PUPPIES}
                                className="puppy-collections-module__carouselItemWrapper--mm+9f"
                                draggable="false"
                                ><div className="puppy-collections-module__carouselItemContent--I4OXN">
                                <img
                                    className="puppy-collections-module__carouselItemImage--Mfq83 puppy-collections-module__bordered--j7Vry"
                                    src="/img/doodle-breeds.svg"
                                    draggable="false"
                                    loading="lazy"
                                />
                                <div className="puppy-collections-module__itemLabel--sZrSo">
                                    Doodle Breeds<img
                                    className="puppy-collections-module__itemCaret--dOkfu"
                                    src="/img/puppy-collections-caret.svg"
                                    />
                                </div></div>
                            </a>


                            <a
                                style={{userSelect: 'none'}}
                                href={breeds_pages.BEST_FAMILY_DOGS}
                                className="puppy-collections-module__carouselItemWrapper--mm+9f"
                                draggable="false"
                                ><div className="puppy-collections-module__carouselItemContent--I4OXN">
                                <img
                                    className="puppy-collections-module__carouselItemImage--Mfq83"
                                    src="/img/family-breeds.svg"
                                    draggable="false"
                                    loading="lazy"
                                />
                                <div className="puppy-collections-module__itemLabel--sZrSo">
                                    Family Breeds<img
                                    className="puppy-collections-module__itemCaret--dOkfu"
                                    src="/img/puppy-collections-caret.svg"
                                    />
                                </div></div>
                            </a>


                            <a
                                style={{userSelect: 'none'}}
                                href={breeds_pages.ALLERGY_FRIENDLY_DOGS}
                                className="puppy-collections-module__carouselItemWrapper--mm+9f"
                                draggable="false"
                                ><div className="puppy-collections-module__carouselItemContent--I4OXN">
                                <img
                                    className="puppy-collections-module__carouselItemImage--Mfq83"
                                    src="/img/hypoallergenic.svg"
                                    draggable="false"
                                    loading="lazy"
                                />
                                <div className="puppy-collections-module__itemLabel--sZrSo">
                                    Hypoallergenic<img
                                    className="puppy-collections-module__itemCaret--dOkfu"
                                    src="/img/puppy-collections-caret.svg"
                                    />
                                </div></div>
                            </a>


                            <a
                                style={{userSelect: 'none'}}
                                href={breeds_pages.TEACUP_PUPPIES}
                                className="puppy-collections-module__carouselItemWrapper--mm+9f"
                                draggable="false"
                                ><div className="puppy-collections-module__carouselItemContent--I4OXN">
                                <img
                                    className="puppy-collections-module__carouselItemImage--Mfq83"
                                    src="/img/teacup-breeds.svg"
                                    draggable="false"
                                    loading="lazy"
                                />
                                <div className="puppy-collections-module__itemLabel--sZrSo">
                                    Teacup Breeds<img
                                    className="puppy-collections-module__itemCaret--dOkfu"
                                    src="/img/puppy-collections-caret.svg"
                                    />
                                </div></div>
                            </a>
                        </div>
                    </ScrollContainer>

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