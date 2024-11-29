import React, { useEffect } from 'react';

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
  
interface Props{
    puppyInfo: any;
    shippingPrice: number;
    passedEssentials: boolean | undefined;
}
const OrderSummary: React.FC<Props> = ({puppyInfo, shippingPrice, passedEssentials}) => {
    const price = extractAndFormatNumber(puppyInfo.price)
    const numberValue = convertCurrencyStringToNumber(puppyInfo.price);
    const shippingPriceVar = formatNumberWithCommas(shippingPrice)
    const subTotal = formatNumberWithCommas( numberValue + shippingPrice )
  return (
    <div className="tw-flex tw-flex-col">
    <div className="tw-hidden lg:tw-block tw-w-[400px] tw-min-w-[400px] tw-border tw-rounded-3xl">
        <h2 className="tw-font-nunito tw-font-bold tw-py-5 tw-px-6 tw-border-b tw-border-b-[#E0E0E0] undefined">Summary</h2>
        <div className="tw-px-6 tw-pt-5 tw-pb-8">
        <div className="tw-flex tw-gap-4 tw-items-start">
            <a className="">
                {/* <img alt={`Bring ${puppyInfo.puppy_name} home`} loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="tw-rounded-xl tw-h-[100px] tw-w-[100px] tw-object-cover m_9e117634 mantine-Image-root" style={{color:"transparent"}} srcSet="/_next/image?url=https%3A%2F%2Fphotos.puppyspot.com%2F7%2Flisting%2F768727%2Fphoto%2F503051080.JPG&amp;w=128&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fphotos.puppyspot.com%2F7%2Flisting%2F768727%2Fphoto%2F503051080.JPG&amp;w=256&amp;q=75 2x" src="https://www.puppyspot.com/_next/image?url=https%3A%2F%2Fphotos.puppyspot.com%2F7%2Flisting%2F768727%2Fphoto%2F503051080.JPG&amp;w=256&amp;q=75"/> */}
                <img alt={`Bring ${puppyInfo.puppy_name} home`} loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="tw-rounded-xl tw-h-[100px] tw-w-[100px] tw-object-cover m_9e117634 mantine-Image-root" style={{color:"transparent"}} src={puppyInfo.gallery_content[0].urls['300w']}/>
            </a>
            <div className="tw-flex tw-flex-col">
                <a className="tw-font-bold tw-capitalize tw-font-nunito tw-text-lg ">{puppyInfo.puppy_name}</a>
                <p className="tw-font-inter tw-text-neutral-600">{puppyInfo.sex_and_age}</p>
                <p className="tw-font-inter tw-text-neutral-600 tw-capitalize">{puppyInfo.breed}</p>
                <p className="tw-font-inter tw-text-neutral-600">ID # {puppyInfo.puppy_id}</p>
            </div>
        </div>
        <div style={{
                '--divider-size': 'var(--divider-size-lg)',
                'margin-block': 'calc(1.25rem * var(--mantine-scale))',
                } as React.CSSProperties} className="tw-rounded m_3eebeb36 mantine-Divider-root" data-size="lg" data-orientation="horizontal" role="separator"></div>
        <div className="tw-flex tw-flex-col tw-gap-5 ">
            <div>
                <div className="tw-flex tw-justify-between"><span className="tw-font-inter tw-capitalize">{puppyInfo.puppy_name}</span><span className="tw-font-inter"><span>${price}.00</span></span></div>
            </div>

            <div>
                <div className="tw-flex tw-justify-between"><span className="tw-font-inter tw-text-gray-01">Travel</span><span className="tw-font-inter tw-text-gray-01">{shippingPriceVar == '0' ? '--' : `$${shippingPriceVar}.00`}</span></div>
                <p className="tw-font-inter tw-text-xs tw-text-gray-02 tw-w-64">Calculated once shipping method validated</p>
                <div className="tw-font-inter tw-text-neutral-600 tw-text-sm"></div>
            </div>

            <div className="m_3eebeb36 mantine-Divider-root" data-orientation="horizontal" role="separator"></div>
            <div className="tw-flex tw-justify-between"><span className="tw-font-inter tw-text-gray-01">Subtotal</span><span className="tw-font-inter tw-text-gray-01">{shippingPriceVar == '0' ? '--' : `$${subTotal}.00`}</span></div>
            <div>
                <div className="tw-flex tw-justify-between"><span className="tw-font-inter tw-text-gray-01">Tax</span><span className="tw-font-inter tw-text-gray-01">{passedEssentials ? 'Covered' : '--'}</span>
                </div>
                <p className="tw-font-inter tw-text-xs tw-text-gray-02 tw-w-64">Calculated once essentials are confirmed</p>
            </div>
            <div className="m_3eebeb36 mantine-Divider-root" data-orientation="horizontal" role="separator"></div>
            <div>
                <div className="tw-flex tw-justify-between"><span className="tw-font-inter tw-text-gray-01 tw-font-bold">Total</span><span className="tw-font-inter tw-text-gray-01 tw-font-bold"><span>${subTotal}.00</span></span></div>
            </div>
        
        </div>
        </div>
            
    </div>
    <div></div>
    </div>
  );
}

export default OrderSummary;
