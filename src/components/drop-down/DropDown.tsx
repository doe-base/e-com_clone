import React from "react";
import "./index.css";

interface Props {
    x: number
    y: number
    dropDownRef: React.RefObject<HTMLDivElement>
}
const DropDown: React.FC<Props> = ({x, y, dropDownRef}) => {
  return (
    <div 
        id="tippy-tooltip-dropdown_xzdk"
        ref={dropDownRef} 
        className="tippy-popper opec_z_index_hidden" 
        role="tooltip"
        style={{
            position: 'absolute',
            top: '100%', // Places it directly below the button
            left: '-10%', // Aligns dropdown to the left of the button
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
                            <input type="radio" name="sort" value="search_sort_order asc" id="search-sort-order-asc" data-key="Featured" data-is-default="" />
                            <label htmlFor="search-sort-order-asc" className="search-sort-order-asc">Featured</label>
                            <input type="radio" name="sort" value="sort_group asc, puppy_color asc, search_sort_order asc" id="sort-group-asc-puppy-color-asc-search-sort-order-asc" data-key="Color"/>
                            <label htmlFor="sort-group-asc-puppy-color-asc-search-sort-order-asc" className="sort-group-asc-puppy-color-asc-search-sort-order-asc">Color</label>
                            <input type="radio" name="sort" value="sort_group asc, display_puppy_name asc, search_sort_order asc" id="sort-group-asc-display-puppy-name-asc-search-sort-order-asc" data-key="Name"/>
                            <label htmlFor="sort-group-asc-display-puppy-name-asc-search-sort-order-asc" className="sort-group-asc-display-puppy-name-asc-search-sort-order-asc">Name</label>
                            <input type="radio" name="sort" value="sort_group asc, litter_birth_date desc, search_sort_order asc" id="sort-group-asc-litter-birth-date-desc-search-sort-order-asc" data-key="Age: Young to Old"/>
                            <label htmlFor="sort-group-asc-litter-birth-date-desc-search-sort-order-asc" className="sort-group-asc-litter-birth-date-desc-search-sort-order-asc">Age: Young to Old</label>
                            <input type="radio" name="sort" value="sort_group asc, litter_birth_date asc, search_sort_order asc" id="sort-group-asc-litter-birth-date-asc-search-sort-order-asc" data-key="Age: Old to Young"/>
                            <label htmlFor="sort-group-asc-litter-birth-date-asc-search-sort-order-asc" className="sort-group-asc-litter-birth-date-asc-search-sort-order-asc">Age: Old to Young</label>
                            <input type="radio" name="sort" value="sort_group asc, price asc, search_sort_order asc" id="sort-group-asc-price-asc-search-sort-order-asc" data-key="Price: Low to High"/>
                            <label htmlFor="sort-group-asc-price-asc-search-sort-order-asc" className="sort-group-asc-price-asc-search-sort-order-asc">Price: Low to High</label>
                            <input type="radio" name="sort" value="sort_group asc, price desc, search_sort_order asc" id="sort-group-asc-price-desc-search-sort-order-asc" data-key="Price: High to Low" checked={true}/>
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
