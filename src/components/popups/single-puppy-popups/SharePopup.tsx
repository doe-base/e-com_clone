import React, { useEffect, useState } from "react";
import "../../../styles/popup/share-popup.css";

interface Props {
  sharePopup: boolean;
  setSharePopup: React.Dispatch<React.SetStateAction<boolean>>;
}
const SharePopup: React.FC<Props> = ({ sharePopup, setSharePopup }) => {

      const title = encodeURIComponent(document.title) 
      const text = encodeURIComponent("Wanted to share this with you ")
      const  url = encodeURI(window.location.href)

      const handleShare = (shareUrl: string) => {
        window.open(
          shareUrl,
          "_blank",
          "width=500,height=500,noopener,noreferrer"
        );
      };

      const emailURL = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + url)}`;
      const twitterURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
      const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent("Check out this article: " + url)}`;
      const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      const pinterestURL = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent("IMAGE_URL")}&description=${encodeURIComponent(title)}`;
        

      const [buttonText, setButtonText] = useState("Copy Link");
      const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          
          setButtonText("Copied!");
    
          setTimeout(() => setButtonText("Copy Link"), 3000);
        } catch (error) {
          console.error("Failed to copy:", error);
        }
      };
    
  return (
    <div className={`ReactModalPortal ${
      sharePopup ? "" : "hidden"
    }`}>
      <div
        className="ReactModal__Overlay ReactModal__Overlay--after-open"
        style={{
          position: "fixed",
          inset: "0px",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            inset: "initial",
            border: "1px solid rgb(204, 204, 204)",
            background: "rgb(255, 255, 255)",
            overflow: "auto",
            borderRadius: "4px",
            outline: "none",
            padding: "0px",
            maxWidth: "955px",
            width: "100%",
            maxHeight: "calc(-80px + 100vh)",
          }}
          className="ReactModal__Content ReactModal__Content--after-open"
          tabIndex={-1}
          role="dialog"
          aria-label="Share Puppy"
          aria-modal="true"
        >
          <button className="styles-module__closeIcon--m4RIB" onClick={()=> setSharePopup(false)}>
            <img src="https://www.puppyspot.com/preact/./img/close-icon.svg" />
          </button>
          <div className="styles-module__modalContainer--Ros6J">
            <div className="styles-module__puppyDetail--gApxF">
              <img
                className="styles-module__img--YLJYM"
                src="https://photos.puppyspot.com/7/listing/768727/photo/503051080_medium.JPG"
                draggable="false"
              />
              <div className="styles-module__infoContainer--3DuTp">
                <p className="styles-module__puppyTitle--K6pRx">Ellis</p>
                <p className="styles-module__puppyDescription--IHf9s" style={{margin: '1rem 0'}}>
                  Cocker Spaniel
                </p>
                <div className="styles-module__puppyInformation--YVTOY">
                  <div>
                    <img
                      className="styles-module__icon--NFMMT"
                      src="https://www.puppyspot.com/preact/./img/gender-icon.svg"
                    />
                    <div className="styles-module__informationType--GUSIX">
                      Gender
                    </div>
                    <div className="styles-module__informationTitle--pkJLt">
                      Male
                    </div>
                  </div>
                  <div>
                    <img
                      className="styles-module__icon--NFMMT"
                      src="https://www.puppyspot.com/preact/./img/color-icon.svg"
                    />
                    <div className="styles-module__informationType--GUSIX">
                      Color
                    </div>
                    <div className="styles-module__informationTitle--pkJLt">
                      Buff &amp; White
                    </div>
                  </div>
                  <div>
                    <img
                      className="styles-module__icon--NFMMT"
                      src="https://www.puppyspot.com/preact/./img/age-icon.svg"
                    />
                    <div className="styles-module__informationType--GUSIX">
                      Age
                    </div>
                    <div className="styles-module__informationTitle--pkJLt">
                      22 Weeks
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="styles-module__shareContainerModal--ZzyQ-">
              <img
                className="styles-module__shareIconModal--5mZjy"
                src="https://www.puppyspot.com/preact/./img/share-icon-modal.svg"
              />
              <p className="styles-module__title--qJJ-e">
                Share Ellis With Friends
              </p>
              <div>
                <div className="styles-module__buttonWrapper--0ndoe">
                  <button onClick={handleCopy} className="shareButtonHandler">
                    <img
                      className="styles-module__buttonIcon--c12+Y"
                      src="https://www.puppyspot.com/preact/./img/copy-link.svg"
                      alt="Copy Link Icon"
                    />
                    {buttonText}
                  </button>
                  <button
                    onClick={()=>handleShare(emailURL)}
                    aria-label="email"
                    className="react-share__ShareButton shareButtonHandler"
                    style={{
                      backgroundColor: "transparent",
                      border: "medium",
                      padding: "0px",
                      font: "inherit",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      className="styles-module__buttonIcon--c12+Y"
                      src="https://www.puppyspot.com/preact/./img/email-share.svg"
                    />
                    Email
                  </button>
                </div>
                <div className="styles-module__buttonWrapper--0ndoe">
                  <button
                    onClick={()=>handleShare(twitterURL)}
                    aria-label="twitter"
                    className="react-share__ShareButton shareButtonHandler"
                    style={{
                      backgroundColor: "transparent",
                      border: "medium",
                      padding: "0px",
                      font: "inherit",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      className="styles-module__buttonIcon--c12+Y"
                      src="https://www.puppyspot.com/preact/./img/twitter.svg"
                    />
                    Twitter
                  </button>
                  <button
                    onClick={()=>handleShare(whatsappURL)}
                    aria-label="whatsapp"
                    className="react-share__ShareButton shareButtonHandler"
                    style={{
                      backgroundColor: "transparent",
                      border: "medium",
                      padding: "0px",
                      font: "inherit",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      className="styles-module__buttonIcon--c12+Y"
                      src="https://www.puppyspot.com/preact/./img/whatsaap.svg"
                    />
                    Whatsapp
                  </button>
                </div>
                <div className="styles-module__buttonWrapper--0ndoe">
                  <button
                    onClick={()=>handleShare(facebookURL)}
                    aria-label="facebook"
                    className="react-share__ShareButton shareButtonHandler"
                    style={{
                      backgroundColor: "transparent",
                      border: "medium",
                      padding: "0px",
                      font: "inherit",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      className="styles-module__buttonIcon--c12+Y"
                      src="https://www.puppyspot.com/preact/./img/facebook.svg"
                    />
                    Facebook
                  </button>
                  <button
                    onClick={()=>handleShare(pinterestURL)}
                    aria-label="pinterest"
                    className="react-share__ShareButton shareButtonHandler"
                    style={{
                      backgroundColor: "transparent",
                      border: "medium",
                      padding: "0px",
                      font: "inherit",
                      color: "inherit",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      className="styles-module__buttonIcon--c12+Y"
                      src="https://www.puppyspot.com/preact/./img/pinterest.svg"
                    />
                    Pinterest
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharePopup;
