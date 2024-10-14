import "./index.css"
import { PiInstagramLogoBold } from "react-icons/pi";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { navbar, pages, socials, sub_domain } from "../../contants/routes";

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
                  data-src="/svg/logo-stacked.svg"
                  loading="lazy"
                  width="128"
                  height="92.3"
                  src="/svg/logo-stacked.svg"
                />
              </picture>
            </li>
            <li>
              <span>Call Us: </span>
              <a href={navbar.PHONE_WHATSAPP} className="hyperlink">
                (502) 382-0019
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-nav__content">
          <div>
            <p className="footer-nav__header">Find A Puppy</p>
            <ul className="footer-nav__list footer-nav__list-main">
              <li>
                <a href={pages.PUPPIES_FOR_SELL}>
                  View All Puppies
                </a>
              </li>
              <li>
                <a href={pages.COLLECTIONS}>
                  View All Characteristics
                </a>
              </li>
              <li>
                <a
                  className="button main footer_breed_match_quiz"
                  href={pages.BREED_QUIZ}
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
                <a href={pages.LOGIN}>Log In</a>
              </li>
              <li>
                <a href={pages.SIGNUP}>Sign Up</a>
              </li>
              <li>
                <a href={sub_domain.HELP} target="_blank">
                  Support
                </a>
              </li>
              <li>
                <a href={pages.SPECIAL_OFFERS}>
                  Special Offers
                </a>
              </li>
              <li>
                <a
                  href={sub_domain.BREEDER_LOGIN}
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
                <a href={pages.ABOUT_US}>About Us</a>
              </li>
              <li>
                <a href={pages.PROMISE}>
                  The PuppySpot Promise
                </a>
              </li>
              <li>
                <a href={pages.CAREERS}>Careers</a>
              </li>
              <li>
                <a href={pages.DOG_REGISTRATION}>
                  Dog Registration
                </a>
              </li>
              <li>
                <a href={pages.AKC}>AKC Reunite</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-nav__header">Social Media</p>
            <ul className="footer-nav__list footer-nav__list-social">
                <li>
                    <a target="_blank" href={socials.INSTAGRAM} rel="noopener noreferrer" className="footer_social_media_instagram">
                        <PiInstagramLogoBold />
                    </a>
                </li>
                <li>
                    <a target="_blank" href={socials.FACEBOOK} rel="noopener noreferrer" className="footer_social_media_facebook">
                        <FaFacebookSquare />
                    </a>
                </li>
                <li>
                    <a target="_blank" href={socials.TWITTER} rel="noopener noreferrer" className="footer_social_media_twitter">
                        <FaTwitter />
                    </a>
                </li>
                <li>
                    <a target="_blank" href={socials.PINTREST} rel="noopener noreferrer" className="footer_social_media_pinterest">
                        <FaPinterest />
                    </a>
                </li>
                <li>
                  <a target="_blank" href={socials.YOUTUBE} rel="noopener noreferrer" className="footer_social_media_youtube">
                    <FaYoutube />
                  </a>
                </li>
                <li>
                    <a target="_blank" href={socials.LINKEDIN} rel="noopener noreferrer" className="footer_social_media_linkedin">
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
                  srcSet="/img/payment/amex.webp"
                  type="image/webp"
                />
                <source
                  srcSet="/img/payment/amex.avif"
                  type="image/avif"
                />
                <source
                  srcSet="/img/payment/amex.png"
                  type="image/png"
                />
                <img
                  id=""
                  alt=""
                  className=" ls-is-cached lazyloaded"
                  data-cy=""
                  data-src="/img/payment/amex.png"
                  loading="lazy"
                  width="19"
                  height="20"
                  src="/img/payment/amex.png"
                />
              </picture>
            </li>
            <li>
              <picture className="">
                <source
                  srcSet="/img/payment/discover.webp"
                  type="image/webp"
                />
                <source
                  srcSet="/img/payment/discover.avif"
                  type="image/avif"
                />
                <source
                  srcSet="/img/payment/discover.png"
                  type="image/png"
                />
                <img
                  id=""
                  alt=""
                  className=" ls-is-cached lazyloaded"
                  data-cy=""
                  data-src="/img/payment/discover.png"
                  loading="lazy"
                  width="48"
                  height="8"
                  src="/img/payment/discover.png"
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
                  data-src="/img/payment/mastercard.svg"
                  loading="lazy"
                  width="30"
                  height="22"
                  src="/img/payment/mastercard.svg"
                />
              </picture>
            </li>
            <li>
              <picture className="">
                <source
                  srcSet="/img/payment/visa.webp"
                  type="image/webp"
                />
                <source
                  srcSet="/img/payment/visa.avif"
                  type="image/avif"
                />
                <source
                  srcSet="/img/payment/visa.png"
                  type="image/png"
                />
                <img
                  id=""
                  alt=""
                  className=" ls-is-cached lazyloaded"
                  data-cy=""
                  data-src="/img/payment/visa.png"
                  loading="lazy"
                  width="31"
                  height="10"
                  src="/img/payment/visa.png"
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
                  data-src="/img/payment/paypal.svg"
                  loading="lazy"
                  width="61"
                  height="16"
                  src="/img/payment/paypal.svg"
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
                  data-src="/img/payment/paypal-credit.svg"
                  loading="lazy"
                  width="52"
                  height="18"
                  src="/img/payment/paypal-credit.svg"
                />
              </picture>
            </li>
          </ul>
        </div>
        <div className="footer-nav__list footer-nav__list-terms">
          <ul>
            <li>
              <a href={pages.PRIVACY_POLICY}>Privacy</a>
            </li>
            <li>
              <a href={pages.TERMS_OR_SERVICE}>Terms of Use</a>
            </li>
            <li>
              <a href={pages.SITE_MAP}>Sitemap</a>
            </li>
            <li>© 2024 PuppySpot</li>
          </ul>
          <div className="footer-nav__bbb">
            <a
              id="bbblink"
              className="sehzbum"
              href={pages.BBB}
              title="PuppySpot Group, LLC is a BBB Accredited Pet Service in Hollywood, FL"
              style={{ padding: "0px", margin: "0px" }}
            >
              <picture className="">
                <img
                  id="bbblinkimg"
                  alt=""
                  className=" ls-is-cached lazyloaded"
                  data-cy=""
                  data-src="/img/puppyspot-group-22003405.png"
                  style={{ padding: "0px", border: "medium" }}
                  loading="lazy"
                  src="/img/puppyspot-group-22003405.png"
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