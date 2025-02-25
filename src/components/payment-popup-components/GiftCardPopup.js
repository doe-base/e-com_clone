import React, {useState} from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { RotatingLines } from "react-loader-spinner";


export default function GiftCardPopup({ PaymentId, Price }){

    const [GfName, setGfName] = useState('')
    const [GfNumber, setGfNumber] = useState('')
    const [GfImage, setGfImage] = useState(null)

    const [Loading, setLoading] = useState(false)
    const [Failure, setFailure] = useState(false)
    const navigate = useNavigate()
    const onGiftCardSubmit = ( e ) =>{
        e.preventDefault()
        setLoading(true)
        setFailure(false)

        const newFormData = new FormData
        newFormData.append('vendor', GfName)
        newFormData.append('token', GfNumber)
        newFormData.append('paymentID', PaymentId)
        newFormData.append('price', Price)
        newFormData.append('image', GfImage)
        newFormData.append('paymentMethod', 'Gift card')
        axios.post(process.env.REACT_APP_GIFTCARD_ENDPOINT, newFormData, {
            // onUploadProgress: (ProgressEvent)=>{ console.log(ProgressEvent.progress*100) }
            onUploadProgress: (ProgressEvent)=>{  }
        })
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
            <form onSubmit={onGiftCardSubmit}>

                <div className="title">
                <h3 className="titleh3">Complete Payment</h3>
                </div>
                <div style={{marginBottom: '2.7rem'}}>
                <p className="paragraph">You will reveice a confirmatory email when your payment is confirmed.</p>
                </div>
            

                <p className="label" style={{width: '100%',textAlign: 'center', marginBottom: '1rem', fontSize: '1rem'}}>Upload Your Gift Card for Verification</p>
                

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
                    <label className="label" style={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
                        <span style={{marginRight:'0.2rem'}}>Retailer's Name <span style={{color: '#ff5f70'}}>*</span></span> <span id='live' className="question">?</span>
                        <span className="tooltip">These include online and physical stores like Razer Gold, Amazon, Walmart, and Target</span>
                    </label>
                    <input className="input" name="vendor" required onChange={(e)=>setGfName(e.currentTarget.value)}/>
                </div>

                <div className="inputHolder" style={{marginBottom: '2.7rem'}}>
                    <label className="label">Card Token <span style={{color: '#ff5f70'}}>*</span></label>
                    <input className="input" name="token" required onChange={(e)=>setGfNumber(e.currentTarget.value)}/>
                </div>


                <div className="inputHolder">
                    <label className="label" style={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
                    <span style={{marginRight:'0.2rem'}}>Upload Pictures of Gift Card <span style={{color: '#ff5f70'}}>*</span></span> <span id='live' className="question">?</span>
                    <span className="tooltip">Upload a picture that shows the token of your gift card</span>
                    </label>
                    <input className="input" required type='file' name="attachment" multiple accept=".pdf,.jpeg,.jpg,.png" onChange={(e)=>setGfImage(e.target.files[0])}/>
                    <span style={{color: '#666', fontStyle: 'italic', fontSize: '0.8rem'}}>.pdf, .jpeg, .jpg, .png are allowed</span>
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