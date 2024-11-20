import React, { useContext, useEffect, useState } from 'react';
import '../styles/login.css'
import { FirebaseContext } from '../context/firebase';
import { GoogleAuthProvider, sendEmailVerification } from "firebase/auth";
import { account, pages } from '../contants/routes';
import AlertPopup from '../components/alert-popup/AlertPopup';
import EmailSentPopup from '../components/popups/signup-popups/EmailSent';


interface Props{
}
const ForgotPassword: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "Forgot Your Password? | PuppySpot";
    }, []);

    const { firebase } = useContext(FirebaseContext)
    const [emailAddress, setEmailAddress] = useState(JSON.parse(localStorage.getItem('user') || '{}').email || '')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [alertMode, setAlertMode] = useState<boolean>(false)
    const [emailSentPopup, setEmailSentPopup] = useState(false)

    function sendPasswordResetEmail(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault()
      setLoading(true)
      if(!firebase){return}
      firebase.auth().sendPasswordResetEmail(emailAddress)
          .then(() => {
            setEmailSentPopup(true)
          })
          .catch((error) => {
            setAlert(true)
            setAlertMessage('Something went wrong!')
            setAlertMode(false)
            setError(error)
          })
          .finally(()=>{
            setLoading(false);
          })
    }


  return (
    <>
      <main className='authentication authentication__page log-in'>
          <h2>Discover, learn about, and find your new puppy!</h2>

          <form onSubmit={sendPasswordResetEmail} className="js-form-validate authentication__container">
              <input type="hidden" name="_token" value="KWMMZevY6TDFllXQwkDX375bMEvcDiz49fT7efdb" autoComplete="off" />            
              <h3>Forgot your password?</h3>
              <p style={{textAlign: 'left'}}>Enter your email address and we will send you instructions to reset your password.</p>
              <div className="input-wrapper email">
                  <label htmlFor="email">Email address</label>
                  <input 
                    tabIndex={1} 
                    id="email" 
                    className="" 
                    type="email" 
                    pattern="[^@]+@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9\-]+" 
                    name="email" 
                    data-name="Email Address" 
                    data-error="" 
                    data-prefill-field="email" 
                    data-validate="required,email"
                    value={emailAddress} 
                    onChange={(e)=> setEmailAddress(e.currentTarget.value)}
                    required
                  />
              </div>
              <div className="cta-loader">
                  <div className={`loading cta ${loading || 'invisible'}`}>
                    <picture className="">
                      <img id="" alt="" className=" lazyloaded" data-cy="" data-src="/img/loader-cta.svg" loading="lazy" src="/img/loader-cta.svg"/>
                    </picture>
                  </div>
                  <input type="submit" className="button main js-submit" value="Submit" tabIndex={2} />
              </div>
              <p style={{textAlign: 'left'}}>Don't have an account? <a className="hyperlink" href={pages.SIGNUP}>Click here to sign up</a></p>
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
      <EmailSentPopup emailSentPopup={emailSentPopup} setEmailSentPopup={setEmailSentPopup}/>
    </>
  );
}

export default ForgotPassword;
