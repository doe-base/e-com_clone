import React from "react";
import "./index.css";

interface Props {
  loading: boolean;
}
const Loading: React.FC<Props> = ({loading}) => {
  return (
    <div className={`loading page ${loading ? '' : 'hidden'}`}>
        <picture className="">
            <img id="" alt="" className=" lazyloaded" data-cy="" data-src="/img/components/loader-page.svg" loading="lazy" src="/img/components/loader-page.svg" />
        </picture>
    </div>
  );
};

export default Loading;
