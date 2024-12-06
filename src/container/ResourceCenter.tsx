import React from 'react';


interface Props{
}
const ResourceCenterContainer: React.FC<Props> = ({}) => {

  return (
    <main className="resource-center">

      <section>
        <article className="resource-center__homepage rc-homepage">
          <h1>PuppySpot Resource Center</h1>
          <h4>The best picks for you and your best friend</h4>
          <div className="rc-homepage__featured">
            <a className="rc-homepage__featured-link preview-template__link">
              <div className="rc-homepage__featured-image preview-template__image lazyloaded" data-bg="https://cdn.buttercms.com/kus2x9njQcyWmmH71Pey" style={{backgroundImage: "url(/img/resource-center/patrick-hendry-J61yvWuHSAQ-unsplash.webp)"}}>
                  <div className="rc-homepage__featured-title  preview-template__title">
                      <h2>Best Dog Breeds To Take Hiking and Camping</h2>
                                  <p>By Theresa Miller</p>
                  </div>
              </div>
            </a>
          </div>

          <h3>Browse by topic</h3>
          <div className="rc-homepage__categories count11">
              <a className="rc-homepage__category-link preview-template__link">
                <div className="rc-homepage__category-image preview-template__image lazyloaded" data-bg="https://cdn.buttercms.com/M1JrzqoJTx6eI8D3kEMG" style={{backgroundImage: "url(/img/resource-center/DogOwnership.jpg)"}}>
                    <div className="rc-homepage__category-title  preview-template__title">
                        <h2>Dog Ownership</h2>
                    </div>
                </div>
              </a>
              <a className="rc-homepage__category-link preview-template__link">
                <div className="rc-homepage__category-image preview-template__image lazyloaded" data-bg="https://cdn.buttercms.com/36UnKH13SCWrpfBacnr7" style={{backgroundImage: "url(/img/resource-center/Training.jpg)"}}>
                    <div className="rc-homepage__category-title  preview-template__title">
                        <h2>Training</h2>
                    </div>
                </div>
              </a>
              <a className="rc-homepage__category-link preview-template__link">
                <div className="rc-homepage__category-image preview-template__image lazyloaded" data-bg="https://cdn.buttercms.com/zxbCuYSRajQXFuBU9FDg" style={{backgroundImage: "url(/img/resource-center/travel.jpg)"}}>
                    <div className="rc-homepage__category-title  preview-template__title">
                        <h2>Travel</h2>
                    </div>
                </div>
              </a>
              <a className="rc-homepage__category-link preview-template__link">
                <div className="rc-homepage__category-image preview-template__image lazyloaded" data-bg="https://cdn.buttercms.com/rWV3D7dhS7fR6JFDmdSK" style={{backgroundImage: "url(/img/resource-center/HealthandCare.jpg)"}}>
                    <div className="rc-homepage__category-title  preview-template__title">
                        <h2>Health &amp; Care</h2>
                    </div>
                </div>
              </a>
              <a className="rc-homepage__category-link preview-template__link">
                <div className="rc-homepage__category-image preview-template__image lazyloaded" data-bg="https://cdn.buttercms.com/Kk5TU8gQQ6umRsBDFkz3" style={{backgroundImage: "url(/img/resource-center/katherine_golden_retriever.jpg)"}}>
                    <div className="rc-homepage__category-title  preview-template__title">
                        <h2>Popular Breeds</h2>
                    </div>
                </div>
              </a>
              <a className="rc-homepage__category-link preview-template__link">
                <div className="rc-homepage__category-image preview-template__image lazyloaded" data-bg="https://cdn.buttercms.com/MGBtx2ldTfmfR5u1gUHl" style={{backgroundImage: "url(/img/resource-center/education.jpg)"}}>
                    <div className="rc-homepage__category-title  preview-template__title">
                        <h2>Education</h2>
                    </div>
                </div>
              </a>
              <a className="rc-homepage__category-link preview-template__link">
                <div className="rc-homepage__category-image preview-template__image lazyloaded" data-bg="https://cdn.buttercms.com/ooPFpnt6RHO46vXej5zW" style={{backgroundImage: "url(/img/resource-center/Exercise.jpg)"}}>
                    <div className="rc-homepage__category-title  preview-template__title">
                        <h2>Exercise</h2>
                    </div>
                </div>
              </a>
              <a className="rc-homepage__category-link preview-template__link">
                <div className="rc-homepage__category-image preview-template__image lazyloaded" data-bg="https://cdn.buttercms.com/hq22bhraROWLeS5JmsR0" style={{backgroundImage: "url(/img/resource-center/PuppyBreeds.jpg)"}}>
                    <div className="rc-homepage__category-title  preview-template__title">
                        <h2>Puppy Breeds</h2>
                    </div>
                </div>
              </a>
              <a className="rc-homepage__category-link preview-template__link">
                <div className="rc-homepage__category-image preview-template__image lazyloaded" data-bg="https://cdn.buttercms.com/yHaYDnpXSau61QfsRGCZ" style={{backgroundImage: "url(/img/resource-center/grooming.jpg)"}}>
                    <div className="rc-homepage__category-title  preview-template__title">
                        <h2>Grooming</h2>
                    </div>
                </div>
              </a>
              <a className="rc-homepage__category-link preview-template__link">
                <div className="rc-homepage__category-image preview-template__image lazyloaded" data-bg="https://cdn.buttercms.com/XlwXQyeQRm6PLOAgM5bN" style={{backgroundImage: "url(/img/resource-center/nutrition.jpg)"}}>
                    <div className="rc-homepage__category-title  preview-template__title">
                        <h2>Nutrition</h2>
                    </div>
                </div>
              </a>
          </div>
        </article>

        <section className="resource-center__image-module image-module">
          <div className="image-module__image">
              <img src="/img/resource-center/makeawish.jpg"/>
          </div>
          <div className="image-module__content">
              <h3>PuppySpot Gives Back</h3>
              <p>Our PuppySpot Gives Back Program continues our mission to celebrate dogs always and make a difference by integrating philanthropy into our corporate philosophy and actions.</p>
              <a href="" className="arrow forward">PuppySpot Gives Back Articles</a>
          </div>
        </section>
      </section>


      <section className="resource-center__cta-module cta-module">
          <h3>Are you looking for a puppy?</h3>
          <p style={{margin: '1.6rem 0 1.1rem 0'}}>Search our amazing inventory today and take home the puppy of your dreams!</p>
          <div className="cta-white mb15">
              <a href="/puppies-for-sale">Search Puppies</a>
          </div>
      </section>
    </main>
  );
}

export default ResourceCenterContainer;
