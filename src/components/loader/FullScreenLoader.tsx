import React from "react";
import "../../styles/loader.css";
import { RotatingLines } from "react-loader-spinner";

interface Props {}
const FullScreenLoader: React.FC<Props> = ({}) => {
  return (
    <>
      <div className="loading__paage">Loading&#8230;</div>
    </>
    
  );
};

export default FullScreenLoader;
