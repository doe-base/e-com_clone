import React, { useEffect, useState } from "react";
import "./index.css";
import { account, pages } from "../../../contants/routes";

interface Props {
  emailSentPopup: boolean;
  setEmailSentPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
const EmailSentPopup: React.FC<Props> = ({
  emailSentPopup,
  setEmailSentPopup,
}) => {
    const closeModal =()=>{
        setEmailSentPopup(false)
    }
    const openPage =()=>{
        window.location.replace(pages.LOGIN);
    }

  return (
    <div className={`white-modal js-white-modal white-modal--success ${emailSentPopup || 'hidden'}`}>
      <div className="white-modal__wrapper">
        <div className="white-modal__close">
          <a className="js-close-modal" onClick={closeModal}>
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
          <section className="js-auth-modal-success">
            <div className="js-success-message success-message authentication__success ">
              <div className="success-message__symbol"></div>
              <h3 className="success-message__title">
                Password Reset Email Sent!
              </h3>
              <p className="success-message__message">
                Please check your email and follow the instructions to reset your password.
              </p>
            </div>
            <button onClick={openPage} className="button main js-continue">Back to Log in </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default EmailSentPopup;
