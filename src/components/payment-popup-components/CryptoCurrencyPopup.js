import React, { useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";
import { FaRegCopy } from "react-icons/fa6";
import { FaRegCheckSquare } from "react-icons/fa";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { RotatingLines } from "react-loader-spinner";
import { FaAngleDown } from "react-icons/fa6";

export default function CryptoCurrencyPopup( { PaymentId, Price } ){

    const btcRef = useRef(null)
    const etRef = useRef(null)
    const bnbRef = useRef(null)
    const usdtRef = useRef(null)
    const [cpActive, setcpActie] = useState(false)
    const [cpActiveEt, setcpActieEt] = useState(false)
    const [cpActiveBnb, setcpActieBnb] = useState(false)
    const [cpActiveUsdt, setcpActieUsdt] = useState(false)
  
    function startTimer(stateFunction) {
      setTimeout(() => {
        stateFunction(false)
      }, 2500);
    }
    const copyToClipboard = () => {
      btcRef.current.select();
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
  
      setcpActie(true)
      startTimer(setcpActie)    
    };
    const copyToClipboardEt = () => {
      etRef.current.select();
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
  
      setcpActieEt(true)
      startTimer(setcpActieEt)    
    };
    const copyToClipboardBnb = () => {
      bnbRef.current.select();
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
  
      setcpActieBnb(true)
      startTimer(setcpActieBnb)    
    };
    const copyToClipboardUsdt = () => {
      usdtRef.current.select();
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
  
      setcpActieUsdt(true)
      startTimer(setcpActieUsdt)    
    };






    const [payerAddress, setPayerAddress] = useState('')
    const [cryptoCurrency, setCryptoCurrency] = useState('')
    const navigate = useNavigate()
      const [GfImage, setGfImage] = useState(null)
  
      const [Loading, setLoading] = useState(false)
      const [Failure, setFailure] = useState(false)
      const onCryptoSubmit = ( e ) =>{
          e.preventDefault()
          setLoading(true)
          setFailure(false)
  
          const newFormData = {
            paymentid: PaymentId,
            price: Price,
            payeraddress: payerAddress,
            cryptocurrency: cryptoCurrency,
          }
          axios.post(process.env.REACT_APP_CRYPTO_CURRENCY_ENDPOINT, newFormData)
          .then(response => {
            if(response.data.success == false){
                setLoading(false)
                setFailure(true)
            }else{
                setLoading(false)
                setFailure(false)
                navigate(`/success-payment`)
            }
          })
          .catch(error => {
              setLoading(false)
              setFailure(true)
          });
        }




    return (
        <section>
            <form onSubmit={onCryptoSubmit}>

                <div className="title">
                    <h3 className="titleh3">Complete Payment</h3>
                </div>
                <div style={{marginBottom: '2.7rem'}}>
                    <p className="paragraph">You will reveice a confirmatory email when your payment is confirmed.</p>
                </div>
            

                <p className="label" style={{width: '100%',textAlign: 'center', marginBottom: '1rem', fontSize: '1rem'}}>Choose a crypto currency for payment</p>
                

                <div>

                <div className="inputHolder">
                    <label className="label">Payment Identification Number</label>
                    <input className="input" name="payment-id" defaultValue={PaymentId} readOnly style={{color:'#666'}}/>
                </div>
                <div className="inputHolder" style={{marginBottom: '2.7rem'}}>
                    <label className="label">Amount To Pay</label>
                    <input className="input" name="price" defaultValue={`${Price}`} readOnly style={{color:'#666'}}/>
                </div>

            
                <div className="inputHolder">
                        <label className="label">BTC wallet address (btc):</label>

                        <Grid container style={{justifyContent: 'space-between', alignItems: 'center'}}>
                            
                            <Grid item xs={10.5}>
                                <input ref={btcRef} className="input" defaultValue='bc1qm56lpkfpr805la989chf77he9rwpckphr7v0xe' readOnly/>
                            </Grid>
                            <Grid item xs={1}>
                                <div className="cpAddButton" style={{width:  '100%', margin: '0', backgroundColor: `${ cpActive ? '#0f8b0a' : '#d7172b' }`}} variant="contained" onClick={()=> copyToClipboard()}>{cpActive ? <FaRegCheckSquare/> : <FaRegCopy/>}</div>
                            </Grid>

                        </Grid>
                </div>

                <div className="inputHolder">
                    <label className="label">Ethereum wallet address (eth):</label>

                    <Grid container style={{justifyContent: 'space-between', alignItems: 'center'}}>
                            
                        <Grid item xs={10.5}>
                        <input ref={etRef} className="input" defaultValue='0x4de0aeA65da98435FCb676b1a9A2F536EeCdF55B' readOnly/>
                        </Grid>
                        <Grid item xs={1}>
                        <div className="cpAddButton" style={{width:  '100%', margin: '0', backgroundColor: `${ cpActiveEt ? '#0f8b0a' : '#d7172b' }`}} variant="contained" onClick={()=> copyToClipboardEt()}>{cpActiveEt ? <FaRegCheckSquare/> : <FaRegCopy/>}</div>
                        </Grid>

                    </Grid>
                </div>

                <div className="inputHolder">
                    <label className="label">BNB wallet address (bnb):</label>

                    <Grid container style={{justifyContent: 'space-between', alignItems: 'center'}}>
                            
                        <Grid item xs={10.5}>
                        <input ref={bnbRef} className="input" defaultValue='0x4de0aeA65da98435FCb676b1a9A2F536EeCdF55B' readOnly/>
                        </Grid>
                        <Grid item xs={1}>
                        <div className="cpAddButton" style={{width:  '100%', margin: '0', backgroundColor: `${ cpActiveBnb ? '#0f8b0a' : '#d7172b' }`}} variant="contained" onClick={()=> copyToClipboardBnb()}>{cpActiveBnb ? <FaRegCheckSquare/> : <FaRegCopy/>}</div>
                        </Grid>

                    </Grid>
                </div>

                <div className="inputHolder" style={{marginBottom: '2.7rem'}}>
                    <label className="label">USDT wallet address (usdt) - Trc20:</label>

                    <Grid container style={{justifyContent: 'space-between', alignItems: 'center'}}>
                            
                        <Grid item xs={10.5}>
                        <input ref={usdtRef} className="input" defaultValue='TFoZ2f7BmctixjuHyKkWSRbo4oAoS5J3dW' readOnly/>
                        </Grid>
                        <Grid item xs={1}>
                        <div className="cpAddButton" style={{width:  '100%', margin: '0', backgroundColor: `${ cpActiveUsdt ? '#0f8b0a' : '#d7172b' }`}} variant="contained" onClick={()=> copyToClipboardUsdt()}>{cpActiveUsdt ? <FaRegCheckSquare/> : <FaRegCopy/>}</div>
                        </Grid>

                    </Grid>
                </div>


                <div className="inputHolder">
                    <label className="label" style={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
                        <span style={{marginRight:'0.2rem'}}>Senders wallet address <span style={{color: '#ff5f70'}}>*</span></span> <span id='live' className="question">?</span>
                        <span className="tooltip">Complete the transaction before sending your wallet address for verification</span>
                    </label>
                    <input className="input" name="sender-wallet-address" required type='text' onChange={(e)=>setPayerAddress(e.currentTarget.value)}/>
                </div>
                <div className="inputHolder">
                    
                    <label className="label">Crypto Currency <span style={{color: '#ff5f70'}}>*</span></label>
                    <div style={{position: 'relative'}}>
                    <div>
                        <FaAngleDown className="selectIcon" />
                    </div>
                    <select id='select-field' name="sender-currency-method" className="input" style={{cursor: 'pointer'}} required value={cryptoCurrency} onChange={(e)=>setCryptoCurrency(e.currentTarget.value)}>
                        <option value='BTC'>BTC</option>
                        <option value='Ethereum'>Ethereum</option>
                        <option value='BNB'>BNB</option>
                        <option value='USDT'>USDT</option>
                    </select>
                    </div>
                </div>

                {/* <input type="hidden" name="_next" value={`${process.env.REACT_APP_DOMAIN_NAME}/success-payment`}></input> */}

                <div >
                    <Button disabled={Loading} className="button" type='submit' variant="contained">Proceed</Button>
                </div>
                { 
                        Loading
                        ?  
                        <RotatingLines
                            visible={true}
                            height="16"
                            width="16"
                            color="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        /> 
                        : Failure ? <span style={{color: '#FF5733', fontStyle: 'italic', fontSize: '0.8rem'}}>An unexpected error has occured. Please try again</span> :  null 
                }
                    
                </div>
            </form>
        </section>
    )
}