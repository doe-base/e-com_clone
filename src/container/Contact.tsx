import React from 'react';
import '../styles/contact-us.css'
import { navbar, pages } from '../contants/routes'

interface Props{
}
const ContactUsContainer: React.FC<Props> = ({}) => {
  const number = process.env.REACT_APP_US_NUMBER_FORMARTED
  return (
    <div className="contact-us__page">
        <div className="contact-us__component">
          <picture className="">
              <img id="" alt="" className="contact-us__image lazyloaded" data-cy="" data-src="/img/components/contact-us/envelope.svg" loading="lazy" src="/img/components/contact-us/envelope.svg"/>
          </picture>

          <h3 style={{margin: '1rem 0'}}>Contact Us</h3>
          <h1 style={{margin: '1rem 0'}} className="strong">Need help?</h1>
          <p>
              Visit our <a className="hyperlink" href="">Help Center</a> where we answer all questions
              related to finding and preparing for your puppy’s arrival.
          </p>
          <p>You can also reach our team by email or phone for additional support: <a className="hyperlink" href="mailto:support@puppyspotadoption.shop">support@puppyspotadoption.shop</a> | <a className="hyperlink" href={navbar.PHONE_WHATSAPP}>{number}</a></p>
          <p>Please direct all press inquiries to <a className="hyperlink" href="mailto:support@puppyspotadoption.shop">support@puppyspotadoption.shop</a>
          </p>
      </div>
    </div>
  );
}

export default ContactUsContainer;
