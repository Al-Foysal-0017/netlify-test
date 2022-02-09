import Marquee from "react-fast-marquee";
import animateImg from "../../../assets/image/animateImg.png";
import animateImg2 from "../../../assets/image/animateimg2.png";
import "./_animateText.scss";

const AnimationText = () => {
  return (
    <div>
      <Marquee style={{ zIndex: "-999" }} gradient={false} speed={35}>
        <div className="borderText">
          <img src={animateImg} alt="" className="animateTextHome" />
        </div>
      </Marquee>
      <Marquee
        style={{ zIndex: "-999" }}
        direction="right"
        gradient={false}
        speed={35}
      >
        <div className="marginAnimateHero">
          <img src={animateImg2} alt="" className="animateTextHome" />
        </div>
      </Marquee>
    </div>
  );
};

export default AnimationText;
