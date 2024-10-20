import React, { useEffect, useState } from 'react';
import '../styles/login.css'

interface Props{
}
const Login: React.FC<Props> = ({}) => {

    useEffect(() =>{
        document.title = "Log into your account | PuppySpot";
    }, []);

    const [isVisible, setIsvisible] = useState(false)

  return (
    <main className='authentication authentication__page log-in'>
        <h2>Discover, learn about, and find your new puppy!</h2>

        <form action="" className='js-form-validate authentication__container'>

            <h3 className="login-title">Log in to PuppySpot</h3>

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

            <div className="input-wrapper outlined-input email">
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

            <p>Don't have an account? <a className="hyperlink" href="/sign-up">Sign up</a></p>

        </form>
    
    </main>
  );
}

export default Login;
