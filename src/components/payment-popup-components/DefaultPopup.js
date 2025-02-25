import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Button, Grid, useStepContext } from '@mui/material';
import { FaAngleDown } from "react-icons/fa6";
import { RotatingLines } from "react-loader-spinner";
import ReCAPTCHA from 'react-google-recaptcha';



const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo (the Democratic Republic of the)",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands [Malvinas]",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom of Great Britain and Northern Ireland",
    "United States Minor Outlying Islands",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
];

export default function DefaultPopup({ address, nameLink, serviceTitle, choosenPlan, setEmailText, setPaymentIdText, activeGame, serviceCode, setVerifyTime, Service, needed}){
    
    
    const [Email, setEmail] = useState('')
    const [Name, setName] = useState('')
    const [Country, setCountry] = useState('Afghanistan')
    const [PaymentChoice, setPaymentChoice] = useState('gift card')
    const [PrompCode, setPropCode] = useState('')
    const [packagePrice, setPackagePrice] = useState(choosenPlan.price)
    const [packageTire, setPackageTire] = useState(choosenPlan.tire)
    const [DeliveryMethod, setDeliveryMethod] = useState('priority delivery')
    const [AccountUsernameEmail, setAccountUsernameEmail] = useState('')
    const [AccountPassword, setAccountPassword] = useState('')
    const [AccountActivationId, setAccountActivationId] = useState('')
    const [CryptoCurrency, setCryptoCurrency] = useState('Bitcoin')
    const [IsCryptoPayment, setIsCryptoPayment] = useState(false)
    const [CryptoRates, setCryptoRates] = useState({})
    const [DisplayPrice, setDisplayPrice] = useState('')
    
    const [FalsePromocode, setFalsePromocode] = useState(false)
    const [RealPropmocode, setRealPromocode] = useState(false)
    const [PromoCodeLoading, setPromoCodeLoading] = useState(false)

    const [PaymentChoiceLoading, setPaymentChoiceLoading] = useState(false)
    const [PaymentChoiceError, setPaymentChoiceError] = useState(false)
    const [PromoCodeApplied, setPromoCodeApplied] = useState(false)



    const [cryptoUpdateLoading, setCryptoUpdateLoading] = useState(false)
    const [cryptoUpdateFailed, setCryptoUpdateFailed] = useState(false)
    useEffect(()=>{
        setCryptoUpdateLoading(true)
        setCryptoUpdateFailed(false)
        axios.get(process.env.REACT_APP_CRYPTO_UPDATE)
        .then(function (response) {
            // handle success
            setCryptoUpdateFailed(false)
            setCryptoUpdateLoading(false)
            setCryptoRates(response.data[0])
          })
          .catch(function (error) {
            // handle error
            setCryptoUpdateFailed(true)
            setCryptoUpdateLoading(false)
          })
      }, [IsCryptoPayment])


      //Recaptcha
      //Change back to false as defaul
      //Change back to false as defaul
      //Change back to false as defaul
      //Change back to false as defaul
      //Change back to false as defaul
      //Change back to false as defaul
      //Change back to false as defaul
      //Change back to false as defaul
//Change back to false as defaul
      //Change back to false as defaul
        const [isVerified, setIsVerified] = useState(true);
        const handleVerify = (response) => {
            setIsVerified(true);
        };

    const handleSelectPaymentChoose = ( e ) =>{
    e.preventDefault()

    if (isVerified) {
        // Proceed with form submission
        setPromoCodeLoading(false)
        setFalsePromocode(false)


        setPaymentChoiceLoading(true)
        setPaymentChoiceError(false)

        const data = {
        name: Name,
        email: Email,
        country: Country,
        payment: PaymentChoice,
        delivery: DeliveryMethod,
        promocode: PrompCode,
        accountemail: AccountUsernameEmail,
        accountusername: AccountPassword,
        accountactivationid: AccountActivationId,

        servicetitle: serviceTitle,
        packagename: choosenPlan.name,
        price: packagePrice.toFixed(2),
        originalprice: packagePrice,
        packagetire: packageTire,
        game: activeGame,
        servicecode: serviceCode,

        currencychoose: CryptoCurrency,
        currencyprice: DisplayPrice,
        displayprice: !IsCryptoPayment ? `$${packagePrice}` : cryptoUpdateFailed || cryptoUpdateLoading  ? `$${packagePrice}` : `${DisplayPrice}`
        }

        axios.post(process.env.REACT_APP_PAYMENT_METHOD_ENDPOINT, data)
        .then(response => {
        if(response.data.isverified == false){
            setEmailText(response.data.email)
            setPaymentIdText(response.data.paymentid)
            setVerifyTime(true)

            setPaymentChoiceError(false)
            setPaymentChoiceLoading(false)
        }
        })
        .catch(error => {
            setVerifyTime(false)

            setPaymentChoiceError(true)
            setPaymentChoiceLoading(false)
        });
    } else {
        alert('Please verify that you are not a robot.');
    }
    
}

useEffect(()=>{
    setPackagePrice(choosenPlan.price)
    setPackageTire(choosenPlan.tire)
}, [choosenPlan])

function subtractFivePercent(number) {
    if (typeof number !== 'number') {
      throw new TypeError('Input must be a number.');
    }
    const percentage = number * 0.05;
    const result = number - percentage;
 
    return result;
}


const handleDeliveryMethodChange = (e) =>{
    setDeliveryMethod(e.currentTarget.value)
    if(PromoCodeApplied){

        if(e.currentTarget.value === 'free delivery'){
            setPackagePrice(subtractFivePercent(choosenPlan.price))
        }else if(e.currentTarget.value === 'premium delivery'){
            setPackagePrice(subtractFivePercent(choosenPlan.price + 5))
        }else if(e.currentTarget.value === 'priority delivery'){
            setPackagePrice(subtractFivePercent(choosenPlan.price + 10))
        }

    }else{

        if(e.currentTarget.value === 'free delivery'){
            setPackagePrice(choosenPlan.price)
        }else if(e.currentTarget.value === 'premium delivery'){
            setPackagePrice(choosenPlan.price + 5)
        }else if(e.currentTarget.value === 'priority delivery'){
            setPackagePrice(choosenPlan.price + 10)
        }
    }
}


const handlePropCodeSubmit = ( e ) =>{
   e.preventDefault()
   setPaymentChoiceLoading(false)
   setPaymentChoiceError(false)

   setPromoCodeLoading(true)
   setFalsePromocode(false)
    setRealPromocode(false)



   const data = {
    promocode: PrompCode,
  }

  axios.post(process.env.REACT_APP_PROMOCODE_ENDPOINT, data)
  .then(response => {
    if(response.data.success == true){
        setPackagePrice(subtractFivePercent(packagePrice))
        setFalsePromocode(false)
        setRealPromocode(true)
        setPromoCodeApplied(true)
    }else{
        setRealPromocode(false)
        setFalsePromocode(true)
    } 
    setPromoCodeLoading(false)
  })
  .catch(error => {
    // console.error(error); // Handle errors
        setRealPromocode(false)
        setFalsePromocode(true)
        setPromoCodeLoading(false)
  });
}


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
        setDisplayPrice(`$${price}`)
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
        calculateCrypto(CryptoCurrency, packagePrice)
        setIsCryptoPayment(true)
    }else{
        setIsCryptoPayment(false)
    }
}, [PaymentChoice, packagePrice, CryptoCurrency])


//Clear form when closed
useEffect(()=>{
    setEmail('')
    setName('')
    setCountry('Afghanistan')
    setAccountUsernameEmail('')
    setAccountPassword('')
    setAccountActivationId('')
    setPaymentChoice('gift card')
    setCryptoCurrency('Bitcoin')
    setDeliveryMethod('priority delivery')
    setPropCode('')
    
}, [needed])




    return (
        <section>
        
                <div className="title">
                    <h3 className="titleh3">{serviceTitle}</h3>
                </div>

                <div style={{marginBottom: '2.7rem'}}>
                    <p className="paragraph">{ choosenPlan.name }</p>
                </div>
            

                <p className="label" style={{width: '100%',textAlign: 'center', marginBottom: '1rem', fontSize: '1rem'}}>Choose a payment method to proceed</p>
                

                <form onSubmit={handleSelectPaymentChoose}>

                    <div className="inputHolder">
                        <label className="label">Email <span style={{color: '#ff5f70'}}>*</span></label>
                        <input className="input" type='email' required onChange={(e)=> setEmail(e.currentTarget.value)} value={Email}/>
                    </div>

                    <div className="inputHolder">
                        <label className="label">First & Last Name  <span style={{color: '#ff5f70'}}>*</span></label>
                        <input className="input" type='text' required onChange={(e)=> setName(e.currentTarget.value)} value={Name}/>
                    </div>

                    <div className="inputHolder" style={{marginBottom: '2.7rem'}}>
                        <label className="label">Country</label>
                        <div style={{position: 'relative'}}>
                            <div>
                                <FaAngleDown className="selectIcon" />
                            </div>
                            <select id='select-field' className="input" style={{cursor: 'pointer'}} required onChange={(e)=> setCountry(e.currentTarget.value)} value={Country}>
                                {
                                countryList.map(item => <option value={item} key={item}>{item}</option>)
                                }
                            </select>
                        </div>
                    </div>

    {/* Needs discussion with Investor */}
                    {
                        Service == 'stacked-account'
                        ?

                        null

                        :
<>
                        <div className="inputHolder">
                            <label className="label" style={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
                                <span style={{marginRight:'0.2rem'}}>Account Email<span style={{color: '#ff5f70'}}>*</span></span> <span id='live' className="question">?</span>
                                <span className="tooltip">Enter your gaming account email address. This is required to complete your order</span>
                            </label>
                            <input className="input" placeholder="Input your account email address" required onChange={(e)=> setAccountUsernameEmail(e.currentTarget.value)} value={AccountUsernameEmail}/>
                        </div>
                        

                        <div className="inputHolder" style={{marginBottom: '2.7rem'}}>
                            <label className="label" style={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
                                <span style={{marginRight:'0.2rem'}}>Account Username / Gamer Tag <span style={{color: '#ff5f70'}}>*</span></span>
                            </label>
                            <input className="input" placeholder="Input your account username or gamer tag" required onChange={(e)=> setAccountPassword(e.currentTarget.value)} value={AccountPassword}/>
                        </div>

                        {
                            nameLink === 'call-of-duty'
                            ?
                            <div className="inputHolder" style={{marginBottom: '2.7rem'}}>
                                <label className="label" style={{display: 'flex', alignItems: 'center', justifyContent: 'start'}}>
                                    <span style={{marginRight:'0.2rem'}}>Account Activation ID <span style={{color: '#ff5f70'}}>*</span></span>
                                </label>
                                <input className="input" placeholder="Input your account activation ID" required onChange={(e)=> setAccountActivationId(e.currentTarget.value)} value={AccountActivationId}/>
                            </div>
                            :
                            null
                        }
</>
                    }

    {/* Needs discussion with Investor */}
                

                    <div className="inputHolder">
                        <label className="label">Select A Payment Method  <span style={{color: '#ff5f70'}}>*</span></label>
                        <div style={{position: 'relative'}}>
                        <div>
                            <FaAngleDown className="selectIcon" />
                        </div>
                        <select id='select-field' className="input" style={{cursor: 'pointer'}} required onChange={(e)=> setPaymentChoice(e.currentTarget.value)} value={PaymentChoice}>
                            <option value="gift card">Gift Card</option>
                            <option value="crypto currency">Cryptocurrency</option>
                            <option value="paypal">Paypal</option>
                            {/* {
                                address.paypal
                                ?
                                <option value="paypal">Paypal</option>
                                :
                                null
                            } */}
                        </select>
                        </div>
                    </div>



                    {

                        PaymentChoice === 'crypto currency'
                        ?
                        <div className="inputHolder">
                            <label className="label">Select crypto currency  <span style={{color: '#ff5f70'}}>*</span></label>
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


                    <div className="inputHolder">
                        <label className="label">Delivery Method  <span style={{color: '#ff5f70'}}>*</span></label>
                        <div style={{position: 'relative'}}>
                        <div>
                            <FaAngleDown className="selectIcon" />
                        </div>
                        <select onChange={(e)=> handleDeliveryMethodChange(e)} id='select-field' className="input" style={{cursor: 'pointer'}} required value={DeliveryMethod}>
                            <option value='free delivery' disabled>Free Delivery (12-24h)</option>
                            <option value='premium delivery' disabled>Premium Delivery (6-12h)</option>
                            <option value='priority delivery' selected>Priority Delivery (1-6h)</option>
                        </select>
                        </div>
                    </div>

                    <div className="inputHolder">
                            <label className="label">Promotion code (optional)</label>

                            <Grid container style={{justifyContent: 'space-between', alignItems: 'center'}}>
                                
                                <Grid item xs={8.5}>
                                    <input className="input" onChange={(e)=> setPropCode(e.currentTarget.value)} value={PrompCode}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button disabled={PromoCodeLoading || PromoCodeApplied} className="button" style={{width:  '100%', margin: '0'}} variant="contained" onClick={PromoCodeApplied ? null : (e)=> handlePropCodeSubmit(e)}>apply</Button>
                                </Grid>

                            </Grid>
                            { 
                            PromoCodeLoading 
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
                            : FalsePromocode ? <span style={{color: '#FF5733', fontStyle: 'italic', fontSize: '0.8rem'}}>Invalid promotion code</span> : RealPropmocode ? <span style={{color: '#43af17', fontStyle: 'italic', fontSize: '0.8rem'}}>5% discount applied</span> : null 
                            }

                    </div>

                    {/* <div style={{padding: '1rem 0'}}>
                        <ReCAPTCHA
                            sitekey="6LerBdEpAAAAAAN4SsATUsarB8rr54AAKDVDzUj8"
                            onChange={handleVerify}
                        />
                    </div> */}

                    {
                        IsCryptoPayment && !cryptoUpdateFailed && cryptoUpdateLoading
                        ?
                        <div style={{width: '100%', opacity: '0.75'}}>
                            <Button type='submit' disabled={true} className="button" style={{width:  '100%'}} variant="contained">proceed</Button>
                        </div>
                        :
                        <div style={{width: '100%'}}>
                            <Button type='submit' disabled={PaymentChoiceLoading} className="button" style={{width:  '100%'}} variant="contained">proceed { !IsCryptoPayment ? `($${packagePrice})` : cryptoUpdateFailed || cryptoUpdateLoading  ? `($${packagePrice})` : `(${DisplayPrice})` }</Button>
                        </div>
                    }
                    { 
                            PaymentChoiceLoading
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
                            IsCryptoPayment && !cryptoUpdateFailed && cryptoUpdateLoading
                            ?
                            <>
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
                                <span style={{color: '#555', fontStyle: 'italic', fontSize: '0.8rem', marginLeft:'5px'}}>loading currency rate</span>
                            </>
                            : PaymentChoiceError ? <span style={{color: '#FF5733', fontStyle: 'italic', fontSize: '0.8rem'}}>An unexpected error has occured</span> :  IsCryptoPayment && cryptoUpdateFailed ? <span style={{color: 'orange', fontStyle: 'italic', fontSize: '0.8rem'}}>Unable to show current crypto rate</span> : null
                    }
                </form>
                
        </section>
    )
}