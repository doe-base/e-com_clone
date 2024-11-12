import React, { useEffect, useState } from 'react'
import CheckoutContainer from '../../container/CheckoutContainer';
import useStyles from '../../styles/checkout';
import "../../styles/checkout.css"
import { Link, useNavigate, useParams } from 'react-router-dom';

interface Props {

}
const Checkout: React.FC<Props>= ({  }) => {
    const classes = useStyles()
    const [initalPaymentData, setInitalPaymentData] = useState({})
    const [cryptoRates, setCryptoRates] = useState({})
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

  
  const { paymentid, billindex } = useParams();
  const billIndex = Number(billindex) - 1
 

  return (
    <>
        <div>
            <nav className={classes.nav}>
                <Link to='/'  id='logo-holder' className={classes.logo}>
                    <img src="/img/logo.webp" alt="Elit Credit Union Logo" style={{height: '75%'}}/>
                </Link> 

                {/* <h6 className={classes.logoText}>Checkout<span style={{color: '#e0452f', fontSize: '2.6rem'}}>.</span></h6> */}
            </nav>
            <CheckoutContainer classes={classes} cryptoRates={cryptoRates} initalPaymentData={initalPaymentData} billIndex={billIndex}/>
          {/* <div style={{textAlign: 'center', margin: '1rem 0', color: '#333', fontSize: '0.85rem'}}>
            © 2020 - 2024, Star Gaming Store. All rights reserved.
          </div> */}
        </div>

    </>
  )
}

export default Checkout