import React, { useEffect } from 'react';
import '../../styles/checkout/checkout.css'

interface Props{
}
const Checkout: React.FC<Props> = ({}) => {
    
    useEffect(() =>{
        document.title = "Checkout - PuppySpot";
    }, []);

  return (
    <div style={{fontFamily: ' "Nunito", sans-serif'}} className='cm5pp U3Rye FeQiM oYrwu _1fragemna _1fragemn6 _1fragemsy'>
        <header role="banner" className="EAjaz _8wrz5 d5pfT _1fragemsy _1fragemna _1fragemn6">
            <div className="i8Dpn">
                <div>
                    <div>
                        <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem41 _1fragem5u _1fragem2s">
                            <div style={{"--_16s97g7a": '1fr', '--_16s97g7k': 'minmax(0, 1fr)', '--_16s97g71e': 'minmax(0, 1fr) minmax(auto, max-content)', '--_16s97g71o': 'minmax(0, 1fr)'} as React.CSSProperties} className="_1mrl40q0 _1fragemlj _1fragem4l _1fragem6e _1fragemm8 _1fragemmc _1fragem2s _1fragemm3 _16s97g7f _16s97g7p _16s97g71j _16s97g71t    _16s97g79l">
                                <div style={{"--_16s97g73m": "18rem"} as React.CSSProperties} className="_1fragem1y _1fragemlj _16s97g73r">
                                    <span>
                                        <a href="https://shop.puppyspot.com" className="s2kwpi1 s2kwpi0 _1fragemlj _1fragemsf _1fragemsl _1fragems9 s2kwpi3 s2kwpi7 s2kwpi5 _1fragems5">
                                            <img alt="" src="https://cdn.shopify.com/s/files/1/0706/3794/5057/files/puppyspot-logo_x320.webp?v=1718389988" width="180" height="58.90649762282092" className="gP50U"/>
                                        </a>
                                    </span>
                                </div>
                                <span>
                                    <a id="cart-link" aria-label="Cart" href="https://shop.puppyspot.com/cart" className="s2kwpi1 s2kwpi0 _1fragemlj _1fragemsf _1fragemsl _1fragems9 s2kwpi2 s2kwpi6 s2kwpi4 _1fragems6">
                                        <span className="a8x1wu2 a8x1wu1 _1fragemod _1fragem1t _1fragemkk _1fragemka a8x1wug a8x1wuj a8x1wuh _1fragem1y a8x1wup a8x1wul a8x1wuy">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" className="a8x1wu10 a8x1wuz _1fragem1y _1fragemod _1fragemkk _1fragemka _1fragemnm"><path d="M2.675 10.037 3.072 4.2h7.856l.397 5.837A2.4 2.4 0 0 1 8.932 12.6H5.069a2.4 2.4 0 0 1-2.394-2.563"></path><path d="M4.9 3.5a2.1 2.1 0 1 1 4.2 0v1.4a2.1 2.1 0 0 1-4.2 0z"></path></svg>
                                        </span>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div className="nMPKH iYA3J">
            <button aria-controls="disclosure_details" aria-expanded="false" className="WtpiW">
                <span className="smIFm">
                    <span className="_4ptW6">
                        <span className="fCEli">Show order summary</span>
                        <span className="a8x1wu2 a8x1wu1 _1fragemod _1fragem1t _1fragemkk _1fragemka a8x1wug a8x1wuk a8x1wui _1fragem2i _1fragemsr a8x1wum a8x1wul a8x1wuy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" className="a8x1wu10 a8x1wuz _1fragem1y _1fragemod _1fragemkk _1fragemka _1fragemnm"><path stroke-linecap="round" stroke-linejoin="round" d="m11.9 5.6-4.653 4.653a.35.35 0 0 1-.495 0L2.1 5.6"></path></svg></span>
                    </span>
                    <span>
                        <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem4v _1fragem6o _1fragem2s _1fragemog"><p translate="no" className="_1x52f9s1 _1x52f9s0 _1fragemlj _1x52f9sz _1x52f9sy _1fragemnw _1x52f9s3 _1x52f9so notranslate">$59.00</p></div>
                    </span>
                </span>
            </button>
            <div id="disclosure_details" style={{height: "0px"}} hidden className="_94sxtb1 _94sxtb0 _1fragemjv _1fragemk5 _1fragemlj _1fragemsm _94sxtbd _94sxtb6 _1fragemsb">
                <div></div>
            </div>
        </div>
        
        <div className='Sxi8I'>
            <div className='_9F1Rf GI5Fn _1fragemna _1fragemn5 _1fragemt6'>
                <div className='gdtca'>
                    <main id='checkout-main' className='djSdi'>
                        <div className='_1ip0g651 _1ip0g650 _1fragemlj _1fragem4v _1fragem47 _1fragem6o _1fragem60 _1fragem2s'>
                            <form action="" id="Form0" className="km09ry0 _1fragem23" method="POST" noValidate>
                                <div className='km09ry1 _1fragemlj'>
                                    <div>
                                        <section className='_197l2ofi _197l2ofg _1fragemna _197l2ofp _197l2ofk _1fragemn6 _1fragemsy _1fragem1y _1fragemf0 _1fragemg0 _1fragemh3 _1fragemht _1fragemd7 _1frageme7 _1fragemiw _1fragemjm _1fragemlj'>
                                            {/* <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem4v _1fragem6o _1fragem2s">
                                                <div>
                                                    <div>
                                                        <div data-count="3" className="_1fragem1y _1fragemlj OTERX">
                                                            <div className="o1z23">
                                                                <h2 className="_4aXW0">Express checkout</h2>
                                                            </div>
                                                            <div className="kTI19">
                                                                <div className="DUnBb">
                                                                    <div id="express-checkout-wallets-wrapper" className="iRnuh pUo2R XHLFs Pnahu">
                                                                        <a id="shop-pay-button" href="https://shop.puppyspot.com/checkouts/cn/Z2NwLWV1cm9wZS13ZXN0MTowMUpDMFZEVjQxREI2V1JOWlpUQ1JIVEpaOQ?payment=shop_pay&amp;checkout_queue_token=AwR5OL_SArq4VNCLa0Iud3g3J0DijH5r9iGiZ_ieMteV8ZGmyli6wjM_SY6FaJVU12saXch43jNwpcBLd0yQTlHRZUCx_WfPDXeLzUUAdMxGVFmgmC4YrA%3D%3D&amp;redirect_source=direct_checkout_checkout" aria-label="Shop Pay" className="Xicuw">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="inherit" aria-hidden="true" preserveAspectRatio="xMidYMid" viewBox="0 0 341 80.035" style={{fill: "white;"}} className="PrlUn"><path fill-rule="evenodd" d="M227.297 0c-6.849 0-12.401 5.472-12.401 12.223v55.59c0 6.75 5.552 12.222 12.401 12.222h101.06c6.849 0 12.401-5.472 12.401-12.222v-55.59c0-6.75-5.552-12.223-12.401-12.223zm17.702 55.892v-14.09h8.994c8.217 0 12.586-4.542 12.586-11.423s-4.369-11-12.586-11h-14.788v36.513zm0-31.084h7.664c5.319 0 7.932 2.154 7.932 5.758s-2.518 5.758-7.695 5.758h-7.901zm31.796 31.833c4.417 0 7.314-1.92 8.644-5.196.38 3.65 2.613 5.523 7.457 4.26l.048-3.886c-1.948.187-2.328-.515-2.328-2.528v-9.55c0-5.617-3.752-8.94-10.686-8.94-6.84 0-10.782 3.37-10.782 9.08h5.32c0-2.714 1.947-4.353 5.367-4.353 3.609 0 5.272 1.545 5.224 4.214v1.217l-6.127.655c-6.887.749-10.686 3.324-10.686 7.818 0 3.698 2.659 7.209 8.549 7.209m1.187-4.213c-2.992 0-4.179-1.592-4.179-3.184 0-2.153 2.47-3.136 7.314-3.698l3.8-.421c-.238 4.12-3.04 7.303-6.935 7.303m32.555 5.29c-2.422 5.804-6.317 7.536-12.396 7.536h-2.613V60.48h2.803c3.324 0 4.939-1.03 6.697-3.979l-10.782-24.95h5.984l7.695 18.21 6.839-18.21h5.842z" clip-rule="evenodd"></path><path d="M29.514 35.18c-7.934-1.697-11.469-2.36-11.469-5.374 0-2.834 2.392-4.246 7.176-4.246 4.207 0 7.283 1.813 9.546 5.363.171.274.524.369.812.222l8.927-4.447a.616.616 0 0 0 .256-.864c-3.705-6.332-10.55-9.798-19.562-9.798-11.843 0-19.2 5.752-19.2 14.898 0 9.714 8.96 12.169 16.904 13.865 7.944 1.697 11.49 2.36 11.49 5.374s-2.584 4.435-7.742 4.435c-4.763 0-8.297-2.15-10.433-6.321a.63.63 0 0 0-.843-.274L6.47 52.364a.623.623 0 0 0-.278.843c3.535 7.006 10.785 10.947 20.47 10.947 12.334 0 19.787-5.658 19.787-15.088s-9.001-12.169-16.935-13.865zM77.353 16.036c-5.062 0-9.536 1.77-12.75 4.92-.203.19-.534.053-.534-.221V.622a.62.62 0 0 0-.63-.622h-11.17a.62.62 0 0 0-.63.622v62.426a.62.62 0 0 0 .63.621h11.17a.62.62 0 0 0 .63-.621V35.664c0-5.289 4.11-9.345 9.653-9.345 5.542 0 9.557 3.972 9.557 9.345v27.384a.62.62 0 0 0 .63.621h11.17a.62.62 0 0 0 .63-.621V35.664c0-11.505-7.646-19.618-18.356-19.618zM118.389 14.255c-6.065 0-11.767 1.823-15.847 4.467a.62.62 0 0 0-.202.833l4.922 8.292c.182.295.566.4.865.22a19.8 19.8 0 0 1 10.262-2.78c9.749 0 16.914 6.785 16.914 15.75 0 7.64-5.734 13.297-13.006 13.297-5.926 0-10.037-3.403-10.037-8.207 0-2.75 1.185-5.005 4.271-6.596a.607.607 0 0 0 .246-.864l-4.645-7.754a.63.63 0 0 0-.759-.264c-6.225 2.276-10.593 7.755-10.593 15.109 0 11.126 8.981 19.428 21.507 19.428 14.629 0 25.147-9.998 25.147-24.338 0-15.372-12.237-26.603-29.066-26.603zM180.098 15.952c-5.649 0-10.689 2.054-14.373 5.678a.313.313 0 0 1-.534-.22v-4.363a.62.62 0 0 0-.63-.621H153.68a.62.62 0 0 0-.63.621v62.331a.62.62 0 0 0 .63.622h11.169a.62.62 0 0 0 .631-.622v-20.44c0-.274.331-.41.533-.231 3.674 3.371 8.532 5.342 14.096 5.342 13.102 0 23.321-10.463 23.321-24.054 0-13.592-10.23-24.054-23.321-24.054zm-2.103 37.54c-7.454 0-13.103-5.848-13.103-13.582 0-7.733 5.638-13.58 13.103-13.58s13.091 5.752 13.091 13.58-5.553 13.581-13.102 13.581z"></path></svg>
                                                                        </a>
                                                                        <div className="_1Rxiq">
                                                                            <div id="zoid-paypal-buttons-uid_b0e83dceea_mdq6mzi6mjm" className="paypal-buttons paypal-buttons-context-iframe paypal-buttons-label-paypal paypal-buttons-layout-horizontal" data-paypal-smart-button-version="5.0.463" style={{height: '54px', transition: '0.2s ease-in-out'}}>
                                                                
                                                                                <iframe 
                                                                                    style={{backgroundColor: "transparent", border: "medium"}} 
                                                                                    allowTransparency={true} name="__zoid__paypal_buttons__eyJzZW5kZXIiOnsiZG9tYWluIjoiaHR0cHM6Ly9zaG9wLnB1cHB5c3BvdC5jb20ifSwibWV0YURhdGEiOnsid2luZG93UmVmIjp7InR5cGUiOiJwYXJlbnQiLCJkaXN0YW5jZSI6MH19LCJyZWZlcmVuY2UiOnsidHlwZSI6InJhdyIsInZhbCI6IntcInVpZFwiOlwiem9pZC1wYXlwYWwtYnV0dG9ucy11aWRfYjBlODNkY2VlYV9tZHE2bXppNm1qbVwiLFwiY29udGV4dFwiOlwiaWZyYW1lXCIsXCJ0YWdcIjpcInBheXBhbC1idXR0b25zXCIsXCJjaGlsZERvbWFpbk1hdGNoXCI6e1wiX190eXBlX19cIjpcInJlZ2V4XCIsXCJfX3ZhbF9fXCI6XCJcXFxcLnBheXBhbFxcXFwuKGNvbXxjbikoOlxcXFxkKyk/JFwifSxcInZlcnNpb25cIjpcIjEwXzNfM1wiLFwicHJvcHNcIjp7XCJmdW5kaW5nU291cmNlXCI6XCJwYXlwYWxcIixcImNyZWF0ZU9yZGVyXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfZjY2NmRlZmZkZV9tZHE2bXppNm1qbVwiLFwibmFtZVwiOlwiSlwifX0sXCJjcmVhdGVCaWxsaW5nQWdyZWVtZW50XCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcIm9uQ2xpY2tcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF8wNmY4NzgwMGIxX21kcTZtemk2bWptXCIsXCJuYW1lXCI6XCJBZVwifX0sXCJvbkFwcHJvdmVcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF83OGMxZTdhMThmX21kcTZtemk2bWptXCIsXCJuYW1lXCI6XCJvbkFwcHJvdmVcIn19LFwib25DYW5jZWxcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF9lOWRmMzIwY2I0X21kcTZtemk2bWptXCIsXCJuYW1lXCI6XCJvbkNhbmNlbFwifX0sXCJzdHlsZVwiOntcImxhYmVsXCI6XCJwYXlwYWxcIixcImxheW91dFwiOlwiaG9yaXpvbnRhbFwiLFwiY29sb3JcIjpcImdvbGRcIixcInNoYXBlXCI6XCJyZWN0XCIsXCJ0YWdsaW5lXCI6ZmFsc2UsXCJoZWlnaHRcIjo1NCxcInBlcmlvZFwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJtZW51UGxhY2VtZW50XCI6XCJiZWxvd1wiLFwiZGlzYWJsZU1heFdpZHRoXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImRpc2FibGVNYXhIZWlnaHRcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiYm9yZGVyUmFkaXVzXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifX0sXCJjc3BOb25jZVwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJhbGxvd0JpbGxpbmdQYXltZW50c1wiOnRydWUsXCJhbW91bnRcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiYXBpU3RhZ2VIb3N0XCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImFwcGxlUGF5XCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImFwcGxlUGF5U3VwcG9ydFwiOmZhbHNlLFwiYnJhbmRlZFwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJidXR0b25Mb2NhdGlvblwiOlwic2hvcC5wdXBweXNwb3QuY29tXCIsXCJidXR0b25TZXNzaW9uSURcIjpcInVpZF85NjhjOGVlNzViX21kcTZtemk2bWptXCIsXCJidXR0b25TaXplXCI6XCJzbWFsbFwiLFwiYnV5ZXJDb3VudHJ5XCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImNsaWVudEFjY2Vzc1Rva2VuXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImN1c3RvbWVySWRcIjpcIlwiLFwiY2xpZW50SURcIjpcIkFiYXNEaHpsVTBIYnBpU3RKaU4xS1JKX2NOSko3eFlCaXA3SkpvTU8wR1FwTGk4ZVBOZ2RiTFhrQzdfS01leVRnOHRuQUtXNFdLcmg5cW1mXCIsXCJjbGllbnRNZXRhZGF0YUlEXCI6XCJ1aWRfNGZiYzY4Nzk3M19tZHE2bXppNm1qbVwiLFwiY29tbWl0XCI6ZmFsc2UsXCJjb21wb25lbnRzXCI6W1wiYnV0dG9uc1wiXSxcImNyZWF0ZVN1YnNjcmlwdGlvblwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJjcmVhdGVWYXVsdFNldHVwVG9rZW5cIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiY3NwXCI6e1wibm9uY2VcIjpcIlwifSxcImN1cnJlbmN5XCI6XCJVU0RcIixcImRlYnVnXCI6ZmFsc2UsXCJkaXNhYmxlQ2FyZFwiOltdLFwiZGlzYWJsZUZ1bmRpbmdcIjpbXSxcImRpc2FibGVTZXRDb29raWVcIjp0cnVlLFwiZGlzcGxheU9ubHlcIjpbXSxcImVuYWJsZUZ1bmRpbmdcIjpbXSxcImVuYWJsZVRocmVlRG9tYWluU2VjdXJlXCI6ZmFsc2UsXCJlbmFibGVWYXVsdFwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJlbnZcIjpcInByb2R1Y3Rpb25cIixcImV4cGVyaW1lbnRcIjp7XCJlbmFibGVWZW5tb1wiOmZhbHNlLFwidmVubW9WYXVsdFdpdGhvdXRQdXJjaGFzZVwiOmZhbHNlLFwidmVubW9XZWJFbmFibGVkXCI6ZmFsc2V9LFwiZXhwZXJpbWVudGF0aW9uXCI6e30sXCJmbG93XCI6XCJwdXJjaGFzZVwiLFwiZnVuZGluZ0VsaWdpYmlsaXR5XCI6e1wicGF5cGFsXCI6e1wiZWxpZ2libGVcIjp0cnVlLFwidmF1bHRhYmxlXCI6dHJ1ZX0sXCJwYXlsYXRlclwiOntcImVsaWdpYmxlXCI6ZmFsc2UsXCJ2YXVsdGFibGVcIjpmYWxzZSxcInByb2R1Y3RzXCI6e1wicGF5SW4zXCI6e1wiZWxpZ2libGVcIjpmYWxzZSxcInZhcmlhbnRcIjpudWxsfSxcInBheUluNFwiOntcImVsaWdpYmxlXCI6ZmFsc2UsXCJ2YXJpYW50XCI6bnVsbH0sXCJwYXlsYXRlclwiOntcImVsaWdpYmxlXCI6ZmFsc2UsXCJ2YXJpYW50XCI6bnVsbH19fSxcImNhcmRcIjp7XCJlbGlnaWJsZVwiOnRydWUsXCJicmFuZGVkXCI6ZmFsc2UsXCJpbnN0YWxsbWVudHNcIjpmYWxzZSxcInZlbmRvcnNcIjp7XCJ2aXNhXCI6e1wiZWxpZ2libGVcIjp0cnVlLFwidmF1bHRhYmxlXCI6dHJ1ZX0sXCJtYXN0ZXJjYXJkXCI6e1wiZWxpZ2libGVcIjp0cnVlLFwidmF1bHRhYmxlXCI6dHJ1ZX0sXCJhbWV4XCI6e1wiZWxpZ2libGVcIjp0cnVlLFwidmF1bHRhYmxlXCI6dHJ1ZX0sXCJkaXNjb3ZlclwiOntcImVsaWdpYmxlXCI6ZmFsc2UsXCJ2YXVsdGFibGVcIjp0cnVlfSxcImhpcGVyXCI6e1wiZWxpZ2libGVcIjpmYWxzZSxcInZhdWx0YWJsZVwiOmZhbHNlfSxcImVsb1wiOntcImVsaWdpYmxlXCI6ZmFsc2UsXCJ2YXVsdGFibGVcIjp0cnVlfSxcImpjYlwiOntcImVsaWdpYmxlXCI6ZmFsc2UsXCJ2YXVsdGFibGVcIjp0cnVlfSxcIm1hZXN0cm9cIjp7XCJlbGlnaWJsZVwiOnRydWUsXCJ2YXVsdGFibGVcIjp0cnVlfSxcImRpbmVyc1wiOntcImVsaWdpYmxlXCI6dHJ1ZSxcInZhdWx0YWJsZVwiOnRydWV9LFwiY3VwXCI6e1wiZWxpZ2libGVcIjpmYWxzZSxcInZhdWx0YWJsZVwiOnRydWV9fSxcImd1ZXN0RW5hYmxlZFwiOnRydWV9LFwidmVubW9cIjp7XCJlbGlnaWJsZVwiOmZhbHNlLFwidmF1bHRhYmxlXCI6ZmFsc2V9LFwiaXRhdVwiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwiY3JlZGl0XCI6e1wiZWxpZ2libGVcIjpmYWxzZX0sXCJhcHBsZXBheVwiOntcImVsaWdpYmxlXCI6dHJ1ZX0sXCJzZXBhXCI6e1wiZWxpZ2libGVcIjpmYWxzZX0sXCJpZGVhbFwiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwiYmFuY29udGFjdFwiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwiZ2lyb3BheVwiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwiZXBzXCI6e1wiZWxpZ2libGVcIjpmYWxzZX0sXCJzb2ZvcnRcIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcIm15YmFua1wiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwicDI0XCI6e1wiZWxpZ2libGVcIjpmYWxzZX0sXCJ3ZWNoYXRwYXlcIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcInBheXVcIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcImJsaWtcIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcInRydXN0bHlcIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcIm94eG9cIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcImJvbGV0b1wiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwiYm9sZXRvYmFuY2FyaW9cIjp7XCJlbGlnaWJsZVwiOmZhbHNlfSxcIm1lcmNhZG9wYWdvXCI6e1wiZWxpZ2libGVcIjpmYWxzZX0sXCJtdWx0aWJhbmNvXCI6e1wiZWxpZ2libGVcIjpmYWxzZX0sXCJzYXRpc3BheVwiOntcImVsaWdpYmxlXCI6ZmFsc2V9LFwicGFpZHlcIjp7XCJlbGlnaWJsZVwiOmZhbHNlfX0sXCJnZXRQYWdlVXJsXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfYmYxNDY5NzAxMV9tZHE2bXppNm1qbVwiLFwibmFtZVwiOlwiZ2V0UGFnZVVybFwifX0sXCJnZXRQb3B1cEJyaWRnZVwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkXzY3YTJmZGU2ZjdfbWRxNm16aTZtam1cIixcIm5hbWVcIjpcImdldFBvcHVwQnJpZGdlXCJ9fSxcImdldFByZXJlbmRlckRldGFpbHNcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF8zN2I4OWVhZTBjX21kcTZtemk2bWptXCIsXCJuYW1lXCI6XCJnZXRQcmVyZW5kZXJEZXRhaWxzXCJ9fSxcImdldFF1ZXJpZWRFbGlnaWJsZUZ1bmRpbmdcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF8xZDRjMDQ5NjJjX21kcTZtemk2bWptXCIsXCJuYW1lXCI6XCJnZXRRdWVyaWVkRWxpZ2libGVGdW5kaW5nXCJ9fSxcImhvc3RlZEJ1dHRvbklkXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImludGVudFwiOlwiYXV0aG9yaXplXCIsXCJqc1Nka0xpYnJhcnlcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwibG9jYWxlXCI6e1wiY291bnRyeVwiOlwiVVNcIixcImxhbmdcIjpcImVuXCJ9LFwibWVyY2hhbnRJRFwiOltcIkdHNzZHODNITlgzTFFcIl0sXCJtZXJjaGFudFJlcXVlc3RlZFBvcHVwc0Rpc2FibGVkXCI6ZmFsc2UsXCJtZXNzYWdlXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcIm5vbmNlXCI6XCJcIixcIm9uQ29tcGxldGVcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwib25Jbml0XCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfYTA1NGM5YWFiOV9tZHE2bXppNm1qbVwiLFwibmFtZVwiOlwib25Jbml0XCJ9fSxcIm9uTWVzc2FnZUNsaWNrXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfZjM4YjYyMGI3MF9tZHE2bXppNm1qbVwiLFwibmFtZVwiOlwib25NZXNzYWdlQ2xpY2tcIn19LFwib25NZXNzYWdlSG92ZXJcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF84Y2M0NThhODIxX21kcTZtemk2bWptXCIsXCJuYW1lXCI6XCJvbk1lc3NhZ2VIb3ZlclwifX0sXCJvbk1lc3NhZ2VSZWFkeVwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkXzA1ZGUyN2Y5YTBfbWRxNm16aTZtam1cIixcIm5hbWVcIjpcIm9uTWVzc2FnZVJlYWR5XCJ9fSxcIm9uU2hpcHBpbmdBZGRyZXNzQ2hhbmdlXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcIm9uU2hpcHBpbmdDaGFuZ2VcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwib25TaGlwcGluZ09wdGlvbnNDaGFuZ2VcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiaGFzU2hpcHBpbmdDYWxsYmFja1wiOmZhbHNlLFwicGFnZVR5cGVcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwicGFydG5lckF0dHJpYnV0aW9uSURcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwicGF5bWVudE1ldGhvZE5vbmNlXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcInBheW1lbnRNZXRob2RUb2tlblwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJwYXltZW50UmVxdWVzdFwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJwbGF0Zm9ybVwiOlwiZGVza3RvcFwiLFwicmVmZXJyZXJEb21haW5cIjpcInNob3AucHVwcHlzcG90LmNvbVwiLFwicmVtZW1iZXJcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF8xZDc4OWFiYzVhX21kcTZtemk2bWptXCIsXCJuYW1lXCI6XCJyZW1lbWJlclwifX0sXCJyZW1lbWJlcmVkXCI6W10sXCJyZW5kZXJlZEJ1dHRvbnNcIjpbXCJwYXlwYWxcIl0sXCJzZXNzaW9uSURcIjpcInVpZF80ZmJjNjg3OTczX21kcTZtemk2bWptXCIsXCJzZGtDb3JyZWxhdGlvbklEXCI6XCJmNzA4NDU5NjczYWJkXCIsXCJzZXNzaW9uU3RhdGVcIjp7XCJnZXRcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF9hZTAyNjUxYzZmX21kcTZtemk2bWptXCIsXCJuYW1lXCI6XCJnZXRcIn19LFwic2V0XCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfZDJiOGQyM2YyN19tZHE2bXppNm1qbVwiLFwibmFtZVwiOlwic2V0XCJ9fX0sXCJnZXRTaG9wcGVySW5zaWdodHNVc2VkXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfZDNjNmY3ZGE4ZV9tZHE2bXppNm1qbVwiLFwibmFtZVwiOlwiQ3JcIn19LFwic3RhZ2VIb3N0XCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcInN0b3JhZ2VJRFwiOlwidWlkXzZiNWE2ZWViOWVfbXRtNm5kbTZtdGtcIixcInN0b3JhZ2VTdGF0ZVwiOntcImdldFwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkXzA3NzM3Njg1YWJfbWRxNm16aTZtam1cIixcIm5hbWVcIjpcImdldFwifX0sXCJzZXRcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF9jMzI1ZmUxNjIxX21kcTZtemk2bWptXCIsXCJuYW1lXCI6XCJzZXRcIn19fSxcInN1cHBvcnRlZE5hdGl2ZUJyb3dzZXJcIjpmYWxzZSxcInN1cHBvcnRzUG9wdXBzXCI6dHJ1ZSxcInRlc3RcIjp7XCJhY3Rpb25cIjpcImNoZWNrb3V0XCJ9LFwidXNlckV4cGVyaWVuY2VGbG93XCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcInVzZXJJRFRva2VuXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcInZhdWx0XCI6ZmFsc2UsXCJ3YWxsZXRcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9fSxcImV4cG9ydHNcIjp7XCJpbml0XCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfZmM1ZDFhY2QyNF9tZHE2bXppNm1qbVwiLFwibmFtZVwiOlwiaW5pdFwifX0sXCJjbG9zZVwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkX2VhZWQxOTcxMmNfbWRxNm16aTZtam1cIixcIm5hbWVcIjpcImNsb3NlOjptZW1vaXplZFwifX0sXCJjaGVja0Nsb3NlXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfMDZhZDcyNTJjN19tZHE2bXppNm1qbVwiLFwibmFtZVwiOlwiY2hlY2tDbG9zZVwifX0sXCJyZXNpemVcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF9mZjk5NmE3MjE3X21kcTZtemk2bWptXCIsXCJuYW1lXCI6XCJfblwifX0sXCJvbkVycm9yXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfMWE4NjdjMTUwNl9tZHE2bXppNm1qbVwiLFwibmFtZVwiOlwicW5cIn19LFwic2hvd1wiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkX2I1MTg3NjcxN2FfbWRxNm16aTZtam1cIixcIm5hbWVcIjpcImduXCJ9fSxcImhpZGVcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF9jM2UzMzMyODJhX21kcTZtemk2bWptXCIsXCJuYW1lXCI6XCJ2blwifX0sXCJleHBvcnRcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF8yNmIwZDFlZGExX21kcTZtemk2bWptXCIsXCJuYW1lXCI6XCJXblwifX19fSJ9fQ__" title="PayPal" scrolling="no" id="jsx-iframe-d5a09a500f" className="component-frame visible"></iframe>
                                                                                <div id="smart-menu" className="smart-menu"></div>
                                                                                <div id="installments-modal" className="installments-modal"></div>
                                                                                <iframe name="__detect_close_uid_d0ab547605_mdq6mzi6mjm__" style={{display: "none"}}></iframe>
                                                                            </div>
                                                                        </div>
                                                                        <div id="google-pay-button-container" className="_557NI">
                                                                            <div className="gpay-button-fill">
                                                                                <button type="button" aria-label="Google Pay" className="gpay-button black plain short en" id="gpay-button-online-api-id"></button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="WTXfy">
                                                                    <button type="button" aria-live="polite" className="_1m2hr9ge _1m2hr9gd _1fragemsq _1fragemlj _1fragemnk _1fragem2i _1fragems4 _1fragemsj _1fragemsl _1fragemsa _1m2hr9g18 _1m2hr9g15 _1fragemsl _1fragemsj _1fragems9 _1fragemry _1m2hr9g1b _1m2hr9g19 _1fragems5">
                                                                        <span className="_1m2hr9gr _1m2hr9gq _1fragems0 _1fragemsf _1fragems9 _1fragemsm _1m2hr9gn _1m2hr9gl _1fragem28 _1fragem6t _1fragems2">
                                                                            <div className="qLVAT">
                                                                                <span className="_19gi7yt0 _19gi7ytw _19gi7ytv _1fragemnu">Show more options</span>
                                                                                <span className="a8x1wu2 a8x1wu1 _1fragemod _1fragem1t _1fragemkk _1fragemka a8x1wug a8x1wuk a8x1wui _1fragem2i _1fragemsr a8x1wum a8x1wul a8x1wuy">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" className="a8x1wu10 a8x1wuz _1fragem1y _1fragemod _1fragemkk _1fragemka _1fragemnm"><path stroke-linecap="round" stroke-linejoin="round" d="m11.9 5.6-4.653 4.653a.35.35 0 0 1-.495 0L2.1 5.6"></path></svg>
                                                                                </span>
                                                                            </div>
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}

                                            <div className="_1fragem1y _1fragemf5 _1fragemhs _1fragemdm _1fragemjl _1fragemlj">
                                                <div className="mg7oix2 mg7oix0 _1fragemlj mg7oix1 mg7oix9 mg7oix7 _1fragemod mg7oixe mg7oixc mg7oixb _1fragem28 _1fragemmc _1fragemm8 mg7oixg mg7oix3">
                                                    <div className="mg7oixl">
                                                        <p className="_1x52f9s1 _1x52f9s0 _1fragemlj _1x52f9sv _1x52f9su _1fragemnu _1x52f9s9 _1x52f9s6 _1fragems2">
                                                            <span className="_19gi7yt0 _19gi7ytw _19gi7ytv _1fragemnu _19gi7ytj">OR</span>
                                                        </p>
                                                        <span role="separator"></span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem4v _1fragem6o _1fragem2s">
                                                <div>
                                                    <div>
                                                        <div>
                                                            <div className="bSo96">
                                                                <h2 className="n8k95w1 n8k95w0 _1fragemlj n8k95w2">Contact</h2>
                                                                <a href="https://shopify.com/authentication/70637945057/oauth/authorize?client_id=103d5c96-3883-4141-ba63-c3b24dfe77c2&amp;nonce=34dc8262-7b67-4820-8c37-cef4f8a09b3e&amp;redirect_uri=https%3A%2F%2Fshop.puppyspot.com%2Fcustomer_authentication%2Fcallback%3Fsource%3Dcore&amp;response_type=code&amp;scope=openid+email+customer-account-api%3Afull&amp;state=01JC50JFYJN6WQ2H5QJ6AMRNZ6" className="s2kwpi1 s2kwpi0 _1fragemlj _1fragemsf _1fragemsl _1fragems9 s2kwpi2 s2kwpi6 s2kwpi4 _1fragems6">Log in</a>
                                                            </div>
                                                            <div className="_16s97g75f"></div>
                                                            <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem3w _1fragem5p _1fragem2s">
                                                                <div style={{"--_16s97g7a": '1fr', "--_16s97g7k": 'minmax(0, 1fr)', '--_16s97g71e': 'minmax(0, 1fr)', '--_16s97g71o': 'minmax(0, 1fr)'} as React.CSSProperties} className="_1mrl40q0 _1fragemlj _1fragem3w _1fragem5p _1fragem2s _1fragemm3 _16s97g7f _16s97g7p _16s97g71j _16s97g71t">
                                                                    <div className="_7ozb2u2 _7ozb2u1 _1fragem3c _1fragem55 _1fragemlj _1fragem2s _10vrn9p1 _10vrn9p0 _10vrn9p4 _7ozb2u4 _7ozb2u3 _1fragemnb">
                                                                        <div className="cektnc0 _1fragemlj cektnc5">
                                                                            <label id="email-label" htmlFor="email" className="cektnc3 cektnc1 _1frageml9 _1fragems0 _1fragemst _1fragemsf _1fragemsa _1fragemsp _1fragemsq">
                                                                                <span className="cektnca">
                                                                                    <span className="rermvf1 rermvf0 _1fragemjv _1fragemk5 _1fragem1y">Email or mobile phone number</span>
                                                                                </span>
                                                                            </label>
                                                                            <div className="_7ozb2u6 _7ozb2u5 _1fragemlj _1fragem2s _1fragemnl _1fragemsf _1fragemsa _1fragemsp _1fragemss _7ozb2uc _7ozb2ua _1fragemnb _1fragemsy _7ozb2ul _7ozb2uh">
                                                                                <input id="email" name="email" placeholder="Email or mobile phone number" type="text" inputMode="text" aria-labelledby="email-label" autoComplete="shipping email" autoFocus autoCapitalize="none" className="_7ozb2uq _7ozb2up _1fragemlj _1fragemst _1fragemod _1fragemrz _7ozb2ut _7ozb2us _1fragemsf _1fragemsa _1fragemsp _7ozb2u11 _7ozb2u1h _7ozb2ur"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <shop-checkout-modal anchor-to="#email" checkout-redirect-url="WHdmNVhYVW4yUnRlcDhwVHpxSHl0ODdnRkRrN2J3bEhIL3lGM0FBdFl2U3Y1Tkp6SFRHdXkwSVFyb2pxQnUyNEd0NTc0VXN3RXFyS28xeGpyVlF6WTRzeWtwNkxiRVRNa3RSckc3Y00wbWZtTTNSbFFQbU5YTTRIOXdnaUtXaHFuZE53cWJoZm01cGVYOWg4VmtLQWRpK0hsVG1BZ1pIZVRBTktWZ0U4cUNaUEcxZFBtSE84emhaRFRSUHQrUXBJYUJmNkVTS0sxUm1uSWNsR3RxQjVlMFpnYWpEWk52S05tSVJ5TFk1dFk1b0svQmNjZXZDb0RwUEV6NHMvY1dpaTRvUWN5NUxXUlRQK284TXhPT1BlWTdUV3JqVWhPUHhWcG5iTmk1UHZidkZtcGY4Wi9GOGd0aHZnQWRVQ2RGTGJLZ2RPVzFVMTBia3B3OGVGUVlHYmlqaDJWaWR4ZDVRT2VEdVFzZ0ZKZFV5N1FwMEZ0SGduam9LRTd1cFViN2tjL2xsU2t0c3VOUlBkZFVkZjdSMVAzSHlqRGVtYmhVTU5wV01NTTBJdSszZmdKbWlqY09QL0J3bDMzdm5GOGpwQnlPKzFocGR3L3pZazFpV0NxS3pRMkhCcWtLdmhZNHE0T1U1ODNuVXloMWI1QWlYU3lLLzJTdTZjVmNXOTdQVmxScGFoVWJOdEV4c2tFRTR5K1FOaW10TFRCL3BqMk9TTVRDMVJ6eUwxZ05kU0hDaWVUQUNDRzYrRGx6U0Nya2V6bWVxMktOcmJzRUtqSm10c1YvMmFVUnYzNlY4NmxRNmRENHk5bU5RdmZVaFZncUF3bjFoTlJHcUNzOU4zdm9xajUwcm9MWEVnQ3FhRTZRQkJTVGJvMWMwYmVpNjh3TWpSb3hCcndmRk5odGZVQVFjdEtSeGpzWXA2c3drT1YzMnllZVNNdFBJd2xKZmFkOHhJeWVpTTFxajBUZXVMSlBHU1lkTjVnaHhESmpPMnF6TDl3Q3lnckhtQkptUDUxdUM1SGtZYngveTkrNzNWcnBZb1lESVhJRGh2MHZpcUpQTVMyYzRpREgyaVZwODNhbFdMVkZxWlBtbTYvQUdyTlUvOFpITmJqUXFOc0NZemY2OTNwaUZxMDdiamJCc2hRYUV3eUUyN0NnSzJ0ZHkrc2h3VWtUWmdMdDFsYzBZRXVSdGZLNThRaHJBTzl6RkRmZnIrUUVqQnI2bFNPMDgzU0NPTklCR1QwTXVha1QvOWtUTlZaVHBLaEJlT1lKcktWVU52SG44UGIxMzZqcUJyY21yMndKQk1qK3pLMWticFlrK1BQYkd4R3BTNGVyNDEyMU5aODMraXB4UlFRTDZqUUQ3V0RFTXdCQjhxQWNMK0UvYUExbHdtakRXSkw1cFNWdW1oSW1hRWFBMVp1MytFaXdTR015RUxtUnNuYzVUQ3BBM0h2SEF0T3hFTXZuY3JwY3JuRUt6SFJTakxiT1g3WTk1UEJiY2FITUdLUGRJS2QvdUNqZGpoQjFZSUVzY0h6eHBVOEQ5SVI2VlJ1ZUEycnM5b3B6NUpVZlp3QWVlR081dXFFYTY2ckN4QjYxQkNJVEJLTk1SREhZR3ZGWUJxQWZpU2ZON1lOTyt1Q0NSOXVWTXZGT1hIL2djd0pTQjJ4b2RURytSbEh4YlFvWmF0WHhOS0Jwb3NCY1VhRHlLUEpCQ2k1N2lRRm9WL2luSk5sRVNLZXdaYndLQ1lpZ2tPdnkvWGNRSzZ0WGt6aDZVaU9SWXJPQStkeHVXc3pnL2tRcTFjSEJ6QjY4YXQza1ZyTklTWTNUQ1ZZcndIM21mVFM1TjI3Wk83RG00YVZYNnEzZXFmTWRIYURSZEtRZFgwdll2TGIwMFQ0QmJQV3ZMMjJqeFl1OE9oYU1CV1F6L0NxV2RPRUJMcElGdkFwOGtWdDJlaXF6ZGkzUlpxeTU4enNUMm9qT0Nad3hUbjYvd2JydGdycjB6aVdjbEtrQ1lHUkpoZHZhMjZENm9Yemp5b05IYUhGdmtkUW1qUWt6RjRieXNWLS0rSk42cWQ4R1dQVUxUbVF1eFpmUXJnPT0=--d1d16ccf889f946e233235e63630543375285064" checkout-token="0fca5e3b467e03bfbbb873358f158bf2" checkout-version="checkout_one" email="" queue-token="AwR5OL_SArq4VNCLa0Iud3g3J0DijH5r9iGiZ_ieMteV8ZGmyli6wjM_SY6FaJVU12saXch43jNwpcBLd0yQTlHRZUCx_WfPDXeLzUUAdMxGVFmgmC4YrA==" shop-permanent-domain="c8d7ec-b4.myshopify.com" transaction-params="encrypted_params=cEdPeG0vN0JDbE9oTXhvbTQrTFJwU2Y4aUJ6bDNQSWYxWGMwRFdVT0h2RlFoT1ZIZk9zN0NBSURkQjNXd21FMDdmN2toMUJpd21pTm8zOHkxY3I2VllsTXVUa09iNDJhUVRmRG9LRk1QelJJQUxPbE9VUHhCZGFYLzBscmNKcUctLUQrdDl1bzR0bDg5aUlWOFVtZE1BQmc9PQ%3D%3D--6bf938c1383178fd834fd6237b30c43bd83cd95d" data-instance-id="91dfb7d8-e017-463a-acee-0b454ddc7bb2"></shop-checkout-modal> */}
                                                                <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem3m _1fragem5f _1fragem2s">
                                                                    <div>
                                                                        <div className="_1mmswk92 _1mmswk91 _1fragemlj _1fragem28">
                                                                            <div className="_1mmswk94 _1mmswk93 _1fragemlj _1fragemnr">
                                                                                <input type="checkbox" id="marketing_opt_in" name="marketing_opt_in" className="_1mmswk96 _1mmswk95 _1fragemop _1fragemon _1fragemor _1fragemol _1fragempl _1fragemph _1fragempp _1fragempd _1fragemb4 _1fragemaf _1fragembt _1fragem9q _1fragemnk _1fragem1y _1fragemod _1fragem1t _1fragemsf _1fragems9 _1fragemsm _1mmswk97 _1fragemnb _1mmswk9a _1mmswk98 _1fragemsy"/>
                                                                                <div className="_1mmswk9k _1mmswk9j _1fragemnb _1fragems0 _1fragemrj _1frageml9 _1fragems9 _1fragemsp _1fragemsf">
                                                                                    <span className="a8x1wu2 a8x1wu1 _1fragemod _1fragem1t _1fragemkk _1fragemka a8x1wug a8x1wuj a8x1wuh _1fragem1y a8x1wum a8x1wul a8x1wuy">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" className="a8x1wu10 a8x1wuz _1fragem1y _1fragemod _1fragemkk _1fragemka _1fragemnm"><path stroke-linecap="round" stroke-linejoin="round" d="m12.1 2.8-5.877 8.843a.35.35 0 0 1-.54.054L1.4 7.4"></path></svg>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <label htmlFor="marketing_opt_in" className="_1mmswk9g _1mmswk9f _1fragem1y _1fragemkk _1fragemnk _1fragemih">Email me with news and offers</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                        <div className="_1fragem1y _1fragemlj gfFXW"><div className="_16s97g74v _16s97g760"></div></div>
                                    </div>

                                    <section className="_197l2ofi _197l2ofg _1fragemna _197l2ofp _197l2ofk _1fragemn6 _1fragemsy _1fragem1y _1fragemf0 _1fragemg0 _1fragemh3 _1fragemht _1fragemd7 _1frageme7 _1fragemiw _1fragemjm _1fragemlj _0AAq3"></section>

                                    <div className="_1fragem1y _1fragemlj gfFXW"><div className="_16s97g74v _16s97g760"></div></div>

                                    <div>
                                        <div>
                                            <section className="_197l2ofi _197l2ofg _1fragemna _197l2ofp _197l2ofk _1fragemn6 _1fragemsy _1fragem1y _1fragemf0 _1fragemg0 _1fragemh3 _1fragemht _1fragemd7 _1frageme7 _1fragemiw _1fragemjm _1fragemlj">
                                                <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem3w _1fragem5p _1fragem2s">
                                                    <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem3c _1fragem55 _1fragem2s">
                                                        <h2 className="n8k95w1 n8k95w0 _1fragemlj n8k95w2">Delivery</h2>
                                                    </div>
                                                    <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem4b _1fragem64 _1fragem2s">
                                                        <section aria-label="Shipping address" className="_1fragem1y _1fragemlj">
                                                            <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem3w _1fragem5p _1fragem2s">
                                                                <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem4b _1fragem64 _1fragem2s">
                                                                    <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem3w _1fragem5p _1fragem2s">
                                                                        <div><div id="shippingAddressForm">
                                                                            <div aria-hidden="false" className="r62YW">
                                                                                <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem3w _1fragem5p _1fragem2s">
                                                                                    <div style={{"--_16s97g7a": "minmax(0, 1fr)", "--_16s97g7k": "minmax(auto, max-content)", "--_16s97g71e": "minmax(0, 1fr)", "--_16s97g71o": "minmax(auto, max-content)"} as React.CSSProperties} className="_1mrl40q0 _1fragemlj _1fragem3w _1fragem5p _1fragem2s _1fragemm3 _1fragemlz _16s97g7f _16s97g7p _16s97g71j _16s97g71t">
                                                                                        <div className="RD23h _1k3449n1 _1k3449n0 _1fragemnb _10vrn9p1 _10vrn9p0 _10vrn9p4">
                                                                                            <div>
                                                                                                <div className="VZudx _1k3449n1 _1k3449n0 _1fragemnb">
                                                                                                    <label htmlFor="Select0" className="QCxaD A9HkF">
                                                                                                        <span className="XDBWz">
                                                                                                            <span className="rermvf1 rermvf0 _1fragemjv _1fragemk5 _1fragem1y">Country/Region</span>
                                                                                                        </span>
                                                                                                    </label>
                                                                                                    <select name="countryCode" id="Select0" required autoComplete="shipping country" className="ZHJU6 _1k3449n5 _1k3449n3 _1fragemsy oAlPg IWR5K tu1VS">
                                                                                                        <option value="US">United States</option>
                                                                                                    </select>
                                        
                                        
                                                                                                    <div className="VXrUd"><span className="a8x1wu2 a8x1wu1 _1fragemod _1fragem1t _1fragemkk _1fragemka a8x1wu9 a8x1wuj a8x1wuh _1fragem1y a8x1wum a8x1wul a8x1wuy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" className="a8x1wu10 a8x1wuz _1fragem1y _1fragemod _1fragemkk _1fragemka _1fragemnm"><path stroke-linecap="round" stroke-linejoin="round" d="m11.9 5.6-4.653 4.653a.35.35 0 0 1-.495 0L2.1 5.6"></path></svg></span></div></div></div></div></div><div 
                                                                                                    style={{"--_16s97g7a": "minmax(0, 1fr)", "--_16s97g7k": "minmax(auto, max-content)", "--_16s97g71e": "minmax(0, 1fr)", "--_16s97g71o": "minmax(auto, max-content)"} as React.CSSProperties} 
                                                                                                    className="_1mrl40q0 _1fragemlj _1fragem3w _1fragem5p _1fragem2s _1fragemm3 _1fragemlz _16s97g7f _16s97g7p _16s97g71j _16s97g71t"><div className="_7ozb2u2 _7ozb2u1 _1fragem3c _1fragem55 _1fragemlj _1fragem2s _10vrn9p1 _10vrn9p0 _10vrn9p4 _7ozb2u4 _7ozb2u3 _1fragemnb"><div className="cektnc0 _1fragemlj cektnc5"><label id="TextField0-label" htmlFor="TextField0" className="cektnc3 cektnc1 _1frageml9 _1fragems0 _1fragemst _1fragemsf _1fragemsa _1fragemsp _1fragemsq"><span className="cektnca"><span className="rermvf1 rermvf0 _1fragemjv _1fragemk5 _1fragem1y">First name (optional)</span></span></label><div className="_7ozb2u6 _7ozb2u5 _1fragemlj _1fragem2s _1fragemnl _1fragemsf _1fragemsa _1fragemsp _1fragemss _7ozb2uc _7ozb2ua _1fragemnb _1fragemsy _7ozb2ul _7ozb2uh"><input id="TextField0" name="firstName" placeholder="First name (optional)" type="text" aria-required="false" aria-labelledby="TextField0-label" autoComplete="shipping given-name" className="_7ozb2uq _7ozb2up _1fragemlj _1fragemst _1fragemod _1fragemrz _7ozb2ut _7ozb2us _1fragemsf _1fragemsa _1fragemsp _7ozb2u11 _7ozb2u1h _7ozb2ur"/></div></div></div><div className="_7ozb2u2 _7ozb2u1 _1fragem3c _1fragem55 _1fragemlj _1fragem2s _10vrn9p1 _10vrn9p0 _10vrn9p4 _7ozb2u4 _7ozb2u3 _1fragemnb"><div className="cektnc0 _1fragemlj cektnc5"><label id="TextField1-label" htmlFor="TextField1" className="cektnc3 cektnc1 _1frageml9 _1fragems0 _1fragemst _1fragemsf _1fragemsa _1fragemsp _1fragemsq"><span className="cektnca"><span className="rermvf1 rermvf0 _1fragemjv _1fragemk5 _1fragem1y">Last name</span></span></label><div className="_7ozb2u6 _7ozb2u5 _1fragemlj _1fragem2s _1fragemnl _1fragemsf _1fragemsa _1fragemsp _1fragemss _7ozb2uc _7ozb2ua _1fragemnb _1fragemsy _7ozb2ul _7ozb2uh"><input id="TextField1" name="lastName" placeholder="Last name" required type="text" aria-required="true" aria-labelledby="TextField1-label" autoComplete="shipping family-name" className="_7ozb2uq _7ozb2up _1fragemlj _1fragemst _1fragemod _1fragemrz _7ozb2ut _7ozb2us _1fragemsf _1fragemsa _1fragemsp _7ozb2u11 _7ozb2u1h _7ozb2ur"/></div></div></div></div><div 
                                                                                                    style={{"--_16s97g7a": "minmax(0, 1fr)", "--_16s97g7k": "minmax(auto, max-content)", "--_16s97g71e": "minmax(0, 1fr)", "--_16s97g71o": "minmax(auto, max-content)"} as React.CSSProperties} 
                                                                                                    className="_1mrl40q0 _1fragemlj _1fragem3w _1fragem5p _1fragem2s _1fragemm3 _1fragemlz _16s97g7f _16s97g7p _16s97g71j _16s97g71t"><div className="wfKnD IGF4z"><div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem3m _1fragem5f _1fragem2s"><div><div className="_7ozb2u2 _7ozb2u1 _1fragem3c _1fragem55 _1fragemlj _1fragem2s _10vrn9p1 _10vrn9p0 _10vrn9p4 _7ozb2u4 _7ozb2u3 _1fragemnb"><div className="cektnc0 _1fragemlj cektnc5"><label id="shipping-address1-label" htmlFor="shipping-address1" className="cektnc3 cektnc1 _1frageml9 _1fragems0 _1fragemst _1fragemsf _1fragemsa _1fragemsp _1fragemsq"><span className="cektnca"><span className="rermvf1 rermvf0 _1fragemjv _1fragemk5 _1fragem1y">Address</span></span></label><div className="_7ozb2u6 _7ozb2u5 _1fragemlj _1fragem2s _1fragemnl _1fragemsf _1fragemsa _1fragemsp _1fragemss _7ozb2uc _7ozb2ua _1fragemnb _1fragemsy _7ozb2ul _7ozb2uh">
                                                                                                        <input id="shipping-address1" name="address1" placeholder="Address" required type="text" aria-autoComplete="list" aria-controls="shipping-address1-options" aria-owns="shipping-address1-options" aria-expanded="false" aria-required="true" aria-labelledby="shipping-address1-label" aria-haspopup="listbox" role="combobox" autoComplete="shipping address-line1" autoCorrect="off" className="_7ozb2uq _7ozb2up _1fragemlj _1fragemst _1fragemod _1fragemrz _7ozb2ut _7ozb2us _1fragemsf _1fragemsa _1fragemsp _7ozb2uv _7ozb2uu _1fragemox _1fragemp7 _7ozb2u11 _7ozb2u1h _7ozb2ur"/>
                                                                                                        
                                                                                                        <div className="_7ozb2u1f _7ozb2u1e _1fragemlj _1fragemst _1fragemmi _1fragemni _7ozb2u1g"><span className="a8x1wu2 a8x1wu1 _1fragemod _1fragem1t _1fragemkk _1fragemka a8x1wu9 a8x1wuj a8x1wuh _1fragem1y a8x1wuo a8x1wul a8x1wuy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" className="a8x1wu10 a8x1wuz _1fragem1y _1fragemod _1fragemkk _1fragemka _1fragemnm"><path stroke-linecap="round" d="M9.16 9.159a4.194 4.194 0 1 0-5.933-5.93 4.194 4.194 0 0 0 5.934 5.93Zm0 0L12.6 12.6"></path></svg></span></div></div></div></div></div></div></div></div><div style={{"--_16s97g7a": "minmax(0, 1fr)", "--_16s97g7k": "minmax(auto, max-content)", "--_16s97g71e": "minmax(0, 1fr)", "--_16s97g71o": "minmax(auto, max-content)"} as React.CSSProperties} className="_1mrl40q0 _1fragemlj _1fragem3w _1fragem5p _1fragem2s _1fragemm3 _1fragemlz _16s97g7f _16s97g7p _16s97g71j _16s97g71t"><div className="_7ozb2u2 _7ozb2u1 _1fragem3c _1fragem55 _1fragemlj _1fragem2s _10vrn9p1 _10vrn9p0 _10vrn9p4 _7ozb2u4 _7ozb2u3 _1fragemnb"><div className="cektnc0 _1fragemlj cektnc5"><label id="TextField2-label" htmlFor="TextField2" className="cektnc3 cektnc1 _1frageml9 _1fragems0 _1fragemst _1fragemsf _1fragemsa _1fragemsp _1fragemsq"><span className="cektnca"><span className="rermvf1 rermvf0 _1fragemjv _1fragemk5 _1fragem1y">Apartment, suite, etc. (optional)</span></span></label><div className="_7ozb2u6 _7ozb2u5 _1fragemlj _1fragem2s _1fragemnl _1fragemsf _1fragemsa _1fragemsp _1fragemss _7ozb2uc _7ozb2ua _1fragemnb _1fragemsy _7ozb2ul _7ozb2uh"><input id="TextField2" name="address2" placeholder="Apartment, suite, etc. (optional)" type="text" aria-required="false" aria-labelledby="TextField2-label" autoComplete="shipping address-line2" className="_7ozb2uq _7ozb2up _1fragemlj _1fragemst _1fragemod _1fragemrz _7ozb2ut _7ozb2us _1fragemsf _1fragemsa _1fragemsp _7ozb2u11 _7ozb2u1h _7ozb2ur"/></div></div></div></div><div style={{"--_16s97g7a": "minmax(0, 1fr)", "--_16s97g7k": "minmax(auto, max-content)", "--_16s97g71e": "minmax(0, 1fr)", "--_16s97g71o": "minmax(auto, max-content)"} as React.CSSProperties} className="_1mrl40q0 _1fragemlj _1fragem3w _1fragem5p _1fragem2s _1fragemm3 _1fragemlz _16s97g7f _16s97g7p _16s97g71j _16s97g71t"><div className="_7ozb2u2 _7ozb2u1 _1fragem3c _1fragem55 _1fragemlj _1fragem2s _10vrn9p1 _10vrn9p0 _10vrn9p4 _7ozb2u4 _7ozb2u3 _1fragemnb"><div className="cektnc0 _1fragemlj cektnc5"><label id="TextField3-label" htmlFor="TextField3" className="cektnc3 cektnc1 _1frageml9 _1fragems0 _1fragemst _1fragemsf _1fragemsa _1fragemsp _1fragemsq"><span className="cektnca"><span className="rermvf1 rermvf0 _1fragemjv _1fragemk5 _1fragem1y">City</span></span></label><div className="_7ozb2u6 _7ozb2u5 _1fragemlj _1fragem2s _1fragemnl _1fragemsf _1fragemsa _1fragemsp _1fragemss _7ozb2uc _7ozb2ua _1fragemnb _1fragemsy _7ozb2ul _7ozb2uh"><input id="TextField3" name="city" placeholder="City" required type="text" aria-required="true" aria-labelledby="TextField3-label" autoComplete="shipping address-level2" className="_7ozb2uq _7ozb2up _1fragemlj _1fragemst _1fragemod _1fragemrz _7ozb2ut _7ozb2us _1fragemsf _1fragemsa _1fragemsp _7ozb2u11 _7ozb2u1h _7ozb2ur"/></div></div></div><div className="RD23h _1k3449n1 _1k3449n0 _1fragemnb _10vrn9p1 _10vrn9p0 _10vrn9p4"><div><div className="VZudx _1k3449n1 _1k3449n0 _1fragemnb"><label htmlFor="Select1" className="QCxaD"><span className="XDBWz"><span className="rermvf1 rermvf0 _1fragemjv _1fragemk5 _1fragem1y">State</span></span></label>
                                                                                                    <select name="zone" id="Select1" required autoComplete="shipping address-level1" className="ZHJU6 _1k3449n5 _1k3449n3 _1fragemsy oAlPg IWR5K tu1VS">
                                                                                                        <option hidden disabled value="">&nbsp;</option>
                                                                                                        <option data-alternate-values="[&quot;Alabama&quot;]" value="AL">Alabama</option>
                                                                                                        <option data-alternate-values="[&quot;Alaska&quot;]" value="AK">Alaska</option>
                                                                                                        <option data-alternate-values="[&quot;American Samoa&quot;]" value="AS">American Samoa</option>
                                                                                                        <option data-alternate-values="[&quot;Arizona&quot;]" value="AZ">Arizona</option>
                                                                                                        <option data-alternate-values="[&quot;Arkansas&quot;]" value="AR">Arkansas</option>
                                                                                                        <option data-alternate-values="[&quot;California&quot;]" value="CA">California</option>
                                                                                                        <option data-alternate-values="[&quot;Colorado&quot;]" value="CO">Colorado</option>
                                                                                                        <option data-alternate-values="[&quot;Connecticut&quot;]" value="CT">Connecticut</option>
                                                                                                        <option data-alternate-values="[&quot;Delaware&quot;]" value="DE">Delaware</option>
                                                                                                        <option data-alternate-values="[&quot;Federated States of Micronesia&quot;,&quot;Micronesia&quot;]" value="FM">Micronesia</option>
                                                                                                        <option data-alternate-values="[&quot;Florida&quot;]" value="FL">Florida</option>
                                                                                                        <option data-alternate-values="[&quot;Georgia&quot;]" value="GA">Georgia</option>
                                                                                                        <option data-alternate-values="[&quot;Guam&quot;]" value="GU">Guam</option>
                                                                                                        <option data-alternate-values="[&quot;Hawaii&quot;]" value="HI">Hawaii</option>
                                                                                                        <option data-alternate-values="[&quot;Idaho&quot;]" value="ID">Idaho</option>
                                                                                                        <option data-alternate-values="[&quot;Illinois&quot;]" value="IL">Illinois</option>
                                                                                                        <option data-alternate-values="[&quot;Indiana&quot;]" value="IN">Indiana</option>
                                                                                                        <option data-alternate-values="[&quot;Iowa&quot;]" value="IA">Iowa</option>
                                                                                                        <option data-alternate-values="[&quot;Kansas&quot;]" value="KS">Kansas</option>
                                                                                                        <option data-alternate-values="[&quot;Kentucky&quot;]" value="KY">Kentucky</option>
                                                                                                        <option data-alternate-values="[&quot;Louisiana&quot;]" value="LA">Louisiana</option>
                                                                                                        <option data-alternate-values="[&quot;Maine&quot;]" value="ME">Maine</option>
                                                                                                        <option data-alternate-values="[&quot;Marshall Islands&quot;]" value="MH">Marshall Islands</option>
                                                                                                        <option data-alternate-values="[&quot;Maryland&quot;]" value="MD">Maryland</option>
                                                                                                        <option data-alternate-values="[&quot;Massachusetts&quot;]" value="MA">Massachusetts</option>
                                                                                                        <option data-alternate-values="[&quot;Michigan&quot;]" value="MI">Michigan</option>
                                                                                                        <option data-alternate-values="[&quot;Minnesota&quot;]" value="MN">Minnesota</option>
                                                                                                        <option data-alternate-values="[&quot;Mississippi&quot;]" value="MS">Mississippi</option>
                                                                                                        <option data-alternate-values="[&quot;Missouri&quot;]" value="MO">Missouri</option>
                                                                                                        <option data-alternate-values="[&quot;Montana&quot;]" value="MT">Montana</option>
                                                                                                        <option data-alternate-values="[&quot;Nebraska&quot;]" value="NE">Nebraska</option>
                                                                                                        <option data-alternate-values="[&quot;Nevada&quot;]" value="NV">Nevada</option>
                                                                                                        <option data-alternate-values="[&quot;New Hampshire&quot;]" value="NH">New Hampshire</option>
                                                                                                        <option data-alternate-values="[&quot;New Jersey&quot;]" value="NJ">New Jersey</option>
                                                                                                        <option data-alternate-values="[&quot;New Mexico&quot;]" value="NM">New Mexico</option>
                                                                                                        <option data-alternate-values="[&quot;New York&quot;]" value="NY">New York</option>
                                                                                                        <option data-alternate-values="[&quot;North Carolina&quot;]" value="NC">North Carolina</option>
                                                                                                        <option data-alternate-values="[&quot;North Dakota&quot;]" value="ND">North Dakota</option>
                                                                                                        <option data-alternate-values="[&quot;Northern Mariana Islands&quot;]" value="MP">Northern Mariana Islands</option>
                                                                                                        <option data-alternate-values="[&quot;Ohio&quot;]" value="OH">Ohio</option>
                                                                                                        <option data-alternate-values="[&quot;Oklahoma&quot;]" value="OK">Oklahoma</option>
                                                                                                        <option data-alternate-values="[&quot;Oregon&quot;]" value="OR">Oregon</option>
                                                                                                        <option data-alternate-values="[&quot;Palau&quot;]" value="PW">Palau</option>
                                                                                                        <option data-alternate-values="[&quot;Pennsylvania&quot;]" value="PA">Pennsylvania</option>
                                                                                                        <option data-alternate-values="[&quot;Puerto Rico&quot;]" value="PR">Puerto Rico</option>
                                                                                                        <option data-alternate-values="[&quot;Rhode Island&quot;]" value="RI">Rhode Island</option>
                                                                                                        <option data-alternate-values="[&quot;South Carolina&quot;]" value="SC">South Carolina</option>
                                                                                                        <option data-alternate-values="[&quot;South Dakota&quot;]" value="SD">South Dakota</option>
                                                                                                        <option data-alternate-values="[&quot;Tennessee&quot;]" value="TN">Tennessee</option>
                                                                                                        <option data-alternate-values="[&quot;Texas&quot;]" value="TX">Texas</option>
                                                                                                        <option data-alternate-values="[&quot;Utah&quot;]" value="UT">Utah</option>
                                                                                                        <option data-alternate-values="[&quot;Vermont&quot;]" value="VT">Vermont</option>
                                                                                                        <option data-alternate-values="[&quot;Virginia&quot;]" value="VA">Virginia</option>
                                                                                                        <option data-alternate-values="[&quot;Washington&quot;]" value="WA">Washington</option>
                                                                                                        <option data-alternate-values="[&quot;District of Columbia&quot;,&quot;Washington DC&quot;]" value="DC">Washington DC</option>
                                                                                                        <option data-alternate-values="[&quot;West Virginia&quot;]" value="WV">West Virginia</option>
                                                                                                        <option data-alternate-values="[&quot;Wisconsin&quot;]" value="WI">Wisconsin</option>
                                                                                                        <option data-alternate-values="[&quot;Wyoming&quot;]" value="WY">Wyoming</option>
                                                                                                        <option data-alternate-values="[&quot;Virgin Islands&quot;,&quot;U.S. Virgin Islands&quot;]" value="VI">U.S. Virgin Islands</option>
                                                                                                        <option data-alternate-values="[&quot;Armed Forces Americas&quot;]" value="AA">Armed Forces Americas</option>
                                                                                                        <option data-alternate-values="[&quot;Armed Forces Europe&quot;]" value="AE">Armed Forces Europe</option>
                                                                                                        <option data-alternate-values="[&quot;Armed Forces Pacific&quot;]" value="AP">Armed Forces Pacific</option>
                                                                                                    </select>
                                                                                                    <div className="VXrUd"><span className="a8x1wu2 a8x1wu1 _1fragemod _1fragem1t _1fragemkk _1fragemka a8x1wu9 a8x1wuj a8x1wuh _1fragem1y a8x1wum a8x1wul a8x1wuy">
                                                                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" focusable="false" aria-hidden="true" className="a8x1wu10 a8x1wuz _1fragem1y _1fragemod _1fragemkk _1fragemka _1fragemnm"><path stroke-linecap="round" stroke-linejoin="round" d="m11.9 5.6-4.653 4.653a.35.35 0 0 1-.495 0L2.1 5.6"></path></svg></span>
                                                                                                    </div>
                                                                                                </div></div></div><div className="hDo51"><div className="_7ozb2u2 _7ozb2u1 _1fragem3c _1fragem55 _1fragemlj _1fragem2s _10vrn9p1 _10vrn9p0 _10vrn9p4 _7ozb2u4 _7ozb2u3 _1fragemnb"><div className="cektnc0 _1fragemlj cektnc5"><label id="TextField4-label" htmlFor="TextField4" className="cektnc3 cektnc1 _1frageml9 _1fragems0 _1fragemst _1fragemsf _1fragemsa _1fragemsp _1fragemsq"><span className="cektnca"><span className="rermvf1 rermvf0 _1fragemjv _1fragemk5 _1fragem1y">ZIP code</span></span></label><div className="_7ozb2u6 _7ozb2u5 _1fragemlj _1fragem2s _1fragemnl _1fragemsf _1fragemsa _1fragemsp _1fragemss _7ozb2uc _7ozb2ua _1fragemnb _1fragemsy _7ozb2ul _7ozb2uh"><input id="TextField4" name="postalCode" placeholder="ZIP code" required type="text" inputMode="text" aria-required="true" aria-labelledby="TextField4-label" autoComplete="shipping postal-code" autoCapitalize="characters" className="_7ozb2uq _7ozb2up _1fragemlj _1fragemst _1fragemod _1fragemrz _7ozb2ut _7ozb2us _1fragemsf _1fragemsa _1fragemsp _7ozb2u11 _7ozb2u1h _7ozb2ur"/></div></div></div></div></div></div><div className="_197l2of1e _1fragems1 _1fragem1y _1fragemlj">
                                                                                                        <input tabIndex={-1} aria-hidden="true" aria-label="no-label" type="text" id="autofill_firstName" name="firstName" autoComplete="shipping given-name"/>
                                                                                                        <input tabIndex={-1} aria-hidden="true" aria-label="no-label" type="text" id="autofill_lastName" name="lastName" autoComplete="shipping family-name"/>
                                                                                                        <input tabIndex={-1} aria-hidden="true" aria-label="no-label" type="text" id="autofill_address1" name="address1" autoComplete="shipping address-line1"/>
                                                                                                        <input tabIndex={-1} aria-hidden="true" aria-label="no-label" type="text" id="autofill_address2" name="address2" autoComplete="shipping address-line2"/>
                                                                                                        <input tabIndex={-1} aria-hidden="true" aria-label="no-label" type="text" id="autofill_city" name="city" autoComplete="shipping address-level2"/>
                                                                                                        <input tabIndex={-1} aria-hidden="true" aria-label="no-label" type="text" id="autofill_country" name="country" autoComplete="shipping country"/>
                                                                                                        <input tabIndex={-1} aria-hidden="true" aria-label="no-label" type="text" id="autofill_zone" name="zone" autoComplete="shipping address-level1"/>
                                                                                                        <input tabIndex={-1} aria-hidden="true" aria-label="no-label" type="text" id="autofill_address_level1" name="address-level1" autoComplete="shipping address-level1"/>
                                                                                                        <input tabIndex={-1} aria-hidden="true" aria-label="no-label" type="text" id="autofill_province" name="province" autoComplete="shipping address-level1"/>
                                                                                                        <input tabIndex={-1} aria-hidden="true" aria-label="no-label" type="text" id="autofill_postalCode" name="postalCode" autoComplete="shipping postal-code"/>
                                                                                                        </div></div></div></div></div>
                                                                                                        
                                                                                                        <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem3w _1fragem5p _1fragem2s"><h3 className="n8k95w1 n8k95w0 _1fragemlj n8k95w3">Shipping method</h3><div className="jHvVd"><div className="_1fragemou _1fragemoz _1fragemp9 _1fragemp4 _1fragemt2 _1fragem1y _1fragemf5 _1fragemgy _1fragemdc _1fragemir _1fragemlj">
                                                                                                            <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem3m _1fragem5f _1fragem2s">
                                                                                                                <p className="_1x52f9s1 _1x52f9s0 _1fragemlj _1x52f9sv _1x52f9su _1fragemnu _1x52f9sp">Enter your shipping address to view available shipping methods.</p>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </section>
                                </div>
                                
                                
                                
                                </div>
                                
                                
                                            </section><div className="_1fragem1y _1fragemlj gfFXW"><div className="_16s97g74v _16s97g760"></div></div>
                                        </div>
                                    </div>


                                </div>

                                <div className="_197l2of1e _1fragems1 _1fragem1y _1fragemlj"><button type="submit" tabIndex={-1} aria-hidden="true">Submit</button></div>
                            </form>  
                        </div>
                    </main>

                    <footer role="contentinfo" className="NGRNe GTe1e _1fragemna">
                        <div className="QiTI2">
                            <div>
                                <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem41 _1fragem5u _1fragem2s">
                                    <div className="_5uqybw0 _1fragemlj _1fragem28 _1fragem78">
                                        <div className="_5uqybw2 _5uqybw1 _1fragem28 _1fragemkp _1fragemma _1fragemmf _1fragem3c _1fragem5p _1fragem78">
                                            <button type="button" className="_1m2hr9ge _1m2hr9gd _1fragemsq _1fragemlj _1fragemnk _1fragem2i _1fragems4 _1fragemsj _1fragemsl _1fragemsa _1m2hr9g18 _1m2hr9g15 _1fragemsl _1fragemsj _1fragems9 _1fragemry _1m2hr9g1c _1m2hr9g1a _1fragems6" aria-haspopup="dialog">
                                                <span style={{fontSize: '1.3rem'}} className="_1m2hr9gr _1m2hr9gq _1fragems0 _1fragemsf _1fragems9 _1fragemsm _1m2hr9gn _1m2hr9gl _1fragem28 _1fragem6t _1fragems2">Privacy policy</span>
                                            </button>
                                            <button type="button" className="_1m2hr9ge _1m2hr9gd _1fragemsq _1fragemlj _1fragemnk _1fragem2i _1fragems4 _1fragemsj _1fragemsl _1fragemsa _1m2hr9g18 _1m2hr9g15 _1fragemsl _1fragemsj _1fragems9 _1fragemry _1m2hr9g1c _1m2hr9g1a _1fragems6" aria-haspopup="dialog">
                                                <span style={{fontSize: '1.3rem'}} className="_1m2hr9gr _1m2hr9gq _1fragems0 _1fragemsf _1fragems9 _1fragemsm _1m2hr9gn _1m2hr9gl _1fragem28 _1fragem6t _1fragems2">Terms of service</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>

            <div className="i4DWM _1fragemna _1fragemn7 _1fragemsy">
                <div className="_4QenE">
                    <aside>
                        <div>
                            <section className="_1fragem1y _1fragemlj">
                                <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem46 _1fragem5z _1fragem2s">
                                    <h2 className="n8k95wf _1fragems1">Order summary</h2>
                                    <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem46 _1fragem5z _1fragem2s">
                                        <section className="_1fragem1y _1fragemlj">
                                            <div className="_6zbcq51o _1fragems1">
                                                <h3 id="ResourceList0" className="n8k95w1 n8k95w0 _1fragemlj n8k95w4">Shopping cart</h3>
                                            </div>
                                            <div role="table" aria-labelledby="ResourceList0" className="_6zbcq54 _6zbcq53 _1fragem28 _1fragemnn _6zbcq5m _6zbcq5a _1fragem3w _6zbcq5s">
                                                <div role="rowgroup" className="_6zbcq513 _6zbcq512 _1fragem28 _1fragemnn _6zbcq5z _6zbcq5y _1fragems1">
                                                    <div role="row" className="_6zbcq511 _6zbcq510 _1fragem28 _1fragemmc _1fragemod _1fragem5p">
                                                        <div role="columnheader" className="_6zbcq51o _1fragems1">Product image</div>
                                                        <div role="columnheader" className="_6zbcq51o _1fragems1">Description</div>
                                                        <div role="columnheader" className="_6zbcq51o _1fragems1">Quantity</div>
                                                        <div role="columnheader" className="_6zbcq51o _1fragems1">Price</div>
                                                    </div>
                                                </div>
                                                <div role="rowgroup" className="_6zbcq513 _6zbcq512 _1fragem28 _1fragemnn _6zbcq5m _6zbcq5a _1fragem3w">
                                                    <div role="row" className="_6zbcq516 _6zbcq515 _1fragem28 _1fragem1t _6zbcq519 _6zbcq518">
                                                        <div role="cell" className="_6zbcq51n _6zbcq51m _1fragem28 _1fragemnn _6zbcq51h _6zbcq51e _1fragem78 _6zbcq51c">
                                                            <div style={{"--_1m6j2n30": "1"} as React.CSSProperties} className="_1m6j2n34 _1m6j2n33 _1fragemlj _1fragemt2 _1m6j2n3a _1m6j2n39 _1m6j2n35">
                                                                <div style={{"--_1h3po420": "1"} as React.CSSProperties} className="_1h3po421 _1h3po423 _1h3po422 _1fragemlj">
                                                                    <picture>
                                                                        <source media="(min-width: 0px)" srcSet="https://cdn.shopify.com/s/files/1/0706/3794/5057/files/birthday-kit_64x64.png?v=1728568675 1x, https://cdn.shopify.com/s/files/1/0706/3794/5057/files/birthday-kit_128x128.png?v=1728568675 2x, https://cdn.shopify.com/s/files/1/0706/3794/5057/files/birthday-kit_256x256.png?v=1728568675 4x"/>
                                                                        <img src="https://cdn.shopify.com/s/files/1/0706/3794/5057/files/birthday-kit_64x64.png?v=1728568675" alt="Birthday Kit" className="_1h3po424 _1h3po427 _1h3po425 _1fragem1y _1fragemkk _1fragem8r _1fragem87 _1fragem9b _1fragem7n _1fragemb4 _1fragemaf _1fragembt _1fragem9q _1fragemkz _1m6j2n35"/>
                                                                    </picture>
                                                                </div>
                                                                <div className="_1m6j2n3l _1m6j2n3k _1frageml9">
                                                                    <div className="_99ss3s1 _99ss3s0 _1fragem2n _1fragemmc _1fragem6t _99ss3s7 _99ss3s4 _99ss3s2 _1fragemi7 _1fragemge _1fragemnt _99ss3sk _99ss3sf _1fragemow _1fragemp1 _1fragempb _1fragemp6">
                                                                        <div>
                                                                            <span className="_1fragems1">Quantity</span>
                                                                            <span>1</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div role="cell" style={{"--_16s97g73w": "6.4rem"} as React.CSSProperties} className="_6zbcq51n _6zbcq51m _1fragem28 _1fragemnn _6zbcq51i _6zbcq51f _1fragem6t _6zbcq51d _6zbcq51b _1fragemmh _6zbcq51k _1fragemnq _16s97g741">
                                                            <div className="_1fragem1y _1fragemlj dDm6x">
                                                                <p className="_1x52f9s1 _1x52f9s0 _1fragemlj _1x52f9sv _1x52f9su _1fragemnu" style={{fontFamily: ' "Nunito", sans-serif'}}>Birthday Kit</p>
                                                                <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem4v _1fragem6o _1fragem2s"></div>
                                                            </div>
                                                        </div>
                                                        <div role="cell" className="_6zbcq51n _6zbcq51m _1fragem28 _1fragemnn _6zbcq51i _6zbcq51f _1fragem6t _6zbcq51c _6zbcq51l">
                                                            <div className="_6zbcq51o _1fragems1">
                                                                <span className="_19gi7yt0 _19gi7ytw _19gi7ytv _1fragemnu">1</span>
                                                            </div>
                                                        </div>
                                                        <div role="cell" className="_6zbcq51n _6zbcq51m _1fragem28 _1fragemnn _6zbcq51i _6zbcq51f _1fragem6t _6zbcq51d _6zbcq51b _1fragemmh"><div className="_197l2oft _1fragemnn _1fragemme _1fragem28 _1fragemlj Byb5s">
                                                            <span translate="no" className="_19gi7yt0 _19gi7ytw _19gi7ytv _1fragemnu notranslate">$59.00</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div className="_1ip0g651 _1ip0g650 _1fragemlj _1fragem46 _1fragem5z _1fragem2s">
                                        <section className="_1fragem1y _1fragemlj">
                                            <div id="gift-card-field" style={{height: "0px"}} hidden className="_94sxtb1 _94sxtb0 _1fragemjv _1fragemk5 _1fragemlj _1fragemsm _94sxtbb _94sxtb4 _1fragems9"><div></div></div>
                                        </section>
                                    </div>
                                            <section className="_1fragem1y _1fragemlj">
                                                <div className="nfgb6p2 _1fragems1">
                                                    <h3 id="MoneyLine-Heading0" className="n8k95w1 n8k95w0 _1fragemlj n8k95w4">Cost summary</h3>
                                                </div>
                                                <div role="table" aria-labelledby="MoneyLine-Heading0"><div role="rowgroup" className="nfgb6p2 _1fragems1"><div role="row"><div role="columnheader">Item</div><div role="columnheader">Value</div></div></div>
                                                <div role="rowgroup" className="nfgb6p1 nfgb6p0 _1fragem2s nfgb6p3">
                                                    <div role="row" className="_1qy6ue60 _1qy6ue69 _1qy6ue61 _1qy6ue67 _1qy6ue65 _1fragem3h _1fragem5a _1fragem2s">
                                                        <div role="rowheader" className="_1qy6ue6b"><span className="_19gi7yt0 _19gi7ytw _19gi7ytv _1fragemnu">Subtotal</span></div>
                                                        <div role="cell" className="_1qy6ue6c">
                                                            <span translate="no" className="_19gi7yt0 _19gi7ytw _19gi7ytv _1fragemnu notranslate">$59.00</span>
                                                        </div>
                                                    </div>
                                                    <div role="row" className="_1qy6ue60 _1qy6ue6a _1qy6ue61 _1qy6ue67 _1qy6ue65 _1fragem3h _1fragem5a _1fragem2s"><div role="rowheader" className="_1qy6ue6b"><div className="_5uqybw0 _1fragemlj _1fragem28 _1fragem78"><div className="_5uqybw2 _5uqybw1 _1fragem28 _1fragemkp _1fragem3c _1fragem55 _1fragemm8 _1fragemmc _1fragem78">
                                                            <span className="_19gi7yt0 _19gi7ytw _19gi7ytv _1fragemnu">Shipping</span></div></div></div>
                                                            <div role="cell" className="_1qy6ue6c">
                                                                <span translate="no" className="_19gi7yt0 _19gi7ytw _19gi7ytv _1fragemnu _19gi7ytn _19gi7ytj notranslate">Enter shipping address</span>
                                                            </div>
                                                    </div>
                                                        <div role="row" className="_1x41w3p1 _1x41w3p0 _1fragem2s _1fragemmc _1x41w3p2"><div role="rowheader" className="_1x41w3p6">
                                                                <span className="_19gi7yt0 _19gi7yt10 _19gi7ytz _1fragemnw _19gi7yt2">Total</span></div>
                                                            <div role="cell" className="_1x41w3p7">
                                                                <div className="_5uqybw0 _1fragemlj _1fragem28 _1fragem78"><div className="_5uqybw2 _5uqybw1 _1fragem28 _1fragemkp _1fragem3h _1fragem5a _1fragemmb _1fragem78"><abbr translate="no" className="_19gi7yt0 _19gi7ytu _19gi7ytt _1fragemnt _19gi7ytj notranslate _19gi7yt1c _19gi7yt19 _1fragems5">USD</abbr><strong translate="no" className="_19gi7yt0 _19gi7yt10 _19gi7ytz _1fragemnw _19gi7yt2 notranslate">$59.00</strong></div></div>
                                                            </div>
                                                        </div>
                                                </div>
                                                </div>
                                            </section>
                                        </div>
                                    </section>
                                </div>
                            </aside>
                        </div>
            </div>
        </div>

    </div>
  );
}

export default Checkout;

