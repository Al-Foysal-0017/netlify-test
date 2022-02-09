import React from "react";
import "./_title.scss";

const Title = ({ children, style, className }: any) => {
  return (
    <div className="theia_title">
      <div className={className} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Title;
