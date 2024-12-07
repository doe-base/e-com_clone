import React from 'react';
import ActiveLifeStyle from '../components/collections-sliders/ActiveLifeStyle'
import ApartmentDog from '../components/collections-sliders/ApartmentDog'
import Families from '../components/collections-sliders/Families'
import TeacupDog from '../components/collections-sliders/TeacupDog'
import AllergyFriendly from '../components/collections-sliders/AllergyFriendly'
import PopularDoodle from '../components/collections-sliders/PopularDoodle'




interface Props{
}
const CollectionContainer: React.FC<Props> = ({}) => {

  return (
    <div className="collections">
      <div className="collections__header">
          <article>
            <div className="ps-breadcrumbs-small column">
                <span className="ps-breadcrumbs-small__item truncate"><a href="/">PuppySpot </a></span>
                <span className="ps-breadcrumbs-small__separator">
                  /
                </span>
                <span className="ps-breadcrumbs-small__item"> Characteristics</span>
            </div>

            <div className="block-hero">
                <picture className="">
                  <img id="" alt="" className=" ls-is-cached lazyloaded" data-cy="" data-src="https://cdn.buttercms.com/Rveyo5rTi2ZF5hLYSMyr"  loading="lazy" src="https://cdn.buttercms.com/Rveyo5rTi2ZF5hLYSMyr"/>
                </picture>


                    <div className="template">
                        <h2 className="h1-strong">
                            Find Your Perfect Puppy
                        </h2>
                        <p className="p-18">Our puppies are happy puppies. We partner only with certified and trusted breeders. No puppy mill. No headache.</p>
                                                <div className="cta-white mb15">
                                <a href="/breed" className="inter-font">Meet our breeds</a>
                            </div>
                            <ul className="template-list">
                                <li className="green-check">10 Year Health Commitment</li>
                                <li className="green-check">100% Trusted Breeders</li>
                                <li className="green-check">Trusted Travel Options</li>
                            </ul>
                    </div>
                </div>
              </article>
      </div>

      <ActiveLifeStyle />
      <ApartmentDog />
      <Families />
      <TeacupDog />
      <AllergyFriendly />
      <PopularDoodle />

      <div className="cta-white mb15">
          <a href="/puppies-for-sale" className="inter-font">View all puppies</a>
      </div>
    </div>
  );
}

export default CollectionContainer;
