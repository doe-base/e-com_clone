import React, { useEffect } from 'react';

interface Props{
    puppyInfo: any;
}
const OrderSummary: React.FC<Props> = ({puppyInfo}) => {

  return (
    <div className="tw-flex tw-flex-col">
    <div className="tw-hidden lg:tw-block tw-w-[400px] tw-min-w-[400px] tw-border tw-rounded-3xl">
        <h2 className="tw-font-nunito tw-font-bold tw-py-5 tw-px-6 tw-border-b tw-border-b-[#E0E0E0] undefined">Summary</h2>
        <div className="tw-px-6 tw-pt-5 tw-pb-8">
        <div className="tw-flex tw-gap-4 tw-items-start">
            <a className="" href="/puppy/768727" target="_blank">
            {/* <img alt="Bring Ellis home" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="tw-rounded-xl tw-h-[100px] tw-w-[100px] tw-object-cover m_9e117634 mantine-Image-root" style={{color:"transparent"}} srcSet="/_next/image?url=https%3A%2F%2Fphotos.puppyspot.com%2F7%2Flisting%2F768727%2Fphoto%2F503051080.JPG&amp;w=128&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fphotos.puppyspot.com%2F7%2Flisting%2F768727%2Fphoto%2F503051080.JPG&amp;w=256&amp;q=75 2x" src="https://www.puppyspot.com/_next/image?url=https%3A%2F%2Fphotos.puppyspot.com%2F7%2Flisting%2F768727%2Fphoto%2F503051080.JPG&amp;w=256&amp;q=75"/> */}
            <img alt="Bring Ellis home" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="tw-rounded-xl tw-h-[100px] tw-w-[100px] tw-object-cover m_9e117634 mantine-Image-root" style={{color:"transparent"}} src={puppyInfo.gallery_content[0].urls.medium}/>
            </a>
            <div className="tw-flex tw-flex-col">
            
            <a className="tw-font-bold tw-capitalize tw-font-nunito tw-text-lg " href="/puppy/768727" target="_blank">{puppyInfo.puppy_name}</a>
            <p className="tw-font-inter tw-text-neutral-600">Male • 22 weeks</p>
            <p className="tw-font-inter tw-text-neutral-600 tw-capitalize">Cocker Spaniel</p>
            <p className="tw-font-inter tw-text-neutral-600">ID # 768727</p>
            </div>
        </div>
        <div style={{
                '--divider-size': 'var(--divider-size-lg)',
                'margin-block': 'calc(1.25rem * var(--mantine-scale))',
                } as React.CSSProperties} className="tw-rounded m_3eebeb36 mantine-Divider-root" data-size="lg" data-orientation="horizontal" role="separator"></div>
        <div className="tw-flex tw-flex-col tw-gap-5 ">
            <div>
                <div className="tw-flex tw-justify-between"><span className="tw-font-inter tw-capitalize">Ellis</span><span className="tw-font-inter"><span>$2,292.00</span></span></div>
            </div>

            <div>
                <div className="tw-flex tw-justify-between"><span className="tw-font-inter tw-text-gray-01">Travel</span><span className="tw-font-inter tw-text-gray-01">--</span></div>
                <p className="tw-font-inter tw-text-xs tw-text-gray-02 tw-w-64">Calculated once address is validated</p>
                <div className="tw-font-inter tw-text-neutral-600 tw-text-sm"></div>
            </div>

            <div className="m_3eebeb36 mantine-Divider-root" data-orientation="horizontal" role="separator"></div>
            <div className="tw-flex tw-justify-between"><span className="tw-font-inter tw-text-gray-01">Subtotal</span><span className="tw-font-inter tw-text-gray-01">--</span></div>
            <div>
                <div className="tw-flex tw-justify-between"><span className="tw-font-inter tw-text-gray-01">Tax</span><span className="tw-font-inter tw-text-gray-01">--</span>
                </div>
                <p className="tw-font-inter tw-text-xs tw-text-gray-02 tw-w-64">Calculated once essentials are confirmed</p>
            </div>
            <div className="m_3eebeb36 mantine-Divider-root" data-orientation="horizontal" role="separator"></div>
            <div>
                <div className="tw-flex tw-justify-between"><span className="tw-font-inter tw-text-gray-01 tw-font-bold">Total</span><span className="tw-font-inter tw-text-gray-01 tw-font-bold"><span>$2,292.00</span></span></div>
            </div>
        
        </div>
        </div>
            
    </div>
    <div></div>
    </div>
  );
}

export default OrderSummary;
