import React, { useEffect, useState, useContext } from 'react';
import '../styles/signup.css'
import { FirebaseContext } from '../context/firebase';

interface Props{
}
const Signup: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "Create a new account | PuppySpot";
    }, []);

    // function getUUID() {
    //     // eslint gets funny about bitwise
    //     /* eslint-disable */
    //     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    //         const piece = (Math.random() * 16) | 0;
    //         const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
    //         return elem.toString(16);
    //     });
    //     /* eslint-enable */
    // }
    
    // firebase.firestore().collection('series').add({
    //     id: getUUID(),
    //     title: 'Tiger King',
    //     description: 'An exploration of big cat breeding and its bizarre underworld, populated by eccentric characters.',
    //     genre: 'documentaries',
    //     maturity: '18',
    //     slug: 'tiger-king',
    //   });


    const [isVisible, setIsvisible] = useState(false)
    const { firebase } = useContext(FirebaseContext)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')


    const [error, setError] = useState('')


    const handlesignup = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(!firebase){return}

        // firebase work here!
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result: any) => 

                result.user.updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1, 
                })
                .then(() => {
                    // history(ROUTES.BROWSE)
                    console.log('success')
                })

            .catch((error: any) =>{
                setFirstName('')
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            })
        )

    }

  return (
    <main className='authentication authentication__page log-in'>
        <h2>Discover, learn about, and find your new puppy!</h2>

        <form onSubmit={(e)=>handlesignup(e)} className='js-form-validate authentication__container'>

            <h3 className="login-title">Sign up to find your new puppy</h3>

            <div className="authentication__social">
                <a className="button ghost" href="">
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

            {/* <div className="input-wrapper outlined-input email">
                <input 
                    autoFocus={true}
                    autoComplete="off"
                    tabIndex={0}
                    type="text"
                    id="log-in__email"
                    pattern="[^@]+@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9\-]+"
                    name="email"
                    data-name="Email Address"
                    data-validate="required,email"
                    placeholder=""
                    data-tid="emailTextInput"
                    className="floating-input"
                    />
                <label htmlFor="log-in__password" className="floating-label">Email</label>
            </div>

            <div className="input-wrapper outlined-input password">
                <input
                    autoComplete="off"
                    tabIndex={0}
                    id="log-in__password"
                    placeholder=""
                    type={isVisible ? 'text' : 'password'}
                    name="password"
                    data-name="Password"
                    data-validate="required"
                    className="floating-input"
                />
                <label htmlFor="log-in__password" className="floating-label">Password</label>
                <span className={isVisible ? "password-visibility js-show-password visible" : "password-visibility js-show-password" }  onClick={()=> setIsvisible(!isVisible)}></span>
            </div>

            <div className="remember-and-reset">
                <div className="remember-me">
                <input tabIndex={0} id="remember" type="checkbox" name="remember" checked={true}/>
                <label htmlFor="remember">
                <span>Remember me?</span>
                </label>
                </div>
                <a className="hyperlink" href="/forgot-password">Forgot password?</a>
            </div>

            <div className="cta-loader">
                <div className="loading cta invisible">
                    <picture className="">
                    <img id="" alt="" className=" lazyloaded" data-cy="" data-src="/img/components/loader-cta.svg" loading="lazy" src="/img/components/loader-cta.svg"/>
                    </picture>
                </div>
                <input tabIndex={0} type="submit" className="button login-button main js-submit" value="Log In" />
            </div>

            <p>Don't have an account? <a className="hyperlink" href="/sign-up">Sign up</a></p> */}

            <div className="input-combo">
                <div className="input-wrapper first-name">
                    <label htmlFor="firstName">First name</label>
                    <input autoFocus={true} tabIndex={1} id="firstName" type="text" name="first_name" data-prefill-field="firstName" required onChange={(e)=> setFirstName(e.currentTarget.value)} />
                </div>
                <div className="input-wrapper last-name">
                    <label htmlFor="lastName">Last name</label>
                    <input tabIndex={2} id="lastName" type="text" name="last_name" data-prefill-field="lastName" required />
                </div>
            </div>

            <div className="input-wrapper email">
                <label htmlFor="email">Email address</label>
                <input 
                    tabIndex={3} 
                    id="email" 
                    type="email" 
                    pattern="[^@]+@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9\-]+" 
                    name="email" 
                    data-name="Email Address" 
                    data-validate="email"
                    required 
                    onChange={(e)=> setEmailAddress(e.currentTarget.value.trim())}
                />
            </div>

            <div className="input-combo">
                <div className="input-wrapper password js-password-input" style={{position: 'relative'}}>
                    <label htmlFor="password">Password</label>
                    <input autoComplete="off" tabIndex={4} id="password" className="password" type="password" name="password" data-name="Password" data-related="password_confirmation" data-validate="password" required onChange={(e) => setPassword(e.currentTarget.value)} />
                    <p className="password-help js-password-help hidden">
                    Password must be 8 characters long, contain an uppercase and lowercase letter, a number, and a symbol
                    </p>
                    <span className="password-visibility js-show-password"></span>
                </div>

                <div className="input-wrapper password" style={{position: 'relative'}}>
                    <label htmlFor="passwordConfirmation">Confirm Password</label>
                    <input autoComplete="off" tabIndex={5} id="passwordConfirmation" type="password" name="password_confirmation" data-match="password" data-validate="match" required />
                    <span className="password-visibility js-show-password"></span>
                </div>
            </div>

            <div className="input-wrapper t-and-c">
                <span>
                By clicking Sign Up, you agree to PuppySpot’s
                <a className="hyperlink" target="_blank" href="https://www.puppyspot.com/terms-of-use" rel="noopener noreferrer"> Terms of Use </a>
                and
                <a className="hyperlink" target="_blank" href="https://www.puppyspot.com/privacy" rel="noopener noreferrer"> Privacy Policy </a>.
                </span>
            </div>

            <div className="cta-loader">
                <div className="loading cta invisible">
                    <picture className="">
                    <img id="" alt="" className=" lazyloaded" data-cy="" data-src="https://www.puppyspot.com/assets/img/components/loader-cta.svg" loading="lazy" src="https://www.puppyspot.com/assets/img/components/loader-cta.svg" />
                    </picture>
                </div>
                <input tabIndex={6} type="submit" className="button main js-submit" value="Sign Up" />
            </div>

            <p>Already have an account? <a className="hyperlink" href="https://www.puppyspot.com/log-in">Click here to log in</a></p>

        </form>

    </main>
  );
}

export default Signup;
