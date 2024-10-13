import React from "react";
import './index.css'


interface Props {}
const BreedStateSection: React.FC<Props> = ({}) => {

    const westBtn =()=>{
        const elBtn = document.getElementById('js-collapsible-panel-handle-west')
        const el = document.getElementById('js-collapsible-panel-west')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden-at-768')
        }
    }

    const swBtn =()=>{
        const elBtn = document.getElementById('js-collapsible-panel-handle-sw')
        const el = document.getElementById('js-collapsible-panel-sw')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden-at-768')
        }
    }

    const mwBtn =()=>{
        const elBtn = document.getElementById('js-collapsible-panel-handle-mw')
        const el = document.getElementById('js-collapsible-panel-mw')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden-at-768')
        }
    }

    const neBtn =()=>{
        const elBtn = document.getElementById('js-collapsible-panel-handle-ne')
        const el = document.getElementById('js-collapsible-panel-ne')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden-at-768')
        }
    }

    const seBtn =()=>{
        const elBtn = document.getElementById('js-collapsible-panel-handle-se')
        const el = document.getElementById('js-collapsible-panel-se')
        
        if(elBtn && el){
            elBtn.classList.toggle('open')
            el.classList.toggle('hidden-at-768')
        }
    }

  return (
    <section className="breed-states">
      <h2 className="breed-states__title text-center">
        Puppies for Sale Everywhere!
      </h2>
      <img
        src="https://www.puppyspot.com/assets/img/map.svg"
        alt="United States Map"
        loading="lazy"
      />
      <p>See all the US locations for Puppies for Sale</p>
      <nav className="breed-states__items">
        <div className="collapsible-panel__container js-collapsible-panel-container">
          <h3 onClick={westBtn} id="js-collapsible-panel-handle-west" className="js-collapsible-panel-handle collapsible-panel__handle open ">
            <span>
              <strong>west</strong>
            </span>
          </h3>
          <div id="js-collapsible-panel-west" className="js-collapsible-panel">
            <div className="collapsible-panel__content">
              <ul>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/california">
                    California
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/colorado">
                    Colorado
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/idaho">
                    Idaho
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/montana">
                    Montana
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/wyoming">
                    Wyoming
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/nevada">
                    Nevada
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/oregon">
                    Oregon
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/utah">Utah</a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/washington">
                    Washington
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className="collapsible-panel__container js-collapsible-panel-container">
          <h3 onClick={swBtn} id="js-collapsible-panel-handle-sw" className="js-collapsible-panel-handle collapsible-panel__handle ">
            <span>
              <strong>southwest</strong>
            </span>
          </h3>
          <div id="js-collapsible-panel-sw" className="js-collapsible-panel hidden-at-768">
            <div className="collapsible-panel__content">
              <ul>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/arizona">
                    Arizona
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/oklahoma">
                    Oklahoma
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/new-mexico">
                    New Mexico
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/texas">
                    Texas
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className="collapsible-panel__container js-collapsible-panel-container">
          <h3 onClick={mwBtn} id="js-collapsible-panel-handle-mw" className="js-collapsible-panel-handle collapsible-panel__handle ">
            <span>
              <strong>midwest</strong>
            </span>
          </h3>
          <div id="js-collapsible-panel-mw" className="js-collapsible-panel hidden-at-768">
            <div className="collapsible-panel__content">
              <ul>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/illinois">
                    Illinois
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/indiana">
                    Indiana
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/iowa">Iowa</a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/kansas">
                    Kansas
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/michigan">
                    Michigan
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/minnesota">
                    Minnesota
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/missouri">
                    Missouri
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/nebraska">
                    Nebraska
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/north-dakota">
                    North Dakota
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/ohio">Ohio</a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/wisconsin">
                    Wisconsin
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/south-dakota">
                    South Dakota
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className="collapsible-panel__container js-collapsible-panel-container">
          <h3 onClick={neBtn} id="js-collapsible-panel-handle-ne" className="js-collapsible-panel-handle collapsible-panel__handle ">
            <span>
              <strong>northeast</strong>
            </span>
          </h3>
          <div id="js-collapsible-panel-ne" className="js-collapsible-panel hidden-at-768">
            <div className="collapsible-panel__content">
              <ul>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/connecticut">
                    Connecticut
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/delaware">
                    Delaware
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/maine">
                    Maine
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/maryland">
                    Maryland
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/massachusetts">
                    Massachusetts
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/new-hampshire">
                    New Hampshire
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/new-jersey">
                    New Jersey
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/new-york">
                    New York
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/pennsylvania">
                    Pennsylvania
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/rhode-island">
                    Rhode Island
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/vermont">
                    Vermont
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className="collapsible-panel__container js-collapsible-panel-container">
          <h3 onClick={seBtn} id="js-collapsible-panel-handle-se" className="js-collapsible-panel-handle collapsible-panel__handle ">
            <span>
              <strong>southeast</strong>
            </span>
          </h3>
          <div id="js-collapsible-panel-se" className="js-collapsible-panel hidden-at-768">
            <div className="collapsible-panel__content">
              <ul>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/alabama">
                    Alabama
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/arkansas">
                    Arkansas
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/florida">
                    Florida
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/georgia">
                    Georgia
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/kentucky">
                    Kentucky
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/louisiana">
                    Louisiana
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/mississippi">
                    Mississippi
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/north-carolina">
                    North Carolina
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/south-carolina">
                    South Carolina
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/tennessee">
                    Tennessee
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/virginia">
                    Virginia
                  </a>
                </li>
                <li>
                  <a href="https://www.puppyspot.com/find-puppies/west-virginia">
                    West Virginia
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default BreedStateSection;