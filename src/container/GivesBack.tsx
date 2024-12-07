import React from 'react';

interface Props{
}
const GivesBack: React.FC<Props> = ({}) => {

  return (
    <div className="gives-back template">
        <article className="template-circle-header gives-back__header template-circle-header--secondary">
                <div className="template-circle-header__content">
                    <div className="template-circle-header__content-copy">
                        <h1 className="template-element-title--header promise" style={{margin: '1.6rem 0'}}>
                            PuppySpot Gives Back
                        </h1>
                        <p style={{margin: '1.2rem 0'}}>Our PuppySpot Gives Back Program continues our mission to celebrate dogs always and make a difference by integrating philanthropy into our corporate philosophy and actions.</p>
                      </div>
                    <picture className="">
                                <img id="" alt="" className=" template-circle-header__image lazyloading" data-cy="" data-src="" loading="lazy" />
                    </picture>

                </div>
            </article>
                    <article className="about-navigation">
                <a className="" href="/promise">PuppySpot Promise</a>
                <a className="" href="/reviews">Customer Reviews</a>
                <a className="" href="/puppyspot-standards">Breeder Standards</a>
                <a className="" href="/health-check">Health Check</a>
                <a className="" href="/dog-travel">Travel Options</a>
                <a className="active" href="/gives-back">PuppySpot Gives Back</a>
            </article>
                    <article className="template-image-copy image-left overlapped gives-back__national" id="national">
                <div className="template-image-copy__content">
                                <div style={{backgroundImage: "url('https://cdn.buttercms.com/25bg0rKDQdibUeLJpFAR')"}} className="template-image-copy__image gives-back__national-image"></div>
                            <div className="template-image-copy__copy gives-back__national-copy">
                                        <h2 className="template-element-title ">
                                                    PuppySpot is a recognized Make-A-Wish national partner
                            </h2>
                                                                                    <p className="template-copy">
                                    Dogs &amp; puppies have a positive impact on human lives. This has been the driving motivation behind our PuppySpot Gives Back program.  Animals improve the quality of life and mental health of their human companions.
            <br /><br />
            PuppySpot places puppies through non-profit organizations for individuals and families who can positively be impacted by a new addition. Since 2018 PuppySpot has partnered with the Make-A-Wish Foundation to deliver happiness into children’s lives.<br /><br />
                                </p>
                                                            </div>
                </div>
            </article>
                    <article className="template-image-copy image-right full-half gives-back__local" id="local">
                <div className="template-image-copy__content">
                                <div style={{backgroundImage: "url('https://cdn.buttercms.com/2RknAghzSsmuPxePpGsN')"}} className="template-image-copy__image gives-back__local-image"></div>
                            <div className="template-image-copy__copy gives-back__local-copy">
                                        <h2 className="template-element-title ">
                                                    PuppySpot volunteers at their local shelter
                            </h2>
                                                                                    <p className="template-copy">
                                    PuppySpot was founded on the philosophy that dogs improve the quality of people’s lives. That has evolved to go deeper into our community. Members of the PuppySpot team are encouraged to volunteer together quarterly at their local humane society or shelter. We organize these efforts as a team to help ensure every dog finds a loving home while strengthening the bonds between our employees and community.
                                </p>
                                                            </div>
                </div>
            </article>
                    <article className="template-gallery gives-back__gallery">
                        <div style={{backgroundImage: "url('https://cdn.buttercms.com/X6ziPpxVTpyRwWAYRI5K')"}} className="template-gallery__image large-image"></div>
                        <div style={{backgroundImage: "url('https://cdn.buttercms.com/4rZch8sSauWj92mXegep')"}} className="template-gallery__image image-bottom"></div>
                        <div style={{backgroundImage: "url('https://cdn.buttercms.com/l3EpnpfkS1261pr9RzbW')"}} className="template-gallery__image image-top"></div>
                </article>
                    <article className="gives-back__rehoming">
                        <div className="gives-back__rehoming-header" style={{backgroundImage: "url('https://cdn.buttercms.com/bXUxY3a4Ti2nhYC95fQ6')"}}></div>
                        <h2 className="template-element-title">PuppySpot runs a national program to find homes for retired breeding dogs</h2>
                        <p className="template-copy">As a part of our commitment to each of the pups, customers, and breeders we work with, and to the humane treatment of all dogs, PuppySpot offers a re-homing option for retired breeding dogs. These dogs have previously been bred, have been spayed or neutered, and are well socialized with puppies, other dogs, and people.
            <br /><br />
            If you are looking to make a positive difference in a dog's life, you may want to consider finding a place in your home and your heart for one of these lovable retired dogs. Please submit the information below and we'll be in touch with questions to help find your ideal match! </p>

        </article>
    </div>
  );
}

export default GivesBack;
