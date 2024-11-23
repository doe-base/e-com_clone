import React, { useContext, useEffect, useState } from 'react';
import '../styles/login.css'
import { FirebaseContext } from '../context/firebase';
import { GoogleAuthProvider, sendEmailVerification } from "firebase/auth";
import { account } from '../contants/routes';
import AlertPopup from '../components/alert-popup/AlertPopup';


interface Props{
}
const Login: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "Log into your account | PuppySpot";
    }, []);

    const { firebase } = useContext(FirebaseContext)
    const provider = new GoogleAuthProvider();
    const [emailAddress, setEmailAddress] = useState(JSON.parse(localStorage.getItem('user') || '{}').email || '')
    const [password, setPassword] = useState(JSON.parse(localStorage.getItem('user') || '{}').code || '')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [rememberMe, setRemeberMe] = useState(true)
    const [isVisible, setIsvisible] = useState(false)
    const [alert, setAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [alertMode, setAlertMode] = useState<boolean>(false)

    const handlesignin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (!firebase) {
          return;
        }
        
        setLoading(true);
        const trimmedEmail = emailAddress.trim();
        const trimmedPassword = password.trim();

        try {
          const userCredential = await firebase
            .auth()
            .signInWithEmailAndPassword(trimmedEmail, trimmedPassword);
          
            const userUid = userCredential.user?.uid;
      
            if (userUid) {
              const customerDoc = await firebase
                .firestore()
                .collection('customers')
                .where('email', '==', trimmedEmail)
                .get();
        
              if (!customerDoc.empty) {
                localStorage.setItem('user', JSON.stringify({
                    user: userUid, 
                    first_name: customerDoc.docs[0].data().first_name, 
                    last_name: customerDoc.docs[0].data().last_name, 
                    email: customerDoc.docs[0].data().email, 
                    phone: customerDoc.docs[0].data().phone,
                    address1: customerDoc.docs[0].data().address1,
                    address2: customerDoc.docs[0].data().address2,
                    city: customerDoc.docs[0].data().city,
                    state: customerDoc.docs[0].data().state,
                    zip: customerDoc.docs[0].data().zip,
                    country: customerDoc.docs[0].data().country,
                    code: rememberMe && customerDoc.docs[0].data().code,
                    from: 'email_password'
                }))
                window.location.replace(account.ACCOUNT);
              } else {
                setAlert(true)
                setAlertMessage('Something went wrong!')
                setAlertMode(false)
                setError(error)
              }
            }
            setLoading(false);
      
        } catch (error: any) {
          setLoading(false);
          setAlert(true)
          setAlertMessage('Something went wrong!')
          setAlertMode(false)
          setError(error)
        }
     };


    const signInWithGoogle = async () => {
      if (!firebase) return;
    
      setLoading(true);
    
      try {
        const result = await firebase.auth().signInWithPopup(provider);
        const user = result.user;
        const userUid = user?.uid;
        if (user) {
          const customerDoc = await firebase
            .firestore()
            .collection('customers')
            .where('id', '==', userUid)
            .get();
    
          if (!customerDoc.empty) {
            localStorage.setItem(
              'user',
              JSON.stringify({
                user: userUid,
                first_name: customerDoc.docs[0].data().first_name,
                last_name: customerDoc.docs[0].data().last_name,
                email: customerDoc.docs[0].data().email,
                phone: customerDoc.docs[0].data().phone,
                address1: customerDoc.docs[0].data().address1,
                address2: customerDoc.docs[0].data().address2,
                city: customerDoc.docs[0].data().city,
                state: customerDoc.docs[0].data().state,
                zip: customerDoc.docs[0].data().zip,
                country: customerDoc.docs[0].data().country,
                code: rememberMe && customerDoc.docs[0].data().code,
                from: 'google_auth',
              })
            );
            window.location.replace(account.ACCOUNT);
          } else {
            setAlert(true);
            setAlertMessage('Something went wrong!');
            setAlertMode(false);
          }
        }
      } catch (error: any) {
        setAlert(true);
        setAlertMessage('Something went wrong!');
        setAlertMode(false);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    


  return (
    <>
      <main className='authentication authentication__page log-in'>
          <h2>Discover, learn about, and find your new puppy!</h2>

          <form onSubmit={handlesignin} className='js-form-validate authentication__container'>

              <h3 className="login-title">Log in to PuppySpot</h3>

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

              <div className="input-wrapper outlined-input email">
                  <input 
                      autoFocus={true}
                      autoComplete="off"
                      tabIndex={0}
                      type="email"
                      id="log-in__email"
                      pattern="[^@]+@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9\-]+"
                      name="email"
                      data-name="Email Address"
                      data-validate="required,email"
                      placeholder=""
                      data-tid="emailTextInput"
                      className="floating-input"
                      value={emailAddress}
                      onChange={(e)=> setEmailAddress(e.currentTarget.value)}
                      required
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
                      value={password}
                      onChange={(e)=> setPassword(e.currentTarget.value)}
                      required
                  />
                    <label htmlFor="log-in__password" className="floating-label">Password</label>
                  <span className={isVisible ? "password-visibility js-show-password visible" : "password-visibility js-show-password" }  onClick={()=> setIsvisible(!isVisible)}></span>
              </div>

              <div className="remember-and-reset">
                  <div className="remember-me">
                  <input tabIndex={0} id="remember" type="checkbox" name="remember" checked={rememberMe} onClick={()=>{setRemeberMe(!rememberMe)}}/>
                  <label htmlFor="remember">
                  <span>Remember me?</span>
                  </label>
                  </div>
                  <a className="hyperlink" href={account.FORGOT_PASSWORD}>Forgot password?</a>
              </div>

              <div className="cta-loader">
                  <div className={`loading cta ${loading ? '' : 'invisible'}`}>
                      <picture className="">
                      <img id="" alt="" className=" lazyloaded" data-cy="" data-src="/img/loader-cta.svg" loading="lazy" src="/img/loader-cta.svg" />
                      </picture>
                  </div>  
                  <input tabIndex={0} type="submit" className="button login-button main js-submit" value="Log In" />
              </div>

              <p>Don't have an account? <a className="hyperlink" href="/sign-up">Sign up</a></p>

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

export default Login;
