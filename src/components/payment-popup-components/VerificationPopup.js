import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Button } from '@mui/material'
import { RotatingLines } from 'react-loader-spinner'



export default function VerificationPopupOld({ setPageSwitch, setPaymentId, setVerifyTime, paymentIdText, emailText, setPrice }){
    
  
  const [WrongVerificationCode, setWrongVerificationCode] = useState(false)
    const [VerificationCode, setVerificationCode] = useState(0)
    const [VerificationCodeLoading, setVerificationCodeLoading] = useState(false)
    const [VerificationCodeError, setVerificationCodeError] = useState(false)
    

    const handleVerificationSubmit =(e)=>{
        e.preventDefault()
        setVerificationCodeError(false)
        setVerificationCodeLoading(true)
    
        const data = {
            paymentid: paymentIdText,
            code: VerificationCode
        }
    
        axios.post(process.env.REACT_APP_VERIFICATION_ENDPOINT, data)
        .then(response => {
            if(response.data.success == true){
              setPageSwitch(response.data.paymentmethod)
              setPaymentId(response.data.paymentid)
              setPrice(response.data.displayprice)

              // setPageSwitch('go-to-mail')
              // setPrice(response.data.displayprice)
              // setPaymentId(response.data.paymentid)

              setWrongVerificationCode(false)
              setVerifyTime(false)
            }else{
              setWrongVerificationCode(true)
            }
            
            setVerificationCodeError(false)
            setVerificationCodeLoading(false)
        })
        .catch(error => {
          setVerificationCodeError(true)
          setVerificationCodeLoading(false)
        });
    
    }


    const handleResendVerificationSubmit =()=>{
  
      const data = {
          paymentid: paymentIdText,
      }
  
      axios.post(process.env.REACT_APP_RESEND_VERIFICATION_ENDPOINT, data)
      .then(response => {
      })
      .catch(error => {
      });
  
  }

  const resendWaitTime = 60
  const [secondsRemaining, setSecondsRemaining] = useState(resendWaitTime)
  const [isDisabled, setIsDisabled] = useState(true)
  useEffect(() => {
    let intervalId;
    if (isDisabled) {
      intervalId = setInterval(() => {
        setSecondsRemaining(prevCount => Math.max(0, prevCount - 1))
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isDisabled])

  useEffect(()=>{
        if(secondsRemaining <= 0){
          setIsDisabled(false)
        }
  }, [secondsRemaining])

  const handleResendCode = () => {
    handleResendVerificationSubmit()
    setIsDisabled(true);
    setSecondsRemaining(resendWaitTime);
  };

    return (
        <section>
            <form onSubmit={handleVerificationSubmit}>
              <div className="title">
                <h3 className="titleh3">Verify Payment</h3>
              </div>
              <div style={{marginBottom: '2rem'}}>
                <p className="paragraph">We've sent a code to <span style={{fontWeight: 'bold'}}>{emailText}</span>. Enter the code below to activate this purchase.</p>
              </div>

              <div className="inputHolder">
                <label className="label">Verification Code <span style={{color: '#ff5f70'}}>*</span></label>
                <input className="input" type='number' required onChange={(e)=> setVerificationCode(e.currentTarget.value)}/>
              </div>

              <div style={{width: '100%'}}>
                <Button type='submit' disabled={VerificationCodeLoading} className="button" style={{width:'100%'}} variant="contained">Verify</Button>
              </div>
              { 
                        VerificationCodeLoading 
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
                        : VerificationCodeError ? <span style={{color: '#FF5733', fontStyle: 'italic', fontSize: '0.8rem'}}>An unexpected error has occured</span> : WrongVerificationCode ? <span style={{color: '#FF5733', fontStyle: 'italic', fontSize: '0.8rem'}}>Incorrect verification code</span> : null 
                }
            </form>
            
            {isDisabled || VerificationCodeLoading ? <a style={{opacity: '0.7', color: '#666', display: 'block' ,marginTop: '0.8rem', fontSize: '0.9rem', cursor: 'not-allowed'}}><span style={{textDecoration: 'underline'}}>Resend Mail</span> { secondsRemaining != 0 ? < span style={{textDecoration: 'none'}}>  ({`${secondsRemaining}s`})</span> : null}</a> : <a style={{color: '#006fcd', display: 'block' ,marginTop: '0.8rem', fontSize: '0.9rem', cursor: 'pointer', textDecoration: 'underline'}} onClick={handleResendCode}>Resend Mail</a>}

            {/* <button
              disabled={isDisabled}
              onClick={handleResendCode}
            >
              {isDisabled ? `${secondsRemaining}s` : 'Resend Code'}
            </button> */}

    
          </section>
    )
}