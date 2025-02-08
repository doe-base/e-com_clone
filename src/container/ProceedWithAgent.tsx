import React, { useState, useEffect, useRef } from 'react';
import { Grid } from '@mui/material';
import { navbar, pages } from '../contants/routes';
import Paypal from '../components/checkout-components/checkout-page-components/Paypal';
import CryptoCurrency from '../components/checkout-components/checkout-page-components/Cryptcurrentcy';
import BankTransfer from '../components/checkout-components/checkout-page-components/BankTransfer';
import ProcessTrackerSmall from '../components/checkout-components/process-tracker/ProcessTrackerSmall';

interface Props{
  puppyInfo: any;
  paymentInfo: any;
  subTotal: string;
  puppyId: string | undefined;
  paymentID: string | undefined;
  subTotalInNumber: number;
}
const ProceedWithAgentContainer: React.FC<Props> = ({puppyInfo, paymentInfo, subTotal, puppyId, paymentID, subTotalInNumber}) => {
    const us_number = process.env.REACT_APP_US_NUMBER_FORMARTED

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



    const backtoshop=()=>{
        window.location.replace(pages.PUPPIES_FOR_SELL);
    }

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
                <div ref={fullHeroRef} style={{backgroundPositionY:'0', backgroundSize:'contain', backgroundImage: 'url(/img/patter-bg.svg)'}} className=" 
                    tw-bg-green-04 tw-w-full tw-flex tw-justify-center tw-items-center tw-px-6 tw-gap-2 tw-bg-no-repeat tw-z-[110] 
                    tw-rounded-b-[20px] tw-flex-col tw-pt-6 tw-pb-2 sm:tw-rounded-t-[20px] m_2ce0de02 mantine-BackgroundImage-root">
                    
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
                    <div className="tw-flex tw-flex-col tw-items-center">
                        <span>
                            <p className="tw-font-nunito tw-text-[32px] tw-font-black tw-leading-10 tw-text-black tw-text-center">Let's bring <strong className="tw-capitalize">{puppyInfo.puppy_name}</strong> home!</p>
                        </span>
                        <span className=" tw-font-nunito tw-text-gray-01 tw-flex tw-items-center tw-gap-3 lg:tw-hidden tw-text-base">Show summary: <span className="tw-font-bold tw-underline tw-cursor-pointer">${subTotal}.00</span>
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
                                className="mantine-focus-auto mantine-active tw-p-0 tw-w-[30px] tw-h-[30px] tw-bg-white/90 m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root" data-variant="default" data-size="xs" type="button">
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
        
        

        <ProcessTrackerSmall page='checkout'/>







        {/*Where am concered*/}

        
        <div className="tw-mt-4" style={{marginTop: '4rem'}}>
            <div className="tw-flex tw-flex-col tw-gap-[30px] tw-mb-10 initial-scroll">
                <div className="tw-px-6 sm:tw-px-0">
                  <h3 className="tw-text-green-01 tw-text-[22px] tw-font-nunito tw-font-extrabold">Thank You for Your Application!</h3>
                  <p className="tw-font-inter tw-text-sm tw-text-gray-02">Having issues? Contact a Puppy Concierge at <a href={navbar.PHONE_WHATSAPP} style={{textDecoration: 'underline'}}>{us_number}</a></p>
                </div>
                <div style={{"--divider-color":"var(--green-01)", "--divider-size":"var(--divider-size-lg)"} as React.CSSProperties } className="tw-rounded m_3eebeb36 mantine-Divider-root" data-size="lg" data-orientation="horizontal" role="separator"></div>
               
                

                <div style={{padding: '0 0.5rem'}}>
                    <p className="tw-font-inter tw-text-lg tw-text-gray-01" style={{marginBottom: '1rem'}}>We’ve received your adoption request and will review it shortly. Our team carefully evaluates your application to ensure our puppies find the best homes.</p>

                    <p className="tw-font-inter tw-text-lg tw-text-gray-01" style={{marginBottom: '1rem'}}>You’ll receive an update via email once your application is approved. If approved, we’ll provide the next steps, including payment details.</p>

                    <p className="tw-font-inter tw-text-lg tw-text-gray-01" style={{marginBottom: '1rem'}}>If you have any questions in the meantime, feel free to contact us.</p>

                    <p className="tw-font-inter tw-text-lg tw-text-gray-01" style={{marginBottom: '1rem'}}>Thank you for choosing to adopt! 🐶💕</p>

                </div>    



                <div className="tw-px-6 sm:tw-px-0">
                    <button style={{"--button-color":"var(--mantine-color-white)"} as React.CSSProperties } className="mantine-focus-auto mantine-active 
                        tw-px-6 tw-py-4 tw-h-[52px] tw-rounded-full tw-w-full tw-bg-blue-01
                        hover:tw-bg-blue-02
                        data-[disabled]:tw-bg-gray-05 disabled:tw-bg-gray-05
                        lg:tw-max-w-[400px]
                    tw-mx-auto m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root" 
                    type="button"
                    onClick={()=>backtoshop()}>
                        <span className="m_80f1301b mantine-Button-inner">
                            <span className="tw-font-inter tw-font-bold tw-text-base tw-whitespace-normal tw-h-[52px] tw-overflow-visible tw-leading-normal m_811560b9 mantine-Button-label">
                                Back to home page
                            </span>
                        </span>
                    </button>
                </div>
                
                
            </div>
        </div>



    </div>

  );
}

export default ProceedWithAgentContainer;

