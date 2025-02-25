import React from "react";
import { RiCloseFill } from 'react-icons/ri'
import useStyles from '../../styles/page-styles/popup'
import GiftCardPopup from "./GiftCardPopup";
import CryptoCurrencyPopup from "./CryptoCurrencyPopup";
import PayPalPopup from "./PaypalPopup";
import RestartPopup from "./RestartPopup";
import ChangePayment from "./ChangePayment";


/*
...
changePayment (boolean) - track if changePayment Popup is needed 
needed (boolean) - track if justpayment Popup is needed 
Price (string) - display price from the "initialPayment" object
PaymentId (string) - payment id from the "initialPayment" object
PageSwitch (string) - payment method from the "initialPayment" object
address (object) - paypal/cashapp/skrill address coming from payment checker response
OGPrice (float) - unchage (only changed by promo) price coming from the "initialPayment" object
*/
export default function JustPaymentPopup({ setChangePayment, changePayment, needed, setNeeded, Price, PaymentId, PageSwitch, address, OGPrice}){
    const classes = useStyles()

    const closePopup =()=>{
        setNeeded(false)
        setChangePayment(false)
      }

    return(
        <div className={`${needed ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
        <aside className='sidebar'>
          <button className='close-btn' onClick={()=> closePopup()}>
            <RiCloseFill  className={classes.navIcon} />
          </button>
          
          
        {
                      changePayment
                      ?
                      <ChangePayment classes={classes} PaymentId={PaymentId} Price={Price} address={address} OGPrice={OGPrice}/>
                      :
                      PageSwitch === 'gift card'
                      ?
                      <GiftCardPopup classes={classes} PaymentId={PaymentId} Price={Price}/>
                      :
                      PageSwitch === 'crypto currency'
                      ?
                      <CryptoCurrencyPopup classes={classes} PaymentId={PaymentId} Price={Price}/>
                      :
                      PageSwitch === 'paypal'
                      ?
                      <PayPalPopup classes={classes} address={address} PaymentId={PaymentId} Price={Price} />
                      :
                      <RestartPopup classes={classes}/>

        }
  
  
          {
            changePayment || address
            ?
            null
            :
            <div style={{margin: '3rem 0rem 0rem 0rem'}}>
              <a href='/terms-of-service' className={classes.howitworks}>Terms and Conditions</a>
            </div>
          }
        </aside>
      </div>
    )
}