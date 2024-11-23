import React, { useState } from "react";
import "./index.css";

interface Props {
    x: number
    y: number
    dropDownRef: React.RefObject<HTMLDivElement>
    sortOption: string; 
    setSortOption: React.Dispatch<React.SetStateAction<string>>;
}
const DropDown: React.FC<Props> = ({x, y, dropDownRef, sortOption, setSortOption,}) => {

  return (
    <div 
        id="tippy-tooltip-dropdown_xzdk"
        ref={dropDownRef} 
        className="tippy-popper opec_z_index_hidden" 
        role="tooltip"
        style={{
            position: 'absolute',
            top: '100%', // Places it directly below the button
            left: '-20%', // Aligns sortOption to the left of the button
            zIndex: 1,
            marginTop: '5px', // Small gap below the button
            backgroundColor: 'white',
            border: '1px solid #ccc',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.1s linear'
            // width: '100%',
          }}
        // style={{zIndex: '1', transitionDuration: '0ms', visibility: 'visible', position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: `translate3d(${x}px, ${y}px, 0px)`}} 
        data-html="" 
        tabIndex={-1} 
        x-placement="bottom-end"
    >
        <div className="tippy-tooltip light-theme sort-tippy-theme" data-size="regular" data-animation="fade" data-state="visible" data-interactive="" data-template-id="#sort-puppies" style={{bottom: '0px'}}>
            <div className="tippy-content">
                <section className="js-sort" id="sort-puppies">
                    <form className="sort">
                        <div data-sort="">
                            <input 
                                type="radio" 
                                name="sort" 
                                id="search-sort-order-asc" 
                                data-key="Featured" 
                                value="Featured" 
                                checked={sortOption === "Featured"} 
                                onClick={()=> setSortOption('Featured')}
                                 />
                            <label htmlFor="search-sort-order-asc" className="search-sort-order-asc">Featured</label>

                            <input 
                                type="radio" 
                                name="sort" 
                                id="sort-group-asc-puppy-color-asc-search-sort-order-asc" 
                                data-key="Color" 
                                value="Color" 
                                checked={sortOption === "Color"} 
                                onClick={()=> setSortOption('Color')}
                                />
                            <label htmlFor="sort-group-asc-puppy-color-asc-search-sort-order-asc" className="sort-group-asc-puppy-color-asc-search-sort-order-asc">Color</label>

                            <input 
                                type="radio" 
                                name="sort" 
                                id="sort-group-asc-display-puppy-name-asc-search-sort-order-asc" 
                                data-key="Name" 
                                value="Name" 
                                checked={sortOption === "Name"} 
                                onClick={()=> setSortOption('Name')}
                                />
                            <label htmlFor="sort-group-asc-display-puppy-name-asc-search-sort-order-asc" className="sort-group-asc-display-puppy-name-asc-search-sort-order-asc">Name</label>

                            <input 
                                type="radio" 
                                name="sort" 
                                id="sort-group-asc-litter-birth-date-desc-search-sort-order-asc" 
                                data-key="Age: Young to Old" 
                                value="Age: Young to Old" 
                                checked={sortOption === "Age: Young to Old"} 
                                onClick={()=> setSortOption('Age: Young to Old')}
                                />
                            <label htmlFor="sort-group-asc-litter-birth-date-desc-search-sort-order-asc" className="sort-group-asc-litter-birth-date-desc-search-sort-order-asc">Age: Young to Old</label>

                            <input 
                                type="radio" 
                                name="sort" 
                                id="sort-group-asc-litter-birth-date-asc-search-sort-order-asc" 
                                data-key="Age: Old to Young" 
                                value="Age: Old to Young" 
                                checked={sortOption === "Age: Old to Young"} 
                                onClick={()=> setSortOption('Age: Old to Young')}
                                />
                            <label htmlFor="sort-group-asc-litter-birth-date-asc-search-sort-order-asc" className="sort-group-asc-litter-birth-date-asc-search-sort-order-asc">Age: Old to Young</label>

                            <input 
                                type="radio" 
                                name="sort" 
                                id="sort-group-asc-price-asc-search-sort-order-asc" 
                                data-key="Price: Low to High" 
                                value="Price: Low to High" 
                                checked={sortOption === "Price: Low to High"} 
                                onClick={()=> setSortOption('Price: Low to High')}
                                />
                            <label htmlFor="sort-group-asc-price-asc-search-sort-order-asc" className="sort-group-asc-price-asc-search-sort-order-asc">Price: Low to High</label>
                            
                            <input 
                                type="radio" 
                                name="sort" 
                                id="sort-group-asc-price-desc-search-sort-order-asc" 
                                data-key="Price: High to Low" 
                                value="Price: High to Low" 
                                checked={sortOption === "Price: High to Low"} 
                                onClick={()=> setSortOption('Price: High to Low')}
                                />
                            <label htmlFor="sort-group-asc-price-desc-search-sort-order-asc" className="sort-group-asc-price-desc-search-sort-order-asc">Price: High to Low</label>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </div>
  );
};

export default DropDown;
