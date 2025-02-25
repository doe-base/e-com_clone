import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Button } from '@mui/material'
import { RotatingLines } from 'react-loader-spinner'
import { FaAngleDown } from "react-icons/fa6";


export default function ChangePayment({ PaymentId, Price, address, OGPrice }){
    const [PaymentChoice, setPaymentChoice] = useState('gift card')
    const [FormLoading, setFormLoading] = useState(false)
    const [FormError, setFormError] = useState(false)
    const [Success, setSuccess] = useState(false)
    const [CryptoCurrency, setCryptoCurrency] = useState('Bitcoin')
    const [IsCryptoPayment, setIsCryptoPayment] = useState(false)
    const [CryptoRates, setCryptoRates] = useState({})
    const [DisplayPrice, setDisplayPrice] = useState('')


    const handleChangePayment =(e)=>{
        e.preventDefault()
        setSuccess(false)
        setFormError(false)
        setFormLoading(true)
    
        const data = {
            paymentchoice: PaymentChoice,
            paymentid: PaymentId,
            displayprice: DisplayPrice
        }
    
        axios.post(process.env.REACT_APP_UPDATE_PAYMENT, data)
        .then(response => {
          setFormError(false)
          setFormLoading(false)
          setSuccess(true)
          window.location.reload()
        })
        .catch(error => {
          setSuccess(false)
          setFormLoading(false)
          setFormError(true)
        });
    
    }


    const [cryptoUpdateLoading, setCryptoUpdateLoading] = useState(false)
    const [cryptoUpdateFailed, setCryptoUpdateFailed] = useState(false)
    useEffect(()=>{
        setCryptoUpdateLoading(true)
        setCryptoUpdateFailed(false)
        axios.get(process.env.REACT_APP_CRYPTO_UPDATE)
        .then(function (response) {
            // handle success
            setCryptoRates(response.data[0])
            setCryptoUpdateFailed(false)
            setCryptoUpdateLoading(false)
          })
          .catch(function (error) {
            // handle error
            setCryptoUpdateFailed(true)
            setCryptoUpdateLoading(false)
          })
      }, [IsCryptoPayment])




        function calculatePercent(amountInUSD, exchangeRate) { // Replace with the current exchange rate if needed

            // Error handling for invalid input
            if (isNaN(amountInUSD) || amountInUSD <= 0) {
            return
            }
            // Convert USD to Bitcoin and round to two decimal places
            const bitcoinAmount = (amountInUSD / exchangeRate).toFixed(6)
            var trimmedString = bitcoinAmount.replace(/0+$/, "")
            if (trimmedString[trimmedString.length - 1] === '.') {
                trimmedString += "0";
            }
        
            return trimmedString;
        }
      
        const calculateCrypto=(crypto, price)=>{
            if(!CryptoRates){
                setDisplayPrice('')
            }else{
        
                switch (crypto) {
                    case "Bitcoin":
                        setDisplayPrice(`${calculatePercent(price, CryptoRates.bitcoin)} btc`)
                        break;
                    case "Ethereum":
                        setDisplayPrice(`${calculatePercent(price, CryptoRates.ethereum)} eth`)
                        break;
                    case "BNB":
                        setDisplayPrice(`${calculatePercent(price, CryptoRates.bnb)} bnb`)
                        break;
                    case "USDT":
                        setDisplayPrice(`${calculatePercent(price, CryptoRates.usdt)} usdt`)
                        break;   
                    default:
                        break;
                }
            }
        
        }
    
        useEffect(()=> {
            if(PaymentChoice === 'crypto currency'){
                setIsCryptoPayment(true)
                if(CryptoRates){
                    calculateCrypto(CryptoCurrency, OGPrice)
                }else{
                    setDisplayPrice(`$${OGPrice}`)
                }
            }else{
                setDisplayPrice(`$${OGPrice}`)
                setIsCryptoPayment(false)
            }
        }, [PaymentChoice, OGPrice, CryptoCurrency])


  
    return (
        <section>
            <form onSubmit={handleChangePayment}>
                <div className="title">
                <h3 className="titleh3">Change Payment Method</h3>
                </div>

                <div className="inputHolder">
                    <label className="label">Select A Payment Method <span style={{color: '#ff5f70'}}>*</span></label>
                    <div style={{position: 'relative'}}>
                    <div>
                        <FaAngleDown className="selectIcon" />
                    </div>
                    <select id='select-field' className="input" style={{cursor: 'pointer'}} required onChange={(e)=> setPaymentChoice(e.currentTarget.value)}>
                        <option value="gift card">Gift Card</option>
                        
                        {
                            address.paypal || address.cashapp || address.skrill
                            
                            ?
                            <option value="paypal/cashapp/skrill">Paypal/Cashapp/Skrill</option>
                            :
                            null
                        }
                        <option value="crypto currency">Cryptocurrency</option>
                    </select>
                    </div>
                </div>
                



                {

                    PaymentChoice === 'crypto currency'
                    ?
                    <div className="inputHolder">
                        <label className="label">Select crypto currency <span style={{color: '#ff5f70'}}>*</span></label>
                        <div style={{position: 'relative'}}>
                            <div>
                                <FaAngleDown className="selectIcon" />
                            </div>
                            <select id='select-field' value={CryptoCurrency} className="input" style={{cursor: 'pointer'}} required onChange={(e)=> setCryptoCurrency(e.currentTarget.value)}>
                                <option value="Bitcoin" selected>Bitcoin</option>
                                <option value="Ethereum">Ethereum</option>
                                <option value="BNB">BNB</option>
                                <option value="USDT">USDT</option>
                            </select>
                        </div>
                    </div>
                    :
                    null

                }



                    {
                        !cryptoUpdateFailed && IsCryptoPayment && cryptoUpdateLoading
                        ?
                        <div style={{width: '100%', opacity: '0.75'}}>
                            <Button type='submit' disabled={true} className="button" style={{width:  '100%'}} variant="contained">Send</Button>
                        </div>
                        :
                        <div style={{width: '100%'}}>
                            <Button type='submit' className="button" style={{width:'100%'}} variant="contained">Send</Button>
                        </div>
                    }
                
                    { 
                        FormLoading || !cryptoUpdateFailed && IsCryptoPayment && cryptoUpdateLoading
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
                        :
                        !FormError && cryptoUpdateFailed && IsCryptoPayment
                        ?
                        <span style={{color: 'orange', fontStyle: 'italic', fontSize: '0.8rem'}}>Unable to show current crypto rate</span>
                        :
                        FormError ? <span style={{color: '#FF5733', fontStyle: 'italic', fontSize: '0.8rem'}}>An unexpected error has occured</span> : Success ? <span style={{color: 'green', fontStyle: 'italic', fontSize: '0.8rem'}}>payment method has been updated</span> : null 
                    }
            </form>
        </section>
    )
}