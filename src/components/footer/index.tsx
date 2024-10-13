import "./index.css"
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

interface Props {}
const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className="footer-nav">
      <div className="footer-nav__container">
        <div className="footer-nav__top">
          <ul>
            <li>
              <picture className="">
                <img
                  id=""
                  alt=""
                  className="footer-nav__logo ls-is-cached lazyloaded"
                  data-cy=""
                  data-src="https://www.puppyspot.com/assets/svg/logo-stacked.svg"
                  loading="lazy"
                  width="128"
                  height="92.3"
                  src="https://www.puppyspot.com/assets/svg/logo-stacked.svg"
                />
              </picture>
            </li>
            <li>
              <span>Call Us: </span>
              <a href="tel:+18886710518" className="hyperlink">
                (888) 671-0518
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-nav__content">
          <div>
            <p className="footer-nav__header">Find A Puppy</p>
            <ul className="footer-nav__list footer-nav__list-main">
              <li>
                <a href="https://www.puppyspot.com/puppies-for-sale">
                  View All Puppies
                </a>
              </li>
              <li>
                <a href="https://www.puppyspot.com/collections">
                  View All Characteristics
                </a>
              </li>
              <li>
                <a
                  className="button main footer_breed_match_quiz"
                  href="https://www.puppyspot.com/breed-selector-quiz"
                >
                  Breed Match Quiz
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-nav__header">Customers</p>
            <ul className="footer-nav__list footer-nav__list-customers">
              <li>
                <a href="https://www.puppyspot.com/log-in">Log In</a>
              </li>
              <li>
                <a href="https://www.puppyspot.com/sign-up">Sign Up</a>
              </li>
              <li>
                <a href="https://help.puppyspot.com/" target="_blank">
                  Support
                </a>
              </li>
              <li>
                <a href="https://www.puppyspot.com/special-offers">
                  Special Offers
                </a>
              </li>
              <li>
                <a
                  href="https://hub.puppyspot.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Breeder Login
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-nav__header">About PuppySpot</p>
            <ul className="footer-nav__list footer-nav__list-about">
              <li>
                <a href="https://www.puppyspot.com/about-us">About Us</a>
              </li>
              <li>
                <a href="https://www.puppyspot.com/promise">
                  The PuppySpot Promise
                </a>
              </li>
              <li>
                <a href="https://www.puppyspot.com/careers">Careers</a>
              </li>
              <li>
                <a href="https://www.puppyspot.com/dog-registration">
                  Dog Registration
                </a>
              </li>
              <li>
                <a href="https://www.puppyspot.com/akc">AKC Reunite</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-nav__header">Social Media</p>
            <ul className="footer-nav__list footer-nav__list-social">
                <li>
                    <a target="_blank" href="https://instagram.com/puppy_spot" rel="noopener noreferrer" className="footer_social_media_instagram">
                        <PiInstagramLogoBold />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.facebook.com/puppyspot" rel="noopener noreferrer" className="footer_social_media_facebook">
                        <FaFacebookSquare />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://twitter.com/puppyspot" rel="noopener noreferrer" className="footer_social_media_twitter">
                        <FaTwitter />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.pinterest.com/puppyspot/" rel="noopener noreferrer" className="footer_social_media_pinterest">
                        <FaPinterest />
                    </a>
                </li>
                <li>
                    <FaYoutube />
                </li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/company/puppyspot" rel="noopener noreferrer" className="footer_social_media_linkedin">
                        <FaLinkedin />
                    </a>
                </li>
            </ul>
          </div>
        </div>
        <div className="footer-nav__payment">
          <ul>
            <li>
              <picture className="">
                <source
                  srcSet="https://www.puppyspot.com/assets/img/payment/amex.webp"
                  type="image/webp"
                />
                <source
                  srcSet="https://www.puppyspot.com/assets/img/payment/amex.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://www.puppyspot.com/assets/img/payment/amex.png"
                  type="image/png"
                />
                <img
                  id=""
                  alt=""
                  className=" ls-is-cached lazyloaded"
                  data-cy=""
                  data-src="https://www.puppyspot.com/assets/img/payment/amex.png"
                  loading="lazy"
                  width="19"
                  height="20"
                  src="https://www.puppyspot.com/assets/img/payment/amex.png"
                />
              </picture>
            </li>
            <li>
              <picture className="">
                <source
                  srcSet="https://www.puppyspot.com/assets/img/payment/discover.webp"
                  type="image/webp"
                />
                <source
                  srcSet="https://www.puppyspot.com/assets/img/payment/discover.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://www.puppyspot.com/assets/img/payment/discover.png"
                  type="image/png"
                />
                <img
                  id=""
                  alt=""
                  className=" ls-is-cached lazyloaded"
                  data-cy=""
                  data-src="https://www.puppyspot.com/assets/img/payment/discover.png"
                  loading="lazy"
                  width="48"
                  height="8"
                  src="https://www.puppyspot.com/assets/img/payment/discover.png"
                />
              </picture>
            </li>
            <li>
              <picture className="">
                <img
                  id=""
                  alt=""
                  className=" ls-is-cached lazyloaded"
                  data-cy=""
                  data-src="https://www.puppyspot.com/assets/img/payment/mastercard.svg"
                  loading="lazy"
                  width="30"
                  height="22"
                  src="https://www.puppyspot.com/assets/img/payment/mastercard.svg"
                />
              </picture>
            </li>
            <li>
              <picture className="">
                <source
                  srcSet="https://www.puppyspot.com/assets/img/payment/visa.webp"
                  type="image/webp"
                />
                <source
                  srcSet="https://www.puppyspot.com/assets/img/payment/visa.avif"
                  type="image/avif"
                />
                <source
                  srcSet="https://www.puppyspot.com/assets/img/payment/visa.png"
                  type="image/png"
                />
                <img
                  id=""
                  alt=""
                  className=" ls-is-cached lazyloaded"
                  data-cy=""
                  data-src="https://www.puppyspot.com/assets/img/payment/visa.png"
                  loading="lazy"
                  width="31"
                  height="10"
                  src="https://www.puppyspot.com/assets/img/payment/visa.png"
                />
              </picture>
            </li>
            <li>
              <picture className="">
                <img
                  id=""
                  alt=""
                  className=" ls-is-cached lazyloaded"
                  data-cy=""
                  data-src="https://www.puppyspot.com/assets/img/payment/paypal.svg"
                  loading="lazy"
                  width="61"
                  height="16"
                  src="https://www.puppyspot.com/assets/img/payment/paypal.svg"
                />
              </picture>
            </li>
            <li>
              <picture className="">
                <img
                  id=""
                  alt=""
                  className=" ls-is-cached lazyloaded"
                  data-cy=""
                  data-src="https://www.puppyspot.com/assets/img/payment/paypal-credit.svg"
                  loading="lazy"
                  width="52"
                  height="18"
                  src="https://www.puppyspot.com/assets/img/payment/paypal-credit.svg"
                />
              </picture>
            </li>
          </ul>
        </div>
        <div className="footer-nav__list footer-nav__list-terms">
          <ul>
            <li>
              <a href="https://www.puppyspot.com/privacy">Privacy</a>
            </li>
            <li>
              <a href="https://www.puppyspot.com/terms-of-use">Terms of Use</a>
            </li>
            <li>
              <a href="https://www.puppyspot.com/sitemap">Sitemap</a>
            </li>
            <li>© 2024 PuppySpot</li>
          </ul>
          <div className="footer-nav__bbb">
            <a
              id="bbblink"
              className="sehzbum"
              href="https://www.bbb.org/us/fl/fort-lauderdale/profile/pet-services/puppyspot-group-llc-0633-22003405"
              title="PuppySpot Group, LLC is a BBB Accredited Pet Service in Hollywood, FL"
              style={{ padding: "0px", margin: "0px" }}
            >
              <picture className="">
                <img
                  id="bbblinkimg"
                  alt=""
                  className=" ls-is-cached lazyloaded"
                  data-cy=""
                  data-src="https://seal-seflorida.bbb.org/logo/sehzbum/puppyspot-group-22003405.png"
                  style={{ padding: "0px", border: "medium" }}
                  loading="lazy"
                  src="https://seal-seflorida.bbb.org/logo/sehzbum/puppyspot-group-22003405.png"
                />
              </picture>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;