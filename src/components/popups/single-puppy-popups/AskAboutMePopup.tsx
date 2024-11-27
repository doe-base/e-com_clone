import React, { useEffect, useState } from 'react';
import '../../../styles/popup/ask-about-me.css'
import { pages } from '../../../contants/routes';
import axios from 'axios';
import AlertPopup from '../../../components/alert-popup/AlertPopup';


interface Props{
    askAboutMePopup: boolean
    setAskAboutMePopup: React.Dispatch<React.SetStateAction<boolean>>
    puppyId: string;
    peopleIntrested: string;
    name: string;
    breed: string;
    color: string;
    sex: string;
    age: string;
    galleryContent: string;
}
const AskAboutMePopup: React.FC<Props> = ({
    askAboutMePopup, 
    setAskAboutMePopup,
    puppyId,
    peopleIntrested,
    name,
    breed,
    color,
    sex,
    age,
    galleryContent
}) => {
  const [checked, setCheck] = useState(true)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [state, setState] = useState('')
  const [text, setText] = useState('')
  const [Loading, setLoading] = useState(false)
  const [Failure, setFailure] = useState(false)
  const [alert, setAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertMode, setAlertMode] = useState<boolean>(false)

  const onSubmit = ( e: any ) =>{
    e.preventDefault()

    
    setLoading(true)
    setFailure(false)

    const newFormData = new FormData
    newFormData.append('firstName', firstName)
    newFormData.append('lastName', lastName)
    newFormData.append('emailAddress', emailAddress)
    newFormData.append('phone', phone)
    newFormData.append('state', state)
    newFormData.append('text', text)
    newFormData.append('puppyID', puppyId)
    


    const url = process.env.REACT_APP_ASK_ABOUT_MAIL || ''
    axios.post(url, newFormData, {
      onUploadProgress: (ProgressEvent)=>{  }
    })
    .then(response => {
      if(response.data.success == false){
          setLoading(false)
          setFailure(true)

          setAlert(true)
          setAlertMessage('Something went wrong!')
          setAlertMode(false)
      }else{
          setLoading(false)
          setFailure(false)

          setAlert(true)
          setAlertMessage('Successful!')
          setAlertMode(true)

          setAskAboutMePopup(false)
      }
    })
    .catch(error => {
        setLoading(false)
        setFailure(true)

        setAlert(true)
        setAlertMessage('Something went wrong!')
        setAlertMode(false)
    });
  }
  
  return (
    <>
        <div className={`white-modal js-white-modal js-puppy-request-form puppy-request-form ${askAboutMePopup ? "" : "hidden"}`}>

            <div className="white-modal__wrapper">
                <div className="white-modal__close">
                        <a className="js-close-modal" onClick={()=> setAskAboutMePopup(false)}>
                            <picture className="">
                                <img loading="lazy" alt="" id="" className="" src="/img/puppy-listings/menu-close.svg" />
                            </picture>
                        </a>
                </div>
                <div className="white-modal__content">
                    <div className="puppy-request-form__contents js-puppy-request-form-contents">
                        <div className="puppy-request-form__puppy-info js-puppy-request-form-info">
                            <picture className="">
                                <img id="" alt="" className=" lazyloaded" data-cy="" data-src={galleryContent} loading="lazy" src={galleryContent} />
                            </picture>

                            <div className="puppy-request-form__puppy-info-details">
                                <h3>
                                    {name} is waiting for you!
                                </h3>
                                <div className="puppy-request-form__puppy-info-detail">
                                    <span>{sex}</span>
                                    <span>|</span>
                                    <span>{age} Week{Number(age) > 1 && "s"}</span>
                                </div>
                                <div className="puppy-request-form__puppy-info-detail bold">
                                    {breed}
                                </div>

                                <div className="puppy-request-form__puppy-info-detail">
                                    <span>4.6</span>
                                    <div className="stars">
                                        <svg className="text-star-active" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 15" stroke="currentColor" width="16" height="15">
                                            <path stroke-width="1" d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"></path>
                                        </svg>
                                        <svg className="text-star-active" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 15" stroke="currentColor" width="16" height="15">
                                            <path stroke-width="1" d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"></path>
                                        </svg>
                                        <svg className="text-star-active" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 15" stroke="currentColor" width="16" height="15">
                                            <path stroke-width="1" d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"></path>
                                        </svg>
                                        <svg className="text-star-active" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 15" stroke="currentColor" width="16" height="15">
                                            <path stroke-width="1" d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"></path>
                                        </svg>
                                        <svg className="text-star-inactive" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 15" stroke="currentColor" width="16" height="15">
                                            <path stroke-width="1" d="M8 12L3.29772 14.4721L4.19577 9.23607L0.391548 5.52786L5.64886 4.76393L8 0L10.3511 4.76393L15.6085 5.52786L11.8042 9.23607L12.7023 14.4721L8 12Z"></path>
                                        </svg>
                                    </div>
                                </div>

                                <div className="puppy-request-form__puppy-info-detail text-medium-dark-grey">
                                    (16,535 reviews)
                                </div>
                            </div>
                        </div>
                        <div className="puppy-request-form__form js-puppy-request-form-holder">
                                {
                                    !peopleIntrested || peopleIntrested == 'N/A'
                                    ?
                                    null
                                    :
                                    <div className="puppy-request-form__interested">
                                        <svg className="text-tangerine" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="9" cy="8.99966" r="9" fill="currentColor"></circle>
                                            <path d="M8.24818 3.99966H9.73723L9.56204 10.1405H8.42336L8.24818 3.99966ZM8.9927 13.9997C8.70073 13.9997 8.46229 13.9152 8.27737 13.7461C8.09246 13.5771 8 13.3565 8 13.0842C8 12.8119 8.09246 12.5912 8.27737 12.4222C8.46229 12.2438 8.70073 12.1546 8.9927 12.1546C9.2944 12.1546 9.53771 12.2438 9.72263 12.4222C9.90754 12.5912 10 12.8119 10 13.0842C10 13.3565 9.90754 13.5771 9.72263 13.7461C9.53771 13.9152 9.2944 13.9997 8.9927 13.9997Z" fill="white" stroke="white"></path>
                                        </svg>
                                        <span>Hurry! {peopleIntrested} others are looking at {name}</span>
                                    </div>
                                }
                            
                            <h2 className="puppy-request-form__puppy-name js-puppy-request-form-name">
                                Ask About <span className="text-tangerine">{name}</span>
                            </h2>
                            <div className="puppy-request-form__error-container hidden">
                                <p><span>*Please fill in the required fields.</span></p>
                            </div>
                            <form 
                                id="puppy-request-form" 
                                className="js-form-contact-inputs  puppy-request-form__form  js-form-validate" 
                                onSubmit={onSubmit}
                            >

                
                                <div className="form__inputs puppy-request-form">
                                    <div className="input-wrapper first-name">
                                        <label htmlFor="inv_firstName">First Name</label>
                                        <input 
                                            autoFocus={true} 
                                            tabIndex={1} 
                                            className="" 
                                            type="text" 
                                            name="firstName" 
                                            data-error="" 
                                            id="inv_firstName" 
                                            value={firstName}
                                            onChange={(e)=> setFirstName(e.currentTarget.value)} 
                                            autoComplete="given-name" 
                                            data-prefill-field="firstName" 
                                            data-validate="required" 
                                        />
                                    </div>
                            
                                    <div className="input-wrapper last-name">
                                        <label htmlFor="inv_lastName">Last Name</label>
                                        <input 
                                            tabIndex={2} 
                                            className="" 
                                            type="text" 
                                            name="lastName" 
                                            data-error="" 
                                            id="inv_lastName" 
                                            value={lastName} 
                                            onChange={(e)=> setLastName(e.currentTarget.value)}
                                            autoComplete="family-name" 
                                            data-prefill-field="lastName" 
                                            required
                                        />
                                    </div>
                            
                                    <div className="input-wrapper email">
                                        <label htmlFor="inv_email">Email Address</label>
                                        <input 
                                            tabIndex={3} 
                                            className="" 
                                            type="email" 
                                            pattern="[^@]+@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9\-]+" 
                                            name="emailAddress" 
                                            data-name="Email Address" 
                                            data-error="" 
                                            id="inv_email" 
                                            value={emailAddress} 
                                            onChange={(e)=> setEmailAddress(e.currentTarget.value)}
                                            autoComplete="email" 
                                            data-prefill-field="email" 
                                            required 
                                        />
                                    </div>
                            
                                    <div className="input-wrapper phone">
                                        <label htmlFor="inv_phone">Phone</label>
                                        <input 
                                            tabIndex={4} 
                                            className="" 
                                            type="tel" 
                                            name="phoneNumber" 
                                            data-name="Phone Number" 
                                            data-error="" 
                                            id="inv_phone" 
                                            value={phone} 
                                            onChange={(e)=> setPhone(e.currentTarget.value)}
                                            autoComplete="tel" 
                                            data-prefill-field="phoneNumber" 
                                            required 
                                        />
                                    </div>
                            
                                    <input type="hidden" name="country" value="US" />
                            
                                    <div className="input-wrapper state">
                                        <label htmlFor="state" className="required">State/Province</label>
                                        <div className="chevron-wrapper">
                                            <span className="chevron"></span>
                                            <select 
                                                className="js-state-selector state" 
                                                id="inv_state" 
                                                name="state" 
                                                data-prefill-field="state" 
                                                data-validate="required" 
                                                autoComplete="shipping region" 
                                                tabIndex={7} 
                                                data-filter="state"
                                                onChange={(e)=> setState(e.currentTarget.value)}
                                                required
                                            >
                                                <option value=""></option>
                                                <option value="AL">Alabama</option>
                                                <option value="AK">Alaska</option>
                                                <option value="AZ">Arizona</option>
                                                <option value="AR">Arkansas</option>
                                                <option value="CA">California</option>
                                                <option value="CO">Colorado</option>
                                                <option value="CT">Connecticut</option>
                                                <option value="DE">Delaware</option>
                                                <option value="DC">District of Columbia</option>
                                                <option value="FL">Florida</option>
                                                <option value="GA">Georgia</option>
                                                <option value="HI">Hawaii</option>
                                                <option value="ID">Idaho</option>
                                                <option value="IL">Illinois</option>
                                                <option value="IN">Indiana</option>
                                                <option value="IA">Iowa</option>
                                                <option value="KS">Kansas</option>
                                                <option value="KY">Kentucky</option>
                                                <option value="LA">Louisiana</option>
                                                <option value="ME">Maine</option>
                                                <option value="MD">Maryland</option>
                                                <option value="MA">Massachusetts</option>
                                                <option value="MI">Michigan</option>
                                                <option value="MN">Minnesota</option>
                                                <option value="MS">Mississippi</option>
                                                <option value="MO">Missouri</option>
                                                <option value="MT">Montana</option>
                                                <option value="NE">Nebraska</option>
                                                <option value="NV">Nevada</option>
                                                <option value="NH">New Hampshire</option>
                                                <option value="NJ">New Jersey</option>
                                                <option value="NM">New Mexico</option>
                                                <option value="NY">New York</option>
                                                <option value="NC">North Carolina</option>
                                                <option value="ND">North Dakota</option>
                                                <option value="OH">Ohio</option>
                                                <option value="OK">Oklahoma</option>
                                                <option value="OR">Oregon</option>
                                                <option value="PA">Pennsylvania</option>
                                                <option value="PR">Puerto Rico</option>
                                                <option value="RI">Rhode Island</option>
                                                <option value="SC">South Carolina</option>
                                                <option value="SD">South Dakota</option>
                                                <option value="TN">Tennessee</option>
                                                <option value="TX">Texas</option>
                                                <option value="UT">Utah</option>
                                                <option value="VT">Vermont</option>
                                                <option value="VA">Virginia</option>
                                                <option value="WA">Washington</option>
                                                <option value="WV">West Virginia</option>
                                                <option value="WI">Wisconsin</option>
                                                <option value="WY">Wyoming</option>
                                            </select>
                                        </div>
                                    </div>
                            
                            
                                    <div className="input-wrapper message">
                                        <textarea 
                                            className="field" 
                                            name="message" 
                                            id="message" 
                                            tabIndex={7} 
                                            placeholder={`What questions do you have about ${name}?`}
                                            onChange={(e)=> setText(e.currentTarget.value)}
                                            required
                                            ></textarea>
                                    </div>
                                            
                                    <input type="hidden" name="puppyId" value={puppyId}/>
                                </div>

                                <div className="form__bottom">
                                    <div className="sms-okay puppy-request-form__form relative">
                                        <input type="hidden" name="sms" value="no" />
                                        <input type="checkbox" name="sms" value="yes" id="1-sms-yes" checked={checked} />
                                        <label htmlFor="1-sms-yes" className="sms-okay sms-okay-green" tabIndex={8} onClick={()=> setCheck(!checked)}>
                                            <span className="sms-okay__text">It is OK to text me</span>
                                        </label>
                                    </div>

                                    <div className="cta-loader relative">
                                        <div className="loader-box">
                                            <div className={`loading ajax ${Loading ? "" : "hidden"}`}>
                                                <picture className="">
                                                    <img id="" alt="" className="lazyload " data-cy="" data-src="/img/components/loader-cta.svg" loading="lazy" />
                                                </picture>
                                            </div>
                                        </div>
                                        <input disabled={Loading} type="submit" className="js-puppy-request-form js-submit button main" value={!Loading ? "Submit" : "loading..."} tabIndex={9} />
                                    </div>
                                    

                                    <p className="privacy-notice">
                                        We value your privacy. View our
                                        <a className="hyperlink" target="_blank" href={pages.TERMS_OR_SERVICE}> Terms of Use</a>, and
                                        <a className="hyperlink" target="_blank" href={pages.PRIVACY_POLICY}> Privacy Policy</a>.
                                    </p>
                                
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <AlertPopup 
          alert={alert} 
          setAlert={setAlert} 
          alertMessage={alertMessage} 
          setAlertMessage={setAlertMessage} 
          alertMode={alertMode} 
          setAlertMode={setAlertMode} 
      />
    </>
  );
}

export default AskAboutMePopup;