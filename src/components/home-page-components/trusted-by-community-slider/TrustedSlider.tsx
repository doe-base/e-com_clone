import "./index.css"

interface Props{
}
const TrustedSlider: React.FC<Props> = ({}) => {

    // let movementCount = 0; // Keep track of the movement
    // const handleRightBtnClick = () => {
    //     const parentElement = document.getElementById('parent-carousel-module__wrapper');
    //     const sliderElement = document.getElementById('child-carousel-module__wrapper');
    //     const rightArrow = document.getElementById('carouselArrowCircleRight-trusted_slider');
    //     const leftArrow = document.getElementById('carouselArrowCircleLeft-trusted_slider');
    //     const trackerBar = document.getElementById('trusted-slider-tracker-bar'); // Tracking bar
    //     const trackerBarParent = document.getElementById('trusted-slider-tracker-bar-parent'); // Parent of tracker bar
    
    //     if (parentElement && sliderElement && trackerBar && trackerBarParent) {
    //         const sliderWidth = parentElement.clientWidth; // Width of the parent container
    //         const maxMovement = sliderElement.scrollWidth - sliderWidth; // Calculate maximum scrollable width
    //         const trackerMaxWidth = trackerBarParent.clientWidth; // Width of the tracker bar's parent container
    
    //         if (movementCount < maxMovement) {
    //             movementCount += sliderWidth; // Increment movement by the width of the parent
    //             if (movementCount >= maxMovement) {
    //                 movementCount = maxMovement; // Cap at maxMovement
    //                 rightArrow!.style.display = 'none'; // Hide right arrow when at the end
    //             }
    //             leftArrow!.style.display = 'flex'; // Show left arrow since we're no longer at the start
    
    //             // Update the slider position
    //             sliderElement.style.transform = `translateX(-${movementCount}px)`; 
    
    //             // Calculate and update the tracker bar's width (within the bounds of the parent)
    //             const percentageMoved = (movementCount / maxMovement); // Range: 0 to 1
    //             const newWidth = percentageMoved * trackerMaxWidth; // New width of the tracker bar
    //             trackerBar.style.width = `${newWidth}px`; // Adjust the width of the tracker bar to match the movement
    //         }
    //     }
    // };
    // const handleLeftBtnClick = () => {
    //     const parentElement = document.getElementById('parent-carousel-module__wrapper');
    //     const sliderElement = document.getElementById('child-carousel-module__wrapper');
    //     const rightArrow = document.getElementById('carouselArrowCircleRight-trusted_slider');
    //     const leftArrow = document.getElementById('carouselArrowCircleLeft-trusted_slider');
    //     const trackerBar = document.getElementById('trusted-slider-tracker-bar'); // Tracking bar
    //     const trackerBarParent = document.getElementById('trusted-slider-tracker-bar-parent'); // Parent of tracker bar
    
    //     if (parentElement && sliderElement && trackerBar && trackerBarParent) {
    //         const sliderWidth = parentElement.clientWidth; // Width of the parent container
    //         const maxMovement = sliderElement.scrollWidth - sliderWidth; // Calculate maximum scrollable width
    //         const trackerMaxWidth = trackerBarParent.clientWidth; // Width of the tracker bar's parent container
    
    //         if (movementCount > 0) {
    //             movementCount -= sliderWidth; // Decrease by the parent width
    //             if (movementCount <= 0) {
    //                 movementCount = 0; // Ensure it doesn't go below 0 (i.e., the start)
    //                 leftArrow!.style.display = 'none'; // Hide left arrow when at the start
    //             }
    //             rightArrow!.style.display = 'flex'; // Show right arrow since we're no longer at the end
    
    //             // Update the slider position
    //             sliderElement.style.transform = `translateX(-${movementCount}px)`;
    
    //             // Calculate and update the tracker bar's width (within the bounds of the parent)
    //             const percentageMoved = (movementCount / maxMovement); // Range: 0 to 1
    //             const newWidth = percentageMoved * trackerMaxWidth; // New width of the tracker bar
    //             trackerBar.style.width = `${newWidth}px`; // Adjust the width of the tracker bar to match the movement
    //         }
    //     }
    // };


    let movementCount = 0; // Keep track of the movement
    const handleRightBtnClick = () => {
        const parentElement = document.getElementById('parent-carousel-module__wrapper');
        const sliderElement = document.getElementById('child-carousel-module__wrapper');
        const rightArrow = document.getElementById('carouselArrowCircleRight-trusted_slider');
        const leftArrow = document.getElementById('carouselArrowCircleLeft-trusted_slider');
        const trackerBar = document.getElementById('trusted-slider-tracker-bar'); // Tracking bar
        const trackerBarParent = document.getElementById('trusted-slider-tracker-bar-parent'); // Parent of tracker bar
    
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
        const parentElement = document.getElementById('parent-carousel-module__wrapper');
        const sliderElement = document.getElementById('child-carousel-module__wrapper');
        const rightArrow = document.getElementById('carouselArrowCircleRight-trusted_slider');
        const leftArrow = document.getElementById('carouselArrowCircleLeft-trusted_slider');
        const trackerBar = document.getElementById('trusted-slider-tracker-bar'); // Tracking bar
        const trackerBarParent = document.getElementById('trusted-slider-tracker-bar-parent'); // Parent of tracker bar
    
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

    return(
        <div className="trusted-by-community-module__sectionRight--zkUIU">
            <div id="parent-carousel-module__wrapper" className="carousel-module__wrapper--O59lP">
                <div id="carouselArrowCircleLeft-trusted_slider" className="trusted-by-community-module__carouselArrowCircleLeft--S7twT" style={{display: "none"}} onClick={handleLeftBtnClick}>
                    <img src="https://www.puppyspot.com/preact/./img/carousel-arrow.svg" />
                </div>
                <div id="carouselArrowCircleRight-trusted_slider" className="trusted-by-community-module__carouselArrowCircleRight--c8e5w"style={{display: "flex"}} onClick={handleRightBtnClick}>
                    <img src="https://www.puppyspot.com/preact/./img/carousel-arrow.svg" />
                </div>

                <div id="child-carousel-module__wrapper" className="carousel-module__content--qDPHs false trusted-by-community-module__carouselContent--cNBUb">

                    <div className="trusted-by-community-module__itemFlexItem--hnQXC">
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

                    <div className="trusted-by-community-module__itemFlexItem--hnQXC">
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

                    <div className="trusted-by-community-module__itemFlexItem--hnQXC">
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

                    <div className="trusted-by-community-module__itemFlexItem--hnQXC">
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

                    <div className="trusted-by-community-module__itemFlexItem--hnQXC">
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

                    <div className="trusted-by-community-module__itemFlexItem--hnQXC">
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

                    <div className="trusted-by-community-module__itemFlexItem--hnQXC">
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

                    <div className="trusted-by-community-module__itemFlexItem--hnQXC">
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