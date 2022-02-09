import React from "react";
import { motion } from "framer-motion";
import markets from "../../../assets/image/markets.png";
import { Subtitle, Paragraph } from "../../../components";
import { useScroll } from "../../../hooks/useScroll";
import { cardAnimation } from "../../../utils/Animations";
import SequenceTxt from "./sequenceTxt/LargeTxt/SequenceTxt";
import SequenceTxtMobile from "./sequenceTxt/mobileTxt/SequenceTxt";
import "./_markets.scss";

const Market = () => {
  const [element, controls]: any = useScroll();
  return (
    <>
      <div className="markets" ref={element}>
        <motion.div
          variants={cardAnimation}
          animate={controls}
          transition={{ type: "spring", duration: 0.5 }}
          className="markets__marketsImg"
        >
          <img
            src={markets}
            alt="markets"
            style={{ maxWidth: "600px", maxHeight: "550px" }}
          />
        </motion.div>
        <div className="markets__content">
          <h4> For visionaries</h4>
          <Subtitle className="">Markets</Subtitle>
          <Paragraph>
            You live in the &nbsp;
            <span className="sequence-txt-desktop" style={{ color: "#fff" }}>
              <SequenceTxt /> &nbsp;
            </span>
            <span className="sequence-txt-mobile" style={{ color: "#fff" }}>
              <SequenceTxtMobile />
              &nbsp;
            </span>
            rabbit hole.
            <br /> Become a market founder and onboard the projects you are
            convicted will change the world.
            <br /> Earn revenue by taking a commission on the money raised in
            your market’s projects and through your market token.
          </Paragraph>
        </div>
      </div>
    </>
  );
};

export default Market;
