import React, { useEffect, useState } from 'react';

interface Props{
}
const SitemapContainer: React.FC<Props> = ({}) => {


  return (
   <main className="sitemap" style={{padding: '1rem 0'}}>
        <section className="sitemap__header">
            <h1 style={{padding: '1rem 0'}}>Sitemap</h1>
            <div className="hero-image" style={{padding: '1rem 0', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div className="banner"></div>
                <picture className="">
                    <img id="" alt="" className=" lazyloaded" data-cy="" data-src="/img/minimal-header__large.png" loading="lazy" src="/img/minimal-header__large.png" />
        		</picture>

            </div>
        </section>
        <section className="sitemap__about-us">
            <h2>About PuppySpot</h2>

            <article className="sitemap__about-us-puppies" style={{padding: '1rem 0'}}>
                <h3 style={{padding: '1rem 0 0.5rem 0'}}>Our Puppies</h3>
                <ul>
                    <li><a href="/">Homepage</a></li>
                    <li><a href="/breed">All Breeds</a></li>
                                            <li><a href="/breed/collections/active-dogs">Top Active Dog Breeds</a>
                        </li>
                                            <li><a href="/breed/collections/best-apartment-dogs">Best Apartment Dogs</a>
                        </li>
                                            <li><a href="/breed/collections/best-family-dogs">Best Family Dogs</a>
                        </li>
                                            <li><a href="/breed/collections/teacup-puppies">Teacup Puppies</a>
                        </li>
                                            <li><a href="/breed/collections/allergy-friendly-dogs">Allergy Friendly Dogs</a>
                        </li>
                                            <li><a href="/breed/collections/doodle-puppies">Doodle Puppies</a>
                        </li>
                                        <li><a href="/puppies-for-sale">All Puppies</a></li>
                    <li><a href="/breed-selector-quiz">Breed Selector Quiz</a></li>
                </ul>
                <h3 style={{padding: '1rem 0 0.5rem 0'}}>Legal</h3>
                <ul>
                    <li><a href="/privacy">Privacy</a></li>
                    <li><a href="/terms-of-use">Terms of Use</a></li>
                    <li><a href="/terms-and-conditions-of-commitment">Terms and Conditions of Commitment</a>
                    </li>
                    <li><a href="/terms-and-conditions-of-sale">Terms and Conditions of Sale</a></li>
                </ul>
            </article>
            <article className="sitemap__about-us-we-are" style={{padding: '1rem 0'}}>
                <h3 style={{padding: '1rem 0 0.5rem 0'}}>Who We Are</h3>
                <ul>
                    <li><a href="/about-us">About Us</a></li>
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="https://help.puppyspot.com">Support</a></li>
                    <li><a href="/dog-registration">Dog Registration</a></li>
                    <li><a href="/akc">AKC Reunite</a></li>
                    <li><a target="_blank" href="/resource-center">Resource Center</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/resource-center/dog-ownership/frequently-asked-questions-faqs">Frequently
                            Asked Questions</a></li>
                </ul>
                <h3 style={{padding: '1rem 0 0.5rem 0'}}>Partners</h3>
                <ul>
                    <li><a href="/special-offers">Special Offers</a></li>
                </ul>
                <h3 style={{padding: '1rem 0 0.5rem 0'}}>Login</h3>
                <ul>
                    <li><a href="https://hub.puppyspot.com/login" target="_blank" rel="noopener noreferrer">Breeder Site</a>
                    </li>
                </ul>
            </article>
            <article className="sitemap__about-us-experience" style={{padding: '1rem 0'}}>
                <h3 style={{padding: '1rem 0 0.5rem 0'}}>The PuppySpot Promise</h3>
                <ul>
                    <li><a href="/promise">Our Promise</a></li>
                    <li><a href="/puppyspot-standards">Breeder Standards</a></li>
                    <li><a href="/health-check">Health Check</a></li>
                    <li><a href="/dog-travel">Puppy Travel</a></li>
                    <li><a href="/reviews">Customer Reviews</a></li>
                    <li><a href="/gives-back">PuppySpot Gives Back</a></li>
                </ul>
            </article>
        </section>






        {/*<section className="sitemap__fetch">
            <h2>Fetch Your New Best Friend</h2>
            <article data-cy="sitemap__breeds-pfs">
                <h3>Puppies For Sale</h3>
                <ul className="scroll">
                                                                        <li><a href="/puppies-for-sale/breed/akita">Akita</a></li>
                                                                                                                                                                                                                                                                                                                                                                                                                    <li><a href="/puppies-for-sale/breed/aussiedoodle">Aussiedoodle</a></li>
                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/australian-shepherd">Australian Shepherd</a></li>
                                                                                                                                                                                                                                    <li><a href="/puppies-for-sale/breed/beagle">Beagle</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/bernedoodle">Bernedoodle</a></li>
                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/bichon-frise">Bichon Frise</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/bichonpoo">Bichonpoo</a></li>
                                                                                                                                                                                                                                    <li><a href="/puppies-for-sale/breed/boston-terrier">Boston Terrier</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/boxer">Boxer</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/bulldog">Bulldog</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/cairn-terrier">Cairn Terrier</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/cane-corso">Cane Corso</a></li>
                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/cavachon">Cavachon</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/cavalier-king-charles-spaniel">Cavalier King Charles Spaniel</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/cavapoo">Cavapoo</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/chihuahua">Chihuahua</a></li>
                                                                                                                                                                                                                                                                                                                            <li><a href="/puppies-for-sale/breed/cockapoo">Cockapoo</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/cocker-spaniel">Cocker Spaniel</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/collie">Collie</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/corgipoo">Corgipoo</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/coton-de-tulear">Coton de Tulear</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/dachshund">Dachshund</a></li>
                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/doberman-pinscher">Doberman Pinscher</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/dogue-de-bordeaux">Dogue de Bordeaux</a></li>
                                                                                                                                                                                                                                    <li><a href="/puppies-for-sale/breed/french-bulldog">French Bulldog</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/frenchton">Frenchton</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/german-shepherd-dog">German Shepherd Dog</a></li>
                                                                                                                                                                                                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/golden-retriever">Golden Retriever</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/goldendoodle">Goldendoodle</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/great-dane">Great Dane</a></li>
                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/havachon">Havachon</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/havamalt">Havamalt</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/havanese">Havanese</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/havapoo">Havapoo</a></li>
                                                                                                                                                                                                                                                                                <li><a href="/puppies-for-sale/breed/russell-terrier">Jack Russell Terrier</a></li>
                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/labradoodle">Labradoodle</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/labrador-retriever">Labrador Retriever</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/lhasa-apso">Lhasa Apso</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/mal-shi">Mal-Shi</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/maltese">Maltese</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/maltipoo">Maltipoo</a></li>
                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/miniature-pinscher">Miniature Pinscher</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/miniature-schnauzer">Miniature Schnauzer</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/morkie">Morkie</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/newfoundland">Newfoundland</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/old-english-sheepdog">Old English Sheepdog</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/papillon">Papillon</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/pekingese">Pekingese</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/pembroke-welsh-corgi">Pembroke Welsh Corgi</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/pomapoo">Pomapoo</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/pomeranian">Pomeranian</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/pomsky">Pomsky</a></li>
                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/poodle">Poodle</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/portuguese-water-dog">Portuguese Water Dog</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/pug">Pug</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/puggle">Puggle</a></li>
                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/rottweiler">Rottweiler</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/saint-berdoodle">Saint Berdoodle</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/saint-bernard">Saint Bernard</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/samoyed">Samoyed</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/schnoodle">Schnoodle</a></li>
                                                                                                                                                                                                                                    <li><a href="/puppies-for-sale/breed/sheepadoodle">Sheepadoodle</a></li>
                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/shiba-inu">Shiba Inu</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/shichon">Shichon</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/shih-tzu">Shih Tzu</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/shihpoo">Shihpoo</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/shorkie">Shorkie</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/siberian-husky">Siberian Husky</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/silky-terrier">Silky Terrier</a></li>
                                                                                                                                                                                                                                                                                                                                                                                                                    <li><a href="/puppies-for-sale/breed/whoodle">Whoodle</a></li>
                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/yorkiepoo">Yorkiepoo</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/yorkshire-terrier">Yorkshire Terrier</a></li>
                                                            </ul>
            </article>
            <article data-cy="sitemap__breeds-overview-af">
                <h3>Breed Overview (A-F)</h3>
                <ul className="scroll">
                                                                        <li><a href="/puppies-for-sale/breed/akita/overview">Akita</a></li>
                        
                                            
                                            
                                            
                                            
                                            
                                            
                                            
                                                                        <li><a href="/puppies-for-sale/breed/aussiedoodle/overview">Aussiedoodle</a></li>
                        
                                            
                                            
                                                                        <li><a href="/puppies-for-sale/breed/australian-shepherd/overview">Australian Shepherd</a></li>
                        
                                            
                                            
                                            
                                                                        <li><a href="/puppies-for-sale/breed/beagle/overview">Beagle</a></li>
                        
                                            
                                                                        <li><a href="/puppies-for-sale/breed/bernedoodle/overview">Bernedoodle</a></li>
                        
                                            
                                            
                                                                        <li><a href="/puppies-for-sale/breed/bichon-frise/overview">Bichon Frise</a></li>
                        
                                                                        <li><a href="/puppies-for-sale/breed/bichonpoo/overview">Bichonpoo</a></li>
                        
                                            
                                            
                                            
                                                                        <li><a href="/puppies-for-sale/breed/boston-terrier/overview">Boston Terrier</a></li>
                        
                                                                        <li><a href="/puppies-for-sale/breed/boxer/overview">Boxer</a></li>
                        
                                            
                                                                        <li><a href="/puppies-for-sale/breed/bulldog/overview">Bulldog</a></li>
                        
                                            
                                                                        <li><a href="/puppies-for-sale/breed/cairn-terrier/overview">Cairn Terrier</a></li>
                        
                                                                        <li><a href="/puppies-for-sale/breed/cane-corso/overview">Cane Corso</a></li>
                        
                                            
                                            
                                                                        <li><a href="/puppies-for-sale/breed/cavachon/overview">Cavachon</a></li>
                        
                                                                        <li><a href="/puppies-for-sale/breed/cavalier-king-charles-spaniel/overview">Cavalier King Charles Spaniel</a></li>
                        
                                                                        <li><a href="/puppies-for-sale/breed/cavapoo/overview">Cavapoo</a></li>
                        
                                                                        <li><a href="/puppies-for-sale/breed/chihuahua/overview">Chihuahua</a></li>
                        
                                            
                                            
                                            
                                            
                                            
                                                                        <li><a href="/puppies-for-sale/breed/cockapoo/overview">Cockapoo</a></li>
                        
                                                                        <li><a href="/puppies-for-sale/breed/cocker-spaniel/overview">Cocker Spaniel</a></li>
                        
                                            
                                                                        <li><a href="/puppies-for-sale/breed/collie/overview">Collie</a></li>
                        
                                                                        <li><a href="/puppies-for-sale/breed/corgipoo/overview">Corgipoo</a></li>
                        
                                                                        <li><a href="/puppies-for-sale/breed/coton-de-tulear/overview">Coton de Tulear</a></li>
                        
                                                                        <li><a href="/puppies-for-sale/breed/dachshund/overview">Dachshund</a></li>
                        
                                            
                                            
                                                                        <li><a href="/puppies-for-sale/breed/doberman-pinscher/overview">Doberman Pinscher</a></li>
                        
                                                                        <li><a href="/puppies-for-sale/breed/dogue-de-bordeaux/overview">Dogue de Bordeaux</a></li>
                        
                                            
                                            
                                            
                                                                        <li><a href="/puppies-for-sale/breed/french-bulldog/overview">French Bulldog</a></li>
                        
                                            
                                                                        <li><a href="/puppies-for-sale/breed/frenchton/overview">Frenchton</a></li>
                        
                                    </ul>
            </article>
            <article data-cy="sitemap__breeds-overview-gz">
                <h3>Breed Overview (G-Z)</h3>
                <ul className="scroll">
                                                                        <li><a href="/puppies-for-sale/breed/german-shepherd-dog/overview">German Shepherd Dog</a></li>
                                                                                                                                                                                                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/golden-retriever/overview">Golden Retriever</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/goldendoodle/overview">Goldendoodle</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/great-dane/overview">Great Dane</a></li>
                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/havachon/overview">Havachon</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/havamalt/overview">Havamalt</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/havanese/overview">Havanese</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/havapoo/overview">Havapoo</a></li>
                                                                                                                                                                                                                                                                                <li><a href="/puppies-for-sale/breed/russell-terrier/overview">Jack Russell Terrier</a></li>
                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/labradoodle/overview">Labradoodle</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/labrador-retriever/overview">Labrador Retriever</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/lhasa-apso/overview">Lhasa Apso</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/mal-shi/overview">Mal-Shi</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/maltese/overview">Maltese</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/maltipoo/overview">Maltipoo</a></li>
                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/miniature-pinscher/overview">Miniature Pinscher</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/miniature-schnauzer/overview">Miniature Schnauzer</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/morkie/overview">Morkie</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/newfoundland/overview">Newfoundland</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/old-english-sheepdog/overview">Old English Sheepdog</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/papillon/overview">Papillon</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/pekingese/overview">Pekingese</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/pembroke-welsh-corgi/overview">Pembroke Welsh Corgi</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/pomapoo/overview">Pomapoo</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/pomeranian/overview">Pomeranian</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/pomsky/overview">Pomsky</a></li>
                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/poodle/overview">Poodle</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/portuguese-water-dog/overview">Portuguese Water Dog</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/pug/overview">Pug</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/puggle/overview">Puggle</a></li>
                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/rottweiler/overview">Rottweiler</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/saint-berdoodle/overview">Saint Berdoodle</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/saint-bernard/overview">Saint Bernard</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/samoyed/overview">Samoyed</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/schnoodle/overview">Schnoodle</a></li>
                                                                                                                                                                                                                                    <li><a href="/puppies-for-sale/breed/sheepadoodle/overview">Sheepadoodle</a></li>
                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/shiba-inu/overview">Shiba Inu</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/shichon/overview">Shichon</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/shih-tzu/overview">Shih Tzu</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/shihpoo/overview">Shihpoo</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/shorkie/overview">Shorkie</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/siberian-husky/overview">Siberian Husky</a></li>
                                                                                                                                            <li><a href="/puppies-for-sale/breed/silky-terrier/overview">Silky Terrier</a></li>
                                                                                                                                                                                                                                                                                                                                                                                                                    <li><a href="/puppies-for-sale/breed/whoodle/overview">Whoodle</a></li>
                                                                                                                                                                                        <li><a href="/puppies-for-sale/breed/yorkiepoo/overview">Yorkiepoo</a></li>
                                                                                                <li><a href="/puppies-for-sale/breed/yorkshire-terrier/overview">Yorkshire Terrier</a></li>
                                                            </ul>
            </article>
        </section>
        <section className="sitemap__by-state">
            <h2>Puppies By State</h2>
            <ul>
                                    <li><a href="/find-puppies/alabama">Alabama</a></li>
                                    <li><a href="/find-puppies/arizona">Arizona</a></li>
                                    <li><a href="/find-puppies/arkansas">Arkansas</a></li>
                                    <li><a href="/find-puppies/california">California</a></li>
                                    <li><a href="/find-puppies/colorado">Colorado</a></li>
                                    <li><a href="/find-puppies/connecticut">Connecticut</a></li>
                                    <li><a href="/find-puppies/delaware">Delaware</a></li>
                                    <li><a href="/find-puppies/florida">Florida</a></li>
                                    <li><a href="/find-puppies/georgia">Georgia</a></li>
                                    <li><a href="/find-puppies/idaho">Idaho</a></li>
                                    <li><a href="/find-puppies/illinois">Illinois</a></li>
                                    <li><a href="/find-puppies/indiana">Indiana</a></li>
                                    <li><a href="/find-puppies/iowa">Iowa</a></li>
                                    <li><a href="/find-puppies/kansas">Kansas</a></li>
                                    <li><a href="/find-puppies/kentucky">Kentucky</a></li>
                                    <li><a href="/find-puppies/louisiana">Louisiana</a></li>
                            </ul>
            <ul>
                                    <li><a href="/find-puppies/maine">Maine</a></li>
                                    <li><a href="/find-puppies/maryland">Maryland</a></li>
                                    <li><a href="/find-puppies/massachusetts">Massachusetts</a></li>
                                    <li><a href="/find-puppies/michigan">Michigan</a></li>
                                    <li><a href="/find-puppies/minnesota">Minnesota</a></li>
                                    <li><a href="/find-puppies/mississippi">Mississippi</a></li>
                                    <li><a href="/find-puppies/missouri">Missouri</a></li>
                                    <li><a href="/find-puppies/montana">Montana</a></li>
                                    <li><a href="/find-puppies/nebraska">Nebraska</a></li>
                                    <li><a href="/find-puppies/nevada">Nevada</a></li>
                                    <li><a href="/find-puppies/new-hampshire">New Hampshire</a></li>
                                    <li><a href="/find-puppies/new-jersey">New Jersey</a></li>
                                    <li><a href="/find-puppies/new-mexico">New Mexico</a></li>
                                    <li><a href="/find-puppies/new-york">New York</a></li>
                                    <li><a href="/find-puppies/north-carolina">North Carolina</a></li>
                                    <li><a href="/find-puppies/north-dakota">North Dakota</a></li>
                            </ul>
            <ul>
                                    <li><a href="/find-puppies/ohio">Ohio</a></li>
                                    <li><a href="/find-puppies/oklahoma">Oklahoma</a></li>
                                    <li><a href="/find-puppies/oregon">Oregon</a></li>
                                    <li><a href="/find-puppies/pennsylvania">Pennsylvania</a></li>
                                    <li><a href="/find-puppies/rhode-island">Rhode Island</a></li>
                                    <li><a href="/find-puppies/south-carolina">South Carolina</a></li>
                                    <li><a href="/find-puppies/south-dakota">South Dakota</a></li>
                                    <li><a href="/find-puppies/tennessee">Tennessee</a></li>
                                    <li><a href="/find-puppies/texas">Texas</a></li>
                                    <li><a href="/find-puppies/utah">Utah</a></li>
                                    <li><a href="/find-puppies/vermont">Vermont</a></li>
                                    <li><a href="/find-puppies/virginia">Virginia</a></li>
                                    <li><a href="/find-puppies/washington">Washington</a></li>
                                    <li><a href="/find-puppies/west-virginia">West Virginia</a></li>
                                    <li><a href="/find-puppies/wisconsin">Wisconsin</a></li>
                                    <li><a href="/find-puppies/wyoming">Wyoming</a></li>
                            </ul>
        </section>
        <section className="sitemap__recent-articles">
            <h2>Recent Articles</h2>
            <ul>
                                    <li>
                        <a href="/resource-center/training/leash-training">A Step by Step Tutorial to Leash Training</a>
                    </li>
                            </ul>
        </section>*/}
    </main>
  );
}

export default SitemapContainer;
