import React, { useEffect } from 'react';




interface Props{
    puppyInfo: any;
    shippingPrice: number;
    passedEssentials: boolean | undefined;
}
function extractAndFormatNumber(input: string) {
    const numericString = input.replace(/[^0-9.]/g, '');
  
    if (!numericString) return 'Invalid input';
  
    const formattedNumber = parseFloat(numericString).toLocaleString('en-US');
  
    return formattedNumber;
}
function formatNumberWithCommas(number: number) {
    if (typeof number !== 'number') {
      return 'Input must be a number';
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
const convertCurrencyStringToNumber = (currency: string): number => {
    // Remove the dollar sign and commas, then convert to a number
    return Number(currency.replace(/[\$,]/g, ''));
};
const OrderSummarySmall: React.FC<Props> = ({puppyInfo, shippingPrice, passedEssentials}) => {
    const price = extractAndFormatNumber(puppyInfo.price)
    const numberValue = convertCurrencyStringToNumber(puppyInfo.price);
    const shippingPriceVar = formatNumberWithCommas(shippingPrice)
    const subTotal = formatNumberWithCommas( numberValue + shippingPrice )
    
    
    
    const handleClose=() => {
        const el = document.getElementById('mantine-Drawer-overlay-id')
        const el2 = document.getElementById('mantine-Drawer-content-id')
        const el3 = document.getElementById('orderSummary--small')
        if(el && el2 && el3){
            el.style.opacity = '0';
            
            el3.style.display = 'none';

            el2.style.transform = 'translateY(-100%)';
            el2.style.opacity = '0';
        }
    }

  return (
    <div id='orderSummary--small' style={{display: 'none'}}>
        <div style={{"--drawer-size": '100%', "--drawer-flex": '0 0 calc(100% - var(--drawer-offset, 0rem) * 2)', "--drawer-height": 'var(--drawer-size)', "--drawer-align": "flex-end", "--mb-z-index": "200"} as React.CSSProperties} className="m_f11b401e mantine-Drawer-root">
            <div id='mantine-Drawer-overlay-id' style={{"--overlay-z-index": '200', "transition-property": 'opacity', "transition-duration": '200ms', "transition-timing-function": "ease", "opacity": '0'} as React.CSSProperties} className="mantine-Drawer-overlay m_9814e45f mantine-Overlay-root" data-fixed="true"> </div>
        
            <div className="m_60c222c7 tw-items-end m_31cd769a mantine-Drawer-inner">
                <section id='mantine-Drawer-content-id' style={{"--paper-radius": '0rem', "transition-property": 'transform, opacity', 'transition-duration': '250ms', 'transition-timing-function': 'ease', 'transform-origin': 'center bottom 0px', 'opacity': '0', 'transform': 'translateY(-100%)'} as React.CSSProperties} className="m_fd1ab0aa tw-h-[95%] tw-rounded-t-3xl m_b8a05bbd mantine-Drawer-content m_1b7284a3 mantine-Paper-root" role="dialog" tabIndex={-1} aria-modal="true" aria-describedby="mantine-v5sldf4dw-body" aria-labelledby="mantine-v5sldf4dw-title"><header className="m_b5489c3c tw-border-b tw-border-b-[#E0E0E0] tw-pl-6 m_5a7c2c9 mantine-Drawer-header"><h2 className="m_615af6c9 tw-font-nunito tw-text-base tw-font-bold mantine-Drawer-title" id="mantine-v5sldf4dw-title">Summary</h2><button className="mantine-focus-auto mantine-active m_220c80f2 m_606cb269 tw-h-[30px] tw-w-[30px] mantine-Drawer-close m_86a44da5 mantine-CloseButton-root m_87cf2631 mantine-UnstyledButton-root" data-variant="subtle" type="button" onClick={handleClose}><svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"width": "var(--cb-icon-size, 70%)", "height": "var(--cb-icon-size, 70%)"} as React.CSSProperties}><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg></button></header>
                    <div className="m_5df29311 tw-pt-5 tw-px-6 mantine-Drawer-body" id="mantine-v5sldf4dw-body">
                        <div><h2 className="tw-font-nunito tw-font-bold tw-py-5 tw-px-6 tw-border-b tw-border-b-[#E0E0E0] tw-hidden">Summary</h2>
                            <div>
                                <div className="tw-flex tw-gap-4 tw-items-start">
                                    <a className="">
                                        {/* <img alt="Bring Ellis home" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="tw-rounded-xl tw-h-[100px] tw-w-[100px] tw-object-cover m_9e117634 mantine-Image-root" style={{"color": "transparent"} as React.CSSProperties} srcSet="/_next/image?url=https%3A%2F%2Fphotos.puppyspot.com%2F7%2Flisting%2F768727%2Fphoto%2F503051080.JPG&amp;w=128&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fphotos.puppyspot.com%2F7%2Flisting%2F768727%2Fphoto%2F503051080.JPG&amp;w=256&amp;q=75 2x" src="https://www.puppyspot.com/_next/image?url=https%3A%2F%2Fphotos.puppyspot.com%2F7%2Flisting%2F768727%2Fphoto%2F503051080.JPG&amp;w=256&amp;q=75"/> */}
                                        {/* <img alt="Bring Ellis home" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="tw-rounded-xl tw-h-[100px] tw-w-[100px] tw-object-cover m_9e117634 mantine-Image-root" style={{"color": "transparent"} as React.CSSProperties} src="https://www.puppyspot.com/_next/image?url=https%3A%2F%2Fphotos.puppyspot.com%2F7%2Flisting%2F768727%2Fphoto%2F503051080.JPG&amp;w=256&amp;q=75"/> */}
                                        <img alt={`Bring ${puppyInfo.puppy_name} home`} loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="tw-rounded-xl tw-h-[100px] tw-w-[100px] tw-object-cover m_9e117634 mantine-Image-root" style={{color:"transparent"}} src={puppyInfo.gallery_content[0].urls['300w']}/>
                                    </a>
                                    <div className="tw-flex tw-flex-col">
                                        <a className="tw-font-bold tw-capitalize tw-font-nunito tw-text-lg ">{puppyInfo.puppy_name}</a>
                                        <p className="tw-font-inter tw-text-neutral-600">{puppyInfo.sex_and_age}</p>
                                        <p className="tw-font-inter tw-text-neutral-600 tw-capitalize">{puppyInfo.breed}</p>
                                        <p className="tw-font-inter tw-text-neutral-600">ID # {puppyInfo.puppy_id}</p>
                                    </div>
                                </div>
                                <div style={{"--divider-size": "var(--divider-size-lg)", "margin-block": "calc(1.25rem * var(--mantine-scale))"} as React.CSSProperties} className="tw-rounded m_3eebeb36 mantine-Divider-root" data-size="lg" data-orientation="horizontal" role="separator">

                                </div>
                                <div className="tw-flex tw-flex-col tw-gap-5 ">
                                    <div>
                                        <div className="tw-flex tw-justify-between"><span className="tw-font-inter tw-capitalize">{puppyInfo.puppy_name}</span><span className="tw-font-inter"><span>${price}.00</span></span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="tw-flex tw-justify-between"><span className="tw-font-inter tw-text-gray-01">Travel</span><span className="tw-font-inter tw-text-gray-01">{shippingPriceVar == '0' ? '--' : `$${shippingPriceVar}.00`}</span>
                                        </div><p className="tw-font-inter tw-text-xs tw-text-gray-02 tw-w-64">Calculated once address is validated</p>
                                        <div className="tw-font-inter tw-text-neutral-600 tw-text-sm"></div>
                                    </div>

                                    <div className="m_3eebeb36 mantine-Divider-root" data-orientation="horizontal" role="separator"></div>
                                    <div className="tw-flex tw-justify-between"><span className="tw-font-inter tw-text-gray-01">Subtotal</span><span className="tw-font-inter tw-text-gray-01">{shippingPriceVar == '0' ? '--' : `$${subTotal}.00`}</span></div>
                                    <div>
                                        <div className="tw-flex tw-justify-between"><span className="tw-font-inter tw-text-gray-01">Tax</span><span className="tw-font-inter tw-text-gray-01">{passedEssentials ? 'Covered' : '--'}</span>
                                        </div><p className="tw-font-inter tw-text-xs tw-text-gray-02 tw-w-64">Calculated once essentials are confirmed</p>
                                    </div>
                                    <div className="m_3eebeb36 mantine-Divider-root" data-orientation="horizontal" role="separator"></div>
                                    <div>
                                        <div className="tw-flex tw-justify-between"><span className="tw-font-inter tw-text-gray-01 tw-font-bold">Total</span><span className="tw-font-inter tw-text-gray-01 tw-font-bold"><span>${subTotal}.00</span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button onClick={handleClose} style={{"--button-radius": "var(--mantine-radius-xl)", "--button-bg": "transparent", "--button-hover": "rgba(0, 0, 0, 0.05)", "--button-color": '#000000', "--button-bd": 'calc(0.0625rem * var(--mantine-scale)) solid #000000'} as React.CSSProperties} className="mantine-focus-auto mantine-active tw-px-6 tw-py-4 tw-h-fit tw-w-full tw-mt-5 m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root" data-variant="outline" type="button"><span className="tw-h-fit m_80f1301b mantine-Button-inner"><span className="tw-font-inter tw-text-base tw-font-bold tw-whitespace-normal tw-h-fit tw-overflow-visible tw-leading-normal m_811560b9 mantine-Button-label">Close</span></span></button>

                        <div className="tw-flex tw-justify-center tw-items-center tw-mt-5 tw-gap-1 tw-mb-10 tw-font-inter"><svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="tw-mr-1"><path d="M1.875 3.125C1.875 2.79348 2.0067 2.47554 2.24112 2.24112C2.47554 2.0067 2.79348 1.875 3.125 1.875H5.175C5.30612 1.8751 5.43389 1.91644 5.54022 1.99316C5.64656 2.06988 5.72607 2.1781 5.7675 2.3025L6.70375 5.11063C6.75119 5.25334 6.74558 5.40837 6.68795 5.54728C6.63032 5.68619 6.52453 5.79966 6.39 5.86688L4.97938 6.57313C5.67082 8.10346 6.89654 9.32918 8.42687 10.0206L9.13312 8.61C9.20034 8.47547 9.31381 8.36968 9.45272 8.31205C9.59163 8.25442 9.74666 8.24881 9.88937 8.29625L12.6975 9.2325C12.822 9.27397 12.9303 9.35357 13.007 9.46003C13.0838 9.56649 13.125 9.6944 13.125 9.82562V11.875C13.125 12.2065 12.9933 12.5245 12.7589 12.7589C12.5245 12.9933 12.2065 13.125 11.875 13.125H11.25C6.0725 13.125 1.875 8.9275 1.875 3.75V3.125Z" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"></path></svg> Need Help?<a href="tel:+18663066064" className="tw-font-bold  tw-underline">866-306-6064</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  );
}

export default OrderSummarySmall;

