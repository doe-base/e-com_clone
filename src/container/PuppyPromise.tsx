import React from 'react';

interface Props{
}
const PuppyPromiseContainer: React.FC<Props> = ({}) => {


  return (
    <div className='puppyspot-promise template'>
        <article className="template-circle-header template-circle-header">
            <div className="template-circle-header__content">
                <div className="template-circle-header__content-copy">
                    <h1 className="template-element-title--header promise">
                    Our Perfect Puppy Promise
                    </h1>
                    <p>We promise to do everything we can to provide you with your perfect puppy and to have your experience with us leave you with a big smile and a warm heart. </p>
                </div>
                <picture className="">
                <img id="" alt="" className=" template-circle-header__image lazyloading" data-cy="" data-src="" loading="lazy" />
                </picture>
            </div>
        </article>

        <article className="about-navigation">
            <a className="active" href="https://www.puppyspot.com/promise">PuppySpot Promise</a>
            <a className="" href="https://www.puppyspot.com/reviews">Customer Reviews</a>
            <a className="" href="https://www.puppyspot.com/puppyspot-standards">Breeder Standards</a>
            <a className="" href="https://www.puppyspot.com/health-check">Health Check</a>
            <a className="" href="https://www.puppyspot.com/dog-travel">Travel Options</a>
            <a className="" href="https://www.puppyspot.com/gives-back">PuppySpot Gives Back</a>
        </article>

        <article className="template-image-copy image-left overlapped puppyspot-promise__reviews" id="reviews">
            <div className="template-image-copy__content">
                <div style={{backgroundImage: "url('https://cdn.buttercms.com/9d5F4EO5SwaRkMPTRads')"}} className="template-image-copy__image puppyspot-promise__reviews-image"></div>
                <div className="template-image-copy__copy puppyspot-promise__reviews-copy">
                    <h2 className="template-element-title icon">
                        <img className="icon" src="https://cdn.buttercms.com/UeAsTPOTQy2aEAUzTEaw"/>
                        PuppySpot is the undisrupted leader
                    </h2>
                    <ul className="template-list">
                        <li className="green-check template-copy">Founded in 2005 with close to 20 years of experience
                        </li>
                        <li className="green-check template-copy">Overall rating of 4.7 out of 5 for our families
                        </li>
                    </ul>
                    <div className="cta-white">
                        <a href="https://www.puppyspot.com/reviews">Read Reviews</a>
                    </div>
                </div>
            </div>
        </article>

        <article className="template-gallery puppyspot-promise__gives-back-images">
            <div style={{backgroundImage: "url('https://cdn.buttercms.com/UdUS496aT4mgGi5qS8wJ')"}} className="template-gallery__image image-top"></div>
            <div style={{backgroundImage: "url('https://cdn.buttercms.com/oWbbGqkkRXeoT9UVLRBO')"}} className="template-gallery__image image-bottom"></div>
            <div style={{backgroundImage: "url('https://cdn.buttercms.com/4gaCTNwgSmq2K7kIch56')"}} className="template-gallery__image large-image"></div>
        </article>


        <article className="template-bullet-list puppyspot-promise__breeder" id="breeder">
            <h2 className="template-element-title icon">
                <img className="icon" src="https://cdn.buttercms.com/0Nffu6uTJGlhCZ4ra4aj" />
                A National Network of Certified Breeder Partners
            </h2>
            <ul className="template-list">
                <li className="green-check">
                Care standards are designed by an independent Scientific Advisory Board
                </li>
                <li className="green-check">
                Ranked the most rigorous screening process in the industry
                </li>
                <li className="green-check">
                Annual audits to ensure ongoing conformance from our breeders
                </li>
            </ul>
            <div className="cta-white">
                <a href="https://www.puppyspot.com/puppyspot-standards">Learn More</a>
            </div>
        </article>


        <article className="template-image-copy image-left full-half puppyspot-promise__health-check" id="health-check">
            <div className="template-image-copy__content">
                <div style={{backgroundImage: "url('https://cdn.buttercms.com/1ILMCuRnSsqJMki8xoZ9')", backgroundRepeat: 'no-repeat'}} className="puppyspot-promise__health-check-image"></div>
                <div className="template-image-copy__copy puppyspot-promise__health-check-copy">
                    <h2 className="template-element-title icon">
                    <img className="icon" src="https://cdn.buttercms.com/IlSjnyKoTjO3aox2vr73" />
                    PuppySpot's Comprehensive Health Evaluation
                    </h2>
                    <ul className="template-list">
                        <li className="green-check template-copy">Every Breeder Partner is required to keep their puppies up-to-date on all vaccinations and deworming regimens
                        </li>
                        <li className="green-check template-copy">Prior to delivery each newly adopted puppy must pass a “nose to tail” health evaluation conducted by a licensed veterinarian
                        </li>
                        <li className="green-check template-copy">All insured puppies are covered by our 10-year Health Commitment
                        </li>
                    </ul>
                    <div className="cta-white">
                        <a href="https://www.puppyspot.com/health-check">Learn More</a>
                    </div>
                </div>
            </div>
        </article>

        <article className="template-image-copy image-left split-half puppyspot-promise__travel" id="travel">
            <div className="template-image-copy__content">
                    <div className="template-image-copy__image puppyspot-promise__travel-image">
                        <div style={{backgroundImage: "url('https://cdn.buttercms.com/RT4E09z6RNyFPsNGnCZc')"}} className="top"></div>
                        <div style={{backgroundImage: "url('https://cdn.buttercms.com/XCpoYB2WQ4ia30gUmcH8')"}} className="bottom"></div>
                    </div>

                    <div className="template-image-copy__copy puppyspot-promise__travel-copy">
                        <h2 className="template-element-title icon">
                        <img className="icon" src="/img/PuppySpot_Illustrations_Final_Teacup.png" />
                        Delivered by Love
                        </h2>
                        <ul className="template-list">
                            <li className="green-check template-copy">We only work with transport partners that love puppies as much as we do
                            </li>
                            <li className="green-check template-copy">USDA certified transporters that provide a range of handle with care options
                            </li>
                            <li className="green-check template-copy">We guarantee that the delivery experience is as stress-free as possible
                            </li>
                        </ul>
                        <div className="cta-white">
                        <a href="https://www.puppyspot.com/dog-travel">Learn More</a>
                        </div>
                    </div>
            </div>
        </article>

        <article className="template-bullet-list puppyspot-promise__gives-back" id="gives-back">
            <h2 className="template-element-title icon">
                <img className="icon" src="https://cdn.buttercms.com/pPfukNfSfSil4h9kag7v" />
                PuppySpot Gives Back
            </h2>
            <ul className="template-list">
                <li className="green-check">
                PuppySpot is an official Make-A-Wish national partner
                </li>
                <li className="green-check">
                Team members are encouraged to volunteer at local shelters
                </li>
                <li className="green-check">
                Our Retired Dogs Program focuses on rehoming and retired dogs whose families can no longer take care of them
                </li>
            </ul>
            <div className="cta-white">
                <a href="https://www.puppyspot.com/gives-back">Learn More</a>
            </div>
        </article>

        <article className="template-gallery puppyspot-promise__gives back images">
            <div style={{backgroundImage: "url('https://cdn.buttercms.com/uFUEeFbSdyzCAzSqyXUw')"}} className="template-gallery__image large-image"></div>
            <div style={{backgroundImage: "url('https://cdn.buttercms.com/yrfMN9DSNCuQ240KhiPp')"}} className="template-gallery__image image-top"></div>
            <div style={{backgroundImage: "url('https://cdn.buttercms.com/0gv3jOwGTJEDcMXaHwAP')"}} className="template-gallery__image image-bottom"></div>
        </article>
    </div>
  );
}

export default PuppyPromiseContainer;