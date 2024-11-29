import React, { useState, useContext } from "react";
import { FirebaseContext } from '../context/firebase';
import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { pages } from '../contants/routes';


interface Props {}
const MyAccountAuthenticatedContainer: React.FC<Props> = ({}) => {
    const { firebase } = useContext(FirebaseContext)
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user') || '{}'))
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [ nameEdit, setNameEdit ] = useState(false)
    const [ firstName, setFirstName ] = useState(user.first_name)
    const [lastName, setLastName ] = useState(user.last_name)

    const nameEditFunction =()=>{
        setNameEdit(user.first_name)
        setLastName(user.last_name)
        setNameEdit(!nameEdit)
    }
    const handleNamesUpdate = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        updateItem()
    }
    async function updateItem() {
        if (!firebase) return;
        setError('');
        setLoading(true);
      
        try {
          // Query the collection to find the document
          const querySnapshot = await firebase.firestore()
            .collection('customers')
            .where('id', '==', user.user)
            .get();
      
          if (querySnapshot.empty) {
            setLoading(false);
            setError('Document not found');
            return;
          }
      
          // Update each document that matches the query
          for (const doc of querySnapshot.docs) {
            await doc.ref.update({
                first_name : firstName,
                last_name : lastName,
            });
          }
      
            const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
            storedUser.first_name = firstName;
            storedUser.last_name = lastName;
            localStorage.setItem('user', JSON.stringify(storedUser));

          setLoading(false);
        } catch (error) {
          setLoading(false);
          setError('An unexpected error occurred');
          console.error('Error updating document:', error);
        }
    }

    const [loadingPhone, setLoadingPhone] = useState(false)
    const [errorPhone, setErrorPhone] = useState('')
    const [ phoneEdit, setPhoneEdit ] = useState(false)
    const [ phone, setPhone ] = useState(user.phone)
    const [shouldCall, setShouldCall] = useState('yes')

    const handleShouldCallChange = () =>{
        if(shouldCall === 'yes'){
            setShouldCall('no')
        }else{
            setShouldCall('yes')
        }
    }
    const phoneEditFunction =()=>{
        setPhone(user.phone)
        setPhoneEdit(!phoneEdit)
    }
    const handlePhoneUpdate = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        phoneUpdateItem()
    }
    async function phoneUpdateItem() {
        if (!firebase) return;
        setErrorPhone('');
        setLoadingPhone(true);
      
        try {
          // Query the collection to find the document
          const querySnapshot = await firebase.firestore()
            .collection('customers')
            .where('id', '==', user.user)
            .get();
      
          if (querySnapshot.empty) {
            setLoadingPhone(false);
            setErrorPhone('Document not found');
            return;
          }
      
          // Update each document that matches the query
          for (const doc of querySnapshot.docs) {
            await doc.ref.update({
                phone : phone,
                shouldCall: shouldCall,
            });
          }
      
            const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
            storedUser.phone = phone;
            localStorage.setItem('user', JSON.stringify(storedUser));

            setLoadingPhone(false);
        } catch (error) {
          setLoadingPhone(false);
          setErrorPhone('An unexpected error occurred');
          console.error('Error updating document:', error);
        }
    }


    const [loadingPassword, setLoadingPassword] = useState(false)
    const [errorPassword, setErrorPassword] = useState('')
    const [ passwordEdit, setPasswordEdit ] = useState(false)
    const [ password, setPassword ] = useState(user.code)
    const [newPassword, setNewPassword] = useState('')
    const [newPasswordAgain, setNewPasswordAgain] = useState('')
    const [oldPw, setOldPw] = useState(false)
    const [pw, setPw] = useState(false)
    const [pwAgain, setPwAgain] = useState(false)

    const passwordEditFunction =()=>{
        setPassword(user.phone)
        setPasswordEdit(!passwordEdit)
    }
    const handlePasswordUpdate = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(newPassword !== newPasswordAgain){return}
        handlePasswordChange();
    }

    const Logout = () =>{
        if(!firebase){return}

        firebase
        .auth()
        .signOut()
        .then(() => {
            window.location.replace(pages.LOGIN);
        })
        .catch((error) => {
            console.error("Error signing out:", error);
        });
    }

    const handlePasswordChange = async () => {
        const auth = getAuth();
        const user = auth.currentUser;
        setErrorPassword('')
        setLoadingPassword(true)

        if (!user) {
            setError('User not authenticated');
            return;
        }

        try {
            // Reauthenticate the user with the current password
            await reauthenticateWithCredential(user, EmailAuthProvider.credential(user.email || '', password));

            // Update the password
            await updatePassword(user, newPassword);

            console.log('Password updated successfully');
            Logout()
            setLoadingPassword(false)
       
        } catch (error) {
            setErrorPassword('Failed to update password. Please try again');
            setLoadingPassword(false)
        }
    };


    const [loadingAddress, setLoadingAddress] = useState(false)
    const [errorAddress, setErrorAddress] = useState('')
    const [ addressEdit, setAddressEdit ] = useState(false)
    const [ address1, setAddress1 ] = useState(user.address1)
    const [ address2, setAddress2 ] = useState(user.address2)
    const [city, setCity] = useState(user.city)
    const [state, setState] = useState(user.state)
    const [zip, setZip] = useState(user.zip)
    const [country, setCountry] = useState('United-States')

    const addressEditFunction =()=>{
        setAddress1(user.address1)
        setAddress2(user.address2)
        setCity(user.city)
        setState(user.state)
        setZip(user.zip)
        setCountry('United-States')

        setAddressEdit(!addressEdit)
    }
    const handleAddressUpdate = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        updateAddress()
    }
    async function updateAddress() {
        if (!firebase) return;
        setErrorAddress('');
        setLoadingAddress(true);
      
        try {
          // Query the collection to find the document
          const querySnapshot = await firebase.firestore()
            .collection('customers')
            .where('id', '==', user.user)
            .get();
      
          if (querySnapshot.empty) {
            setLoadingAddress(false);
            setErrorAddress('Document not found');
            return;
          }
          console.log(address1, address2, city, state, zip, country)
          // Update each document that matches the query
          for (const doc of querySnapshot.docs) {
            await doc.ref.update({
                address1 : address1,
                address2 : address2,
                city : city,
                state : state,
                zip : zip,
                country : country
            });
          }
      
            const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
            storedUser.address1 = address1
            storedUser.address2 = address2
            storedUser.city = city
            storedUser.state = state
            storedUser.zip = zip
            storedUser.country = country
            localStorage.setItem('user', JSON.stringify(storedUser));

          setLoadingAddress(false);
        } catch (error) {
          setLoadingAddress(false);
          setErrorAddress('An unexpected error occurred');
          console.error('Error updating document:', error);
        }
    }



  return (
    
        <>
            <div className="account__wrapper">
                <section className="account__content my-profile">
                    <article className="info-group">
                        <section className="info-group__content">
                            <div className="editable-field js-editable-field">
                                <span className="editable-field__label">Name</span>
                                <div className="error-container js-editable-field__error hidden">
                                    <span></span>
                                </div>
                                <div className={`editable-field__display js-editable-field__display ${nameEdit && 'hidden'}`}>
                                    <div className="editable-field__wrapper ">
                                        <span>{user.first_name} {user.last_name}</span>
                                        <a href="javascript:void(0)" onClick={nameEditFunction} className={`editable-field__action js-editable-field__action`} data-action="updateName" data-value="">
                                            Edit
                                        </a>
                                        <div className="loading cta invisible">
                                            <picture className="">
                                                <img loading="lazy" alt="" id="" className="" src="/img/components/loader-cta.svg" />
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={(e)=>handleNamesUpdate(e)} noValidate className={`editable-field__form ${nameEdit || 'hidden'} js-form-validate js-editable-field__form`} data-action="updateName">
                                    <div className="editable-field__form-fields editable-field__form-fields--auto">
                                        <div className="input-wrapper">
                                                <label htmlFor="firstName">First name</label>
                                                <input 
                                                    id="firstName" 
                                                    type="text" 
                                                    name="firstName" 
                                                    className="js-account-firstName" 
                                                    value={firstName}
                                                    onChange={(e)=> setFirstName(e.currentTarget.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="input-wrapper">
                                                <label htmlFor="lastName">Last name</label>
                                                <input 
                                                    id="lastName" 
                                                    type="text" 
                                                    name="lastName" 
                                                    className="js-account-lastName" 
                                                    value={lastName}
                                                    onChange={(e)=> setLastName(e.currentTarget.value)}
                                                    required
                                                />
                                            </div>
                                    </div>
                                    <div className="editable-field__form-actions">
                                        <input type="submit" className="button main js-submit" value="Save" tabIndex={10}/>
                                        <button type="button" className="button ghost js-cancel" tabIndex={11} onClick={nameEditFunction}>
                                            Cancel
                                        </button>
                                        <div className={`loading cta ${loading || 'invisible'}`}>
                                            <picture className="">
                                                <img loading="lazy" alt="" id="" className="" src="/img/components/loader-cta.svg" />
                                            </picture>

                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="editable-field js-editable-field">
                                <span className="editable-field__label">Email</span>
                                <div className="error-container js-editable-field__error hidden">
                                    <span></span>
                                </div>
                                <div className="editable-field__display js-editable-field__display">
                                    <div className="editable-field__wrapper ">
                                        <span>stargamingstoree@gmail.com</span>
                                    </div>
                                </div>
                                <form noValidate className="editable-field__form hidden js-form-validate js-editable-field__form" data-action="">
                                    <div className="editable-field__form-fields editable-field__form-fields--auto">
                                        <div className="input-wrapper">
                                            <label htmlFor="email">Email</label>
                                            <input id="email" type="text" value="stargamingstoree@gmail.com" data-validate="required,email"/>
                                        </div>
                                    </div>
                                    <div className="editable-field__form-actions">
                                        <input type="submit" className="button main js-submit" value="Save" tabIndex={10}/>
                                        <button type="button" className="button ghost js-cancel" tabIndex={11}>
                                            Cancel
                                        </button>
                                        <div className="loading cta invisible">
                                            <picture className="">
                                                <img loading="lazy" alt="" id="" className="" src="/img/components/loader-cta.svg" />
                                            </picture>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="editable-field js-editable-field">
                                <span className="editable-field__label">Phone</span>
                                <div className="error-container js-editable-field__error hidden">
                                    <span></span>
                                </div>
                                <div className={`editable-field__display js-editable-field__display ${phoneEdit && 'hidden'}`}>
                                    <div className="editable-field__wrapper ">
                                        <span>{phone ? phone : 'Please add your phone number'}</span>
                                            <a href="javascript:void(0)" onClick={phoneEditFunction} className="editable-field__action js-editable-field__action" data-action="updatePhone" data-value="">
                                                Edit
                                            </a>
                                            <div className="loading cta invisible">
                                                <picture className="">
                                                    <img loading="lazy" alt="" id="" className="" src="/img/components/loader-cta.svg" />
                                                </picture>
                                            </div>
                                    </div>
                                </div>
                                <form onSubmit={(e)=>handlePhoneUpdate(e)} noValidate className={`editable-field__form ${phoneEdit || 'hidden'} js-form-validate js-editable-field__form`} data-action="updatePhone">
                                    <div className="editable-field__form-fields editable-field__form-fields--column">
                                        <div className="input-wrapper">
                                            <label htmlFor="phone">Phone</label>
                                            <input 
                                                id="phone" 
                                                type="text" 
                                                name="phoneNumber" 
                                                className="js-account-phoneNumber" 
                                                value={phone}
                                                onChange={(e)=>setPhone(e.currentTarget.value)} 
                                                required
                                            />
                                        </div>
                                        <div className="input-wrapper sms-okay">
                                            <input type="hidden" name="canReceiveSms" value="no" />
                                            <input id="canReceiveSms" type="checkbox" name="canReceiveSms" className="js-account-canReceiveSms" value={shouldCall} onChange={handleShouldCallChange} />
                                            <label htmlFor="canReceiveSms" className="sms-okay">
                                                <span className="sms-okay__text">It is OK to text me</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="editable-field__form-actions">
                                        <input type="submit" className="button main js-submit" value="Save" tabIndex={10}/>
                                        <button type="button" className="button ghost js-cancel" tabIndex={11} onClick={phoneEditFunction}>
                                            Cancel
                                        </button>
                                        <div className={`loading cta ${loadingPhone || 'invisible'}`}>
                                            <picture className="">
                                                <img loading="lazy" alt="" id="" className="" src="/img/components/loader-cta.svg" />
                                            </picture>

                                        </div>
                                    </div>
                                </form>
                            </div>
                                            
                            <div className="editable-field js-editable-field">
                                <span className="editable-field__label">Password</span>
                                <div className="error-container js-editable-field__error hidden">
                                    <span></span>
                                </div>
                                <div className={`editable-field__display js-editable-field__display ${passwordEdit && 'hidden'}`}>
                                    <div className="editable-field__wrapper ">
                                        <span>••••••••</span>
                                            <a href="javascript:void(0)" onClick={passwordEditFunction} className="editable-field__action js-editable-field__action" data-action="updatePassword" data-value="">
                                                Update
                                            </a>
                                            <div className="loading cta invisible">
                                                <picture className="">
                                                    <img loading="lazy" alt="" id="" className="" src="/img/components/loader-cta.svg" />
                                                </picture>
                                            </div>
                                    </div>
                                </div>


                                <form onSubmit={handlePasswordUpdate} noValidate className={`editable-field__form ${passwordEdit || 'hidden'} js-form-validate js-editable-field__form`} data-action="updatePassword">
                                    <div className="editable-field__form-fields editable-field__form-fields--auto">
                                        <div className="input-wrapper password" style={{position: 'relative'}}>
                                            <label htmlFor="currentPassword">Current Password</label>
                                            <input 
                                                autoComplete="off" 
                                                id="currentPassword" 
                                                type={oldPw ? "password" : 'text'}
                                                name="current_password" 
                                                value={password}
                                                onChange={(e)=> setPassword(e.currentTarget.value)}
                                                required
                                            />
                                            <span onClick={()=>setOldPw(!oldPw)} className={`password-visibility js-show-password ${oldPw && 'visible'}`}></span>
                                        </div>
                                        <div className="input-wrapper password" style={{position: 'relative'}}>
                                            <label htmlFor="password">New Password</label>
                                            <input 
                                                autoComplete="off" 
                                                id="password" 
                                                type={pw ? "password" : 'text'}
                                                name="password_uni"
                                                value={newPassword}
                                                onChange={(e)=> setNewPassword(e.currentTarget.value)}
                                                required
                                            />
                                            <span onClick={()=>setPw(!pw)} className={`password-visibility js-show-password ${pw && 'visible'}`}></span>
                                        </div>
                                        <div className="input-wrapper password" style={{position: 'relative'}}>
                                            <label htmlFor="passwordConfirmation">Password Confirmation</label>
                                            <input 
                                                autoComplete="off" 
                                                id="passwordConfirmation" 
                                                type={pwAgain ? "password" : 'text'}
                                                name="password_confirmation" 
                                                data-match="password_uni" 
                                                value={newPasswordAgain}
                                                onChange={(e)=> setNewPasswordAgain(e.target.value)}
                                                required
                                            />
                                            <span onClick={()=>setPwAgain(!pwAgain)} className={`password-visibility js-show-password ${pwAgain && 'visible'}`}></span>
                                        </div>
                                    </div>

                                    <div className="editable-field__form-actions">
                                        <input type="submit" className="button main js-submit" value="Save" tabIndex={10}/>
                                        <button type="button" className="button ghost js-cancel" tabIndex={11} onClick={passwordEditFunction}>
                                            Cancel
                                        </button>
                                        <div className={`loading cta ${loadingPassword || 'invisible'}`}>
                                            <picture className="">
                                                <img loading="lazy" alt="" id="" className="" src="/img/components/loader-cta.svg" />
                                            </picture>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            
                            <div className="editable-field js-editable-field">
                                <span className="editable-field__label">Address</span>
                                <div className="error-container js-editable-field__error">
                                    <span></span>
                                </div>
                                <div className={`editable-field__display js-editable-field__display  ${addressEdit && 'hidden'}`}>
                                    <div className="editable-field__wrapper ">
                                        <span>{address1 ? address1 : 'Please add your address'}</span>
                                        <a href="javascript:void(0)" onClick={addressEditFunction} className="editable-field__action js-editable-field__action" data-action="updateAddress" data-value="">
                                            Edit
                                        </a>
                                        <div className="loading cta invisible">
                                            <picture className="">
                                                <img loading="lazy" alt="" id="" className="" src="/img/components/loader-cta.svg" />
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                                <form onSubmit={handleAddressUpdate} noValidate className={`editable-field__form ${addressEdit || 'hidden'} js-form-validate js-editable-field__form`} data-action="updateAddress">
                                    <div className="editable-field__form-fields editable-field__form-fields--column">
                                        <div className="input-wrapper">
                                                <label htmlFor="address">Address</label>
                                                <input 
                                                    id="address" 
                                                    type="text" 
                                                    name="address" 
                                                    value={address1}
                                                    onChange={(e)=> setAddress1(e.currentTarget.value)} 
                                                    required
                                                />
                                            </div>
                                            <div className="input-wrapper">
                                                <label htmlFor="address2">Address 2</label>
                                                <input 
                                                    id="address2" 
                                                    type="text" 
                                                    name="address2" 
                                                    value={address2}
                                                    onChange={(e)=> setAddress2(e.currentTarget.value)} 
                                                />
                                            </div>
                                            <div className="input-wrapper country">
                                                <label htmlFor="countryId" className="required">Country</label>
                                                <div className="chevron-wrapper">
                                                    <span className="chevron"></span>
                                                    <select 
                                                        className="js-country-selector" 
                                                        name="countryId" 
                                                        id="country" 
                                                        data-prefill-field="countryId" 
                                                        data-state-dropdown-id="state" 
                                                        onChange={(e)=> setCountry(e.currentTarget.value)}
                                                    >
                                                        <option value="United-States">United States</option>
                                                        <option value="Canada">Canada</option>
                                                                    
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="input-wrapper state">
                                                <label htmlFor="state" className="required">State/Province</label>
                                                <div className="chevron-wrapper">
                                                    <span className="chevron"></span>
                                                    {
                                                        country == 'Canada'
                                                        ?
                                                        <select className="js-state-selector state" id="state" name="stateId" data-prefill-field="stateId" data-filter="state" onChange={(e)=> setState(e.currentTarget.value)}>
                                                            <option value=""></option><option value="1">Alberta</option><option value="6">British Columbia</option><option value="23">Manitoba</option><option value="31">New Brunswick</option><option value="37">Newfoundland and Labrador</option><option value="40">Northwest Territories</option><option value="39">Nova Scotia</option><option value="41">Nunavut</option><option value="46">Ontario</option><option value="49">Prince Edward Island</option><option value="51">Quebec</option><option value="55">Saskatchewan</option><option value="65">Yukon</option>
                                                        </select>
                                                        :
                                                        <select className="js-state-selector state" id="state" name="stateId" data-prefill-field="stateId" data-filter="state" onChange={(e)=> setState(e.currentTarget.value)}>
                                                            <option value=""></option><option value="3">Alabama</option><option value="2">Alaska</option><option value="5">Arizona</option><option value="4">Arkansas</option><option value="7">California</option><option value="8">Colorado</option><option value="9">Connecticut</option><option value="11">Delaware</option><option value="10">District of Columbia</option><option value="12">Florida</option><option value="13">Georgia</option><option value="14">Hawaii</option><option value="16">Idaho</option><option value="17">Illinois</option><option value="18">Indiana</option><option value="15">Iowa</option><option value="19">Kansas</option><option value="20">Kentucky</option><option value="21">Louisiana</option><option value="25">Maine</option><option value="24">Maryland</option><option value="22">Massachusetts</option><option value="26">Michigan</option><option value="27">Minnesota</option><option value="29">Mississippi</option><option value="28">Missouri</option><option value="30">Montana</option><option value="34">Nebraska</option><option value="42">Nevada</option><option value="35">New Hampshire</option><option value="36">New Jersey</option><option value="38">New Mexico</option><option value="43">New York</option><option value="32">North Carolina</option><option value="33">North Dakota</option><option value="44">Ohio</option><option value="45">Oklahoma</option><option value="47">Oregon</option><option value="48">Pennsylvania</option><option value="50">Puerto Rico</option><option value="52">Rhode Island</option><option value="53">South Carolina</option><option value="54">South Dakota</option><option value="56">Tennessee</option><option value="57">Texas</option><option value="58">Utah</option><option value="60">Vermont</option><option value="59">Virginia</option><option value="61">Washington</option><option value="63">West Virginia</option><option value="62">Wisconsin</option><option value="64">Wyoming</option>
                                                        </select>
                                                    }
                                                </div>
                                            </div>

                                            <div className="input-wrapper">
                                                <label htmlFor="city">City</label>
                                                <input 
                                                    id="city" 
                                                    type="text" 
                                                    name="city" 
                                                    value={city}
                                                    onChange={(e)=> setCity(e.currentTarget.value)} 
                                                    required
                                                />
                                            </div>
                                            <div className="input-wrapper">
                                                <label htmlFor="postalCode">Postal Code</label>
                                                <input 
                                                    id="postalCode" 
                                                    type="text" 
                                                    name="postalCode" 
                                                    value={zip}
                                                    onChange={(e)=> setZip(e.currentTarget.value)} 
                                                    required
                                                />
                                            </div>
                                    </div>

                                    <div className="editable-field__form-actions">
                                        <input type="submit" className="button main js-submit" value="Save" tabIndex={10}/>
                                        <button type="button" className="button ghost js-cancel" tabIndex={11} onClick={addressEditFunction}>
                                            Cancel
                                        </button>
                                        <div className={`loading cta ${loadingAddress || 'invisible'}`}>
                                            <picture className="">
                                                <img loading="lazy" alt="" id="" className="" src="/img/components/loader-cta.svg" />
                                            </picture>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </section>
                    </article>
                </section>
            </div>


            <div className="white-modal js-white-modal white-modal--confirm hidden modal-checkout">
                <div className="white-modal__wrapper">
                    <div className="white-modal__close">
                                        <a className="js-close-modal">
                                <picture className="">
                                        <img loading="lazy" alt="" id="" className="" src="/img/puppy-listings/menu-close.svg" />
                    </picture>

                            </a>
                                </div>
                    <div className="white-modal__content">
                        <section>
                        <h3>Are you sure you want to remove this puppy from your cart?</h3>
                        <p></p>
                        <button type="button" className="button main js-confirm">
                            Yes, remove
                        </button>
                        <button type="button" className="button ghost js-cancel">
                            Cancel
                        </button>
                    </section>
                    </div>
                </div>
            </div>


            <div className="white-modal js-white-modal white-modal--confirm hidden modal-favorite">
                <div className="white-modal__wrapper">
                    <div className="white-modal__close">
                        <a className="js-close-modal">
                            <picture className="">
                                <img loading="lazy" alt="" id="" className="" src="/img/puppy-listings/menu-close.svg" />
                            </picture>
                        </a>
                    </div>
                    <div className="white-modal__content">
                        <section>
                            <h3>Remove <span className="js-puppy-name"></span> from favorites?</h3>
                            <p>Are you sure you want to <span className="hyperlink">remove</span> this puppy from your list of favorites?</p>
                            <button type="button" className="button main js-confirm">
                                Yes, remove
                            </button>
                            <button type="button" className="button ghost js-cancel">
                                Cancel
                            </button>
                        </section>
                    </div>
                </div>
            </div>
        </>
    
  );
};

export default MyAccountAuthenticatedContainer;
