import React from "react";
import "./_smLoader.scss";

const SmallLoader = () => {
  return (
    <div className="box">
      <div className="container">
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
      </div>
    </div>
  );
};

export default SmallLoader;
