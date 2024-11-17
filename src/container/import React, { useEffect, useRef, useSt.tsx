import React, { useEffect, useRef, useState } from 'react'
import { Grid } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';

interface Props {
  classes: any;
  cryptoRates: any;
  initalPaymentData: any;
  billIndex: any;
}
const CheckoutContainer: React.FC<Props>= ({ classes, cryptoRates, initalPaymentData, billIndex }) => {

  const [paymentChoice, setPaymentChoice] = useState('paypal')
  const [paypalPayeeName, setPaypalPayeeName] = useState(initalPaymentData.name)
  const [paypalPayeeEmail, setPaypalPayeeEmail] = useState(initalPaymentData.email)
  
  const [paypalPayeeAddress, setPaypalPayeeAddress] = useState('')
  const [GfImage, setGfImage] = useState<any>(null)
  const [cryptoCurrencySelect, setCryptoCurrencySelect] = useState('bitcoin')
  

  const paypalRef = useRef<HTMLSpanElement>(null)
  const cashappRef = useRef<HTMLSpanElement>(null)
  const skrillRef = useRef<HTMLSpanElement>(null)
  const bitcoinAddRef = useRef<HTMLHeadingElement>(null)
  const bitcoinPriceRef = useRef<HTMLHeadingElement>(null)
  const ethAddRef = useRef<HTMLHeadingElement>(null)
  const ethPriceRef = useRef<HTMLHeadingElement>(null)
  const bnbAddRef = useRef<HTMLHeadingElement>(null)
  const bnbPriceRef = useRef<HTMLHeadingElement>(null)
  const usdtAddRef = useRef<HTMLHeadingElement>(null)
  const usdtPriceRef = useRef<HTMLHeadingElement>(null)

  const [cpActive, setcpActie] = useState(false)
  const [cpActive2, setcpActie2] = useState(false)
  const [cpActive3, setcpActie3] = useState(false)
  const [cpActive4, setcpActie4] = useState(false)
  const [cpActive5, setcpActie5] = useState(false)
  const [cpActive6, setcpActie6] = useState(false)
  const [cpActive7, setcpActie7] = useState(false)
  const [cpActive8, setcpActie8] = useState(false)
  const [cpActive9, setcpActie9] = useState(false)
  const [cpActive10, setcpActie10] = useState(false)
  const [cpActive11, setcpActie11] = useState(false)


  useEffect(()=>{
    setPaypalPayeeName(initalPaymentData.name)
    setCashappPayeeName(initalPaymentData.name)
    setSkrillPayeeName(initalPaymentData.name)
    
    setPaypalPayeeEmail(initalPaymentData.email)
    setCashappPayeeEmail(initalPaymentData.email)
    setSkrillPayeeEmail(initalPaymentData.email)


    setGcPayeeName(initalPaymentData.name)
    setGcPayeeEmail(initalPaymentData.email)


    setCryptoPayeeName(initalPaymentData.name)
    setCryptoPayeeEmail(initalPaymentData.email)


  }, [initalPaymentData.name, initalPaymentData.email])

  function startTimer(stateFunction: React.Dispatch<React.SetStateAction<boolean>>) {
    setTimeout(() => {
      stateFunction(false)
    }, 1500);
  }
  const copyToClipboard = () => {
    const textToCopy = paypalRef.current?.innerText
    if(textToCopy){
      navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setcpActie(true)
        startTimer(setcpActie)
      })
      .catch((err) => {
        alert("Failed to copy text:");
      });
    }
  };

  const copyToClipboard2 = () => {
    const textToCopy = cashappRef.current?.innerText
    if(textToCopy){
      navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setcpActie2(true)
        startTimer(setcpActie2)
      })
      .catch((err) => {
        alert("Failed to copy text:");
      });
    }
  };

  const copyToClipboard3 = () => {
    const textToCopy = skrillRef.current?.innerText
    if(textToCopy){
      navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setcpActie3(true)
        startTimer(setcpActie3)
      })
      .catch((err) => {
        alert("Failed to copy text:");
      });
    }
  };


  const copyToClipboard4 = () => {
    const textToCopy = bitcoinAddRef.current?.innerText
    if(textToCopy){
      navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setcpActie4(true)
        startTimer(setcpActie4)
      })
      .catch((err) => {
        alert("Failed to copy text:");
      });
    }
  };  
  const copyToClipboard5 = () => {
    const textToCopy = bitcoinPriceRef.current?.innerText
    if(textToCopy){
      navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setcpActie5(true)
        startTimer(setcpActie5)
      })
      .catch((err) => {
        alert("Failed to copy text:");
      });
    }
  };


  const copyToClipboard6 = () => {
    const textToCopy = ethAddRef.current?.innerText
    if(textToCopy){
      navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setcpActie6(true)
        startTimer(setcpActie6)
      })
      .catch((err) => {
        alert("Failed to copy text:");
      });
    }
  };  
  const copyToClipboard7 = () => {
    const textToCopy = ethPriceRef.current?.innerText
    if(textToCopy){
      navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setcpActie7(true)
        startTimer(setcpActie7)
      })
      .catch((err) => {
        alert("Failed to copy text:");
      });
    }
  };


  const copyToClipboard8 = () => {
    const textToCopy = bnbAddRef.current?.innerText
    if(textToCopy){
      navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setcpActie8(true)
        startTimer(setcpActie8)
      })
      .catch((err) => {
        alert("Failed to copy text:");
      });
    }
  };  
  const copyToClipboard9 = () => {
    const textToCopy = bnbPriceRef.current?.innerText
    if(textToCopy){
      navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setcpActie9(true)
        startTimer(setcpActie9)
      })
      .catch((err) => {
        alert("Failed to copy text:");
      });
    }
  };


  const copyToClipboard10 = () => {
    const textToCopy = usdtAddRef.current?.innerText
    if(textToCopy){
      navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setcpActie10(true)
        startTimer(setcpActie10)
      })
      .catch((err) => {
        alert("Failed to copy text:");
      });
    }
  };  
  const copyToClipboard11 = () => {
    const textToCopy = usdtPriceRef.current?.innerText
    if(textToCopy){
      navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setcpActie11(true)
        startTimer(setcpActie11)
      })
      .catch((err) => {
        alert("Failed to copy text:");
      });
    }
  };


  /// 
  // Form Submit
  ///
  function openInSameTab(url: string) {
    window.location.href = url;
  }

  const [Loading, setLoading] = useState(false)
  const [Failure, setFailure] = useState(false)

  useEffect(()=>{
    setLoading(false)
    setFailure(false)
  }, [paymentChoice])
  const navigate = useNavigate()
  const onPaypalSubmit = ( e: any ) =>{
      e.preventDefault()
      setLoading(true)
      setFailure(false)

      const newFormData = new FormData
      newFormData.append('from', 'main site')
      newFormData.append('paymentID', initalPaymentData.paymentid)
      newFormData.append('price', initalPaymentData.price)
      newFormData.append('payerAddress', paypalPayeeAddress)
      newFormData.append('payerName', paypalPayeeName)
      newFormData.append('payerEmail', paypalPayeeEmail)
      newFormData.append('image', GfImage)
      newFormData.append('paymentMethod', 'paypal')
      const url = process.env.REACT_APP_PAYPAL_PAYMENT || ''
      axios.post(url, newFormData, {
        onUploadProgress: (ProgressEvent)=>{  }
      })
      .then(response => {
        if(response.data.success == false){
            setLoading(false)
            setFailure(true)
        }else{
            setLoading(false)
            setFailure(false)

            const newURL = "https://stargamingstore.shop/success-payment";
            openInSameTab(newURL);
        }
      })
      .catch(error => {
          setLoading(false)
          setFailure(true)
      });
  }

  const [cashappPayeeName, setCashappPayeeName] = useState(initalPaymentData.name)
  const [cashappPayeeEmail, setCashappPayeeEmail] = useState(initalPaymentData.email)
  const [cashappPayeeAddress, setCashappPayeeAddress] = useState('')
  const [GfImage2, setGfImage2] = useState<any>(null)
  const onCashappSubmit = ( e: any ) =>{
      e.preventDefault()
      setLoading(true)
      setFailure(false)

      const newFormData = new FormData
      newFormData.append('from', 'main site')
      newFormData.append('paymentID', initalPaymentData.paymentid)
      newFormData.append('price', initalPaymentData.price)
      newFormData.append('payerAddress', cashappPayeeAddress)
      newFormData.append('payerName', cashappPayeeName)
      newFormData.append('payerEmail', cashappPayeeEmail)
      newFormData.append('image', GfImage2)
      newFormData.append('paymentMethod', 'cashapp')
      const url = process.env.REACT_APP_PAYPAL_PAYMENT || ''
      axios.post(url, newFormData, {
        onUploadProgress: (ProgressEvent)=>{  }
      })
      .then(response => {
        if(response.data.success == false){
            setLoading(false)
            setFailure(true)
          }else{
            setLoading(false)
            setFailure(false)

            const newURL = "https://stargamingstore.shop/success-payment";
            openInSameTab(newURL);
        }
      })
      .catch(error => {
          setLoading(false)
          setFailure(true)
      });
  }


  const [skrillPayeeName, setSkrillPayeeName] = useState(initalPaymentData.name)
  const [skrillPayeeEmail, setSkrillPayeeEmail] = useState(initalPaymentData.email)
  const [skrillPayeeAddress, setSkrillPayeeAddress] = useState('')
  const [GfImage3, setGfImage3] = useState<any>(null)
  const onSkrillSubmit = ( e: any ) =>{
      e.preventDefault()
      setLoading(true)
      setFailure(false)

      const newFormData = new FormData
      newFormData.append('from', 'main site')
      newFormData.append('paymentID', initalPaymentData.paymentid)
      newFormData.append('price', initalPaymentData.price)
      newFormData.append('payerAddress', skrillPayeeAddress)
      newFormData.append('payerName', skrillPayeeName)
      newFormData.append('payerEmail', skrillPayeeEmail)
      newFormData.append('image', GfImage3)
      newFormData.append('paymentMethod', 'skrill')
      const url = process.env.REACT_APP_PAYPAL_PAYMENT || ''
      axios.post(url, newFormData, {
        onUploadProgress: (ProgressEvent)=>{  }
      })
      .then(response => {
        if(response.data.success == false){
            setLoading(false)
            setFailure(true)
          }else{
            setLoading(false)
            setFailure(false)

            const newURL = "https://stargamingstore.shop/success-payment";
            openInSameTab(newURL);
        }
      })
      .catch(error => {
          setLoading(false)
          setFailure(true)
      });
  }


  const [gcPayeeName, setGcPayeeName] = useState(initalPaymentData.name)
  const [gcPayeeEmail, setGcPayeeEmail] = useState(initalPaymentData.email)
  const [gcVendor, setGcVendor] = useState('')
  const [gcToken, setGcToken] = useState('')
  const [GfImage4, setGfImage4] = useState<any>(null)
  const onGcSubmit = ( e: any ) =>{
      e.preventDefault()
      setLoading(true)
      setFailure(false)

      const newFormData = new FormData
      newFormData.append('from', 'main site')
      newFormData.append('paymentID', initalPaymentData.paymentid)
      newFormData.append('price', initalPaymentData.price)
      newFormData.append('payerName', gcPayeeName)
      newFormData.append('payerEmail', gcPayeeEmail)
      newFormData.append('vendor', gcVendor)
      newFormData.append('token', gcToken)
      newFormData.append('image', GfImage4)
      newFormData.append('paymentMethod', 'gift card')
      const url = process.env.REACT_APP_GIFT_CARD || ''
      axios.post(url, newFormData, {
        onUploadProgress: (ProgressEvent)=>{  }
      })
      .then(response => {
        if(response.data.success == false){
            setLoading(false)
            setFailure(true)
        }else{
            setLoading(false)
            setFailure(false)
            
            const newURL = "https://stargamingstore.shop/success-payment";
            openInSameTab(newURL);
        }
      })
      .catch(error => {
          setLoading(false)
          setFailure(true)
      });
  }


  const [cryptoPayeeName, setCryptoPayeeName] = useState(initalPaymentData.name)
  const [cryptoPayeeEmail, setCryptoPayeeEmail] = useState(initalPaymentData.email)
  const [cryptoPayeeAddress, setCryptoPayeeAddress] = useState('')
  const onCryptoSubmit = ( e: any ) =>{
      e.preventDefault()
      setLoading(true)
      setFailure(false)

      const newFormData = {
        from: "main site",
        paymentid: initalPaymentData.paymentid,
        price: initalPaymentData.price.toString(),
        payeraddress: cryptoPayeeAddress,
        cryptocurrency: cryptoCurrencySelect,
        payername: cryptoPayeeName,
        payeremail: cryptoPayeeEmail,
      }
      const url = process.env.REACT_APP_CRYPTO_CURRENCY || ''
      axios.post(url, newFormData)
      .then(response => {
        if(response.data.success == false){
            setLoading(false)
            setFailure(true)
        }else{
            setLoading(false)
            setFailure(false)
            
            const newURL = "https://stargamingstore.shop/success-payment";
            openInSameTab(newURL);
        }
      })
      .catch(error => {
          setLoading(false)
          setFailure(true)
      });
  }
  


  function convertPrice(price: number, rate: number) {
    // Perform the conversion based on the desired operation
    const convertedPrice = price / rate;
  
    // Return the converted price
    return convertedPrice.toFixed(8);
  }


  const handleCancel = () =>{
    const newURL = "https://www.stargamingstore.shop/market-place";
    openInSameTab(newURL);
  }

  function generateRandomDigits(min = 100000, max = 999999) {
    // Generate a random number between min (inclusive) and max (exclusive)
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  
    // Convert the random number to a string and pad it with leading zeros if necessary
    return randomNum.toString().padStart(6, '0');
  }


  return (
    <div>
        <main className={classes.innerMain}>

          <Grid container style={{justifyContent: 'space-between'}} className='cardSidesHolder'>
              <Grid item xs={12} md={7} style={{borderRight: '1px solid hsl(0, 0%, 87%)', justifyContent: 'flex-end'}}>

                 <section className={classes.module}>

                    {/* <header className={classes.header}>Complete Payment</header> */}

                    <section className={classes.mainSection}>
                      {/* <p className={classes.mainSectionP}>We'll provide your receipt. Please confirm the email address. Do you want to receive recipt on a diffrent email <a href=''>click here</a></p> */}
                    
                    
                      <section className={classes.mainSectionSection}>
                        <Grid container>
                          {/* <Grid xs={12} sm={4} item>
                            <h2 className={classes.mainSectionh2}>Checkout Information:</h2>
                          </Grid> */}
                          <Grid xs={12} sm={8} item className={classes.rpSm21}>
                            <Grid container>
                                <Grid xs={12} md={9} item className={classes.mainSectionP}>

                                  {/* <div style={{display: 'flex', marginBottom: '0.4rem'}}>
                                    <span style={{width: '40%'}}>Payment ID:  </span>
                                    <span style={{fontWeight: 'bold'}}>{initalPaymentData.paymentid}</span>
                                  </div> */}
                                  <div style={{display: 'flex', marginBottom: '0.4rem'}}>
                                    <span style={{width: '40%'}}>Email:  </span>
                                    <span style={{fontWeight: 'bold'}}>{initalPaymentData.email}</span>
                                  </div>
                                  <div style={{display: 'flex', marginBottom: '0.4rem'}}>
                                    <span style={{width: '40%'}}>Phone:  </span>
                                    <span style={{fontWeight: 'bold'}}>{initalPaymentData.name}</span>
                                  </div>
                                  {/* <div style={{display: 'flex', marginBottom: '0.4rem'}}>
                                    <span style={{width: '40%'}}>Country:  </span>
                                    <span style={{fontWeight: 'bold'}}>{initalPaymentData.country}</span>
                                  </div> */}
                                  
                                  {/* <div style={{display: 'flex', marginBottom: '0.4rem'}}>
                                    <span style={{width: '40%'}}>Session Code:  </span>
                                    <span style={{fontWeight: 'bold'}}>#{generateRandomDigits()}</span>
                                  </div> */}
                                </Grid>
                                
                            </Grid>
                          </Grid>


                          <a href="https://www.paypal.com" className="paypal-button">
                              <img src="https://www.paypalobjects.com/webstatic/icon/pp258.png" alt="PayPal Logo" className="paypal-logo" />
                              Pay with PayPal
                          </a>
                          <a href="https://www.example.com/crypto-payment" className="crypto-button">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Crypto Logo" className="crypto-logo" />
                              Pay with Crypto
                          </a>
                          <a href="#" className="bank-transfer-button">
                              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Bank_icon.svg" alt="Bank Logo" className="bank-logo" />
                              Transfer via Bank
                          </a>


                            {/* <h2 className={classes.mainSectionh2} style={{display: 'block', width: '100%', margin: '1rem 0'}}>Payment Method</h2>

                            <div style={{width: '100%'}}>
                              <select id="payment-method-select" className={classes.selectField} onChange={(e)=> setPaymentChoice(e.currentTarget.value)}>
                                <option value="paypal">paypal</option>
                                <option value="cashapp">cashapp</option>
                                <option value="skrill">skrill</option>
                                <option value="gift card">gift card</option>
                                <option value="crypto currency">crypto currency</option>
                              </select>
                            </div> */}

                            {
                              paymentChoice === 'paypal'
                              ?
                                <section className={classes.mainSectionSection}>
                                  <p className={classes.mainSectionP}>We welcome your paypal payment! Please note, we cannot accept payments sent as <span style={{fontWeight: 'bold'}}>"Goods or Services"</span>. Please use the <span style={{fontWeight: 'bold'}}>"Friends and Family"</span> option and enter the sender paypal address below for verification.</p>
                                  
                                  <div className={classes.mainSectionSection}>
                                    <div>
                                      <Grid container>
                                        <Grid xs={12} sm={3} item>
                                          <h4 className={classes.mainSectionh2}>Paypal Payment: </h4>
                                        </Grid>
                                        <Grid xs={12} sm={8} item className={classes.mainSectionP}>
                                          <div style={{margin: '1.8rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Paypal Address:</label><br />
                                            <div className={classes.selectField2TextHolder}>
                                              <span ref={paypalRef} className={classes.selectField2Text}>Stargamingstore15@gmail.com</span>
                                              
                                              {
                                                cpActive
                                                ?
                                                <div><DoneAllIcon style={{ color:'green' }}  /></div>
                                                :
                                                <div onClick={copyToClipboard} style={{cursor: 'pointer'}}><ContentCopyIcon /></div>
                                              }  
                                            
                                            
                                            </div>
                                          </div>

                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Enter Sender's Name:</label><br />
                                            <input type="text" value={paypalPayeeName} className={classes.selectField2} onChange={(e)=> setPaypalPayeeName(e.currentTarget.value)} required/>
                                          </div>
                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Email (Payment receipt will be sent to this email address):</label><br />
                                            <input type="text" value={paypalPayeeEmail} className={classes.selectField2} onChange={(e)=> setPaypalPayeeEmail(e.currentTarget.value)} required/>
                                          </div>
                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Enter Sender's Paypal Address:</label><br />
                                            <input type="text" value={paypalPayeeAddress} className={classes.selectField2} onChange={(e)=> setPaypalPayeeAddress(e.currentTarget.value)} required/>
                                          </div>
                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Paypal Payment Receipt:</label><br />
                                            <input type='file' name="attachment" multiple accept=".pdf,.jpeg,.jpg,.png" onChange={(e)=>setGfImage(e.currentTarget.files ? e.currentTarget?.files[0] : null)} className={classes.selectField2File} required/>
                                          </div>

                                          <div onClick={onPaypalSubmit}>
                                            <a aria-disabled={Loading} href="#" className={classes.cancelBtn} style={{width: '70%', opacity: `${Loading ? '3' : '10'}`, display: 'flex', justifyContent: 'center'}}>
                                              {
                                                  Loading
                                                  ?
                                                      <Oval
                                                          visible={true}
                                                          height="20"
                                                          width="20"
                                                          color="#fff"
                                                          ariaLabel="oval-loading"
                                                          wrapperStyle={{}}
                                                          wrapperClass=""
                                                      />
                                                  :
                                                  <>
                                                      Submit
                                                  </>
                                                  
                                              }
                                            </a>
                                              {Failure ? <span style={{color: 'red', fontSize: '0.773rem'}}>Oops! Something went wrong. Please try again after some seconds</span> : null}
                                          </div>
                                        </Grid>
                                      </Grid>
                                    </div>
                                  </div>
                                </section>
                              :
                              paymentChoice === 'cashapp'
                              ?
                                <section className={classes.mainSectionSection}>
                                  <p className={classes.mainSectionP}>Cash App transactions won't be confirmed as successful until they are fully processed and completed</p>

                                  <div className={classes.mainSectionSection}>
                                    <div>
                                      <Grid container>
                                        <Grid xs={12} sm={3} item>
                                          <h4 className={classes.mainSectionh2}>Cashapp Payment: </h4>
                                        </Grid>
                                        <Grid xs={12} sm={8} item className={classes.mainSectionP}>
                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Cashapp Address:</label><br />
                                            <div className={classes.selectField2TextHolder}>
                                              <span ref={cashappRef} className={classes.selectField2Text}>$CRMango</span>
                                              
                                              {
                                                cpActive2
                                                ?
                                                <div><DoneAllIcon style={{ color:'green' }}  /></div>
                                                :
                                                <div onClick={copyToClipboard2} style={{cursor: 'pointer'}}><ContentCopyIcon /></div>
                                              }  
                                            
                                            
                                            </div>
                                          </div>

                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Enter Sender's Name:</label><br />
                                            <input type="text" value={cashappPayeeName} className={classes.selectField2} onChange={(e)=> setCashappPayeeName(e.currentTarget.value)}/>
                                          </div>
                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Email (Payment receipt will be sent to this email address):</label><br />
                                            <input type="text" value={cashappPayeeEmail} className={classes.selectField2} onChange={(e)=> setCashappPayeeEmail(e.currentTarget.value)}/>
                                          </div>
                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Enter Sender's Cashapp Address:</label><br />
                                            <input type="text" value={cashappPayeeAddress} className={classes.selectField2} onChange={(e)=> setCashappPayeeAddress(e.currentTarget.value)}/>
                                          </div>
                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Cashapp Payment Receipt:</label><br />
                                            <input type='file' name="attachment" multiple accept=".pdf,.jpeg,.jpg,.png" onChange={(e)=>setGfImage2(e.currentTarget.files ? e.currentTarget?.files[0] : null)} className={classes.selectField2File}/>
                                          </div>

                                          <div onClick={onCashappSubmit}>
                                            <a aria-disabled={Loading} href="#" className={classes.cancelBtn} style={{width: '70%', opacity: `${Loading ? '3' : '10'}`, display: 'flex', justifyContent: 'center'}}>
                                                {
                                                    Loading
                                                    ?
                                                        <Oval
                                                            visible={true}
                                                            height="20"
                                                            width="20"
                                                            color="#fff"
                                                            ariaLabel="oval-loading"
                                                            wrapperStyle={{}}
                                                            wrapperClass=""
                                                        />
                                                    :
                                                    <>
                                                        Submit
                                                    </>
                                                    
                                                }
                                              </a>
                                              {Failure ? <span style={{color: 'red', fontSize: '0.773rem'}}>Oops! Something went wrong. Please try again after some seconds</span> : null}
                                          </div>
                                        </Grid>
                                      </Grid>
                                    </div>
                                  </div>
                                </section>
                              :
                              paymentChoice === 'skrill'
                              ?
                                <section className={classes.mainSectionSection}>

                                  <div className={classes.mainSectionSection}>
                                    <div>
                                      <Grid container>
                                        <Grid xs={12} sm={3} item>
                                          <h4 className={classes.mainSectionh2}>Skrill Payment: </h4>
                                        </Grid>
                                        <Grid xs={12} sm={8} item className={classes.mainSectionP}>
                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Skrill Address:</label><br />
                                            <div className={classes.selectField2TextHolder}>
                                              <span ref={skrillRef} className={classes.selectField2Text}>aprymakowska@live.co.uk</span>
                                              
                                              {
                                                cpActive3
                                                ?
                                                <div><DoneAllIcon style={{ color:'green' }}  /></div>
                                                :
                                                <div onClick={copyToClipboard3} style={{cursor: 'pointer'}}><ContentCopyIcon /></div>
                                              }  
                                            
                                            
                                            </div>
                                          </div>

                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Enter Sender's Name:</label><br />
                                            <input type="text" value={skrillPayeeName} className={classes.selectField2} onChange={(e)=> setSkrillPayeeName(e.currentTarget.value)}/>
                                          </div>
                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Email (Payment receipt will be sent to this email address):</label><br />
                                            <input type="text" value={skrillPayeeEmail} className={classes.selectField2} onChange={(e)=> setSkrillPayeeEmail(e.currentTarget.value)}/>
                                          </div>
                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Enter Sender's Skrill Address:</label><br />
                                            <input type="text" value={skrillPayeeAddress} className={classes.selectField2} onChange={(e)=> setSkrillPayeeAddress(e.currentTarget.value)}/>
                                          </div>
                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Skrill Payment Receipt:</label><br />
                                            <input type='file' name="attachment" multiple accept=".pdf,.jpeg,.jpg,.png" onChange={(e)=>setGfImage3(e.currentTarget.files ? e.currentTarget?.files[0] : null)} className={classes.selectField2File}/>
                                          </div>

                                          <div onClick={onSkrillSubmit}>
                                            <a aria-disabled={Loading} href="#" className={classes.cancelBtn} style={{width: '70%', opacity: `${Loading ? '3' : '10'}`, display: 'flex', justifyContent: 'center'}}>
                                                {
                                                    Loading
                                                    ?
                                                        <Oval
                                                            visible={true}
                                                            height="20"
                                                            width="20"
                                                            color="#fff"
                                                            ariaLabel="oval-loading"
                                                            wrapperStyle={{}}
                                                            wrapperClass=""
                                                        />
                                                    :
                                                    <>
                                                        Submit
                                                    </>
                                                    
                                                }
                                              </a>
                                              {Failure ? <span style={{color: 'red', fontSize: '0.773rem'}}>Oops! Something went wrong. Please try again after some seconds</span> : null}
                                          </div>
                                        </Grid>
                                      </Grid>
                                    </div>
                                  </div>
                                </section>
                              :
                              paymentChoice === 'gift card'
                              ?
                                <section className={classes.mainSectionSection}>
                                  <p className={classes.mainSectionP}>To complete payment, purchase a gift card from a trusted retailer for the amount due. Once you've purchased it, send us the gift card details to verify payment.</p>

                                  <div className={classes.mainSectionSection}>
                                    <div>
                                      <Grid container>
                                        <Grid xs={12} sm={3} item>
                                          <h4 className={classes.mainSectionh2}>Gift Card Payment: </h4>
                                        </Grid>
                                        <Grid xs={12} sm={8} item className={classes.mainSectionP}>

                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Enter Sender's Name:</label><br />
                                            <input type="text" value={gcPayeeName} className={classes.selectField2} onChange={(e)=> setGcPayeeName(e.currentTarget.value)}/>
                                          </div>
                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Email (Payment receipt will be sent to this email address):</label><br />
                                            <input type="text" value={gcPayeeEmail} className={classes.selectField2} onChange={(e)=> setGcPayeeEmail(e.currentTarget.value)}/>
                                          </div>
                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Enter Gift card Vendor:</label><br />
                                            <input type="text" placeholder='Amazon, Target, Sephora' value={gcVendor} className={classes.selectField2} onChange={(e)=> setGcVendor(e.currentTarget.value)}/>
                                          </div>
                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Enter Gift card Token:</label><br />
                                            <input type="text" value={gcToken} className={classes.selectField2} onChange={(e)=> setGcToken(e.currentTarget.value)}/>
                                          </div>
                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Upload an image of your Gift card:</label><br />
                                            <input type='file' name="attachment" multiple accept=".pdf,.jpeg,.jpg,.png" onChange={(e)=>setGfImage4(e.currentTarget.files ? e.currentTarget?.files[0] : null)} className={classes.selectField2File}/>
                                          </div>

                                          <div onClick={onGcSubmit}>
                                            <a aria-disabled={Loading} href="#" className={classes.cancelBtn} style={{width: '70%', opacity: `${Loading ? '3' : '10'}`, display: 'flex', justifyContent: 'center'}}>
                                                {
                                                    Loading
                                                    ?
                                                        <Oval
                                                            visible={true}
                                                            height="20"
                                                            width="20"
                                                            color="#fff"
                                                            ariaLabel="oval-loading"
                                                            wrapperStyle={{}}
                                                            wrapperClass=""
                                                        />
                                                    :
                                                    <>
                                                        Submit
                                                    </>
                                                    
                                                }
                                              </a>
                                              {Failure ? <span style={{color: 'red', fontSize: '0.773rem'}}>Oops! Something went wrong. Please try again after some seconds</span> : null}
                                          </div>
                                        </Grid>
                                      </Grid>
                                    </div>
                                  </div>
                                </section>
                              :
                              paymentChoice === 'crypto currency'
                              ?
                                <section className={classes.mainSectionSection}>

                                    <p className={classes.mainSectionP}>Select a crypto currency to procedee.</p>

                                    <Grid container style={{marginBottom: '1.5rem'}}>
                                      <Grid item xs={12} sm={3}>
                                        <h2 className={classes.mainSectionh2Small}>Crypto Currency:</h2>
                                      </Grid>
                                      <Grid item xs={12} sm={9}>
                                        <div style={{width: '100%'}}>
                                          <select id="crypto-currency-select" className={classes.selectField} onChange={(e)=> setCryptoCurrencySelect(e.currentTarget.value)}>
                                            <option value="bitcoin">Bitcoin (btc)</option>
                                            <option value="ethereum">Ethereum (eth)</option>
                                            <option value="bnb">BNB (bnb)</option>
                                            <option value="usdt">USDT (usdt)</option>
                                          </select>
                                        </div>
                                      </Grid>
                                    </Grid>


                                    {
                                      cryptoCurrencySelect === 'bitcoin'
                                      ?
                                        <div>
                                          <div style={{width: '100%', textAlign: 'center', padding: "2rem 0", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

                                            <div className={classes.cryptocurrencyaddressholder}>

                                              <span className={classes.cryptocurrencyaddressholdertitle}>Bitcoin wallet address:</span>

                                              <div style={{display: 'flex'}}>
                                                <div><h2 ref={bitcoinAddRef} className={classes.selectField2Text2}>bc1qtnyank53k08pg8rh38cgw8wjr80a62rqgv3hxj</h2></div>

                                                {
                                                  cpActive4
                                                  ?
                                                  <div><DoneAllIcon style={{ color:'green' }}  /></div>
                                                  :
                                                  <div onClick={copyToClipboard4} style={{cursor: 'pointer'}}><ContentCopyIcon /></div>
                                                } 
                                              </div>


                                            </div>

                                            <div className={classes.cryptocurrencyaddressholder}>

                                              <span className={classes.cryptocurrencyaddressholdertitle}>Equivalent <span style={{fontWeight: 'bold'}}>Bitcoin</span> amount for wire transfer:</span>

                                              <div style={{display: 'flex'}}>
                                                <div><h2 style={{color: "#333", marginRight: '0.3rem'}} ref={bitcoinPriceRef}>{convertPrice(initalPaymentData.price ,cryptoRates.bitcoin)}</h2></div>
                                                
                                                {
                                                  cpActive5
                                                  ?
                                                  <div><DoneAllIcon style={{ color:'green' }}  /></div>
                                                  :
                                                  <div onClick={copyToClipboard5} style={{cursor: 'pointer'}}><ContentCopyIcon /></div>
                                                } 
                                              </div>


                                            </div>

                                          </div>

                                          <p className={classes.mainSectionP}>Submit your crypto address, then process to wire the required amount. Transter should be completed within 20 minutes of submission to make checkout faster.</p>

                                        </div>
                                      :
                                      cryptoCurrencySelect === 'ethereum'
                                      ?
                                        <div>
                                          <div style={{width: '100%', textAlign: 'center', padding: "2rem 0", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

                                            <div className={classes.cryptocurrencyaddressholder}>

                                              <span className={classes.cryptocurrencyaddressholdertitle}>Ethereum wallet address:</span>

                                              <div style={{display: 'flex'}}>
                                                <div><h2 ref={ethAddRef} className={classes.selectField2Text2}>0xd8C1E9B01A7aAc1d8fE4d08b6D22cC9eb43C3dAA</h2></div>

                                                {
                                                  cpActive6
                                                  ?
                                                  <div><DoneAllIcon style={{ color:'green' }}  /></div>
                                                  :
                                                  <div onClick={copyToClipboard6} style={{cursor: 'pointer'}}><ContentCopyIcon /></div>
                                                } 
                                              </div>


                                            </div>

                                            <div className={classes.cryptocurrencyaddressholder}>

                                              <span className={classes.cryptocurrencyaddressholdertitle}>Equivalent <span style={{fontWeight: 'bold'}}>Ethereum</span> amount for wire transfer:</span>

                                              <div style={{display: 'flex'}}>
                                                <div><h2 style={{color: "#333", marginRight: '0.3rem'}} ref={ethPriceRef}>{convertPrice(initalPaymentData.price ,cryptoRates.ethereum)}</h2></div>
                                                
                                                {
                                                  cpActive7
                                                  ?
                                                  <div><DoneAllIcon style={{ color:'green' }}  /></div>
                                                  :
                                                  <div onClick={copyToClipboard7} style={{cursor: 'pointer'}}><ContentCopyIcon /></div>
                                                } 
                                              </div>


                                            </div>

                                          </div>

                                          <p className={classes.mainSectionP}>Submit your crypto address, then process to wire the required amount. Transter should be completed within 20 minutes of submission to make checkout faster.</p>

                                        </div>
                                      :
                                      cryptoCurrencySelect === 'bnb'
                                      ?
                                        <div>
                                          <div style={{width: '100%', textAlign: 'center', padding: "2rem 0", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

                                            <div className={classes.cryptocurrencyaddressholder}>

                                              <span className={classes.cryptocurrencyaddressholdertitle}>BNB wallet address:</span>

                                              <div style={{display: 'flex'}}>
                                                <div><h2 ref={bnbAddRef} className={classes.selectField2Text2}>0xd8C1E9B01A7aAc1d8fE4d08b6D22cC9eb43C3dAA</h2></div>

                                                {
                                                  cpActive8
                                                  ?
                                                  <div><DoneAllIcon style={{ color:'green' }}  /></div>
                                                  :
                                                  <div onClick={copyToClipboard8} style={{cursor: 'pointer'}}><ContentCopyIcon /></div>
                                                } 
                                              </div>


                                            </div>

                                            <div className={classes.cryptocurrencyaddressholder}>

                                              <span className={classes.cryptocurrencyaddressholdertitle}>Equivalent <span style={{fontWeight: 'bold'}}>BNB</span> amount for wire transfer:</span>

                                              <div style={{display: 'flex'}}>
                                                <div><h2 style={{color: "#333", marginRight: '0.3rem'}} ref={bnbPriceRef}>{convertPrice(initalPaymentData.price ,cryptoRates.bnb)}</h2></div>
                                                
                                                {
                                                  cpActive9
                                                  ?
                                                  <div><DoneAllIcon style={{ color:'green' }}  /></div>
                                                  :
                                                  <div onClick={copyToClipboard9} style={{cursor: 'pointer'}}><ContentCopyIcon /></div>
                                                } 
                                              </div>


                                            </div>

                                          </div>

                                          <p className={classes.mainSectionP}>Submit your crypto address, then process to wire the required amount. Transter should be completed within 20 minutes of submission to make checkout faster.</p>

                                        </div>
                                      :
                                      cryptoCurrencySelect === 'usdt'
                                      ?
                                        <div>
                                          <div style={{width: '100%', textAlign: 'center', padding: "2rem 0", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

                                            <div className={classes.cryptocurrencyaddressholder}>

                                              <span className={classes.cryptocurrencyaddressholdertitle}>USDT wallet address:</span>

                                              <div style={{display: 'flex'}}>
                                                <div><h2 ref={usdtAddRef} style={{color: "#333", marginRight: '0.3rem'}}>TDCuWTqqDc56VFYXG22aZ2qV7AWS9HSyGb</h2></div>

                                                {
                                                  cpActive10
                                                  ?
                                                  <div><DoneAllIcon style={{ color:'green' }}  /></div>
                                                  :
                                                  <div onClick={copyToClipboard10} style={{cursor: 'pointer'}}><ContentCopyIcon /></div>
                                                } 
                                              </div>


                                            </div>

                                            <div className={classes.cryptocurrencyaddressholder}>

                                              <span className={classes.cryptocurrencyaddressholdertitle}>Equivalent <span style={{fontWeight: 'bold'}}>USDT</span> amount for wire transfer:</span>

                                              <div style={{display: 'flex'}}>
                                                <div><h2 style={{color: "#333", marginRight: '0.3rem'}} ref={usdtPriceRef}>{convertPrice(initalPaymentData.price ,cryptoRates.usdt)}</h2></div>
                                                
                                                {
                                                  cpActive11
                                                  ?
                                                  <div><DoneAllIcon style={{ color:'green' }}  /></div>
                                                  :
                                                  <div onClick={copyToClipboard11} style={{cursor: 'pointer'}}><ContentCopyIcon /></div>
                                                } 
                                              </div>


                                            </div>

                                          </div>

                                          <p className={classes.mainSectionP}>Submit your crypto address, then process to wire the required amount. Transter should be completed within 20 minutes of submission to make checkout faster.</p>

                                        </div>
                                      :
                                      null
                                    }
                                      <Grid container>
                                        <Grid item xs={12} md={8}>
                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Enter Sender's Name:</label><br />
                                            <input type="text" value={cryptoPayeeName} className={classes.selectField2} onChange={(e)=> setCryptoPayeeName(e.currentTarget.value)}/>
                                          </div>
                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Email (Payment receipt will be sent to this email address):</label><br />
                                            <input type="text" value={cryptoPayeeEmail} className={classes.selectField2} onChange={(e)=> setCryptoPayeeEmail(e.currentTarget.value)}/>
                                          </div>
                                          <div style={{margin: '1.4rem 0'}}>
                                            <label htmlFor="" style={{fontWeight: 'bold'}}>Enter Sender's Wallet Address:</label><br />
                                            <input type="text" value={cryptoPayeeAddress} className={classes.selectField2} onChange={(e)=> setCryptoPayeeAddress(e.currentTarget.value)}/>
                                          </div>

                                          <div onClick={onCryptoSubmit}>
                                            <a aria-disabled={Loading} href="#" className={classes.cancelBtn} style={{width: '70%', opacity: `${Loading ? '3' : '10'}`, display: 'flex', justifyContent: 'center'}}>
                                                {
                                                    Loading
                                                    ?
                                                        <Oval
                                                            visible={true}
                                                            height="20"
                                                            width="20"
                                                            color="#fff"
                                                            ariaLabel="oval-loading"
                                                            wrapperStyle={{}}
                                                            wrapperClass=""
                                                        />
                                                    :
                                                    <>
                                                        Submit
                                                    </>
                                                    
                                                }
                                              </a>
                                              {Failure ? <span style={{color: 'red', fontSize: '0.773rem'}}>Oops! Something went wrong. Please try again after some seconds</span> : null}
                                          </div>
                                        </Grid>
                                      </Grid>



                                </section>
                              :
                              null
                            }
                        </Grid>
                      </section>




                    </section>

                 </section>

              </Grid>

              <Grid item xs={12} md={5}>
                  <section className={classes.module} style={{backgroundColor: 'hsl(0, 0%, 96%)'}}>
                    {/* <header className={classes.header}>Your Cart</header> */}

                    <div className={classes.mainSection2}>

                            <article style={{borderBottom: '1px solid #d6d6d6', padding: '1.125em 0 1.125em 0',}}>
                                <div>
                                  <span className={classes.mainSection2MainChar}>{initalPaymentData.servicetitle}</span>
                                  <span></span>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

                                  {
                                    !initalPaymentData.bills 
                                    ?
                                    <span className={classes.mainSection2SubChar}>{initalPaymentData.packagename} - ${initalPaymentData.price}</span>
                                    :
                                    <span className={classes.mainSection2SubChar}>{initalPaymentData.bills[billIndex].paymentfor} - ${initalPaymentData.bills[billIndex].price}</span>
                                  }
                                  {/* {
                                    !initalPaymentData.bills 
                                    ?
                                    <span className={classes.mainSection2PriceChar2}></span>
                                    :
                                    <span className={classes.mainSection2PriceChar2}></span>
                                  } */}
                                  
                                  

                                </div>
                            </article>


                      <article style={{borderBottom: '1px solid #d6d6d6', padding: '1.325em 0 1.325em 0',}}>

                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                          <span className={classes.mainSection2PriceChar}>Subtotal</span>
                          {
                            !initalPaymentData.bills 
                            ?
                            <span className={classes.mainSection2PriceChar}>${initalPaymentData.price}</span>
                            :
                            <span className={classes.mainSection2PriceChar}>${initalPaymentData.bills[billIndex].price}</span>
                          }
                          
                        </div>

                      </article>

                    </div>


                    <div className={classes.cancelBtnHolder} onClick={handleCancel}>
                      <a href="#" className={classes.cancelBtn}>Cancel Purchase</a>
                    </div>
                  </section>
              </Grid>
          </Grid>

        </main>
    </div>
  )
}

export default CheckoutContainer