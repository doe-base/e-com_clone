import React, { useState } from "react";
import AccountSidebar from "../components/account-components/AccountSidebar";
import { getAuth, sendEmailVerification } from "firebase/auth";
import AlertPopup from '../components/alert-popup/AlertPopup';
import { pages } from "../contants/routes";


interface Props {
  page: string;
  userEmail: string;
}
const MyAccountContainer: React.FC<Props> = ({page, userEmail}) => {
  const [alert, setAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertMode, setAlertMode] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
 
  const resendVerificationEmail = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    setLoading(true)
  
    if (user) {
      try {
        await sendEmailVerification(user);
        setAlert(true)
        setAlertMessage('Verification email sent successfully!')
        setAlertMode(true)

        setLoading(false)

        window.location.replace(pages.LOGIN)
      } catch (error) {
        setAlert(true)
        setAlertMessage('Error sending verification email!')
        setAlertMode(false)

        setLoading(false)
      }
    } else {
      setAlert(true)
      setAlertMessage('No user is currently signed in!')
      setAlertMode(false)

      setLoading(false)
    }
  };

  return (
    <>
      <main className="account">
        <AccountSidebar page={page}/>


        <div className="account__wrapper">
          <section className="account__content my-profile">
            <article className="info-group">
              <section className="info-group__content">
                <div className="editable-field js-editable-field">
                  <span className="editable-field__label">Email</span>
                  <div className="error-container js-editable-field__error hidden">
                    <span></span>
                  </div>
                  <div className="editable-field__display js-editable-field__display">
                    <div className="editable-field__wrapper editable-field__wrapper--error">
                      <span>
                        A link has been sent to {userEmail}, please
                        click on it to confirm your account
                      </span>
                      <a
                        href="javascript:void(0)"
                        className="editable-field__action js-editable-field__action"
                        data-action="resendVerification"
                        data-value={userEmail}
                        onClick={resendVerificationEmail}
                      >
                        Resend link
                      </a>
                      <div className={`loading cta ${loading || 'invisible'}`}>
                        <picture className="">
                          <img
                            loading="lazy"
                            alt=""
                            id=""
                            className=""
                            src="/img/loader-cta.svg"
                          />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </section>
        </div>

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
};

export default MyAccountContainer;
