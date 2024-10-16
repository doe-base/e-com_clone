import React from "react";
import "./index.css";

interface Props {}
const Loading: React.FC<Props> = ({}) => {
  return (
    <div className="loading page hidden">
        <picture className="">
            <img id="" alt="" className=" lazyloaded" data-cy="" data-src="https://www.puppyspot.com/assets/img/components/loader-page.svg" loading="lazy" src="https://www.puppyspot.com/assets/img/components/loader-page.svg" />
        </picture>
    </div>
  );
};

export default Loading;
