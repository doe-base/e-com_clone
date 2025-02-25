import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Button } from '@mui/material'
import { RotatingLines } from 'react-loader-spinner'


export default function RequestInfoPopup({ closePopup, serviceTitle, choosenPlan, activeGame }){

    const [UserEmailAddress, setUserEmailAddress] = useState(0)
    const [FormLoading, setFormLoading] = useState(false)
    const [FormError, setFormError] = useState(false)
    const [Success, setSuccess] = useState(false)

    const {tire, name, price} = choosenPlan
    
    function onFormSubmit(e){
        e.preventDefault()

        setFormLoading(true)
        setSuccess(false)
        setFormError(false)
        fetch(process.env.REACT_APP_FORM_SUBMIT_AJAX, {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            topic: 'want to know more about this accout',
            useremail: UserEmailAddress,
            serviceTitle: serviceTitle,
            activeGame: activeGame,
            accountTire: tire,
            name: name,
            price: price
            
        })
    })
        .then(response => response.json())
        .then(data => {
          setFormLoading(false)
          setFormError(false)
          setSuccess(true)

          //handle submit by telling user email was set successfully
          //add discount and date to stack account packages
          //add r6 account
          // Work on Communicatoin

        })
        .catch(error => {
          setFormLoading(false)
          setSuccess(false)
          setFormError(true)
        });
      }

      useEffect(()=> {
        
        if(Success === true){
            const closePop = setTimeout(()=>{
                closePopup()
            }, 6000)

            return () => clearTimeout(closePop);
        }

      }, [Success])



    return (
        <section>
            <form onSubmit={onFormSubmit}>
              <div className="title">
                <h3 className="titleh3">Contact Support</h3>
              </div>
              <div style={{marginBottom: '2rem'}}>
                <p className="paragraph">Enter your email address to get more infomation about this package or chat with support.</p>
              </div>

              <div className="inputHolder">
                <label className="label">Email Address <span style={{color: '#ff5f70'}}>*</span></label>
                <input className="input" type='email' required onChange={(e)=> setUserEmailAddress(e.currentTarget.value)}/>
              </div>

              <div style={{width: '100%'}}>
                <Button type='submit' className="button" style={{width:'100%'}} variant="contained">Send</Button>
              </div>
              { 
                        FormLoading 
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
                        : FormError ? <span style={{color: '#FF5733', fontStyle: 'italic', fontSize: '0.8rem'}}>An unexpected error has occured</span> : Success ? <span style={{color: 'green', fontStyle: 'italic', fontSize: '0.8rem'}}>you will receive an email from us shortly</span> : null 
                }
            </form>
          </section>
    )
}