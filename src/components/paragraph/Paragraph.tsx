import React from "react";
import "./_paragraph.scss";

const Paragraph = ({ children, style, className }: any) => {
  return (
    <div className="theia_paragraph">
      <div className={className} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Paragraph;
