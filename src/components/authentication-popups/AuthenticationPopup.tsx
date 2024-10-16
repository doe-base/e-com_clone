import React from "react";
import "./index.css";

interface Props {}
const AuthenticationPopup: React.FC<Props> = ({}) => {
  return (
    <div className="white-modal js-white-modal authentication__modal authentication hidden">
      <div className="white-modal__wrapper">
        <div className="white-modal__close">
          <a className="js-close-modal">
            <picture className="">
              <img
                loading="lazy"
                alt=""
                id=""
                className=""
                src="https://www.puppyspot.com/assets/img/puppy-listings/menu-close.svg"
              />
            </picture>
          </a>
        </div>
        <div className="white-modal__content">
          <form
            className="js-form-validate js-auth-modal-sign-up"
            action="https://www.puppyspot.com/sign-up"
            method="POST"
            data-action="sign-up"
            data-post-action="showSuccess"
          >
            <h3>Sign up to find your new puppy</h3>
            <div className="authentication__social">
              <a
                className="button ghost"
                href="https://www.puppyspot.com/auth/google"
              >
                <svg>
                  {/* <use xlink:href="/assets/img/spritemap.svg#sprite-google"></use> */}
                </svg>
                <span>Continue with Google</span>
              </a>
              <a
                className="button blue-facebook"
                href="https://www.puppyspot.com/auth/facebook"
              >
                <img src="https://www.puppyspot.com/assets/img/facebook-icon-white.svg" />
                <span>Continue with Facebook</span>
              </a>
            </div>
            {/* <script>
        document.querySelectorAll('.authentication__social>.button')?.forEach((button) => {
            button.addEventListener('click', () => {
                statsig.logEvent(
                    button.className.includes('facebook') ? 'session_start_facebook' : 'session_start_google'
                );
            })
        })
    </script> */}
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
                  autoFocus={false}
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
                  autoComplete="off"
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
                  autoComplete="off"
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
          </form>
          <form
            className="js-form-validate js-auth-modal-log-in hidden"
            action="https://www.puppyspot.com/log-in"
            method="POST"
            data-action="log-in"
          >
            <div className="save-account hidden">
              <div className="js-success-message success-message save-information__success hidden">
                <div className="success-message__symbol"></div>
                <p className="success-message__message">
                  Thank you. Your form has been submitted.
                </p>
              </div>
              <hr />
            </div>
            <h3 className="login-title">Log in to PuppySpot</h3>
            <div className="authentication__social">
              <a
                className="button ghost"
                href="https://www.puppyspot.com/auth/google"
              >
                <svg>
                  {/* <use xlink:href="/assets/img/spritemap.svg#sprite-google"></use> */}
                </svg>
                <span>Continue with Google</span>
              </a>
              <a
                className="button blue-facebook"
                href="https://www.puppyspot.com/auth/facebook"
              >
                <img src="https://www.puppyspot.com/assets/img/facebook-icon-white.svg" />
                <span>Continue with Facebook</span>
              </a>
            </div>
            {/* <script>
        document.querySelectorAll('.authentication__social>.button')?.forEach((button) => {
            button.addEventListener('click', () => {
                statsig.logEvent(
                    button.className.includes('facebook') ? 'session_start_facebook' : 'session_start_google'
                );
            })
        })
    </script> */}
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
                autoComplete="off"
                tabIndex={0}
                type="text"
                id="log-in__email"
                pattern="[^@]+@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9\-]+"
                name="email"
                data-name="Email Address"
                data-validate="required,email"
                placeholder=" "
                data-tid="emailTextInput"
              />
              <label htmlFor="log-in__password">Email</label>
            </div>
            <div className="input-wrapper outlined-input password">
              <input
                autoComplete="off"
                tabIndex={0}
                id="log-in__password"
                placeholder=" "
                type="password"
                name="password"
                data-name="Password"
                data-validate="required"
              />
              <label htmlFor="log-in__password">Password</label>
              <span className="password-visibility js-show-password"></span>
            </div>
            <div className="remember-and-reset">
              <div className="remember-me">
                <input
                  tabIndex={0}
                  id="remember"
                  type="checkbox"
                  name="remember"
                  checked={false}
                />
                <label htmlFor="remember">
                  <span>Remember me?</span>
                </label>
              </div>
              <a
                className="hyperlink"
                href="https://www.puppyspot.com/forgot-password"
              >
                Forgot password?
              </a>
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
                className="button login-button main js-submit"
                value="Log In"
              />
            </div>
            <input
              type="hidden"
              name="order_id"
              data-prefill-field="order"
              value="803952"
            />
            {/* <script>
        document.querySelector('.login-button.js-submit').addEventListener('click', () => {
            statsig.logEvent(
                'session_start_email'
            );
        })
    </script> */}
            <p className="js-sign-up-link">
              Don't have an account?{" "}
              <a className="hyperlink js-form-change" href="javascript:void(0)">
                Click here to sign up
              </a>
            </p>
          </form>
          <form
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
          </form>
          <section className="js-auth-modal-success hidden">
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPopup;
