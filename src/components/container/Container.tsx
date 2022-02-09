import "./container.scss";

const Container = ({ children, style, className }: any) => {
  return (
    <div className="theia__container">
      <div className={className} style={style}>
        {children}
      </div>
    </div>
  );
};

export default Container;
