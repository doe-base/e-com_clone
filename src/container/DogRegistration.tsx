import React, { useState } from "react";
interface Props {}
interface AccordionItem {
    title: string;
    content: string;
}

const usNumber = process.env.REACT_APP_US_NUMBER_FORMARTED
const questionsData: AccordionItem[] = [
    {
      title: 'What is companion registration?',
      content: 'Companion registration is the form of registration given to all PuppySpot puppies. Each puppy is sent home as a family companion.',
    },
    {
      title: 'Why does PuppySpot offer Companion Registration?',
      content: 'At PuppySpot, we believe in setting the highest standards for our breeders, as seen in our No Puppy Mill Promise. Given the high standards that we set for our breeders network and our commitment to responsible pet ownership, we require that all puppies we place be spayed or neutered at the appropriate age and we only offer Companion Registration. ',
    },
    {
      title: 'What is the difference between Companion Registration and other types of registration?',
      content: 'Companion registration means that your puppy is intended to be a companion or "pet" and not a show or breeding dog. ',
    },
    {
      title: 'What if I want to breed my puppy?',
      content: 'We place puppies for companion purposes only. Breeding your puppy will void our industry-leading health commitment and is not permitted by our terms. ',
    },
    {
      title: 'What if I have more questions?',
      content: `Our Customer Support Team is here to answer any questions you might have – please feel free to Contact Us or give us a call at ${usNumber}. `,
    },
];

const DogRegistrationContainer: React.FC<Props> = ({}) => {

const [activeIndex, setActiveIndex] = useState<number | null>(0); // First item open by default
const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
};




  return (
    <div className="dog-registration template">
        <article className="template-circle-header dog-registration__header template-circle-header--secondary">
            <div className="template-circle-header__content">
            <div className="template-circle-header__content-copy">
                <h1 className="template-element-title--header ">AKC Enrollment</h1>
                <p>
                We are proud to offer AKC Enrollment for all of our puppies. The
                AKC is the largest purebred dog registry in the world and the most
                widely recognized and respected in the US. Our partners at Third
                Party Pet (TPP) reach out to provide additional details of your
                eligibility when your puppy arrives at your home.
                </p>
            </div>
            <picture className="">
                <img
                id=""
                alt=""
                className="template-circle-header__image lazyloaded"
                data-cy=""
                data-src="https://cdn.buttercms.com/y3xWjZ34TwKkSkfumzGp"
                loading="lazy"
                src="https://cdn.buttercms.com/y3xWjZ34TwKkSkfumzGp"
                />
            </picture>
            </div>
        </article>


        <article className="dog-registration__questions">
            <h2>Still have questions?</h2>
            <p>See below for answers to some common questions!</p>

            <div className="dog-registration__questions-container">
                {questionsData.map((item, index) => (
                <div key={index} className="collapsible-panel__container dog-registration__questions-item">
                    <h3
                    className={`js-collapsible-panel-handle collapsible-panel__handle ${activeIndex === index ? 'open' : ''}`}
                    onClick={() => toggleAccordion(index)}
                    >
                    <span>{item.title}</span>
                    </h3>
                    <div className={`js-collapsible-panel ${activeIndex === index ? '' : 'hidden'}`}>
                    <div className="collapsible-panel__content">
                        {item.content}
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </article>
    </div>
  );
};

export default DogRegistrationContainer;
