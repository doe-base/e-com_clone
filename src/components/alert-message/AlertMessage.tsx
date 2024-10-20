import React from "react";

interface Props {}
const AlertPopup: React.FC<Props> = ({}) => {
  return (
    <>
        <div id="no-puppy-success" className="hidden inventory-form___success">
            <h2>Your message has been sent!</h2>
            <p>
            <span className="nobr">While we search</span> for your perfect match,
            <span className="nobr">check out these adorable puppies!</span>
            </p>    
        </div>

        <section className="js-puppies-for-sale__no-results puppies-for-sale__no-results hidden">
            <div className="puppies-for-sale__no-results-title">
            <h3>Oops!</h3>
            <p>
            We apologize for not finding a puppy that matches your search. Don't worry, though! View all our adorable puppies available below.
            </p>
            </div>
        </section>
    </>
  );
};

export default AlertPopup;
