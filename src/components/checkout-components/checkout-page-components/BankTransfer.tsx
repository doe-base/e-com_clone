import React, { useEffect, useRef, useState } from 'react';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import useStyles from '../../../styles/checkout';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import AlertPopup from '../../../components/alert-popup/AlertPopup';
import { pages } from '../../../contants/routes';
import { Grid } from '@mui/material';



interface Props{
  paymentInfo: any;
  subTotal: string;
  puppyId: string | undefined;
  paymentID: string | undefined;
  subTotalInNumber: number;
}
  function startTimer(stateFunction: React.Dispatch<React.SetStateAction<boolean>>) {
    setTimeout(() => {
      stateFunction(false)
    }, 1500);
  }
 

const BankTransfer: React.FC<Props> = ({ paymentInfo, subTotal, puppyId, paymentID, subTotalInNumber}) => {
    const classes = useStyles()
    const paypalAddRef = useRef<HTMLHeadingElement>(null)
    const paypalAddRef2 = useRef<HTMLHeadingElement>(null)
    const paypalAddRef3 = useRef<HTMLHeadingElement>(null)

    const bitcoinPriceRef = useRef<HTMLHeadingElement>(null)

    const [cpActive2, setcpActie2] = useState(false)
    const [cpActive3, setcpActie3] = useState(false)
    const [cpActive4, setcpActie4] = useState(false)
    const [cpActive5, setcpActie5] = useState(false)

    const copyToClipboard2 = () => {
        const textToCopy = paypalAddRef.current?.innerText
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
        const textToCopy = paypalAddRef2.current?.innerText
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
        const textToCopy = paypalAddRef3.current?.innerText
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

    const [Loading, setLoading] = useState(false)
    const [Failure, setFailure] = useState(false)
    const [GfImage, setGfImage] = useState<any>(null)
    const [paypalField, setPaypalField] = useState(false)
    const [alerts, setAlerts] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [alertMode, setAlertMode] = useState<boolean>(false)
    const [firstNameInput, setFirstNameInput] = useState('')
    const [firstNameEmpty, setFirstNameEmpty] = useState(false)
    const defaultBlob = new Blob(["default content"], { type: 'text/plain' });

    useEffect(()=>{
      if(GfImage){
        setPaypalField(false);
    }
    if(firstNameInput){
          setFirstNameEmpty(false)
      }
    }, [GfImage, firstNameInput])
    const onPaypalSubmit = ( e: any ) =>{
      e.preventDefault()
      
      if(!GfImage){
        setPaypalField(true);
        return;
      }else{
        setPaypalField(false);
      }
      if(!firstNameInput){
        setFirstNameEmpty(true)
        return;
      }else{
        setFirstNameEmpty(false)
      }
      
      setLoading(true)
      setFailure(false)

      const newFormData = new FormData
      newFormData.append('paymentID', paymentID || defaultBlob)
      newFormData.append('puppyID', puppyId || defaultBlob)
      newFormData.append('price', subTotal || defaultBlob)
      newFormData.append('payerEmail', paymentInfo.emailInput)
      newFormData.append('image', GfImage)
      newFormData.append('paymentMethod', 'bank transfer')
      newFormData.append('accountName', firstNameInput)

      const url = process.env.REACT_APP_BANK_TRANSFER || ''
      axios.post(url, newFormData, {
        onUploadProgress: (ProgressEvent)=>{  }
      })
      .then(response => {
        if(response.data.success == false){
            setLoading(false)
            setFailure(true)

            setAlerts(true)
            setAlertMessage('Something went wrong!')
            setAlertMode(false)
        }else{
            setLoading(false)
            setFailure(false)

            setAlerts(true)
            setAlertMessage('Success!')
            setAlertMode(true)

            const newURL = pages.PUPPIES_FOR_SELL;
            window.location.replace(newURL);
        }
      })
      .catch(error => {
          setLoading(false)
          setFailure(true)

          setAlerts(true)
          setAlertMessage('Something went wrong!')
          setAlertMode(false)
      });
    }

    const account_number = process.env.REACT_APP_ACCOUNT_NUMBER
    const beneficiary = process.env.REACT_APP_BENEFICIARY
    const sort_code = process.env.REACT_APP_SORT_CODE

  return (
    
        <>
             <section className="payment-info-section">
                <h2>Procedure to pay with Bank Transfer</h2>
                <ol>
                    <li>Transfer the specified payment amount to the account below.</li>
                    <li>Save the receipt (or take a screenshot).</li>
                    <li>Fill out the form and upload the receipt for verification.</li>
                </ol>
            </section> 
            <Grid container>
                <Grid item xs={12} md={6} lg={4}> 
                    <div className={classes.cryptocurrencyaddressholder}>
                        <span className={classes.cryptocurrencyaddressholdertitle}>Account number:</span>

                        <div onClick={copyToClipboard2} style={{display: 'flex'}}>
                        <div><h2 ref={paypalAddRef} className={classes.selectField2Text2}>{account_number}</h2></div>

                        {
                            cpActive2
                            ?
                            <div><DoneAllIcon style={{ color:'green' }}  /></div>
                            :
                            <div style={{cursor: 'pointer'}}><ContentCopyIcon /></div>
                        } 
                        </div>
                    </div>
                </Grid>  
                <Grid item xs={12} md={6} lg={4}> 
                    <div className={classes.cryptocurrencyaddressholder}>
                        <span className={classes.cryptocurrencyaddressholdertitle}>Beneficiary name:</span>

                        <div onClick={copyToClipboard3} style={{display: 'flex'}}>
                        <div><h2 ref={paypalAddRef2} className={classes.selectField2Text2}>{beneficiary}</h2></div>

                        {
                            cpActive3
                            ?
                            <div><DoneAllIcon style={{ color:'green' }}  /></div>
                            :
                            <div style={{cursor: 'pointer'}}><ContentCopyIcon /></div>
                        } 
                        </div>
                    </div>
                </Grid>  
                <Grid item xs={12} md={6} lg={4}> 
                    <div className={classes.cryptocurrencyaddressholder}>
                        <span className={classes.cryptocurrencyaddressholdertitle}>Sort code:</span>

                        <div onClick={copyToClipboard4} style={{display: 'flex'}}>
                        <div><h2 ref={paypalAddRef3} className={classes.selectField2Text2}>{sort_code}</h2></div>

                        {
                            cpActive4
                            ?
                            <div><DoneAllIcon style={{ color:'green' }}  /></div>
                            :
                            <div style={{cursor: 'pointer'}}><ContentCopyIcon /></div>
                        } 
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} lg={4}> 
                    <div className={classes.cryptocurrencyaddressholder}>
                    <span className={classes.cryptocurrencyaddressholdertitle}>Amount to transfer($):</span>

                    <div style={{display: 'flex'}} onClick={copyToClipboard5}>
                        <div><h2 style={{color: "#333", marginRight: '0.3rem'}} ref={bitcoinPriceRef}>{subTotalInNumber}</h2></div>
                        {
                            cpActive5
                            ?
                            <div><DoneAllIcon style={{ color:'green' }}  /></div>
                            :
                            <div style={{cursor: 'pointer'}}><ContentCopyIcon /></div>
                        } 
                    </div>
                    </div>
                </Grid>
            </Grid>
        

            <fieldset className="m_eda993d3 tw-px-6 sm:tw-px-0 tw-flex tw-flex-col tw-gap-5 m_e9408a47 mantine-Fieldset-root" data-variant="unstyled">
                <legend className="m_74ca27fe tw-font-nunito tw-text-lg tw-font-extrabold tw-text-gray-01 tw-mb-2 m_90794832 mantine-Fieldset-legend">Sender's Full Name</legend>
                <p className="tw-font-inter tw-text-sm tw-text-gray-02">Enter the sender's account name</p>
                <div className="tw-w-full">
                    <div></div>
                    <div className="tw-w-full">
                        <div className={`tw-h-[60px] tw-border tw-px-4 tw-rounded-[10px] aria-disabled:tw-bg-gray-05 ${firstNameEmpty ? 'tw-border-red-01 margin-bottom_important' : 'tw-border-gray-04'} false m_46b77525 mantine-InputWrapper-root" data-size="xs`}>
                            <div style={{"--input-left-section-pointer-events":"none","--input-right-section-pointer-events":"none"} as React.CSSProperties} className="tw-top-0 m_6c018570 mantine-Input-wrapper" data-variant="unstyled">
                                <input 
                                    className="tw-text-base placeholder:tw-text-gray-03 tw-font-inter tw-border-none disabled:tw-bg-gray-05 disabled:tw-text-gray-03 tw-h-[60px]  m_8fb7ebe7 mantine-Input-input" 
                                    data-variant="unstyled" 
                                    placeholder="Full Name*" 
                                    data-path="firstName" 
                                    autoComplete="no" 
                                    aria-invalid="false" 
                                    id="mantine-h20zrslgq" 
                                    value={firstNameInput}
                                    onChange={(e)=> setFirstNameInput(e.currentTarget.value)}
                                />
                            </div>
                            {
                                firstNameEmpty
                                &&
                                <p style={{"--input-error-size": "calc(var(--mantine-font-size-xs) - calc(0.125rem * var(--mantine-scale)))", "margin-bottom": '1rem'} as React.CSSProperties} className="-tw-ml-4 m_8f816625 mantine-InputWrapper-error" data-size="xs" id="mantine-62790zd5a-error"><span className="tw-flex tw-gap-1 tw-items-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#EB5757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 8V12" stroke="#EB5757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 16H12.01" stroke="#EB5757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span className="tw-font-inter tw-text-sm">Please enter your first name.</span></span></p>
                            }
                        </div>
                    </div>
                </div>
            </fieldset>
            <fieldset className="m_eda993d3 tw-px-6 sm:tw-px-0 tw-flex tw-flex-col tw-gap-5 m_e9408a47 mantine-Fieldset-root" data-variant="unstyled">
                <legend className="m_74ca27fe tw-font-nunito tw-text-lg tw-font-extrabold tw-text-gray-01 tw-mb-2 m_90794832 mantine-Fieldset-legend">Upload payment receipt below</legend>
                <p className="tw-font-inter tw-text-sm tw-text-gray-02">This could be a PDF, JPG, JPEG, or PNG file.</p>
                <div className="tw-w-full">
                    <div></div>
                    <div className="tw-w-full">
                        <div className={`tw-h-[60px] tw-border tw-px-4 tw-rounded-[10px] aria-disabled:tw-bg-gray-05 ${paypalField ? 'tw-border-red-01 margin-bottom_important' : 'tw-border-gray-04'} false m_46b77525 mantine-InputWrapper-root`} data-size="xs" style={{display: 'flex', alignItems: 'center'}}>
                            <div style={{"--input-left-section-pointer-events":"none","--input-right-section-pointer-events":"none"} as React.CSSProperties} className="tw-top-0 m_6c018570 mantine-Input-wrapper" data-variant="unstyled">
                                <input 
                                className="tw-text-base placeholder:tw-text-gray-03 tw-font-inter tw-border-none disabled:tw-bg-gray-05 disabled:tw-text-gray-03 tw-h-[60px]  m_8fb7ebe7 mantine-Input-input" 
                                type='file'
                                accept=".pdf, .jpg, .jpeg, .png"
                                data-path="phone" 
                                autoComplete="no" 
                                aria-invalid="false" 
                                id="mantine-np8sksr47" 
                                style={{height: '0px', margin: '0', cursor: 'pointer'}}
                                onChange={(e)=>setGfImage(e.currentTarget.files ? e.currentTarget?.files[0] : null)}
                                />
                            </div>
                        </div>
                            {
                                paypalField
                                &&
                                <p style={{"--input-error-size": "calc(var(--mantine-font-size-xs) - calc(0.125rem * var(--mantine-scale)))", "margin-bottom": '1rem', "box-sizing": 'border-box'} as React.CSSProperties} className="-tw-ml-4 m_8f816625 mantine-InputWrapper-error" data-size="xs" id="mantine-62790zd5a-error"><span className="tw-flex tw-gap-1 tw-items-start"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#EB5757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 8V12" stroke="#EB5757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 16H12.01" stroke="#EB5757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span className="tw-font-inter tw-text-sm">Please upload proof of payment.</span></span></p>
                            }
                    </div>
                </div>
            </fieldset>

            <div className="m_3eebeb36 mantine-Divider-root" data-orientation="horizontal" role="separator"></div>
            <div className="tw-px-6 sm:tw-px-0">
            <button style={{"--button-color":"var(--mantine-color-white)"} as React.CSSProperties } className="mantine-focus-auto mantine-active 
                    tw-px-6 tw-py-4 tw-h-[52px] tw-rounded-full tw-w-full tw-bg-blue-01
                    hover:tw-bg-blue-02
                    data-[disabled]:tw-bg-gray-05 disabled:tw-bg-gray-05
                    lg:tw-max-w-[400px]
                tw-mx-auto m_77c9d27d mantine-Button-root m_87cf2631 mantine-UnstyledButton-root" 
                type="button"
                onClick={onPaypalSubmit}
            >
                <span className="m_80f1301b mantine-Button-inner">
                    <span className="tw-font-inter tw-font-bold tw-text-base tw-whitespace-normal tw-h-[52px] tw-overflow-visible tw-leading-normal m_811560b9 mantine-Button-label">
                    Complete Payment
                    {
                        Loading
                        ?
                        <Oval
                            visible={true}
                            height="30"
                            width="30"
                            color="#ffffff"
                            ariaLabel="oval-loading"
                            wrapperStyle={{marginLeft: '0.3rem'}}
                            wrapperClass=""
                        />
                        :
                        null
                    }
                    </span>
                </span>
            </button>
            {Failure ? <p style={{fontSize: '0.85rem', color: 'red'}}>Internal error. Please try again</p> : null}
            </div>

            <AlertPopup 
                alert={alerts} 
                setAlert={setAlerts} 
                alertMessage={alertMessage} 
                setAlertMessage={setAlertMessage} 
                alertMode={alertMode} 
                setAlertMode={setAlertMode} 
            />
        </>
                  
  );
}
export default BankTransfer;