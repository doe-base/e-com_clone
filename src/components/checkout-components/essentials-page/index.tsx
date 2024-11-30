import React, { useState, useEffect, useContext, useRef } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { FirebaseContext } from '../../../context/firebase';
import { Oval } from 'react-loader-spinner';
import ProcessTrackerSmall from '../../../components/checkout-components/process-tracker/ProcessTrackerSmall';

interface Props{
    puppyInfo: any;
    paymentID: string | undefined;
    shippingPrice: number
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
const EssentialsSection: React.FC<Props> = ({puppyInfo, paymentID, shippingPrice}) => {
    const { firebase } = useContext(FirebaseContext)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const openOrderSummarySmall = () => {
        const el = document.getElementById('mantine-Drawer-overlay-id')
        const el2 = document.getElementById('mantine-Drawer-content-id')
        const el3 = document.getElementById('orderSummary--small')
        if(el && el2 && el3){
            el.style.opacity = '1';
            
            el3.style.display = 'block';

            el2.style.opacity = '1';
            el2.style.transform = 'translateY(0%)';
        }
    }
    async function updateItem(documentId: any) {
        if (!firebase) return;
        setError('');
        setLoading(true);
      
        try {
          // Query the collection to find the document
          const querySnapshot = await firebase.firestore()
            .collection('puppy_orders')
            .where('paymentId', '==', documentId)
            .get();
      
          if (querySnapshot.empty) {
            setLoading(false);
            setError('Document not found');
            return;
          }
      
          // Update each document that matches the query
          for (const doc of querySnapshot.docs) {
            await doc.ref.update({
                passedEssentials: true,
            });
          }
      
          setLoading(false);
          window.location.replace(`/shop/checkout/${paymentID}/${puppyInfo.puppy_id}/paypal`);
        } catch (error) {
          setLoading(false);
          setError('An unexpected error occurred');
          // console.error('Error updating document:', error);
        }
    }

    const [isPastThreshold, setIsPastThreshold] = useState(false);
    const fullHeroRef = useRef<HTMLDivElement | null>(null)
    const [fullHeroHeight, setFullHeroHeight] = useState<any>()

      useEffect(() => {
        if (fullHeroRef.current) {
          setFullHeroHeight(fullHeroRef.current.offsetHeight);
        }
      }, []);

    useEffect(() => {
      const handleScrollAndResize = () => {
        const isViewportNarrow = window.innerWidth < 1024;
        const isScrolledPast = window.scrollY > 300;
  
        setIsPastThreshold(isViewportNarrow && isScrolledPast);
      };
  
      // Check on scroll and resize
      window.addEventListener('scroll', handleScrollAndResize);
      window.addEventListener('resize', handleScrollAndResize);
  
      // Run the check on initial render
      handleScrollAndResize();
  
      // Cleanup listeners on component unmount
      return () => {
        window.removeEventListener('scroll', handleScrollAndResize);
        window.removeEventListener('resize', handleScrollAndResize);
      };
    }, []);


    const numberValue = convertCurrencyStringToNumber(puppyInfo.price);
    const subTotal = formatNumberWithCommas( numberValue + shippingPrice )


  return (
    <div className='tw-flex tw-flex-col tw-w-full lg:tw-max-w-[711px]'>
       {
                
            !isPastThreshold
            ?
            null
            :
            <div style={{height: fullHeroHeight}}></div>
        } 
            
        {
                !isPastThreshold
                ?
                <div ref={fullHeroRef} style={{backgroundPositionY:'0', backgroundSize:'contain', backgroundImage: 'url(/img/patter-bg.svg)'}} className=" tw-bg-green-04 tw-w-full tw-flex tw-justify-center tw-items-center tw-px-6 tw-gap-2 tw-bg-no-repeat tw-z-[110] tw-rounded-b-[20px] tw-flex-col tw-pt-6 tw-pb-2 sm:tw-rounded-t-[20px] m_2ce0de02 mantine-BackgroundImage-root">
                    <img 
                            alt={`Bring ${puppyInfo.puppy_name} home`} 
                            loading="lazy" 
                            width="150" 
                            height="150" 
                            decoding="async" 
                            data-nimg="1" 
                            className="tw-rounded-xl tw-object-cover tw-h-[150px] tw-w-[150px] tw-max-h-[150px] tw-max-w-[150px] m_9e117634 mantine-Image-root" 
                            style={{color:"transparent"}} 
                            // srcSet={`
                            //     /_next/image?url=${puppyInfo.gallery_content[0].urls.small}&amp;w=256&amp;q=75 1x, 
                            //     /_next/image?url=${puppyInfo.gallery_content[0].urls.medium}&amp;w=384&amp;q=75 2x`} 
                            // src={`https://www.puppyspot.com/_next/image?url=${puppyInfo.gallery_content[0].urls.medium}&amp;w=384&amp;q=75`}
                            src={puppyInfo.gallery_content[0].urls['300w']}
                        />
                        {/* <img alt={`Bring ${puppyInfo.puppy_name} home`} loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="tw-rounded-xl tw-object-cover tw-h-[150px] tw-w-[150px] tw-max-h-[150px] tw-max-w-[150px] m_9e117634 mantine-Image-root" style={{color:"transparent"}} src="https://www.puppyspot.com/_next/image?url=https%3A%2F%2Fphotos.puppyspot.com%2F7%2Flisting%2F768727%2Fphoto%2F503051080.JPG&amp;w=384&amp;q=75"/> */}
                    <div className="tw-flex tw-flex-col tw-items-center"><span>
                        <p className="tw-font-nunito tw-text-[32px] tw-font-black tw-leading-10 tw-text-black tw-text-center">Let's bring <strong className="tw-capitalize">{puppyInfo.puppy_name}</strong> home!</p></span><span className=" tw-font-nunito tw-text-gray-01 tw-flex tw-items-center tw-gap-3 lg:tw-hidden tw-text-base">Show summary: <span className="tw-font-bold tw-underline tw-cursor-pointer">${subTotal}.00</span>
                        <button 
                        onClick={openOrderSummarySmall}
                        style={{
                        '--button-height': 'var(--button-height-xs)',
                        '--button-padding-x': 'var(--button-padding-x-xs)',
                        '--button-fz': 'var(--mantine-font-size-xs)',
                        '--button-bg': 'var(--mantine-color-default)',
                        '--button-hover': 'var(--mantine-color-default-hover)',
                        '--button-color': 'var(--mantine-color-default-color)',
                        '--button-bd': `calc(0.0625rem * var(--mantine-scale)) solid var(--mantine-color-default-border)`,
                        } as React.CSSProperties} 
                        className="mantine-focus-auto mantine-active tw-p-0 tw-w-[30px] tw-h-[30px] tw-bg-white/90 m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root" data-variant="default" data-size="xs" type="button"><span className="m_80f1301b mantine-Button-inner"><span className="m_811560b9 mantine-Button-label"><svg width="15" height="15" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.29167 4.125L5.50001 7.33334L8.70834 4.125" stroke="black" stroke-width="0.870833" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></span></button></span>
                    </div>
                    <div className="tw-h-4"></div>
                </div>
                :
                <div style={{"background-position-y": '0px', "background-size": 'cover', "background-image": 'url(&quot;/_next/static/media/checkout-spot-sticky.ed3ea4b598d71a7989468dedb13038cc.svg&quot;)'} as React.CSSProperties} className="
                    tw-bg-green-04 tw-w-full tw-flex tw-justify-center tw-items-center tw-px-6 tw-gap-2 tw-bg-no-repeat tw-z-[110]
                    tw-h-[100px] tw-flex-row tw-py-[10px] tw-gap-3 tw-z-10 tw-absolute tw-left-0 lg:tw-hidden !tw-fixed tw-top-0
                    m_2ce0de02 mantine-BackgroundImage-root"
                >
                    <img 
                        alt={`Bring ${puppyInfo.puppy_name} home`}
                        loading="lazy" 
                        width="80" 
                        height="80" 
                        decoding="async" 
                        data-nimg="1" 
                        className="tw-rounded-xl tw-object-cover tw-h-20 tw-w-20 tw-max-h-[80px] tw-max-w-[80px] m_9e117634 mantine-Image-root" 
                        style={{color:"transparent"}} 
                        // srcSet="/_next/image?url=https%3A%2F%2Fphotos.puppyspot.com%2F2%2Flisting%2F775752%2Fphoto%2F503139380.jpg&amp;w=96&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fphotos.puppyspot.com%2F2%2Flisting%2F775752%2Fphoto%2F503139380.jpg&amp;w=256&amp;q=75 2x" 
                        // src="https://www.puppyspot.com/_next/image?url=https%3A%2F%2Fphotos.puppyspot.com%2F2%2Flisting%2F775752%2Fphoto%2F503139380.jpg&amp;w=256&amp;q=75"
                        src={puppyInfo.gallery_content[0].urls['300w']}
                    />
                    <div className="tw-flex tw-flex-col tw-items-start">
                        <span>
                            <strong className="tw-text-gray-01 tw-font-black tw-font-nunito tw-capitalize tw-text-lg">{puppyInfo.puppy_name}</strong>
                        </span>
                        <span className="tw-font-nunito tw-text-gray-01 tw-flex tw-items-center tw-gap-3 lg:tw-hidden tw-text-sm">Show summary: <span className="tw-font-bold tw-underline tw-cursor-pointer">${subTotal}.00</span>
                            <button onClick={openOrderSummarySmall} style={{"--button-height":'var(--button-height-xs)', "--button-padding-x":'var(--button-padding-x-xs)',"--button-fz":'var(--mantine-font-size-xs)',"--button-bg":'var(--mantine-color-default)',"--button-hover":'var(--mantine-color-default-hover)',"--button-color":'var(--mantine-color-default-color)',"--button-bd":'calc(0.0625rem * var(--mantine-scale)) solid var(--mantine-color-default-border)'} as React.CSSProperties} className="mantine-focus-auto mantine-active tw-p-0 tw-w-[30px] tw-h-[30px] tw-bg-white/90 m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root" data-variant="default" data-size="xs" type="button">
                                <span className="m_80f1301b mantine-Button-inner">
                                    <span className="m_811560b9 mantine-Button-label">
                                        <svg width="15" height="15" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.29167 4.125L5.50001 7.33334L8.70834 4.125" stroke="black" stroke-width="0.870833" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    </span>
                                </span>
                            </button>
                        </span>
                    </div>
                    <div className="tw-h-4"></div>
                </div>
            }


        
        {/*<div className="tw-w-full tw-max-w-[816px] tw-px-6 tw-mx-auto  tw-mt-3 sm:tw-mt-5 sm:tw-hidden m_cbb4ea7e mantine-Stepper-root"><div className="m_aaf89d0b mantine-Stepper-steps" data-orientation="horizontal" data-icon-position="left" data-wrap="true"><button className="mantine-focus-auto m_f56b1e2c tw-flex-col tw-group tw-relative m_cbb57068 mantine-Stepper-step m_87cf2631 mantine-UnstyledButton-root" data-icon-position="left" data-allow-click="true" type="button" data-progress="true" disabled={true} tabIndex={0}><span className="m_818e70b mantine-Stepper-stepWrapper"><span className="tw-border-none tw-bg-transparent m_1959ad01 mantine-Stepper-stepIcon" data-progress="true"><svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.2506 11.3556C34.2734 4.79272 22.5008 4.92505 14.5283 8.00131C6.55583 11.0776 4.29612 11.7138 4.49606 17.5743C4.69599 23.4348 1.12881 32.7388 14.2103 33.0215C27.2919 33.3041 25.9985 31.5414 32.7334 26.5269C39.4683 21.5123 34.2278 17.9185 34.2506 11.3556Z" fill="#A9E2C1"></path><g clip-path="url(#clip0_4308_5518)"><path d="M13 23L7 23C6.46957 23 5.96086 22.7893 5.58579 22.4142C5.21071 22.0391 5 21.5304 5 21L5 13L5 9C5 7.89543 5.89543 7 7 7L11 7L23 7C23.5304 7 24.0391 7.21071 24.4142 7.58579C24.7893 7.96086 25 8.46957 25 9L25 12" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 13H9" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 15H9" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 17H9" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><circle cx="20.8334" cy="15.3334" r="3.33342" fill="#333333"></circle><path d="M15.841 20.3724C16.4677 19.6019 17.0321 19.2311 18.0065 19.0389C19.1912 18.8053 19.7991 19.7871 21.0065 19.7871C22.214 19.7871 22.8242 18.7937 24.0065 19.0389C24.9621 19.2371 25.4999 19.6188 26.1199 20.3724C26.8757 21.2913 27.1075 22.1016 27.0065 23.2871C26.936 24.1156 26.7698 24.6158 26.2818 25.2891C25.0257 27.022 23.1031 26.2714 21.0065 26.2871C18.8236 26.3034 16.5976 27.1042 15.5065 25.2891C15.0914 24.5984 15.0338 24.0925 15.0065 23.2871C14.9665 22.1038 15.0939 21.2909 15.841 20.3724Z" fill="#333333"></path></g><defs><clipPath id="clip0_4308_5518"><rect width="24" height="24" fill="white" transform="translate(3 3)"></rect></clipPath></defs></svg></span></span><span className="tw-m-0 tw-absolute -tw-bottom-4 m_1956aa2a mantine-Stepper-stepBody" data-orientation="horizontal" data-icon-position="left"><span className="
        tw-font-nunito tw-text-sm tw-text-gray-03
        group-data-[completed]:tw-text-gray-01 group-data-[completed]:tw-font-bold group-data-[completed]:tw-underline
        group-data-[progress]:tw-text-gray-01 group-data-[progress]:tw-font-bold
        m_12051f6c mantine-Stepper-stepLabel">Details</span></span></button><div className="data-[active]:tw-bg-gray-01 tw-mx-[14px] tw-rounded-xl m_2a371ac9 mantine-Stepper-separator" data-orientation="horizontal"></div><button className="mantine-focus-auto m_f56b1e2c tw-flex-col tw-group tw-relative m_cbb57068 mantine-Stepper-step m_87cf2631 mantine-UnstyledButton-root" data-icon-position="left" data-allow-click="true" type="button" disabled={true} tabIndex={0}><span className="m_818e70b mantine-Stepper-stepWrapper"><span className="tw-border-none tw-bg-transparent m_1959ad01 mantine-Stepper-stepIcon"><svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 21H4C2.89543 21 2 20.1046 2 19V9C2 7.89543 2.89543 7 4 7H20C21.0209 7 21.8632 7.76496 21.9849 8.75298M21.9849 8.75298C21.9949 8.83392 21.9849 9.5 21.9849 9.5V8.75298Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 9V3.66667C16 3.48986 15.7893 3.32029 15.4142 3.19526C15.0391 3.07024 14.5304 3 14 3H10C9.46957 3 8.96086 3.07024 8.58579 3.19526C8.21071 3.32029 8 3.48986 8 3.66667V9" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.9789 16.7258L16.9791 16.7257C18.081 15.746 19.7456 15.7459 20.8498 16.7235C20.9552 16.818 21.0603 16.9163 21.161 17.017C21.8252 17.6811 22.3322 18.4483 22.6311 19.2334L22.6312 19.2338C23.1574 20.6021 23 21.8549 22.2534 22.6016C21.9408 22.9136 21.5516 23.0254 21.1377 23.0274C20.7214 23.0294 20.2863 22.92 19.8933 22.795L19.8931 22.7949C19.2523 22.5923 18.5762 22.5923 17.9347 22.7949C17.5441 22.918 17.1134 23.0275 16.7003 23.0275C16.2851 23.0275 15.8923 22.9162 15.5778 22.6017L15.5777 22.6016C14.8292 21.855 14.6736 20.6037 15.1999 19.2337L15.2001 19.2334C15.4989 18.4476 16.0059 17.6819 16.67 17.0177C16.7699 16.9178 16.8729 16.8196 16.9789 16.7258Z" fill="#828282" stroke="#828282" stroke-width="0.2"></path><path d="M17.2751 15.6629L17.2516 15.5657C17.1558 15.5889 17.0627 15.6003 16.9686 15.6003C16.1911 15.6003 15.3845 14.8491 15.1166 13.7359L15.1166 13.7358C14.9672 13.117 15.0173 12.5148 15.2142 12.0432C15.4111 11.5715 15.751 11.2373 16.1801 11.1332C16.6099 11.03 17.0651 11.1721 17.4557 11.5018C17.8463 11.8314 18.1657 12.3442 18.3151 12.9631C18.4645 13.5819 18.4144 14.1841 18.2175 14.6557C18.0206 15.1275 17.6806 15.4616 17.2515 15.5658L17.2751 15.6629ZM17.2751 15.6629C17.172 15.6878 17.071 15.7003 16.9686 15.7003C16.1275 15.7003 15.2933 14.8979 15.0194 13.7593L17.2751 15.6629Z" fill="#828282" stroke="#828282" stroke-width="0.2"></path><path d="M14.926 15.9381L14.9261 15.9382C15.1534 16.4746 15.1973 17.0261 15.089 17.4811C14.9806 17.9362 14.7226 18.2874 14.3506 18.4439L14.3503 18.4441C14.2105 18.5035 14.0634 18.5316 13.9128 18.5316C13.2554 18.5316 12.5212 17.9893 12.151 17.1124L12.151 17.1123C11.924 16.5755 11.8802 16.0243 11.9886 15.5696C12.097 15.1148 12.3549 14.7637 12.7266 14.6064L12.7266 14.6064C13.0984 14.4492 13.5301 14.5086 13.932 14.7475C14.3339 14.9863 14.699 15.4014 14.926 15.9381Z" fill="#828282" stroke="#828282" stroke-width="0.2"></path><path d="M20.5805 15.5652L20.5805 15.5652C20.1513 15.4611 19.8114 15.1269 19.6147 14.6551C19.4181 14.1835 19.3685 13.5812 19.519 12.962L19.519 12.9619C19.6615 12.3738 19.9604 11.8598 20.3547 11.5177L20.3548 11.5177C20.7658 11.1608 21.2261 11.0317 21.6541 11.134C22.0816 11.237 22.4316 11.5635 22.6346 12.0692C22.8273 12.556 22.8592 13.1474 22.7168 13.7373C22.5743 14.3255 22.2754 14.8394 21.8811 15.1815L21.881 15.1816C21.5616 15.4593 21.2099 15.5997 20.8703 15.5997C20.7723 15.5997 20.6751 15.5882 20.5805 15.5652Z" fill="#828282" stroke="#828282" stroke-width="0.2"></path><path d="M25.1052 14.6063L25.1053 14.6063C25.477 14.7635 25.7349 15.1146 25.8435 15.5696C25.952 16.0245 25.9086 16.576 25.6822 17.1135C25.4657 17.6249 25.1207 18.0419 24.714 18.2931L24.7138 18.2932C24.4498 18.4571 24.1808 18.5369 23.9275 18.5369C23.7723 18.5369 23.6231 18.5075 23.4817 18.4473C23.1117 18.2887 22.8422 17.942 22.7343 17.4552L22.7343 17.4549C22.6295 16.9878 22.6893 16.4516 22.9059 15.9401C23.1224 15.4286 23.4674 15.0116 23.8742 14.7604L23.8742 14.7604C24.2987 14.4978 24.7356 14.4498 25.1052 14.6063Z" fill="#828282" stroke="#828282" stroke-width="0.2"></path></svg></span></span><span className="tw-m-0 tw-absolute -tw-bottom-4 m_1956aa2a mantine-Stepper-stepBody" data-orientation="horizontal" data-icon-position="left"><span className="
        tw-font-nunito tw-text-sm tw-text-gray-03
        group-data-[completed]:tw-text-gray-01 group-data-[completed]:tw-font-bold group-data-[completed]:tw-underline
        group-data-[progress]:tw-text-gray-01 group-data-[progress]:tw-font-bold
        m_12051f6c mantine-Stepper-stepLabel">Travel</span></span></button><div className="data-[active]:tw-bg-gray-01 tw-mx-[14px] tw-rounded-xl m_2a371ac9 mantine-Stepper-separator" data-orientation="horizontal"></div><button className="mantine-focus-auto m_f56b1e2c tw-flex-col tw-group tw-relative m_cbb57068 mantine-Stepper-step m_87cf2631 mantine-UnstyledButton-root" data-icon-position="left" data-allow-click="true" type="button" disabled={true} tabIndex={0}><span className="m_818e70b mantine-Stepper-stepWrapper"><span className="tw-border-none tw-bg-transparent m_1959ad01 mantine-Stepper-stepIcon"><svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 17L11.4513 19.2318L3.67129 11.4518L2.61129 10.3918C1.5796 9.36013 1 7.96086 1 6.50183C1 5.04279 1.5796 3.64352 2.61129 2.61183C3.64298 1.58013 5.04226 1.00053 6.50129 1.00053C7.96032 1.00053 9.3596 1.58013 10.3913 2.61183L11.4513 3.67183L12.5113 2.61183C13.022 2.10083 13.6285 1.69547 14.2959 1.41891C14.9634 1.14235 15.6788 1 16.4013 1C17.1238 1 17.8392 1.14235 18.5066 1.41891C19.1741 1.69547 19.7805 2.10083 20.2913 2.61183C20.8023 3.12258 21.2076 3.72901 21.4842 4.39647C21.7608 5.06393 21.9031 5.77934 21.9031 6.50183" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.5991 13.7278L17.5992 13.7276C18.7011 12.748 20.3657 12.7478 21.4699 13.7255C21.5753 13.8199 21.6804 13.9182 21.7812 14.0189C22.4453 14.6831 22.9523 15.4503 23.2512 16.2354L23.2513 16.2357C23.7776 17.604 23.6201 18.8569 22.8735 19.6036C22.561 19.9155 22.1717 20.0273 21.7578 20.0293C21.3415 20.0313 20.9064 19.922 20.5134 19.7969L20.5132 19.7969C19.8724 19.5942 19.1963 19.5942 18.5549 19.7969C18.1642 19.92 17.7335 20.0295 17.3204 20.0295C16.9053 20.0295 16.5124 19.9182 16.1979 19.6036L16.1978 19.6035C15.4493 18.8569 15.2937 17.6057 15.8201 16.2357L15.8202 16.2354C16.119 15.4496 16.626 14.6838 17.2902 14.0196C17.39 13.9198 17.493 13.8216 17.5991 13.7278Z" fill="#828282" stroke="#828282" stroke-width="0.2"></path><path d="M17.8962 12.6649L17.8727 12.5677C17.7769 12.5908 17.6838 12.6022 17.5897 12.6022C16.8122 12.6022 16.0056 11.8511 15.7377 10.7379L15.7377 10.7378C15.5883 10.1189 15.6384 9.51671 15.8353 9.04511C16.0322 8.57343 16.3721 8.23925 16.8012 8.13511C17.231 8.03195 17.6862 8.17408 18.0768 8.50374C18.4674 8.83335 18.7867 9.34616 18.9362 9.96501C19.0856 10.5839 19.0355 11.1861 18.8386 11.6577C18.6417 12.1294 18.3017 12.4636 17.8726 12.5677L17.8962 12.6649ZM17.8962 12.6649C17.7931 12.6898 17.6921 12.7022 17.5897 12.7022C16.7486 12.7022 15.9144 11.8998 15.6405 10.7613L17.8962 12.6649Z" fill="#828282" stroke="#828282" stroke-width="0.2"></path><path d="M15.5471 12.9401L15.5472 12.9401C15.7745 13.4766 15.8184 14.0281 15.7101 14.4831C15.6017 14.9382 15.3437 15.2894 14.9717 15.4459L14.9714 15.446C14.8316 15.5055 14.6845 15.5335 14.5339 15.5335C13.8765 15.5335 13.1423 14.9912 12.7721 14.1143L12.7721 14.1143C12.5451 13.5775 12.5013 13.0263 12.6097 12.5715C12.7181 12.1167 12.976 11.7656 13.3477 11.6084L13.3477 11.6084C13.7195 11.4512 14.1512 11.5106 14.5531 11.7494C14.955 11.9882 15.3201 12.4033 15.5471 12.9401Z" fill="#828282" stroke="#828282" stroke-width="0.2"></path><path d="M21.2026 12.5672L21.2026 12.5671C20.7734 12.463 20.4335 12.1289 20.2368 11.6571C20.0402 11.1855 19.9906 10.5831 20.141 9.96392L20.141 9.96386C20.2835 9.37572 20.5825 8.86171 20.9768 8.51965L20.9768 8.51962C21.3878 8.16278 21.8482 8.03362 22.2762 8.13599C22.7037 8.23891 23.0537 8.56543 23.2567 9.07118C23.4494 9.55792 23.4813 10.1494 23.3389 10.7393C23.1964 11.3274 22.8974 11.8414 22.5031 12.1834L22.503 12.1835C22.1836 12.4613 21.8319 12.6017 21.4923 12.6017C21.3944 12.6017 21.2971 12.5901 21.2026 12.5672Z" fill="#828282" stroke="#828282" stroke-width="0.2"></path><path d="M25.7283 11.6082L25.7283 11.6082C26.1001 11.7654 26.3579 12.1165 26.4665 12.5715C26.575 13.0264 26.5316 13.578 26.3053 14.1155C26.0888 14.6269 25.7438 15.0439 25.337 15.295L25.3368 15.2952C25.0729 15.459 24.8039 15.5388 24.5505 15.5388C24.3953 15.5388 24.2461 15.5095 24.1048 15.4493C23.7348 15.2907 23.4653 14.944 23.3574 14.4571L23.3573 14.4569C23.2526 13.9898 23.3123 13.4536 23.5289 12.942C23.7454 12.4306 24.0904 12.0136 24.4972 11.7624L24.4973 11.7623C24.9217 11.4998 25.3586 11.4518 25.7283 11.6082Z" fill="#828282" stroke="#828282" stroke-width="0.2"></path></svg></span></span><span className="tw-m-0 tw-absolute -tw-bottom-4 m_1956aa2a mantine-Stepper-stepBody" data-orientation="horizontal" data-icon-position="left"><span className="
        tw-font-nunito tw-text-sm tw-text-gray-03
        group-data-[completed]:tw-text-gray-01 group-data-[completed]:tw-font-bold group-data-[completed]:tw-underline
        group-data-[progress]:tw-text-gray-01 group-data-[progress]:tw-font-bold
        m_12051f6c mantine-Stepper-stepLabel">Essentials</span></span></button><div className="data-[active]:tw-bg-gray-01 tw-mx-[14px] tw-rounded-xl m_2a371ac9 mantine-Stepper-separator" data-orientation="horizontal"></div><button className="mantine-focus-auto m_f56b1e2c tw-flex-col tw-group tw-relative m_cbb57068 mantine-Stepper-step m_87cf2631 mantine-UnstyledButton-root" data-icon-position="left" data-allow-click="true" type="button" disabled={true} tabIndex={0}><span className="m_818e70b mantine-Stepper-stepWrapper"><span className="tw-border-none tw-bg-transparent m_1959ad01 mantine-Stepper-stepIcon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.1818 4H3.81818C2.81403 4 2 4.89543 2 6V18C2 19.1046 2.81403 20 3.81818 20H20.1818C21.186 20 22 19.1046 22 18V6C22 4.89543 21.186 4 20.1818 4Z" stroke="#828282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.3712 15C16.3712 16.2286 15.3509 17.25 14.0606 17.25C12.7703 17.25 11.75 16.2286 11.75 15C11.75 13.7714 12.7703 12.75 14.0606 12.75C15.3509 12.75 16.3712 13.7714 16.3712 15Z" fill="white" stroke="#828282" stroke-width="1.5"></path><path d="M19.4298 15C19.4298 16.2286 18.4095 17.25 17.1192 17.25C15.8289 17.25 14.8086 16.2286 14.8086 15C14.8086 13.7714 15.8289 12.75 17.1192 12.75C18.4095 12.75 19.4298 13.7714 19.4298 15Z" fill="white" stroke="#828282" stroke-width="1.5"></path></svg></span></span><span className="tw-m-0 tw-absolute -tw-bottom-4 m_1956aa2a mantine-Stepper-stepBody" data-orientation="horizontal" data-icon-position="left"><span className="
        tw-font-nunito tw-text-sm tw-text-gray-03
        group-data-[completed]:tw-text-gray-01 group-data-[completed]:tw-font-bold group-data-[completed]:tw-underline
        group-data-[progress]:tw-text-gray-01 group-data-[progress]:tw-font-bold
        m_12051f6c mantine-Stepper-stepLabel">Payment</span></span></button></div>
        </div>*/}
            <ProcessTrackerSmall page='essentials'/>

        
        <div className="tw-mt-4 ">
            <div className="tw-flex tw-flex-col tw-gap-[30px] tw-mt-7 tw-mb-10 initial-scroll">
                <div className="tw-px-6 sm:tw-px-0"><h3 className="tw-text-green-01 tw-text-[22px] tw-font-nunito tw-font-extrabold">Essentials</h3><p className="tw-font-inter tw-text-sm tw-text-gray-02">Key Requirements and Essentials for Adopting <span className="tw-capitalize">{puppyInfo.puppy_name}</span> </p></div>
                <div style={{"--divider-color":"var(--green-01)", "--divider-size":"var(--divider-size-lg)"} as React.CSSProperties } className="tw-rounded m_3eebeb36 mantine-Divider-root" data-size="lg" data-orientation="horizontal" role="separator"></div>
                
                {/* CArds gos here */}


                <div>
                    <legend className="m_74ca27fe tw-font-nunito tw-text-lg tw-font-extrabold tw-text-gray-01 tw-mb-5 tw-w-full m_90794832 mantine-Fieldset-legend">
                        <div className="tw-flex tw-justify-between tw-items-center tw-w-full" style={{marginBottom: '0.5rem', padding: '0 1rem'}}>
                            <span>New Puppy Starter Kit</span>

                            {/* <span translate="no" className="price-text_transport-card">$188.00</span> */}
                            <span translate="no" className="price-text_transport-card">Free</span>

                        </div>

                        <div className="slider-container">
                            <ScrollContainer className="slider" vertical={false}>

                                <a href="/img/starter-kit/small_kit.webp" target='_blank'>
                                    <div className="image-card">
                                        <img src="/img/starter-kit/small_kit.webp" alt="Image Description" className="card-image" />
                                        <div className="card-content">
                                            <h3 className="card-title">Starter Kit</h3>
                                        </div>
                                    </div>
                                </a>

                                <a href="/img/starter-kit/boomerang_toy.jpg" target='_blank'>
                                    <div className="image-card">
                                        <img src="/img/starter-kit/boomerang_toy.jpg" alt="Image Description" className="card-image" />
                                        <div className="card-content">
                                            <h3 className="card-title">Boomerang Toy</h3>
                                        </div>
                                    </div>
                                </a>

                                <a href="/img/starter-kit/bowl.webp" target='_blank'>
                                    <div className="image-card">
                                        <img src="/img/starter-kit/bowl.webp" alt="Image Description" className="card-image" />
                                        <div className="card-content">
                                            <h3 className="card-title">Bowl</h3>
                                        </div>
                                    </div>
                                </a>

                                <a href="/img/starter-kit/bunny_rope_toy.webp" target='_blank'>
                                    <div className="image-card">
                                        <img src="/img/starter-kit/bunny_rope_toy.webp" alt="Image Description" className="card-image" />
                                        <div className="card-content">
                                            <h3 className="card-title">Braided Rope Toy</h3>
                                        </div>
                                    </div>
                                </a>

                                <a href="/img/starter-kit/Carabiner_clip.webp" target='_blank'>
                                    <div className="image-card">
                                        <img src="/img/starter-kit/Carabiner_clip.webp" alt="Image Description" className="card-image" />
                                        <div className="card-content">
                                            <h3 className="card-title">Carabiner Clip</h3>
                                        </div>
                                    </div>
                                </a>

                                <a href="/img/starter-kit/chew_bone.webp" target='_blank'>
                                    <div className="image-card">
                                        <img src="/img/starter-kit/chew_bone.webp" alt="Image Description" className="card-image" />
                                        <div className="card-content">
                                            <h3 className="card-title">Dental Chew Toy</h3>
                                        </div>
                                    </div>
                                </a>

                                <a href="/img/starter-kit/leash.webp" target='_blank'>
                                    <div className="image-card">
                                        <img src="/img/starter-kit/leash.webp" alt="Image Description" className="card-image" />
                                        <div className="card-content">
                                            <h3 className="card-title">Leash</h3>
                                        </div>
                                    </div>
                                </a>

                                <a href="/img/starter-kit/pig_crinkle_toy.webp" target='_blank'>
                                    <div className="image-card">
                                        <img src="/img/starter-kit/pig_crinkle_toy.webp" alt="Image Description" className="card-image" />
                                        <div className="card-content">
                                            <h3 className="card-title">Crinkle Pig Toy</h3>
                                        </div>
                                    </div>
                                </a>

                                <a href="/img/starter-kit/poop-bags.webp" target='_blank'>
                                    <div className="image-card">
                                        <img src="/img/starter-kit/poop-bags.webp" alt="Image Description" className="card-image" />
                                        <div className="card-content">
                                            <h3 className="card-title">Poop Bags</h3>
                                        </div>
                                    </div>
                                </a>

                                <a href="/img/starter-kit/rope_toy.webp" target='_blank'>
                                    <div className="image-card">
                                        <img src="/img/starter-kit/rope_toy.webp" alt="Image Description" className="card-image" />
                                        <div className="card-content">
                                            <h3 className="card-title">Braided Rope Toy</h3>
                                        </div>
                                    </div>
                                </a>

                                <a href="/img/starter-kit/small_fetch_balls.webp" target='_blank'>
                                    <div className="image-card">
                                        <img src="/img/starter-kit/small_fetch_balls.webp" alt="Image Description" className="card-image" />
                                        <div className="card-content">
                                            <h3 className="card-title">Tennis Ball (2 Pack)</h3>
                                        </div>
                                    </div>
                                </a>
                            </ScrollContainer>
                        </div>

                        <p className='tw-font-inter tw-text-sm tw-text-gray-02' style={{padding: '0 1rem'}}>Welcoming a new puppy into your home is an exhilarating adventure filled with joy and companionship. Alongside this excitement comes the responsibility and preparation needed for your furry friend's arrival. That's where PuppySpot's Starter Kit comes to the rescue–  a comprehensive set featuring 13 essential items. It's designed to ensure a smooth transition for both you and your new four-legged family member.</p>
                    </legend>
                </div>

                <div className="m_3eebeb36 mantine-Divider-root" data-orientation="horizontal" role="separator"></div>

                <div>
                    <legend className="m_74ca27fe tw-font-nunito tw-text-lg tw-font-extrabold tw-text-gray-01 tw-mb-5 tw-w-full m_90794832 mantine-Fieldset-legend">
                        <div className="tw-flex tw-justify-between tw-items-center tw-w-full" style={{marginBottom: '0.5rem', padding: '0 1rem'}}>
                            <span>Health and Safety Checks</span>

                            <span translate="no" className="price-text_transport-card">Free</span>
                        </div>
                        <p className='tw-font-inter tw-text-sm tw-text-gray-02' style={{padding: '0 1rem'}}>we conduct thorough health and safety checks to ensure that every puppy is healthy, happy, and ready for their new home. Our team carefully monitors their well-being, ensuring they receive the best care possible. We believe in responsible adoption, and we work closely with prospective pet owners to ensure a perfect match. Your new furry friend will come to you with a clean bill of health, ready to bring joy to your life!</p>
                    </legend>
                </div>

                <div className="m_3eebeb36 mantine-Divider-root" data-orientation="horizontal" role="separator"></div>

                <div>
                    <legend className="m_74ca27fe tw-font-nunito tw-text-lg tw-font-extrabold tw-text-gray-01 tw-mb-5 tw-w-full m_90794832 mantine-Fieldset-legend">
                        <div className="tw-flex tw-justify-between tw-items-center tw-w-full" style={{marginBottom: '0.5rem', padding: '0 1rem'}}>
                            <span>Tracking and Communication</span>

                            <span translate="no" className="price-text_transport-card">Free</span>
                        </div>
                        <p className='tw-font-inter tw-text-sm tw-text-gray-02' style={{padding: '0 1rem'}}>We provide real-time updates on the status of your adoption, including details about the puppy’s health checks, behavior assessments, and progress in preparation for your new home. You’ll be able to track important milestones, such as vaccination schedules, grooming, and training, so you know exactly what to expect at each stage.</p>
                    </legend>
                </div>

                <div className="m_3eebeb36 mantine-Divider-root" data-orientation="horizontal" role="separator"></div>

                <div>
                    <legend className="m_74ca27fe tw-font-nunito tw-text-lg tw-font-extrabold tw-text-gray-01 tw-mb-5 tw-w-full m_90794832 mantine-Fieldset-legend">
                        <div className="tw-flex tw-justify-between tw-items-center tw-w-full" style={{marginBottom: '0.5rem', padding: '0 1rem'}}>
                            <span>Legal Requirements</span>

                            <span translate="no" className="price-text_transport-card">Free</span>
                        </div>
                        <p className='tw-font-inter tw-text-sm tw-text-gray-02' style={{padding: '0 1rem'}}>we stress the importance of meeting legal requirements when adopting a puppy. These may include mandatory vaccinations, registration, licensing, and microchipping. Compliance ensures responsible pet ownership and supports public safety. We recommend checking local regulations for specific guidelines in your area.</p>
                    </legend>
                </div>



                <div className="tw-px-6 sm:tw-px-0">
                    <button style={{"--button-color":"var(--mantine-color-white)"} as React.CSSProperties } className="mantine-focus-auto mantine-active 
                        tw-px-6 tw-py-4 tw-h-[52px] tw-rounded-full tw-w-full tw-bg-blue-01
                        hover:tw-bg-blue-02
                        data-[disabled]:tw-bg-gray-05 disabled:tw-bg-gray-05
                        lg:tw-max-w-[400px]
                    tw-mx-auto m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root" 
                    type="button"
                    onClick={()=>updateItem(paymentID)}>
                        <span className="m_80f1301b mantine-Button-inner">
                            <span className="tw-font-inter tw-font-bold tw-text-base tw-whitespace-normal tw-h-[52px] tw-overflow-visible tw-leading-normal m_811560b9 mantine-Button-label">
                                Continue to payment

                                {
                                    loading
                                    ?
                                    <Oval
                                        visible={true}
                                        height="30"
                                        width="30"
                                        color="#ffffff"
                                        ariaLabel="oval-loading"
                                        wrapperStyle={{marginLeft: '0.3rem'}}
                                        wrapperClass=""
                                    />
                                    :
                                    null
                                }
                            </span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>

  );
}

export default EssentialsSection;

