import React, { useEffect, useState } from "react";
import "./index.css";
import { account } from "../../../contants/routes";

interface Props {
  thanksForSignupPopup: boolean;
  setThanksForSignupPopup: React.Dispatch<React.SetStateAction<boolean>>;
}
const ThanksForSignupPopup: React.FC<Props> = ({
  thanksForSignupPopup,
  setThanksForSignupPopup,
}) => {
    const closeModal =()=>{
        setThanksForSignupPopup(false)
    }
    const openPage =()=>{
        window.location.replace(account.ACCOUNT);
    }

  return (
    <div className={`white-modal js-white-modal white-modal--success ${thanksForSignupPopup || 'hidden'}`}>
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
                Thank you for creating an account!
              </h3>
              <p className="success-message__message">
                Please check your email and click on the account confirmation link to
                be able to access your account.
              </p>
            </div>
            <button onClick={openPage} className="button main js-continue">Continue</button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ThanksForSignupPopup;
