import React, { useEffect, useRef, useState } from "react";
import { Grid } from "@mui/material";
import { FaRegCopy } from "react-icons/fa6";
import { FaRegCheckSquare } from "react-icons/fa";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { RotatingLines } from "react-loader-spinner";


export default function NewCashapp({ closePopup,PaymentId,Price,BreederName,CashappAddress,PuppyName, setAlert,setAlertMessage,setAlertMode }){

    const btcRef = useRef(null)
    const etRef = useRef(null)


    const [cpActive, setcpActie] = useState(false)
    const [cpActiveEt, setcpActieEt] = useState(false)


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





      const [payerAddress, setPayerAddress] = useState('')
      const [GfImage, setGfImage] = useState(null)
  
      const [Loading, setLoading] = useState(false)
      const [Failure, setFailure] = useState(false)
      const navigate = useNavigate()
      
      const onPaypalSubmit = (e) => {
            e.preventDefault();
            setLoading(true);
            setFailure(false);

            const newFormData = new FormData();
            newFormData.append("paymentID", PaymentId);
            newFormData.append("price", Price);
            newFormData.append("payerAddress", payerAddress);
            
            if (GfImage) {
                newFormData.append("image", GfImage);
            }

            newFormData.append("paymentMethod", "paypal");

            axios.post(process.env.REACT_APP_BANK_TRANSER_ENDPOINT, newFormData, {
                headers: { "Content-Type": "multipart/form-data" },
                onUploadProgress: (ProgressEvent) => {}
            })
            .then(response => {
                setLoading(false);
                if (response.data.success === false) {
                    setFailure(true);

                    setAlert(true)
                    setAlertMessage('Something went wrong!')
                    setAlertMode(false)
                } else {
                    setAlert(true)
                    setAlertMessage('Success!')
                    setAlertMode(true)

                    closePopup();
                }
            })
            .catch(error => {
                setLoading(false);
                setFailure(true);

                  setAlert(true)
                  setAlertMessage('Something went wrong!')
                  setAlertMode(false)
            });
        };



    return (
        <>
            <section>
                <form onSubmit={onPaypalSubmit}>
                    <div className="title">
                        <h3 className="titleh3">Complete Payment</h3>
                        </div>
                        <div style={{marginBottom: '2.7rem'}}>
                        <p className="paragraph">You will reveice a confirmatory email when your payment is confirmed.</p>
                    </div>
                

                    

                    {/* <p className="{classes} style={{width: '100%',textAlign: 'center', marginBottom: '1rem', fontSize: '0.876rem', color: "#ff3a3a"}}>{address.message}</p> */}

                    <div>

                    <div className="inputHolder">
                        <label className="label">Tracking Code</label>
                        <input className="input" name="payment-id" defaultValue={PaymentId} readOnly style={{color:'#666'}}/>
                    </div>
                    <div className="inputHolder" style={{marginBottom: '2.7rem'}}>
                        <label className="label">Amount To Pay</label>
                        <input className="input" name="price" defaultValue={`${Price}`} readOnly style={{color:'#666'}}/>
                    </div>



                    <p style={{marginBottom: '1rem', color: '#FFA000', fontSize: '0.9rem'}}>Send the mentioned amount to {PuppyName}'s breeder and upload proof of payment.</p>
            
                
                        
                        <>

                            <div className="inputHolder">
                                <label className="label">Breeder's Name:</label>

                                <Grid container style={{justifyContent: 'space-between', alignItems: 'center'}}>
                                    <Grid item xs={10.5}>
                                        <input ref={btcRef} className="input" defaultValue={BreederName} readOnly/>
                                    </Grid>
                                    <Grid item xs={1}>
                                        <div className="cpAddButton" style={{width:  '100%', margin: '0', backgroundColor: `${ cpActive ? '#0f8b0a' : '#d7172b' }`}} variant="contained" onClick={()=> copyToClipboard()}>{cpActive ? <FaRegCheckSquare/> : <FaRegCopy/>}</div>
                                    </Grid>
                                </Grid>
                            </div>

                            <div className="inputHolder">
                                    <label className="label">Breeder's Cashapp Address:</label>

                                    <Grid container style={{justifyContent: 'space-between', alignItems: 'center'}}>
                                        <Grid item xs={10.5}>
                                            <input ref={etRef} className="input" defaultValue={CashappAddress} readOnly/>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <div className="cpAddButton" style={{width:  '100%', margin: '0', backgroundColor: `${ cpActiveEt ? '#0f8b0a' : '#d7172b' }`}} variant="contained" onClick={()=> copyToClipboardEt()}>{cpActiveEt ? <FaRegCheckSquare/> : <FaRegCopy/>}</div>
                                        </Grid>
                                    </Grid>
                            </div>

                        </>
                        












                
                        <>
                            <div className="inputHolder" style={{marginTop: '2rem'}}>
                                <label className="label" style={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
                                    <span style={{marginRight:'0.2rem'}}>Sender's Name <span style={{color: '#ff5f70'}}>*</span></span> <span id='live' className="question">?</span>
                                    <span className="tooltipPopup">This will help us verify your payment</span>
                                </label>
                                <input className="input" name="Sender" placeholder='Enter your name' required onChange={(e)=>setPayerAddress(e.currentTarget.value)}/>
                            </div>
            
            
                            <div className="inputHolder">
                                <label className="label" style={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
                                    <span style={{marginRight:'0.2rem'}}>Upload payment receipt</span>
                                </label>
                                <input className="input" type='file' name="attachment" multiple accept=".pdf,.jpeg,.jpg,.png" required onChange={(e)=>setGfImage(e.target.files[0])}/>
                                <span style={{color: '#666', fontStyle: 'italic', fontSize: '0.8rem'}}>.pdf, .jpeg, .jpg, .png are allowed</span>
                            </div>









                            
                            {/* <input type="hidden" name="_next" value={`${process.env.REACT_APP_DOMAIN_NAME}/success-payment`}></input> */}
            
                            <div >
                                <Button disabled={Loading} className="popUpButton" type='submit' variant="contained" style={{marginBottom: '0', width: '100%'}}>Proceed</Button>

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
                            
                        </>
                        
                    

                        
                    </div>
                </form>
            </section>
        </>

    )
}