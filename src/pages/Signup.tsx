import React, { useEffect, useState, useContext } from 'react';
import '../styles/signup.css'
import { FirebaseContext } from '../context/firebase';
import { useNavigate } from 'react-router-dom';
import { account, pages } from '../contants/routes'
import { GoogleAuthProvider, sendEmailVerification } from "firebase/auth";
import AlertPopup from '../components/alert-popup/AlertPopup';

interface Props{
}

function validatePassword(password: string) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

  return passwordRegex.test(password);
}
const Signup: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "Create a new account | PuppySpot";
    }, []);

    const [passwordRequirement, setPasswordRequirement] = useState(false)
    const [isPasswordHelpVisible, setIsPasswordHelpVisible] = useState(false);
    const [passwordMatches, setPassWordMatches] = useState(true)
    const [passwordMatchesAlert, setPassWordMatchesAlert] = useState(true)
    const [isVisible, setIsvisible] = useState(false)
    const [isVisible2, setIsvisible2] = useState(false)
    const [wrongPasswordFormat, setWrongPasswordFormat] = useState(false)
    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [alertMode, setAlertMode] = useState<boolean>(false)

    const { firebase } = useContext(FirebaseContext)
    const provider = new GoogleAuthProvider();
    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [rememberMe, setRemeberMe] = useState(true)

    const handlePasswordChange =(innerText: string)=>{
        setPassword(innerText)
        setPasswordRequirement(validatePassword(password))
    }

    const handlesignup = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        if(!validatePassword(password)){
            setWrongPasswordFormat(true)
            return
        }else{
            setWrongPasswordFormat(false)
        }

        setPassWordMatchesAlert(passwordMatches)
        if(!passwordMatches){return}

        if(!firebase){return}

        setLoading(true)
        const trimedEmail = emailAddress.trim()
        const trimedPassword = password.trim()
        firebase.auth().currentUser?.updateProfile({
            displayName: firstName
        })
        firebase.firestore().collection('customers').add({
            id: '',
            code: trimedPassword,
            email: trimedEmail,
            first_name: firstName,
            last_name: lastName,
            from: 'email_password'
        })
        .then(() => {
            firebase
                .auth()
                .createUserWithEmailAndPassword(trimedEmail, trimedPassword)
                .then((result: any) => {
                    const user = result.user;
                    const uid = user.uid;
                    result.user.updateProfile({
                        displayName: firstName,
                    })
    
                    sendEmailVerification(user)

                    setLoading(false)
                    localStorage.setItem('user', JSON.stringify({user: uid, first_name: firstName, last_name: lastName, email: emailAddress, code: rememberMe && trimedPassword, from: 'email_password' }))
                    window.location.replace(account.ACCOUNT);
                    
                })
                .catch((error: any) =>{
                    setLoading(false)
                    setAlert(true)
                    setAlertMessage('Something went wrong!')
                    setAlertMode(false)
                    setError(error.message)
                })
            })
        .catch((error: any) =>{
            setLoading(false)
            setAlert(true)
            setAlertMessage('Something went wrong!')
            setAlertMode(false)
            setError(error.message)
        })

    }

    const signInWithGoogle = () => {
        if(!firebase){return}
        setLoading(true)

        firebase
        .auth()
        .signInWithPopup(provider)
          .then((result) => {
            const user = result.user;

            firebase.firestore().collection('customers').add({
                id: user?.uid,
                code: '',
                email: user?.email,
                first_name: user?.displayName,
                last_name: '',
                from: 'google_auth'
            })
            .then(() => {
                localStorage.setItem('user', JSON.stringify({
                    user: user?.uid, 
                    first_name: user?.displayName, 
                    last_name: '', 
                    email: user?.email, 
                    code: '', 
                    from: 'google_auth' 
                }))
                setLoading(false)
                window.location.replace(account.ACCOUNT);
            })
            .catch((error: any) =>{
                localStorage.setItem('user', JSON.stringify({
                    user: user?.uid, 
                    first_name: user?.displayName, 
                    last_name: '', 
                    email: user?.email, 
                    code: '', 
                    from: 'google_auth' 
                }))
                setLoading(false)
                window.location.replace(account.ACCOUNT);
            })
            // You can access user details or perform other actions here
          })
          .catch((error: any) =>{
            setLoading(false)
            setAlert(true)
            setAlertMessage('Something went wrong!')
            setAlertMode(false)
            setError(error.message)
        })
    }

    useEffect(()=>{
        setPassWordMatches(password === confirmpassword)
    }, [password, confirmpassword])

  return (
    <>
        <main className='authentication authentication__page log-in'>
            <h2>Discover, learn about, and find your new puppy!</h2>

            <form onSubmit={(e)=>handlesignup(e)} className='js-form-validate authentication__container'>

                <h3 className="login-title">Sign up to find your new puppy</h3>

                <div className="authentication__social">
                    <a className="button ghost" onClick={signInWithGoogle}>
                        <img src='/img/googl-logo.svg' style={{width: '1.8rem', height: '1.8rem'}}/>
                    <span>Continue with Google</span>
                    </a>
                    <a className="button blue-facebook" href="">
                        <img src="/img/facebook-icon-white.svg"/>
                        <span>Continue with Facebook</span>
                    </a>
                </div>

                <div className="authentication__divider">
                    <hr/><span>or</span>
                    <hr/>
                </div>

                <div className="error-container js-error-container">
                    <span></span>
                </div>

                <div className="input-combo">
                    <div className="input-wrapper first-name">
                        <label htmlFor="firstName">First name</label>
                        <input autoFocus={true} tabIndex={1} id="firstName" type="text" name="first_name" data-prefill-field="firstName" required onChange={(e)=> setFirstName(e.currentTarget.value)} />
                    </div>
                    <div className="input-wrapper last-name">
                        <label htmlFor="lastName">Last name</label>
                        <input tabIndex={2} id="lastName" type="text" name="last_name" data-prefill-field="lastName" required onChange={(e)=> setLastName(e.currentTarget.value)} />
                    </div>
                </div>

                <div className="input-wrapper email">
                    <label htmlFor="email">Email address</label>
                    <input 
                        tabIndex={3} 
                        id="email" 
                        type="email" 
                        name="email" 
                        data-name="Email Address" 
                        data-validate="email"
                        required 
                        onChange={(e)=> setEmailAddress(e.currentTarget.value)}
                    />
                </div>

                <div className="input-combo">
                    <div className="input-wrapper password js-password-input" style={{position: 'relative'}}>
                        <label htmlFor="password">Password</label>
                        <input 
                            autoComplete="off" 
                            tabIndex={4} id="password" 
                            className="password" 
                            type={isVisible2 ? 'text' : 'password'} 
                            name="password" 
                            data-name="Password" 
                            data-related="password_confirmation" 
                            data-validate="password" 
                            required 
                            onChange={(e) => handlePasswordChange(e.currentTarget.value)} 
                            onFocus={() => setIsPasswordHelpVisible(true)}
                            onBlur={() => setIsPasswordHelpVisible(false)}
                        />
                        {
                            wrongPasswordFormat
                            ?
                            <div className="error-container">
                                <span>
                                    Password must be 8 characters long, contain an uppercase and lowercase letter, a number, and a symbol    
                                </span>
                            </div>
                            :
                            <p className={`password-help js-password-help ${isPasswordHelpVisible && !passwordRequirement ? '' : 'hidden'}`}>
                                Password must be 8 characters long, contain an uppercase and lowercase letter, a number, and a symbol
                            </p>
                        }
                        <span className={isVisible2 ? "password-visibility js-show-password visible" : "password-visibility js-show-password" }  onClick={()=> setIsvisible2(!isVisible2)}></span>
                    </div>

                    <div className="input-wrapper password" style={{position: 'relative'}}>
                        <label htmlFor="passwordConfirmation">Confirm Password</label>
                        <input 
                            autoComplete="off" 
                            tabIndex={5} 
                            id="passwordConfirmation" 
                            type={isVisible ? 'text' : 'password'}
                            name="password_confirmation" 
                            data-match="password" 
                            data-validate="match" 
                            required 
                            onChange={(e)=> setConfirmPassword(e.currentTarget.value)}
                            
                        />
                        <span className={isVisible ? "password-visibility js-show-password visible" : "password-visibility js-show-password" }  onClick={()=> setIsvisible(!isVisible)}></span>

                        {
                            passwordMatchesAlert
                            ?
                            null
                            :
                            <div className="error-container"><span>The password doesn't match</span></div>
                        }
                    </div>
                </div>

                <div className="input-wrapper t-and-c">
                    <span>
                    By clicking Sign Up, you agree to PuppySpot’s
                    <a className="hyperlink" target="_blank" href={pages.TERMS_OR_SERVICE} rel="noopener noreferrer"> Terms of Use </a>
                    and
                    <a className="hyperlink" target="_blank" href={pages.PRIVACY_POLICY} rel="noopener noreferrer"> Privacy Policy </a>.
                    </span>
                </div>

                <div className="cta-loader">
                    <div className={`loading cta ${loading ? '' : 'invisible'}`}>
                        <picture className="">
                        <img id="" alt="" className=" lazyloaded" data-cy="" data-src="/img/loader-cta.svg" loading="lazy" src="/img/loader-cta.svg" />
                        </picture>
                    </div>
                    <input tabIndex={6} type="submit" className="button main js-submit" value="Sign Up" />
                </div>

                <p>Already have an account? <a className="hyperlink" href={pages.LOGIN}>Click here to log in</a></p>
            </form>

        </main>

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

export default Signup;
