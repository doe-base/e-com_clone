import React from "react";
import './index.css'
import breed_state_data from '../../data/breed-state.json'

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
        src="/img/map.svg"
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
                {
                  breed_state_data.west.map((breed) => (
                    <li key={breed.slug}>
                      <a href={`/find-puppies/${breed.state}`}>{breed.state}</a>
                    </li>
                  ))
                }
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
                  {
                    breed_state_data.southwest.map((breed) => (
                      <li key={breed.slug}>
                        <a href={`/find-puppies/${breed.state}`}>{breed.state}</a>
                      </li>
                    ))
                  }
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
                  {
                    breed_state_data.midwest.map((breed) => (
                      <li key={breed.slug}>
                        <a href={`/find-puppies/${breed.state}`}>{breed.state}</a>
                      </li>
                    ))
                  }
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
                  {
                    breed_state_data.northeast.map((breed) => (
                      <li key={breed.slug}>
                        <a href={`/find-puppies/${breed.state}`}>{breed.state}</a>
                      </li>
                    ))
                  }
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
                  {
                    breed_state_data.southeast.map((breed) => (
                      <li key={breed.slug}>
                        <a href={`/find-puppies/${breed.state}`}>{breed.state}</a>
                      </li>
                    ))
                  }
                </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default BreedStateSection;