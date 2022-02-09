import React from "react";
import "./_subtitle.scss";

const Subtitle = ({ children, style, className }: any) => {
  return (
    <div className="theia_subtitle">
      <div className={className} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Subtitle;
