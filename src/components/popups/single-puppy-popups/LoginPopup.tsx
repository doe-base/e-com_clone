import React, { useContext, useEffect, useState } from 'react';
import "../../../styles/popup/login-popup.css";
import { FirebaseContext } from '../../../context/firebase';
import { GoogleAuthProvider, sendEmailVerification } from "firebase/auth";
import { account } from '../../../contants/routes';
import AlertPopup from '../../../components/alert-popup/AlertPopup';



interface Props {
  loginPopup: boolean;
  setLoingPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoginPopup: React.FC<Props> = ({
  loginPopup,
  setLoingPopup,
}) => {
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

              setLoingPopup(false)
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
          )
          setLoingPopup(false)
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
      <div
        className={`white-modal js-white-modal authentication__modal authentication ${
          loginPopup ? "" : "hidden"
        }`}
      >
        <div className="white-modal__wrapper">

          <div className="white-modal__close">
            <a className="js-close-modal" onClick={()=> setLoingPopup(false)}>
              <picture className="">
                <img
                  loading="lazy"
                  alt=""
                  id=""
                  className=""
                  src="/img/puppy-listings/menu-close.svg"
                />
              </picture>
            </a>
          </div>

          <div className="white-modal__content">

            {/* <form
              className="js-form-validate js-auth-modal-sign-up hidden"
              action="/sign-up"
              method="POST"
              data-action="sign-up"
              data-post-action="showSuccess"
            >
              <h3>Sign up to find your new puppy</h3>
              <div className="authentication__social">
                <a
                  className="button ghost"
                  href="https://www.puppyspot.com/auth/google?favorite_puppy_id=768727&amp;redirect_url=%2Fpuppies-for-sale%2Fbreed%2Fcocker-spaniel%2Fpuppy%2F768727"
                >
                  <svg>
                    <use href="/assets/img/spritemap.svg#sprite-google"></use>
                  </svg>
                  <span>Continue with Google</span>
                </a>
                <a
                  className="button blue-facebook"
                  href="https://www.puppyspot.com/auth/facebook?favorite_puppy_id=768727&amp;redirect_url=%2Fpuppies-for-sale%2Fbreed%2Fcocker-spaniel%2Fpuppy%2F768727"
                >
                  <img src="https://www.puppyspot.com/assets/img/facebook-icon-white.svg" />
                  <span>Continue with Facebook</span>
                </a>
              </div>

              <div className="authentication__divider">
                <hr />
                <span>or</span>
                <hr />
              </div>

              <div className="error-container js-error-container">
                <span></span>
              </div>

              <div className="input-combo">
                <div className="input-wrapper first-name">
                  <label htmlFor="firstName">First name</label>
                  <input
                    autoFocus={true}
                    tabIndex={1}
                    id="firstName"
                    type="text"
                    name="first_name"
                    data-prefill-field="firstName"
                    data-validate="required"
                  />
                </div>
                <div className="input-wrapper last-name">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    tabIndex={2}
                    id="lastName"
                    type="text"
                    name="last_name"
                    data-prefill-field="lastName"
                    data-validate="required"
                  />
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
                  data-validate="required,email"
                />
              </div>
              <div className="input-combo">
                <div className="input-wrapper password js-password-input">
                  <label htmlFor="password">Password</label>
                  <input
                    autoComplete=""
                    tabIndex={4}
                    id="password"
                    className="password"
                    type="password"
                    name="password"
                    data-name="Password"
                    data-related="password_confirmation"
                    data-validate="required,password"
                  />
                  <p className="password-help js-password-help hidden">
                    Password must be 8 characters long, contain an uppercase and
                    lowercase letter, a number, and a symbol
                  </p>
                  <span className="password-visibility js-show-password"></span>
                </div>
                <div className="input-wrapper password">
                  <label htmlFor="passwordConfirmation">Confirm Password</label>
                  <input
                    autoComplete=""
                    tabIndex={5}
                    id="passwordConfirmation"
                    type="password"
                    name="password_confirmation"
                    data-match="password"
                    data-validate="required,match"
                  />
                  <span className="password-visibility js-show-password"></span>
                </div>
              </div>
              <div className="input-wrapper t-and-c">
                <span>
                  By clicking Sign Up, you agree to PuppySpot’s
                  <a
                    className="hyperlink"
                    target="_blank"
                    href="https://www.puppyspot.com/terms-of-use"
                    rel="noopener noreferrer"
                  >
                    Terms of Use
                  </a>
                  and
                  <a
                    className="hyperlink"
                    target="_blank"
                    href="https://www.puppyspot.com/privacy"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  .
                </span>
              </div>
              <div className="cta-loader">
                <div className="loading cta invisible">
                  <picture className="">
                    <img
                      id=""
                      alt=""
                      className="lazyload "
                      data-cy=""
                      data-src="https://www.puppyspot.com/assets/img/components/loader-cta.svg"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <input
                  tabIndex={6}
                  type="submit"
                  className="button main js-submit"
                  value="Sign Up"
                />
              </div>

              <input
                type="hidden"
                name="order_id"
                data-prefill-field="order"
                value="803952"
              />
              <p>
                Already have an account?{" "}
                <a className="hyperlink js-form-change">Click here to log in</a>
              </p>
            </form> */}


            <form
              className="js-form-validate js-auth-modal-log-in"
              onSubmit={handlesignin}
              method="POST"
              data-action="log-in"
            >
              {/* <div className="save-account hidden">
                <div className="js-success-message success-message save-information__success hidden">
                  <div className="success-message__symbol"></div>
                  <p className="success-message__message">
                    Thank you. Your form has been submitted.
                  </p>
                </div>
                <hr />
              </div> */}

              <h3 className="login-title">Log in to PuppySpot</h3>
              <div className="authentication__social">
                <a
                  className="button ghost"
                  onClick={signInWithGoogle}
                >
                  <img src="/img/googl-logo.svg" alt="" style={{width: '1.8rem', height: '1.8rem'}}/>
                  <span>Continue with Google</span>
                </a>
                <a
                  className="button blue-facebook"
                >
                  <img src="/img/facebook-icon-white.svg" />
                  <span>Continue with Facebook</span>
                </a>
              </div>

              <div className="authentication__divider">
                <hr />
                <span>or</span>
                <hr />
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
                       id="log-in__email2"
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
                      id="log-in__password2"
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
                  <input
                    tabIndex={0} 
                    id="remember" 
                    type="checkbox" 
                    name="remember" 
                    checked={rememberMe} 
                    onClick={()=>{setRemeberMe(!rememberMe)}}
                  />
                  <label htmlFor="remember">
                    <span>Remember me?</span>
                  </label>
                </div>
                <a
                  className="hyperlink"
                  href={account.FORGOT_PASSWORD}
                >
                  Forgot password?
                </a>
              </div>

              <div className="cta-loader">
                <div className={`loading cta ${loading ? '' : 'invisible'}`}>
                  <picture className="">
                    <img
                      id=""
                      alt=""
                      className=" lazyloaded"
                      data-cy=""
                      data-src="/img/loader-cta.svg"
                      loading="lazy"
                      src="/img/loader-cta.svg"
                    />
                  </picture>
                </div>
                <input
                  tabIndex={0}
                  type="submit"
                  className="button login-button main js-submit"
                  value="Log In"
                />
              </div>

              {/* <input
                type="hidden"
                name="order_id"
                data-prefill-field="order"
                value="803952"
              /> */}

              <p className="js-sign-up-link">
                Don't have an account?{" "}
                <a className="hyperlink js-form-change" href="/sign-up">
                  Click here to sign up
                </a>
              </p>
            </form>


            {/* <form
              className="save-account js-form-validate js-auth-modal-save-account hidden"
              action="https://www.puppyspot.com/sign-up"
              method="POST"
              data-action="sign-up"
            >
              <div className="js-success-message success-message save-information__success hidden">
                <div className="success-message__symbol"></div>
                <p className="success-message__message">
                  Thank you! Please create a password to set up your PuppySpot
                  account.
                </p>
                <p className="text-center success-message__description">
                  Creating an account allows you to save and come back to all your
                  favorite puppies and keep track of any puppies that will be
                  joining your family.
                </p>
              </div>
              <section className="js-save-account__content">
                <hr />

                <input
                  type="hidden"
                  name="first_name"
                  data-prefill-field="firstName"
                  value="Zack"
                />
                <input
                  type="hidden"
                  name="last_name"
                  data-prefill-field="lastName"
                  value="Alisson"
                />
                <input
                  type="hidden"
                  name="email"
                  data-prefill-field="email"
                  value="zack@gmail.com"
                />
                <input
                  type="hidden"
                  name="order_id"
                  data-prefill-field="order"
                  value="803952"
                />

                <div className="error-container js-error-container">
                  <span></span>
                </div>

                <div className="input-wrapper password js-password-input">
                  <label htmlFor="save-account__password">Password</label>
                  <input
                    tabIndex={0}
                    id="save-account__password"
                    className="password"
                    type="password"
                    name="password"
                    data-name="Password"
                    data-related="password_confirmation"
                    data-validate="required,password"
                  />
                  <p className="password-help js-password-help hidden">
                    Password must be 8 characters long, contain an uppercase and
                    lowercase letter, a number, and a symbol
                  </p>
                  <span className="password-visibility js-show-password"></span>
                </div>
                <div className="input-wrapper password">
                  <label htmlFor="save-account__password-confirmation">
                    Confirm Password
                  </label>
                  <input
                    tabIndex={0}
                    id="save-account__password-confirmation"
                    type="password"
                    name="password_confirmation"
                    data-match="password"
                    data-validate="required,match"
                  />
                  <span className="password-visibility js-show-password"></span>
                </div>
                <div className="remember-me">
                  <input
                    tabIndex={0}
                    id="save-account__remember"
                    type="checkbox"
                    name="remember"
                  />
                  <label htmlFor="save-account__remember">
                    <span>Remember me?</span>
                  </label>
                </div>
                <div className="cta-loader">
                  <div className="loading cta invisible">
                    <picture className="">
                      <img
                        id=""
                        alt=""
                        className="lazyload "
                        data-cy=""
                        data-src="https://www.puppyspot.com/assets/img/components/loader-cta.svg"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <input
                    tabIndex={0}
                    type="submit"
                    className="button main js-submit"
                    value="Continue with account"
                  />
                </div>
              </section>
            </form> */}


            {/* <section className="js-auth-modal-success hidden">
              <div className="js-success-message success-message authentication__success hidden">
                <div className="success-message__symbol"></div>
                <h3 className="success-message__title">
                  Thank you for creating an account!
                </h3>
                <p className="success-message__message">
                  Please check your email and click on the account confirmation to
                  be able to access your account.
                </p>
              </div>
              <button className="button main js-continue">Continue</button>
            </section> */}
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
};

export default LoginPopup;
