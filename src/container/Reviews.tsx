import React, { useRef } from 'react';
import StarRating from "../components/review-star/ReviewsStar";

interface Props{
	reviewsArray: any[];
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
const ReviewsContainer: React.FC<Props> = ({ reviewsArray, setCurrentPage }) => {
	
	const reviewHolderRef = useRef<HTMLDivElement | null>(null)
	const scrollToTopOfReview = () => {
	    if (reviewHolderRef.current) {
	      reviewHolderRef.current.scrollIntoView({
	        // behavior: 'smooth',
	        block: 'start',
	      });
	    }
	  };

	function incrementPageParam(): void {
	  const urlObj = new URL(window.location.href); // Get the current URL
	  const currentPage = parseInt(urlObj.searchParams.get('page') || '1', 10); // Get the current page or default to 1
	  const newPage = currentPage + 1; // Calculate the incremented page
	  
	  urlObj.searchParams.set('page', newPage.toString()); // Increment the page parameter

	  // Update the browser's URL without reloading
	  window.history.pushState({}, '', urlObj.toString());

	  // Update the React state with the new page value
	  setCurrentPage(newPage);
	  scrollToTopOfReview()
	}
  return (
  	<div className="customer-reviews template">
  		<article className="template-circle-header customer-reviews__header template-circle-header--secondary">
		    <div className="template-circle-header__content">
		        <div className="template-circle-header__content-copy">
		            <h1 className="template-element-title--header promise">
		                Customer Reviews 
		            </h1>
		            <p>Since 2005, PuppySpot has been America's leading puppy adoption service for one simple reason: we are 100% committed to the happiness of our families and the puppies they adopt from us. With over 20 years of 5-star reviews, our commitment is clear. But even though we call ourselves the Perfect Puppy People, we know we’re not always perfect: we still have work to do improving every part of the experience. So if you decide to adopt a puppy through us, we hope you’ll share the truth and help us be even better at what we do.&nbsp;</p>
		         </div>
		        <picture className="">
		            <img id="" alt="" className=" template-circle-header__image lazyloading" loading="lazy"/>
		        </picture>

		    </div>
		</article>

		<article className="about-navigation">
		    <a className="" href="https://www.puppyspot.com/promise">PuppySpot Promise</a>
		    <a className="active" href="https://www.puppyspot.com/reviews">Customer Reviews</a>
		    <a className="" href="https://www.puppyspot.com/puppyspot-standards">Breeder Standards</a>
		    <a className="" href="https://www.puppyspot.com/health-check">Health Check</a>
		    <a className="" href="https://www.puppyspot.com/dog-travel">Travel Options</a>
		    <a className="" href="https://www.puppyspot.com/gives-back">PuppySpot Gives Back</a>
		</article>

		<hgroup className="customer-reviews__title">
            <h2>PuppySpot Reviews</h2>
            <h3>PuppySpot serves you best by putting the health and well-being of your puppy first. Don't take our word for it, here's what our families have to say about PuppySpot.</h3>
        </hgroup>

        <article className="reviews-list__header-inner">
            <div className="reviews-list__aggregate-review-rating-wrapper">
                <div className="reviews-list__aggregate-review-rating">4.6
                    / 5
                </div>
                <ul className="stars">
                    <li><img src="https://www.puppyspot.com/assets/svg/full-star.svg" /></li>
            		<li><img src="https://www.puppyspot.com/assets/svg/full-star.svg" /></li>
		            <li><img src="https://www.puppyspot.com/assets/svg/full-star.svg" /></li>
		            <li><img src="https://www.puppyspot.com/assets/svg/full-star.svg" /></li>
		            <li><img src="https://www.puppyspot.com/assets/svg/half-star.svg" /></li>
                </ul>
                <div className="reviews-list__verified-reviews">Based
                    on 16,584 verified reviews
                </div>
            </div>

            
            <div className="reviews-list__customer-experience-rating">
                <h2>16,584 verified reviews</h2>
                <ul className="reviews-list__review-bars">
                                            <li>
                            <div className="rating">5 Stars</div>
                            <div className="progress-fill" style={{width: "78%"}}>
                            </div>
                            <div className="count">
                                12,968
                            </div>
                        </li>
                                            <li>
                            <div className="rating">4 Stars</div>
                            <div className="progress-fill" style={{width: "11%"}}>
                            </div>
                            <div className="count">
                                1,901
                            </div>
                        </li>
                                            <li>
                            <div className="rating">3 Stars</div>
                            <div className="progress-fill" style={{width: "4%"}}>
                            </div>
                            <div className="count">
                                726
                            </div>
                        </li>
                                            <li>
                            <div className="rating">2 Stars</div>
                            <div className="progress-fill" style={{width: "2%"}}>
                            </div>
                            <div className="count">
                                383
                            </div>
                        </li>
                                            <li>
                            <div className="rating">1 Stars</div>
                            <div className="progress-fill" style={{width: "3%"}}>
                            </div>
                            <div className="count">
                                606
                            </div>
                        </li>
                                    </ul>
            </div>
        </article>


        <article ref={reviewHolderRef} className="reviews-list__reviews js-reviews">
            <div className="columns media-container large-3 hidden">
                <div className="grey-box images hidden" id="media-container"></div>
            </div>

            <div className="page" data-page-number="1">
                <div id="review-container" className="customer-reviews__review-container">
			    	<div className="page" data-page-number="1">
			       		

			    		{
			    			!reviewsArray || reviewsArray.length < 1
			    			?
			    			null
			    			:
			    			reviewsArray.map((reviews, index) => {
			    				return (
			    					<div key={index} className="review__review-wrapper">
							            <div className="review__heading-wrapper">
							                <div className="review__heading">
							                        <span className="review__date">
							                            {reviews.date}
							                        </span>
							                        <ul className="review__rating stars">
							                          {
							                            !reviews.stars
							                            ?
							                            null
							                            :
							                            <StarRating stars={reviews.stars} />
							                          }
							                        </ul>
							                        <div className="review__name">
							                            {reviews.name}
							                        </div>

							                    <div className="review__reviewer-info">
							                            <span className="review__state">
							                                {reviews.state} 
							                            </span>
							                            <span>  </span>|<span>  </span>
							                            <span className="review__breed">
							                                Breed:<span>  </span>
							                                <a className="breed-name" href="https://www.puppyspot.com/puppies-for-sale/breed/pembroke-welsh-corgi">
							                                     {reviews.breed}
							                                </a>
							                            </span>
							                    </div>
							                </div>
							                    <div className="show-for-large">
							                        <ul className="review__gallery js-review-gallery">
								                        {
								                          !reviews.images
								                          ?
								                          null
								                          :
								                          reviews.images.map((item2: any, index: any) => {
								                            return (
								                              <li className="review__gallery-thumb">
							                                    <a className="js-thumb-anchor" href="" title="">
							                                        <img src={item2.small_url} alt=""/>
							                                    </a>
							                                  </li>
								                            )
								                          })
								                        }
							                        </ul>
							                    </div>
							            </div>
							            <hr className="review__content-separator" />
							            <div className="review__content">
							                    <div className="hide-for-large">
							                        <ul className="review__gallery js-review-gallery">
							                        	{
								                          !reviews.images
								                          ?
								                          null
								                          :
								                          reviews.images.map((item2: any, index: any) => {
								                            return (
								                              <li className="review__gallery-thumb">
							                                    <a className="js-thumb-anchor" href="" title="">
							                                        <img src={item2.small_url} alt=""/>
							                                    </a>
							                                  </li>
								                            )
								                          })
								                        }
							                        </ul>
							                    </div>

							                    <div className="review__reviewer-comment-wrapper">
							                        <h4 className="review__comment-title review__comment-title-reviewer">
							                            {reviews.subject}
							                        </h4>
							                        <p className="review__comment-content-reviewer">
							                            A{reviews.message}
							                        </p>
							                    </div>
							            </div>
							        </div>
			    				)
			    			})
			    			
					         
			    		}

			    	</div>
			    </div>
  			</div>
        </article>
        <div className="cta-white mb15">
            <button onClick={incrementPageParam} className="js-load-more" style={{cursor:'pointer'}}>Read More</button>
        </div>
  	</div>
  );
}

export default ReviewsContainer;